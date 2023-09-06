/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let res = nums[0];
    let curMin = nums[0];
    let curMax = nums[0];
    let subArray = [nums[0]];
    
    for (let x = 1; x < nums.length; x++) {
        let localMin = Math.min(curMax * nums[x], nums[x], curMin * nums[x]);
        let localMax = Math.max(curMax * nums[x], nums[x], curMin * nums[x]);
        curMin = Math.min(localMax, localMin);
        curMax = Math.max(localMax, localMin);
        if (localMax < res) {
            subArray.push(nums[x]);

        }
        res = Math.max(res, curMax);
    }
    return res
};

console.log("wad")