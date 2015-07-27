requirejs.config({                    //设置别名
	paths:{
		jquery:'jquery-1.11.3.min'
	}
});

requirejs(['jquery'],function($){                  //引入模块
	$('#backTop').on('click',move);                 //使页面返回到顶部
	$(window).on('scroll',function(){                 //监听window对象的滚动事件，确定位置
		checkPosition($(window).height());            //匿名函数调用包含参数的checkPosition
	});                                           
	
	checkPosition($(window).height());                  //加载时检测
	
	function move(){
		if($(window).scrollTop()!=0){
			if(!$('html,body').is(':animated')){
				$('html,body').animate({
					scrollTop:0
				},220);
			}
		}
	}
	
	function go(){
		$('html,body').scrollTop(0);
	}
	
	function checkPosition(pos){
		if($(window).scrollTop() > pos) {
			$('#backTop').fadeIn();						//大于临界值，向上按钮显示
		}else{
			$('#backTop').fadeOut();					//小于临界值则隐藏
		}
	}
});