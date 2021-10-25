import twoSum from '../src/two-sum'

test('should [2,7,11,15], 9 toEqual [0, 1]', async () => {
  const nums = [2,7,11,15], target = 9
  expect(twoSum(nums, target)).toEqual([0, 1]);
})

test('should [3, 2, 4], 6 toEqual [1, 2]', async () => {
  const nums = [3,2,4], target = 6
  expect(twoSum(nums, target)).toEqual([1, 2]);
})

test('should [3, 2, 4], 6 toEqual [1, 2]', async () => {
  const nums = [3, 3], target = 6
  expect(twoSum(nums, target)).toEqual([0, 1]);
})