app.controller("cartCtrl",["$scope","$http","sc","$rootScope",function($scope,$http,sc,$rootScope){
	$scope.buy=sc.data;
	console.log($scope.buy);
	/*$scope.carData=JSON.parse(window.localStorage.car)*/
	$rootScope.flag=true;
	$scope.addGOOds=function(i,num){
			if(i.num){
				i.num+=num;
			}else{
				i.num=1;
			}
			/*if(window.localStorage.car){
				obj=JSON.parse(window.localStorage.car);
			}
			obj[i.id]=i;
			window.localStorage.setItem("car",JSON.stringify(obj));*/
			/*window.localStorage.setItem("numm",JSON.stringify(i.num));
			i.num=window.localStorage.numm;*/
			sc.addGs(i);
			if(i.num==0){
				sc.delGs(i);
			}
			$scope.doller+=num*(i.price);
	}
	$scope.doller=sc.money($scope.buy);
	}
])