app.controller("marketCtrl",["$scope","$http","sc","$rootScope",function($scope,$http,sc,$rootScope){
		$rootScope.flag=true;
		$http({
			url:"lib/data.json",
			method:"GET"
		}).success(function(res){
			console.log(res.data.categories);
			$scope.Odate=res.data;
			$scope.date=res.data.categories;
			var firstId=$scope.date[0].id;
			console.log(firstId);
			$scope.currentgood=$scope.Odate.products[firstId];
			/*$scope.currentgood.map(function(item){
					item.count=0;
			})*/
		})
		$scope.chooseMenu=function(i,text,m){
			if(i.num){
				console.log(i.num);
			}
			console.log(text);
			console.log(m);
			$scope.index=m;
		console.log(i.id);
		var goodId=i.id;
		console.log($scope.Odate.products[goodId]);
		$scope.currentgood=$scope.Odate.products[goodId];
		/*$scope.currentgood.map(function(item){
					item.count=0;
			})*/
		}
		var obj={};
		$scope.addGOODs=function(i,num){
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
	}
	}
])