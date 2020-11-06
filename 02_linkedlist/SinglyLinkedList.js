/**
 * 单链表的插入、删除和查找
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

  // 根据value查找节点
  findByValue (value) {
    let currentNode = this.head.next
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }
  // 根据index查找节点，下标从0开始
  findByIndex (index) {
    let currentNode = this.head.next
    let pos = 0
    while (currentNode !== null && pos !== index) {
      currentNode = currentNode.next
      pos++
    }
    console.log(currentNode)
    return currentNode === null ? -1 : currentNode
  }
  // 向链表尾部追加节点
  append (value) {
    // 先找到尾部
    let currentNode = this.head
    while (currentNode.next) {
      currentNode = currentNode.next
    }
    const newNode = new Node(value)
    currentNode.next = newNode
  }
  // 向指定元素的后面插入元素
  insert (value, target) {
    // 找个指定值的节点
    const targetNode = this.findByValue(target)
    // 判断是否找到
    if (targetNode === -1) {
      console.log('指定元素不在链表里，未找到插入位置')
      return
    }
    // 创建新节点
    const newNode = new Node(value)
    newNode.next = targetNode.next
    targetNode.next = newNode
  }

  // 查找指定值的前一个节点
  findPrev (value) {
    let prevNode = this.head
    while (prevNode.next !== null && prevNode.next.value !== value) {
      prevNode = prevNode.next
    }

    // 没找到值
    if (currentNode.next === null) {
      return -1
    }

    return currentNode
  }

  // 根据给定值删除节点
  remove (value) {
    let prevNode = this.findPrev(value)

    if (prevNode === -1) {
      console.log('未找到指定元素')
      return
    }
    prevNode.next = prevNode.next.next
  }

  // 遍历显示所有节点
  display () {
    let currentNode = this.head.next
    while (currentNode !== null) {
      console.log(currentNode.value)
      currentNode = currentNode.next
    }
  }
}