/*
 * @File Name: jsVersion.js
 * @Description: 整数反转-js版本
 * @Author: oDen7
 * @LastEditors: oDen7
 * @LastEditTime: 2020-12-11 17:54:27
 */
// 原题链接:https://leetcode-cn.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverseJs = function(x) {
    let str = x.toString().split('');
    if(Number(str[0])){
        let num = Number(x.toString().split('').reverse().join(''));
        if(num > Math.pow(2,31)){
            return 0;
        }
        return num;
    }else{
        let num = Number(`${str[0]}${x.toString().slice(1,str.length).split('').reverse().join('')}`);
        if(num<Math.pow(-2,31)){
            return 0 ;
        }
        return num;
    }
};