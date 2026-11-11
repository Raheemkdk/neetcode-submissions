class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let ans = []
        for(let i = 0; i<nums.length; i++){
            for(let j = i + 1; j<nums.length; j++){
            nums[j]+nums[i] == target ? ans.push(i, j) : false
            }
        }
        return ans
    }
}
