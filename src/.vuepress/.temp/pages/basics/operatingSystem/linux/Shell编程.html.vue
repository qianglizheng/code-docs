<template><div><h2 id="_1-shell基础" tabindex="-1"><a class="header-anchor" href="#_1-shell基础"><span>1. Shell基础</span></a></h2>
<h3 id="_1-1-常见的shell" tabindex="-1"><a class="header-anchor" href="#_1-1-常见的shell"><span>1.1 常见的Shell</span></a></h3>
<ul>
<li>bsh</li>
<li><code v-pre>bash</code></li>
<li>csh</li>
<li>tcsh</li>
<li>ksh</li>
<li>zsh</li>
</ul>
<h3 id="_1-2-查看已安装的shell" tabindex="-1"><a class="header-anchor" href="#_1-2-查看已安装的shell"><span>1.2 查看已安装的Shell</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">cat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /etc/shells</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_1-3-更换shell" tabindex="-1"><a class="header-anchor" href="#_1-3-更换shell"><span>1.3 更换Shell</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">chsh</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> /bin/bash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-shell编程" tabindex="-1"><a class="header-anchor" href="#_2-shell编程"><span>2. Shell编程</span></a></h2>
<h3 id="_2-1-注释" tabindex="-1"><a class="header-anchor" href="#_2-1-注释"><span>2.1 注释</span></a></h3>
<h4 id="_2-1-1-单行注释" tabindex="-1"><a class="header-anchor" href="#_2-1-1-单行注释"><span>2.1.1 单行注释</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"># 这是一行注释</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-1-2-多行注释" tabindex="-1"><a class="header-anchor" href="#_2-1-2-多行注释"><span>2.1.2 多行注释</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">:</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">多行</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">注释</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-环境变量" tabindex="-1"><a class="header-anchor" href="#_2-2-环境变量"><span>2.2 环境变量</span></a></h3>
<h4 id="_2-2-1-查看当前所有环境变量" tabindex="-1"><a class="header-anchor" href="#_2-2-1-查看当前所有环境变量"><span>2.2.1 查看当前所有环境变量</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">printenv</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以使用更简短的 <code v-pre>env</code></p>
<h4 id="_2-2-2-设置环境变量" tabindex="-1"><a class="header-anchor" href="#_2-2-2-设置环境变量"><span>2.2.2 设置环境变量</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">export</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> JAVA_HOME</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/root/jdk/bin"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-3-本地变量" tabindex="-1"><a class="header-anchor" href="#_2-3-本地变量"><span>2.3 本地变量</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">java_home</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"/root/jdk/bin"</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">echo</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> $java_home</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：等号两边不能有空格</p>
<h3 id="_2-4-预定义变量" tabindex="-1"><a class="header-anchor" href="#_2-4-预定义变量"><span>2.4 预定义变量</span></a></h3>
<p>常见的预定义变量：</p>
<ul>
<li><code v-pre>$0</code> : 当前脚本的文件名</li>
<li><code v-pre>$1,$2...$n</code> : 脚本参数列表的第n个参数</li>
<li><code v-pre>$#</code> : 脚本参数的数量</li>
<li><code v-pre>$*</code> : 所有脚本参数的列表，将所有参数作为一个字符串</li>
<li><code v-pre>$@</code> : 所有脚本参数的列表，将每个参数作为一个独立的字符串</li>
<li><code v-pre>$$</code> : 当前脚本的进程id</li>
<li><code v-pre>$?</code> : 上一个命令的退出状态，一个数值</li>
</ul>
<h3 id="_2-5-控制语句" tabindex="-1"><a class="header-anchor" href="#_2-5-控制语句"><span>2.5 控制语句</span></a></h3>
<h4 id="_2-5-1-比较操作符" tabindex="-1"><a class="header-anchor" href="#_2-5-1-比较操作符"><span>2.5.1 比较操作符</span></a></h4>
<ul>
<li><code v-pre>-eq</code> : 等于</li>
<li><code v-pre>-ne</code> ： 不等于</li>
<li><code v-pre>-lt</code> ： 小于</li>
<li><code v-pre>-gt</code> ： 大于</li>
<li><code v-pre>-le</code> ：小于等于</li>
<li><code v-pre>-ge</code> ： 大于等于</li>
</ul>
<h4 id="_2-5-2-测试表达式" tabindex="-1"><a class="header-anchor" href="#_2-5-2-测试表达式"><span>2.5.2 测试表达式</span></a></h4>
<ul>
<li><code v-pre>-f</code> ： 判断某个文件是否存在并且是一个常规文件</li>
<li><code v-pre>-d</code> : 判断某个文件是否存在并且是一个目录</li>
<li><code v-pre>-z</code> : 判断某种字符串是否为空</li>
<li><code v-pre>-n</code> : 判断某种字符串是否非空</li>
<li><code v-pre>-e</code> : 判断某个文件或目录是否存在</li>
</ul>
<h4 id="_2-5-3-中括号" tabindex="-1"><a class="header-anchor" href="#_2-5-3-中括号"><span>2.5.3 中括号</span></a></h4>
<p>跟其他高级语言不同的是，Shell中使用<code v-pre>[]</code>，来代替<code v-pre>()</code>，并且中括号里面的操作符需要空格隔开，例如<code v-pre>[ $a -eq 0]</code></p>
<h4 id="_2-5-4-if语句" tabindex="-1"><a class="header-anchor" href="#_2-5-4-if语句"><span>2.5.4 if语句</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">if</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> condition</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">   command</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">   ...</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">   command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">elif</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> condition2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> </span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">then</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  ...</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  ...</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">fi</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-5-for循环" tabindex="-1"><a class="header-anchor" href="#_2-5-5-for循环"><span>2.5.5 for循环</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75"> val</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> in</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> list</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  ...</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-6-while循环" tabindex="-1"><a class="header-anchor" href="#_2-5-6-while循环"><span>2.5.6 while循环</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> condition</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  ...</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-5-7-until循环" tabindex="-1"><a class="header-anchor" href="#_2-5-7-until循环"><span>2.5.7 until循环</span></a></h4>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">until</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> conditon</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">do</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  ...</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">  command</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> n</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">done</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：直到条件成立才结束循环，与 <code v-pre>while</code> 相反</p>
<h2 id="_3-算数扩展运算符" tabindex="-1"><a class="header-anchor" href="#_3-算数扩展运算符"><span>3. 算数扩展运算符</span></a></h2>
<p>进行算术运算时不能直接用 <code v-pre>+</code> <code v-pre>-</code> <code v-pre>*</code> <code v-pre>/</code> 等，要使用 <code v-pre>$(())</code></p>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">num</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">1</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">num</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">$((</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">$num</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">+1))</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-函数" tabindex="-1"><a class="header-anchor" href="#_4-函数"><span>4. 函数</span></a></h2>
<h3 id="_4-1-定义函数" tabindex="-1"><a class="header-anchor" href="#_4-1-定义函数"><span>4.1 定义函数</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fn</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    echo</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> $1</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic"> $2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-调用函数" tabindex="-1"><a class="header-anchor" href="#_4-2-调用函数"><span>4.2 调用函数</span></a></h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fn</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "a"</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "b"</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


