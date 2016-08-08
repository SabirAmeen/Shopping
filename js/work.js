var fp=[];
function chk()
{
	_.each(shop,function(num){
		var found=_.filter(pc,function(val){
			return num.name===val.name;
		})
		if(!!found)
		{
			_.each(found,function(val){
				//fp.push({id:val.id, name:val.name});
				console.log(val.qty);
			})
		}
	})
}