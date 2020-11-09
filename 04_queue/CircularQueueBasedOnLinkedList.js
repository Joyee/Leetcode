/**
 * 基于链表实现的循环队列
 */
class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class CircularQueue {
  constructor() {
    this.head = null
    this.tail = null
    this.count = 0
  }

  enqueue (item) {
    const newNode = new Node(item)
    if (this.head === null) {
      this.head = newNode
    } else {
      this.tail.next = newNode
    }
    this.tail = newNode
    this.tail.next = this.head
  }

  dequeue () {
    if (this.head === null) {
      console.log('Queue is empty')
      return -1
    }
    const value = this.head.element
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.tail.next = this.head
    }
    return value
  }

  display () {
    let res = 0
    console.log('-------获取dequeue元素------')
    while (res !== -1) {
      res = this.dequeue()
      console.log(res)
    }
  }
}
// Test
const newCircularQueue = new CircularQueue()
// 插入元素
newCircularQueue.enqueue(1)
newCircularQueue.enqueue(2)
newCircularQueue.enqueue(3)
console.log(newCircularQueue)
newCircularQueue.display()