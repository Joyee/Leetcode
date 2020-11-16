/**
 * 基于链表实现的队列
 */
class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class QueueBasedOnLinkedList {
  constructor() {
    this.head = null // 指向链表的第一个节点
    this.tail = null // 指向链表的最后一个节点
  }

  // 入队
  enqueue (value) {
    if (this.head === null) {
      this.head = new Node(value)
      this.tail = this.head
    } else {
      this.tail.next = new Node(value)
      this.tail = this.tail.next
    }
  }

  dequeue () {
    if (this.head === null) {
      return -1
    } else {
      const value = this.head.value
      this.head = this.head.next
      return value
    }
  }
}

// Test
const newQueue = new QueueBasedOnLinkedList()
// 插入元素
newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
// 获取元素
let res = 0
console.log('-------获取dequeue元素------')
while (res !== -1) {
    res = newQueue.dequeue()
    console.log(res)
}