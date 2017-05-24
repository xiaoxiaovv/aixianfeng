app.controller("homeCtrl",["$scope","$http","$q","$timeout","sc","$rootScope",function($scope,$http,$q,$timeout,sc,$rootScope){
	$rootScope.flag=true;
	$http({
		url:'http://h5.yztctech.net/api/axf/apihome.php',
		method:"GET"
		
	}).success(function(res){
		console.log(res.data);
			$scope.dataList=res.data.slide;
			$scope.dataList1=res.data.menu; 
			$timeout(function(){
				var mySwiper = new Swiper ('.swiper-container', {
   	autoplay: 1000,
   	touchRatio : 0.5,
   	autoplayDisableOnInteraction : false,
   	loop:true,

    // 如果需要分页器
    pagination: '.swiper-pagination'
    
    // 如果需要前进后退按钮
   // nextButton: '.swiper-button-next',
    //prevButton: '.swiper-button-prev',
    
    // 如果需要滚动条
    //scrollbar: '.swiper-scrollbar',
  }) }); 
	});
	$http({
		url:'http://h5.yztctech.net/api/axf/apihomehot.php',
		method:"GET"
	}).success(function(res){
			console.log(res);
			$scope.hotDate=res.data;
	})
	$scope.addGoods=function(i){
		if(i.num){
				i.num++;
			}else{
				i.num=1;
			}
			sc.addGs(i);
	}
	}
])