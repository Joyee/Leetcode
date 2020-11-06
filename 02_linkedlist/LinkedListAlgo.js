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
  
}