/*
 * @File Name: tsVersion.ts
 * @Description: 两数之和-ts版本
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2020-12-11 17:19:48
 */
// 原题地址:https://leetcode-cn.com/problems/two-sum/
function tsVersion(nums: number[], target: number): number[] {
    let length: number = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};