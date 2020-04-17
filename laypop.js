/****** layui pop menu ******/
function importLayui(){
	let head = document.head;
	head.innerHTML = head.innerHTML + "\n" +"<link rel='stylesheet' href='https://github.com/sentsin/layui/blob/master/dist/css/layui.css'>";
}

function fixbar(option){
	let popmenu;
	let body = document.body;
	popmenu = document.createElement("ul");
	popmenu.setAttribute("class","layui-fixbar");
	if(!option) {
		body.appendChild(popmenu);
		return;
	}
	// 方向 vertical 竖向, horizontal 横向
	let orientation = option.orientation || "horizontal";
	let num = Number((option.num?((option.num>0)?option.num:2):2) || 2);
	let backgroundColor = option.bgcolor || "gray";
	let onclick = option.click;
	let icon = option.icon || [];
	let position = option.pos || {};
	let defaultPos = "";

	if(position.top && !position.bottom){
		defaultPos += " top: " + position.top + "px;";
	}
	if(position.bottom && !position.top){
		defaultPos += " bottom: " + position.bottom + "px;";
	}
	if(position.left && !position.right){
		defaultPos += " left: " + position.left + "px;";
	}
	if(position.right && !position.left){
		defaultPos += " right: " + position.right + "px;";
	}

	if(defaultPos === ""){
		defaultPos = "top: 50px; left: 50px;";
	}

	console.debug(option);
	console.debug(orientation, num, backgroundColor, icon, position,defaultPos);

	popmenu.setAttribute("style",defaultPos);

	for(let i = 0; i < num ; i ++){
		let li = document.createElement("li");
		if(orientation === "vertical"){
			li.setAttribute("class","layui-icon");
		}else{
			li.setAttribute("class","layui-icon layui-inline");
		}
		if(icon.length >= num){
			li.innerHTML = '<i class="'+ icon[i] + '"></i>';
		}else{
			li.innerHTML = '<i class="layui-icon layui-icon-praise" style="font-size: 30px; color: #1E9FFF;"></i>';
		}
		li.setAttribute("style","background-color:" + backgroundColor + ";margin-left:2px;");
		li.addEventListener('click', function(){
			if(typeof(onclick) === 'function'){
				onclick(i + 1);
			}else{
				console.debug("点击了第" + (i+1) + "个按钮");
			}
		}, false);
		popmenu.appendChild(li);
	}
	body.appendChild(popmenu);
}


var laypop = {
	menu:function(options){
		importLayui();
		fixbar(options);
	}
}