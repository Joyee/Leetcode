/**
 * 基于数组实现队列
 */

class ArrayQueue {
  constructor() {
    this.elements = []
  }

  // 入队
  enqueue (item) {
    this.elements.push(item)
  }

  // 出队
  dequeue () {
    return this.isEmpty() ? undefined : this.elements.shift()
  }

  // check if the queue is empty
  isEmpty () {
    return this.elements.length === 0
  }

  front () {
    return !this.isEmpty() ? this.elements[0] : 'No elements in Queue'
  }

  length () {
    return this.elements.length
  }

  printQueue () {
    let str = ''
    for (let i = 0; i < this.elements.length; i++) {
      str += this.elements[i] + ' '
    }

    return str
  }
}

let q = new ArrayQueue()
for (let i = 1; i <= 7; i++) {
  q.enqueue(i);
}

console.log(q.printQueue())