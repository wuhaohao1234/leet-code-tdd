export class ListNode {
  val: number
  next: ListNode | null
  private currentNode: ListNode | null | undefined
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    return this
  }
  getNode(val: number) {
    let currentNode = null
    if(this.val === val) {
      currentNode = this
    }
    this.currentNode = this.next
    while(this.currentNode) {
      if(this.currentNode.val === val) {
        currentNode = this.currentNode
      }
      this.currentNode = this.currentNode.next
    }
    return currentNode
  }
  addNode(val: number) {
    if(!this.next) {
      this.next = new ListNode(val, null)
      return this
    }
    this.currentNode = this.next
    let currentNode = null
    while(this.currentNode) {
      if(!this.currentNode.next) {
        currentNode = this.getNode(this.currentNode.val)
      }
      this.currentNode = this.currentNode?.next
    }
    if(currentNode) {
      currentNode.next = new ListNode(val, null);
    }
    return this
  }
  editNode(oldVal: number, newVal: number) {
    if(oldVal === this.val) {
      this.val = newVal
      return this
    }
    let currentNode = this.getNode(oldVal)
    if(currentNode?.val) {
      currentNode.val = newVal;
    }
    return this
  }
  deleteNode(val: number) {
    if(val === this.val) {
      this.next = null
    }
    let currentNode = this.getNode(val);
    if(currentNode?.val) {
      currentNode.next = null
    }
    return this
  }
}