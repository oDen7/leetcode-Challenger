/*
 * @File Name: TsVersion.ts
 * @Description: 两数之和-js版本
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2020-12-11 17:55:04
 */
// 原题地址:https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumJs = function (nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};