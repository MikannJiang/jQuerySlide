$(function(){
	var i = 0;
	//复制第一张图片并插入到最后
	var clone = $('.banner .img li').first().clone();
	$('.banner .img').append(clone);
	// 获取图片个数
	var imgs = $('.banner .img li').length;

	//动态生成圆点li
	for (var j=0;j<imgs-1;j++){
		$('.banner .num').append('<li></li>')
	}
	
	// 默认第一个圆点添加样式
	$('.banner .num li').first().addClass('on');

	//鼠标划入圆点
	$('.banner .num li').hover(function(){
		var index = $(this).index();
		i = index; //修复bug
		$('.banner .img').stop().animate({left:-index*500},700);
		$(this).addClass('on').siblings().removeClass('on');
	});

	//自动轮播
	var t = setInterval(moveL,2000);
	//移入banner关定时器,移出继续运行
		$('.banner').hover(function(){
			clearInterval(t);		
		},function(){
			t = setInterval(moveL,2000)
		});

	//左滑
	function moveL(){
				i++ //i=1
			//当i到达图复制过来的img
			if(i==imgs){
				//用css改变left到0，使i=1
				$('.banner .img').css({left:0});
				i=1;
			}
			$('.banner .img').stop().animate({left:-i*500},700);
			//小圆点bug修复	
			if (i == imgs-1){
					$('.banner .num li').eq(0).addClass('on').siblings().removeClass('on');				
			}else{
				$('.banner .num li').eq(i).addClass('on').siblings().removeClass('on');
			}
				
				
			
	}	
	//右滑
	function moveR(){
		i-- //i=-1
			if(i==-1){
				//用css改变left到最后一张的前一张
				$('.banner .img').css({left:-(imgs-1)*500});
				i=imgs-2;
			}
			$('.banner .img').stop().animate({left:-i*500},700)
			$('.banner .num li').eq(i).addClass('on').siblings().removeClass('on');
	}	
	
		// 点击左按钮向右滑动
		$('.banner .btn-l').click(function(){
		moveR();
		});
	
	
		// 点击右按钮向左滑动
		$('.banner .btn-r').click(function(e){
		moveL();
		})
	
	});