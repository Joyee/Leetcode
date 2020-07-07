// 常用的数据类型
const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[pbject Arguments]'

const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const errorTag = '[object Error]'
const numberTag = '[object Number]'
const regexpTag = '[object RegExp]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const funcTag = '[object Function]'

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]
/**
 * 用while来实现一个通用的forEach
 */
function forEach (array, iteratee) {
    let index = -1
    const len = array.length

    while (++index < len) {
        iteratee(array[index], index)
    }

    return array
}

/**
 * 初始化
 * @param {Any} target 
 */
function getInit (target) {
    const Ctor = target.constructor
    return new Ctor()
}

/**
 * 判断是否是引用类型
 * @param {Any} target 
 */
function isObject (target) {
    const type = typeof target
    return target !== null && (type === 'object' || type === 'function')
}

/**
 * 获取数据类型
 * toString来获取准确的引用类型
 * @param {Any} target 
 */

function getType (target) {
    return Object.prototype.toString.call(target)
}

function cloneOtherType (target, type) {
    const Ctor = target.constructor
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(target)
        case regexpTag:
            return cloneReg(target)
        case symbolTag:
            return cloneSymbol(target)
        case funcTag:
            return cloneFunction(target)
        default:
            return null
    }
}

// clone symbol
function cloneSymbol(target) {
    return Object(Symbol.prototype.valueOf.call(target))
}

// clone reg
function cloneReg(target) {
    const reFlags = /\w*$/
    const result = new target.constructor(target.source, reFlags.exec(target))
    result.lastIndex = target.lastIndex
}

// clone function
function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m
    const paramReg = /(?<=\().+(?=\)\s+{)/
    const funcString = func.toString()
    if (func.prototype) {
        console.log('普通函数')
        const param = paramReg.exec(funcString)
        const body = bodyReg.exec(funcString)
        if (body) {
            console.log('匹配到函数体:', body[0])
            if (param) {
                const paramArr = param[0].split(',')
                console.log('匹配到参数:', paramArr)
                return new Function(...paramArr, body[0])
            }
            return new Function(body[0])
        }
    }
    return eval(funcString)
}

/**
 * 深拷贝
 * WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * @param {Any} target 
 * @param {*} map 
 */
function clone (target, map = new WeakMap()) {
    // clone原始类型
    if (!isObject(target)) {
        return target
    }

    // init
    const type = getType(target)
    let cloneTarget
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type)
    } else {
        return cloneOtherType(target, type)
    }

    // 防止循环引用
    if (map.get(target)) {
        return target
    }
    map.set(target, cloneTarget)

    // clone set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value, map))
        })
        return cloneTarget
    }

    // clone map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value, map))
        })
        return cloneTarget
    }

    // clone 对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target)
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value
        }
        cloneTarget[key] = clone(target[key], map)
    })

    return cloneTarget
}

const map = new Map();
map.set('key', 'value');
map.set('ConardLi', 'code秘密花园');

const set = new Set();
set.add('ConardLi');
set.add('code秘密花园');

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8],
    empty: null,
    map,
    set,
    bool: new Boolean(true),
    num: new Number(2),
    str: new String(2),
    symbol: Object(Symbol(1)),
    date: new Date(),
    reg: /\d+/,
    error: new Error(),
    func1: () => {
        console.log('code秘密花园');
    },
    func2: function (a, b) {
        return a + b;
    }
};

const result = clone(target);

console.log(result);