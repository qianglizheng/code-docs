---
title: C语言经典100题Java版
category: 计算机基础
icon: about
---
## 1. 第一题
题目：有 1、2、3、4 四个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？


解析：三层循环分别循环1 2 3 4，最里面一层循环判断i j k 分别不等
```java
public static void main(String[] args) {
    for (int i = 1; i < 5; i++) {
        for (int j = 1; j < 5; j++) {
            for (int k = 1; k < 5; k++) {
                if (i != k && i != j && j != k) {
                    System.out.println(i + " " + j + " " + k);
                }
            }
        }
    }
}
```