# laypop
## 基于layui的一个弹出式浮动菜单

使用方法:
	HTML中添加 <script src="laypop/laypop.js"></script>


```
laypop.menu({
	orientation: 'horizontal', // horizontal or vertical 排版方向横向和竖向
	num:2, // 按钮数量 
	backgroundColor:'gray', //按钮背景颜色
	onclick:function(index){},  //按钮点击事件
	icon:[], //按钮图标 (支持font awesome, 但是需要自己引入fa库)
	position:{
		top:50,
		left:50
	}, //按钮位置 相对的两个方向同时设置无效
})

```