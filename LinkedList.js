class Node {
  constructor(data, next=null){
    this.data  = data
    this.next = null
  } 
}

class LinkedList {
  constructor(head = null) {
    this.head = head  
  }
}

LinkedList.prototype.insertBeginning = function(data) {
 
  let newNode = new Node(data)
  
  newNode.next = this.head
  this.head = newNode
  
  return this.head
}


LinkedList.prototype.insertAtEnd = function(data) {
  
  let newNode = new Node(data)
  
  // Are we at the beginning of the list?
  if(!this.head) {
    this.head = newNode
    return this.head 
  }
  
  //Otherwise, traverse the list until the tail or the node where the next pointer is null:
  let tail = this.head
  while(tail.next!==null){
    tail = tail.next
  }
  tail.next = newNode;
  return this.head;
}

LinkedList.prototype.Find = function(value) {
  let current = this.head
  
  while(current !== null) {
    if(current.data === value) {
      return current
    }
    current = current.next
  }
  return null;
}

let list = new LinkedList()


list.insertBeginning("Pineapple")
list.insertBeginning("Banana")
list.insertAtEnd("Kiwi")

// Outputs:
// console.log(list)
LinkedList { head: null }

// console.log(list)
LinkedList {
  head: Node {
    data: 'Banana',
    next: Node { data: 'Pineapple', next: [Node] }
  }
}

// console.log(list.head)
Node {
  data: 'Banana',
  next: Node { data: 'Pineapple', next: Node { data: 'Kiwi', next: null } }
}

// console.log(list.Find("Pineapple"))
Node { data: 'Pineapple', next: null }
