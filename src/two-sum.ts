export default function twoSum(nums: number[], target: number) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    for(let j = nums.length - 1; j > i ; j --) {
      if(nums[i] + nums[j] === target ) {
        result = [i, j]
        return result
      }
    }
  }
}
