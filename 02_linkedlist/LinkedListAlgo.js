/**
 * 1. 单链表的反转
 * 2. 链表中环的检测
 * 3. 两个有序的链表合并
 * 4. 删除链表倒数第n个节点
 * 5. 求链表的中间节点
 */
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
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }

    return currentNode === null ? -1 : currentNode
  }

  insert (newValue, item) {
    const currentNode = this.findByValue(item)

    if (currentNode === -1) {
      console.log('未找到插入的位置')
      return
    }

    const newNode = new Node(newValue)
    newNode.next = currentNode.next
    currentNode.next = newNode
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

  remove (value) {
    const prevNode = this.findPrev(value)
    if (prevNode === -1) {
      return
    }

    prevNode.next = prevNode.next.next
  }

  display () {
    let currentNode = this.head
    while (currentNode !== null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }

  // 单链表的反转
  // 尾插法
  reverseList () {
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

  // 链表中环的检测
  checkCircle () {
    let slow = this.head
    let fast = this.head.next
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next
      slow = slow.next
      if (fast === slow) return true
    }

    return false
  }

  // 删除倒数第n个节点
  removeByIndexFromEnd (n) {
    if (this.checkCircle()) return

    let pos = 1
    this.reverseList()
    let currentNode = this.head.next
    while (currentNode !== null && pos < n) {
      currentNode = currentNode.next
      pos++
    }

    if (currentNode === null) {
      console.log('无法删除最后一个节点或者该节点不存在')
      return
    }

    this.remove(currentNode.value)
    this.reverseList()
  }

  // 找中间节点
  findMiddle () {
    let slow = this.head
    let fast = this.head
    while (fast.next !== null && fast.next.next !== null) {
      fast = fast.next.next
      slow = slow.next
    }

    return slow
  }
}

// 合并两个有序链表
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

const LList = new LinkedList()
LList.insert('chen', 'head')
LList.insert('curry', 'chen')
LList.insert('sang', 'head')
LList.insert('zhao', 'head')
LList.display()
console.log('-------------check circle------------')
console.log(LList.checkCircle())
console.log('-------------remove the one before last ------------')
LList.removeByIndexFromEnd(2)
LList.display()