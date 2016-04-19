## ember
> command line
>> ember b 和 ember s 生成的是开发环境的代码，带有--prod参数生成的是生产环境代码。开发环境有ember-cli-live-reload.js  ， 生产环境没有
> editor
>> 可以尝试引入xheditor


## icon
> <i class="iconfont icon-XXX">...</i>

## bootstrap
> 偏移 
>> 偏移2个位置 col-sm-offset-2
>> 重置偏移 col-sm-offset-0

> 隐藏/显示  visible-xs-block

> 列嵌套
>>    
	<div class="row">
	  <div class="col-sm-9">
		Level 1: .col-sm-9
		<div class="row">
		  <div class="col-xs-8 col-sm-6">
			Level 2: .col-xs-8 .col-sm-6
		  </div>
		  <div class="col-xs-4 col-sm-6">
			Level 2: .col-xs-4 .col-sm-6
		  </div>
		</div>
	  </div>
	</div>

> 列排序
>> .col-md-push-*   .col-md-pull-*

> 排版
>> <h1><small>...</small></h1>     <small>可以用 .small 替代
>> .lead 可以让段落突出显示
>> 对齐 text-*    //left、center、right、justify、nowrap
>> 大小写转换   .text-*   //lowercase、uppercase、capitalize  
>> 引用  <blockquote>...  <footer>Written by xxx</footer></blockquote>
>> 列表  list-*    //unstyled、inline、
>>> dl-horizontal    text-overflow 自动截断水平列表描述

> 代码
>> <code>...</code>
>> <kbd>...</kbd> 拥有类似于code的背景，但是颜色更加突出
>> 多行代码使用 <pre>...</pre> 标签，  .pre-scrollable 会设置最大高度，超出显示滚动条
>> <var>...</var>可用于标记文本中的变量，没有视觉效果，通过 <samp>...</samp> 标记程序输出

[表格](http://v3.bootcss.com/css/#tables)














