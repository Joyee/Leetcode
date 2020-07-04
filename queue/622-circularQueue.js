/*
* 队列: 设计循环队列
* 用数组实现
* */

/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var CircularQueue = function (k) {
    this.front = 0
    this.rear = 0
    this.maxSize = k
    this.size = 0
    this.queue = Array(k)
}

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
CircularQueue.prototype.enQueue = function (value) {
    if (!this.isFull()) {
        this.rear = (this.rear + 1) % this.maxSize
        this.queue[this.rear] = value
        this.size += 1
        return true
    }
    return false
}

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
CircularQueue.prototype.deQueue = function () {
    if (!this.isEmpty()) {
        this.queue[this.front] = null
        this.front = (this.front + 1) % this.maxSize
        this.size -= 1
        return true
    }
    return false
}

/**
 * Get the front item from the queue.
 * @return {number}
 */
CircularQueue.prototype.Front = function () {
    return this.queue[this.front]
}

/**
 * Get the last item from the queue.
 * @return {number}
 */
CircularQueue.prototype.Rear = function () {
    return this.queue[this.rear]
}

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
CircularQueue.prototype.isFull = function () {
    return this.size === this.maxSize
}

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
CircularQueue.prototype.isEmpty = function () {
    return this.size === 0
}
