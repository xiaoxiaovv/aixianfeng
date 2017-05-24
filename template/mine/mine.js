app.controller("mineCtrl", ["$scope", "$http","$rootScope", function($scope, $http,$rootScope) {
	$rootScope.flag=true;
	$scope.data = [{
		url: "template/mine/imgs/1.png",
		text: "待付款"
	}, {
		url: "template/mine/imgs/2.png",
		text: "待收货"
	}, {
		url: "template/mine/imgs/3.png",
		text: "待评价"
	}, {
		url: "template/mine/imgs/4.png",
		text: "退款/售后"
	}];
	$scope.qtdata = [{
		url: "template/mine/imgs/5.png",
		text: "积分商城"
	}, {
		url: "template/mine/imgs/6.png",
		text: "优惠券"
	}, {
		url: "template/mine/imgs/7.png",
		text: "收货地址"
	}, {
		url: "template/mine/imgs/8.png",
		text: "客服/反馈"
	}]

}])