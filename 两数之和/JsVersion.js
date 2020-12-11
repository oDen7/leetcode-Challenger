/*
 * @File Name: TsVersion.ts
 * @Description: 两数之和-js版本
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2020-12-11 17:10:10
 */
// 原题地址:https://leetcode-cn.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var JsVersion = function (nums, target) {
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
};