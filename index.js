class Node{
    constructor(value){
      this.next = null;
      this.value = value;
    }
}
class LinkedList{
  constructor(value){
    let node = new Node(value);
    this.head = node;
    this.length = 1;
    this.tail = this.head;
  }
  append(value){
    let tail = this.tail;
    let node = new Node(value)
    tail.next = node;
    this.tail = node;
    this.length++;
    return this.print()
  }
  prepend(value){
    let head = this.head;
    let node = new Node(value)
    node.next = head;
    this.head = node;
    this.length++;
    return this.print()
  }
  insert(index, value){
    if(index === 0 ){
      this.prepend(value);
      return this.print()
    }
    if(index >= this.length){
      this.append(value)
     return this.print()
    }
    let previousNode = this.traverseToIndex(index-1);
    let next = previousNode.next;
    let newNode = new Node(value);
    newNode.next = next;
    previousNode.next = newNode;
    this.length++;
    return this.print()
  }
  remove(index){
    if(index === 0 ){
      let next = this.head.next;
      this.head = next;
      this.length--;
      return this.print();
    }
    if(index >= this.length){
      return this.print();
    }
    let previousNode = this.traverseToIndex(index-1);
    let nextNode = this.traverseToIndex(index+1);
    previousNode.next = nextNode;
    this.length--;
    return this.print()
  }
  traverseToIndex(index){
    let currentNode = {}
    for(let i = 0; i <= index; i++){
      if(i === 0){
        currentNode = this.head;
        continue;
      }
      let next = currentNode.next;
      currentNode = next;
    }
    return currentNode;
  }
  print(){
    let arr = []
    let currentNode = {}
    for(let i = 0; i < this.length; i++){
      if(i === 0){
        currentNode = this.head;
        arr.push(currentNode.value)
        continue;
      }
      let next = currentNode.next;
      currentNode = next;
      arr.push(currentNode.value)
    }
    return arr;
  }
  reverse(){
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    let next = null;
    for(let i = 0; i < this.length; i++){
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;    
      }
    return this.print()
  }
}

const linkedList = new LinkedList(10);

console.log(linkedList.append(5));
console.log(linkedList.prepend(2))
console.log(linkedList.insert(2, 1));
console.log(linkedList.remove(0));
console.log(linkedList.insert(5, 20));
console.log(linkedList.insert(6, 30));
console.log(linkedList.reverse())

