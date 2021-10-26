import addTwoNumbers from '../src/add-two-numbers'
describe('addTwoNumbers', () => {
	test('输入：l1 = [2,2,3], l2 = [5,6,4]输出：[7,8,7] ', async () => {
		const l1 = [2,2,3], l2 = [5,6,4]
		expect(addTwoNumbers(l1, l2)).toEqual([7,8,7])
	})
	test('输入：l1 = [2,4,3], l2 = [5,6,4]输出：[7,0,8] ', async () => {
		const l1 = [2,4,3], l2 = [5,6,4]
		expect(addTwoNumbers(l1, l2)).toEqual([7,0,8])
	})
})
