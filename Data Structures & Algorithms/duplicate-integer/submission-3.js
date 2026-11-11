class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    // Params: I am given an integer array called nums
    // Return: If any values appears more than once in the array return true, else return false
    // Example: nums = [1, 2, 3, 3], true
    // nums = [1, 2, 3, 4], false
// Psuedocode:
// I would want to loop through the array
// I would then store the value of each index in the array in my own array
// I would compare to see if any values in the num array already matches what is in my array
// If it does, I return true else return false

    hasDuplicate(nums) {
        const hello = new Set()
        for (const num of nums) {
            if (hello.has(num)) {
                return true;
            }
            hello.add(num);
        }
        return false;
    }
}
