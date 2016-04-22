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



## wamp server
> phpMyAdmin
>> 登陆密码配置 /wamp/apps/phpmyadminX.X.XX/config.inc.php



## 数据库 database
> show databases;   show tables;   describe tableName;

> create database xxx ; use xxx;

> create table xxx (col type [][auto_increment...][]);

> drop table xxx;

> delete from tableName where ...

> alter table xxx add columnName columnType
>> 用例：alter table email_list add id int not null auto_increment first, add primary key(id)

>> add column

>> change column columnName colProperty

>> drop column columnName

>> modify column columnName colProperty

> order by xxx asc, xxx desc

> limit 1;   //只处理一条数据，limit用来控制操作的最大条数

> PHP + Mysql
<pre>
				<?php
        $dbc = mysqli_connect('localhost', 'root', '123456', 'posts')
            or die('Error connect to mysql server');
        $query = "INSERT INTO userlist (userName, userPwd) VALUES ('13340248057', 'Mailofhost*')";
        $result = mysqli_query($dbc, $query)    //$result 只是一个资源id，mysql临时保存了查询结果，返回该结果的一个资源id，然后使用
        mysqli_fetch_array()函数来获取一行资源
            or die('Error querying database!');
        mysqli_close($dbc);
</pre>
>>  $row = mysqli_fetch_array($result);



## PHP
> isset();//判断变量是否已经存在    empty();//判断变量是否为空    //粘性表单，判断是否提交  isset($_POST['submit']); 确保'submit'与按钮id同

> head first page 273   image/img upload

> head first page 345   header的各种用例

> head first page 425   session 会话/ cookie结束

> head first page 443   阅读至此

> 解决跨域问题，需要给Php加上如下代码:
>> header("Access-Control-Allow-Origin:*");

>> 如果跨域需要用到 __cookie__ ，则ajax中需要设置

    Ember.$.ajaxSetup({xhrFields: {withCredentials: true}});  //withCredentials会跨域发送cookie，个人理解为 withCredentials:true会包含crossDomain:true;

   同时php端应该设置

   				header('Access-Control-Allow-Origin: http://localhost');  //允许跨域，并且此处不能设置为 *

          header("Access-Control-Allow-Credentials: true");   //配合ajax中{withCredentials: true}

> 发送json:
>> header("Content-type: application/json");

> 删除文件 unlink(filePath);


