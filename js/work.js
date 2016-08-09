var fp;
var arr=[];
var output="";
function chk()
{
	_.each(shop,function(num){
		 var found=_.filter(pc,function(val){
			return (num.name===val.name && num.size===val.size);
		})
		 arr=[].concat(arr,found)
		
	})
	
	grouped=_.groupBy(arr,"name");
	console.log(fp);
	var key, i, j;
for (key in grouped) {
	output+= '<h3>'+key+'</h3>';
	for(i = 0, j = grouped[key].length; i< j; i++) {
		output+= '<input type="checkbox" id="'+ grouped[key][i].id +
		'">id:'+grouped[key][i].id+'&nbsp;&nbsp;'+'name:'+grouped[key][i].name+
		'&nbsp;&nbsp;'+'color:'+grouped[key][i].color+'&nbsp;&nbsp;'+'price:'+grouped[key][i].price+
		'</p>'
	}	
	}
	$('body').empty();
	$('body').append('<div id="checkboxes">'+output+'</div>');
	$('body').append('<button onclick="checkout();">Checkout</button>');
}
function checkout()
{
	var selected = [];
	var Total=0;
	output="";
	$('#checkboxes input:checked').each(function() {
    selected.push($(this).attr('id'));
});
_.each(selected,function (item){
	_.each(pc,function (num){
		if(item==num.id)
		{
			_.each(shop,function(val){
				if(num.name==val.name)
				{
					output+='<p>name:'+num.name+'&nbsp;&nbsp;'+'size:'+num.size+'&nbsp&nbsp'+
					'color:'+num.color+'&nbsp&nbsp'+'price:'+num.price+'&nbsp&nbsp'+
					'qty:'+val.qty+'&nbsp&nbsp&nbsp&nbspTotal:'+(num.price*val.qty)+'</p>';
					Total+=(num.price*val.qty);
				}
			})
		}
	})
})
$('body').empty();
$('body').append(output);
$('body').append('<br>Total:'+Total);
}