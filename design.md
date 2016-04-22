
# 模块设计 #

## 首页：
> 参考 https://slimfaq.com/

## 登陆模块：
在提交的时候，动态设置form或者使用ajax  FormData来提交

## 博客主页：
> 功能：
>> 博客分类浏览tab

>> 博客列表

>>> 突出显示置顶

## 博客预览页：
> 功能：
>> 博文Title以及正文

>> 留言功能，点赞，[ 赞助 ]

## 相册：
> 功能：
>> 相册分类

## 相册预览：
> 功能：
>> 显示各个相册，引入三维切换



## 通用功能模块
> myGetJson

> animateCSS


## 数据库表格设计
> 用户列表(userList)：
>> userName   primary

>> userPwd

>> userId

>> userAvatar    //用户头像


> 文章列表(articleList)：
>> userId

>> articleName

>> articleText

>> articleDate

>> isStick   //是否置顶

>> praiseNum    //被赞数

> 相册列表(photoList)
>> photoCategory   //相册分类，每个分类在总目录下面对应一个文件夹

>> photoName    //图片名      与分类结合为服务器上的图片相对路径
