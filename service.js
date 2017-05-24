app.service("sc",[function(){
		var obj={};
		obj.data={};
		obj.addGs=function(i){
			obj.data[i.id]=i;
		}
		obj.delGs=function(i){
			console.log(i);
			delete obj.data[i.id];
		}
		obj.moneys=0;
		obj.money=function(i){
			if(obj.moneys!=0){
				obj.moneys=0;
			}
			for(var a in i){
				obj.moneys+=(i[a].num*i[a].price);
			}
			return obj.moneys;
		}
		return obj;
}])