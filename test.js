class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head')
    }

    findByValue (value) {
        let currentNode = this.head
        while (currentNode !== null && currentNode.value !== value) {
            currentNode = currentNode.next
        }

        return currentNode === null ? -1 : currentNode
    }

    findByIndex (index) {
        let currentNode = this.head
        let pos = 1
        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }

        return currentNode === null ? -1 : currentNode
    }

    findPrev (value) {
        let prevNode = this.head
        while (prevNode.next !== null && prevNode.next.value !== value) {
            prevNode = prevNode.next
        }

        if (prevNode.next === null) {
            return -1
        }

        return prevNode
    }

    append (value) {
        let currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        const newNode = new Node(value)
        currentNode.next = newNode
    }

    insert (newValue, value) {
        let currentNode = this.findByValue(value)
        if (currentNode === -1) {
            console.log('未找到插入位置')
            return
        }

        const newNode = new Node(newValue)
        newNode.next = currentNode.next
        currentNode.next = newNode
    }

    display () {
        let currentNode = this.head.next
        while (currentNode !== null) {
            console.log(currentNode.value)
            currentNode = currentNode.next
        }
    }

    remove (value) {
        let prevNode = this.findPrev(value)

        if (prevNode === -1) {
            return
        }

        prevNode.next = prevNode.next.next
    }

    reverse () {
        const root = new Node('head')
        let currentNode = this.head.next
        while (currentNode !== null) {
            const next = currentNode.next
            currentNode.next = root.next
            root.next = currentNode
            currentNode = next
        }

        this.head = root
    }

    checkIsCircle () {
        let slow = this.head
        let fast = this.head.next
        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next
            if (slow === fast) return true
        }

        return false
    }

    findMiddleNode () {
        let slow = this.head
        let fast = this.head
        while (fast.next !== null && fast.next.next !== null) {
            fast = fast.next.next
            slow = slow.next
        }

        return slow
    }
}

const mergeSortedLists = (l1, l2) => {
    if (!l1) return l2
    if (!l2) return l1

    let a = l1
    let b = l2
    let resultList

    if (a.value < b.value) {
        resultList = a
        a = a.next
    } else {
        resultList = b
        b = b.next
    }

    let currentNode = resultList
    while (a !== null && b !== null) {
        if (a.value < b.value) {
            currentNode.next = a
            a = a.next
        } else {
            currentNode.next = b
            b = b.next
        }

        currentNode = currentNode.next
    }

    if (a !== null) {
        currentNode.next = a
    } else {
        currentNode.next = b
    }

    return resultList
}

const LList = new LinkedList()
LList.append('chen')
LList.append('curry')
LList.append('sang')
LList.append('zhao')
LList.insert('qian', 'chen') // 首元素后插入
LList.insert('zhou', 'zhao') // 尾元素后插入
LList.display() // chen -> qian -> curry -> sang -> zhao -> zhou
// console.log('-------------remove item------------')
// LList.remove('curry')
// LList.display()
console.log('-------------reverse list------------')
LList.reverse()
LList.display()
const sortedList1 = new LinkedList()
sortedList1.insert(9, 'head')
sortedList1.insert(8, 'head')
sortedList1.insert(7, 'head')
sortedList1.insert(6, 'head')
const sortedList2 = new LinkedList()
sortedList2.insert(21, 'head')
sortedList2.insert(20, 'head')
sortedList2.insert(19, 'head')
sortedList2.insert(18, 'head')
console.log('-------------sort two list ------------')
let sortedList = mergeSortedLists(sortedList1.head.next, sortedList2.head.next)
while (sortedList !== null) {
    console.log(sortedList.value)
    sortedList = sortedList.next
}