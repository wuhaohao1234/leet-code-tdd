import {ListNode} from '../src/utils/index'
export default function addTwoNumbers(l1: Array<number>, l2: Array<number>) {
	let l1ListNode = new ListNode();
	let l2ListNode = new ListNode();
	let l3ListNode = new ListNode();
	let result = []
	l1.forEach(item => {
		l1ListNode.addNode(item)
	})
	l2.forEach(item => {
		l2ListNode.addNode(item)
	})
	l3ListNode.val = l1ListNode.val + l2ListNode.val
	
	let l1CurrentNode = l1ListNode.next
	let l2CurrentNode = l2ListNode.next
	let carry = false
	while (l1CurrentNode && l2CurrentNode) {
		let addNum = l1CurrentNode.val + l2CurrentNode.val
		if(addNum > 9) {
			addNum = addNum - 10
			l3ListNode.addNode(addNum)
			carry = true
		}
		else {
			if(carry) {
				l3ListNode.addNode(addNum + 1)
			}else {
				l3ListNode.addNode(addNum)
			}
			carry = false
		}
		l1CurrentNode = l1CurrentNode.next
		l2CurrentNode = l2CurrentNode.next
	}

	let l3CurrentNode = l3ListNode.next

	while(l3CurrentNode) {
		result.push(l3CurrentNode.val)
		l3CurrentNode = l3CurrentNode.next
	}

	return result;
}