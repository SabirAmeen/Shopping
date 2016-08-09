var fp=[];
var found=[];
var output="";
function chk()
{
	_.each(shop,function(num){
		 found=_.filter(pc,function(val){
			return (num.name===val.name && num.size===val.size);
		})
		if(!!found)
		{	
			_.each(found,function(val){
				fp.push(val);
				
			})
		}
	})
	var cb1=100;
	_.each(fp,function(ele){
		output+= '<input type="checkbox" id="'+ ele.id +
		'">id:'+ele.id+'&nbsp;&nbsp;'+'name:'+ele.name+
		'&nbsp;&nbsp;'+'color:'+ele.color+'&nbsp;&nbsp;'+'price:'+ele.price+
		'</p>'
		
	})
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