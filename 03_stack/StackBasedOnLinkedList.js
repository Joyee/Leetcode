/**
 * 基于链表实现栈
 */

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class StackBasedLinkedList {
    constructor() {
        this.top = null
    }

    // 入栈
    push (value) {
        // 从链表开头插入
        const newNode = new Node(value)
        if (this.top === null) {
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
    }

    // 出栈
    pop () {
        // 判断栈顶
        if (this.top === null) return -1
        const value = this.top.value
        this.top = this.top.next
        return value
    }
    clear () {
        this.top = null
    }

    display () {
        if (this.top !== null) {
            let temp = this.top
            while (temp !== null) {
                console.log(temp.value)
                temp = temp.next
            }
        }
    }
}

// const newStack = new StackBasedLinkedList()
// newStack.push(1)
// newStack.push(2)
// newStack.push(3)
// // 获取元素
// let res = 0
// console.log('-------获取pop元素------')
// while (res !== -1) {
//     res = newStack.pop()
//     console.log(res)
// }

exports.CreatedStack = StackBasedLinkedList