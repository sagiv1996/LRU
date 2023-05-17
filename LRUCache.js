import Node from "./node.js";

export default class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }

  get(key) {
    const node = this.cache.get(key);
    if (!node) return;
    this.moveToHead(node);
    return node.value;
  }

  put(key, value) {
    let node = this.cache.get(key);
    if (node) {
      node.value = value;
      this.moveToHead(node);
      return;
    }

    if (this.cache.size >= this.capacity) {
      if (this.tail) {
        this.cache.delete(this.tail.key);
        this.removeNode(this.tail);
      }
    }
    node = new Node(key, value);
    this.cache.set(key, node);
    this.addNode(node);
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  addNode(node) {
    node.next = this.head;
    node.prev = null;

    if (this.head) {
      this.head.prev = node;
    }
    this.head = node;

    if (!this.tail) {
      this.tail = node;
    }
  }

  removeNode(node) {
    if (node.prev) {
      node.prev.next = node.next;
    } else {
      this.head = node.next;
    }

    if (node.next) {
      node.next.prev = node.prev;
    } else {
      this.tail = node.prev;
    }
  }
}
