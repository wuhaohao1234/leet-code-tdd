import { ListNode } from '../../src/utils/index'

describe('listNode tobe 2, 4, 3', () => {

  const result = new ListNode(2, new ListNode(4, new ListNode(3, null)))

  test('tobe 2', async () => {
    expect(result.val).toBe(2)
  })
  test('tobe 4', async () => {
    expect(result.next?.val).toBe(4)
  })

  test('tobe 3', async () => {
    expect(result.next?.next?.val).toBe(3)
  })
})

