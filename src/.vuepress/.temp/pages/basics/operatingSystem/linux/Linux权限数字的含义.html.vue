<template><div><p>linux中文件的权限由三个数字组成，比如777</p>
<p>三个数字分别有什么含义？</p>
<ul>
<li>第一个数字：文件所有者的权限</li>
<li>第二个数字：同组用户的权限</li>
<li>第二个数字：其他用户的权限</li>
</ul>
<p><code v-pre>a</code> <code v-pre>b</code> <code v-pre>c</code> 分别代表：读权限，写权限，执行权限</p>
<p><code v-pre>4a + 2b + c = 7</code></p>
<p>解得：<br>
<code v-pre>a = 1</code></p>
<p><code v-pre>b = 1</code><br>
<code v-pre>c = 1</code><br>
<code v-pre>a=b=c=1</code><br>
代表可以读可写可执行</p>
</div></template>


