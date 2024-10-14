---
title: Shell编程基础
category: 计算机基础
icon: about
---

## 1. Shell基础

### 1.1 常见的Shell

- bsh
- `bash`
- csh
- tcsh
- ksh
- zsh

### 1.2 查看已安装的Shell

```bash
cat /etc/shells
```

### 1.3 更换Shell

```bash
chsh -s /bin/bash
```

## 2. Shell编程

### 2.1 注释

#### 2.1.1 单行注释

```bash
# 这是一行注释
```

#### 2.1.2 多行注释

```bash
: '
多行
注释
'
```

### 2.2 环境变量

#### 2.2.1 查看当前所有环境变量

```bash
printenv
```

也可以使用更简短的 `env`

#### 2.2.2 设置环境变量

```bash
export JAVA_HOME="/root/jdk/bin"
```

### 2.3 本地变量

```bash
java_home="/root/jdk/bin"
echo $java_home
```

注意：等号两边不能有空格

### 2.4 预定义变量

常见的预定义变量：

- `$0` : 当前脚本的文件名
- `$1,$2...$n` : 脚本参数列表的第n个参数
- `$#` : 脚本参数的数量
- `$*` : 所有脚本参数的列表，将所有参数作为一个字符串
- `$@` : 所有脚本参数的列表，将每个参数作为一个独立的字符串
- `$$` : 当前脚本的进程id
- `$?` : 上一个命令的退出状态，一个数值

### 2.5 控制语句

#### 2.5.1 比较操作符

- `-eq` : 等于
- `-ne` ： 不等于
- `-lt` ： 小于
- `-gt` ： 大于
- `-le` ：小于等于
- `-ge` ： 大于等于

#### 2.5.2 测试表达式

- `-f` ： 判断某个文件是否存在并且是一个常规文件
- `-d` : 判断某个文件是否存在并且是一个目录
- `-z` : 判断某种字符串是否为空
- `-n` : 判断某种字符串是否非空
- `-e` : 判断某个文件或目录是否存在

#### 2.5.3 中括号

跟其他高级语言不同的是，Shell中使用`[]`，来代替`()`，并且中括号里面的操作符需要空格隔开，例如`[ $a -eq 0]`

#### 2.5.4 if语句

```bash
if condition
then
   command 1
   ...
   command n
elif condition2 
then
  command 1
  ...
  command n
else
  command 1
  ...
  command n
fi 
```

#### 2.5.5 for循环

```bash
for val in list
do
  command 1
  ...
  command n
done
```

#### 2.5.6 while循环

```bash
while condition
do
  command 1
  ...
  command n
done
```

#### 2.5.7 until循环

```bash
until conditon
do
  command 1
  ...
  command n
done
```

注意：直到条件成立才结束循环，与 `while` 相反

## 3. 算数扩展运算符

进行算术运算时不能直接用 `+` `-` `*` `/` 等，要使用 `$(())`

```bash
num=1
num=$(($num+1))
```

## 4. 函数

### 4.1 定义函数

```bash
function fn() {
    echo $1 $2
}
```

### 4.2 调用函数

```bash
fn "a" "b"
```