import { ListNode } from '../../src/utils/index'

describe('listNode tobe 2, 4, 3', () => {
  const result = new ListNode(2, new ListNode(4, new ListNode(3, null)))
  const testList = new ListNode()

  test('tobe 2', async () => {
    expect(result.val).toBe(2)
  })
  test('tobe 4', async () => {
    expect(result.next?.val).toBe(4)
  })

  test('tobe 3', async () => {
    expect(result.getNode(3)?.val).toBe(3)
  })
  test('getNode tobe 4', async () => {
    expect(result.getNode(4)?.val).toBe(4)
  })
  test('add node', async () => {
    expect(testList.addNode(2).next?.val).toBe(2)
  })
  test('edit node', async () => {
    expect(testList.editNode(2, 3).next?.val).toBe(3)
  })
  test('delete node', async () => {
    testList.addNode(5);
    expect(testList.getNode(5)?.val).toBe(5)
    expect(testList.deleteNode(3).next?.next).toBe(null)
  })
})

