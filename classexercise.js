// build a stack. create the pop() and push() methods create Stack
// you need a count property
// peek returns the object at the top of the stack to see it
// if the stack is empty, it should throw an error "stack is empty"

const _items = new WeakMap()

class Stack {
  constructor(){
    _items.set(this, [])
  }

  get count () {
    return _items.get(this).length
  }

  pop(obj){
    const items = _items.get(this);
    if (items.length === 0) Stack.empty()
    return items.pop()
  }

  peek(obj){
    const items = _items.get(this);
    if (items.length === 0) Stack.empty()
    return items[items.length-1]
  }

  push(obj){
    _items.get(this).push(obj)
  }

  static empty(){
    throw new Error ('Stack is empty')
  }

}

let myStack = new Stack()