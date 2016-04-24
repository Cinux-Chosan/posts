## animateCSS bug
> 由于动画完成设置了hidden属性，导致后面具有hidden属性的元素无法检测到动画执行情况，即
webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend 这些事件没有被触发，或则说hidden元素没有动画，即使添加了带有动画的class，
所以就不能执行成功。导致后面的所有操作短路。