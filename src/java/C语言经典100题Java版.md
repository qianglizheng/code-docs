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

## 2. 第二题
题目：企业发放的奖金根据利润提成。

- 利润(I)低于或等于10万元时，奖金可提10%；
- 利润高于10万元，低于20万元时，低于10万元的部分按10%提成，高于10万元的部分，可提成7.5%；
- 20万到40万之间时，高于20万元的部分，可提成5%；
- 40万到60万之间时高于40万元的部分，可提成3%；
- 60万到100万之间时，高于60万元的部分，可提成1.5%；
- 高于100万元时，超过100万元的部分按1%提成。

从键盘输入当月利润I，求应发放奖金总数？

```java
 public static void main(String[] args) throws IOException {
    Scanner in = new Scanner(System.in);
    System.out.println("请输入利润：");
    double i = in.nextDouble();
    double level1 = 100000 * 0.1;
    double level2 = level1 + 100000 * 0.075;
    double level3 = level2 + 200000 * 0.05;
    double level4 = level3 + 200000 * 0.03;
    double level5 = level4 + 400000 * 0.015;
    if (i <= 100000){
        System.out.println(100000 * 0.1);
    }else if(i <= 200000){
        System.out.println(level1 + (i - 100000) * 0.075);
    }else if(i <= 400000){
        System.out.println(level2 + (i - 200000) * 0.05);
    } else if (i <= 600000) {
        System.out.println(level3 + (i - 400000) * 0.03);
    } else if (i <= 1000000) {
        System.out.println(level4 + (i - 600000) * 0.01);
    }else if (i > 10000000) {
        System.out.println(level5 + (i - 10000000) * 0.01);
    }
}
```