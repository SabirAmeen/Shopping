var arr = [];
var output = "";
var itemname = _.template("<h3><%=name%></h3>");
var det = _.template('<p><input type="checkbox" id="<%=tag%>">id:<%=id%>&nbsp;&nbsp;name:<%=name%>&nbsp;&nbsp;color:<%=color%>&nbsp;&nbsp;price:<%=price%></p>');
var details = _.template('<p><input type="checkbox" id="<%=tag%>">id:<%=id%>&nbsp;&nbsp;name:<%=name%>&nbsp;&nbsp;color:<%=color%>&nbsp;&nbsp;price:<%=price%></p>');
function wrap()
{
	var div = _.template('<div id= "checkboxes"></div>');
	$('body').append(div);
	chk();
}
function chk()
{
	_.each(shop,function(num){
		 var found = _.filter(pc,function(val){
			return (num.name === val.name && num.size === val.size);
		})
		 arr = [].concat(arr,found)
		
	})
	
	grouped = _.groupBy(arr,"name");
	var key, i, j;
	
for (key in grouped) {

	$('#checkboxes').append(itemname({name:key}));

	for(i = 0, j = grouped[key].length; i< j; i++) {

		$('#checkboxes').append(det({tag:grouped[key][i].id, id:grouped[key][i].id, name:grouped[key][i].name, color:grouped[key][i].color, price:grouped[key][i].price}));

		$('#checkboxes').append(details({tag:grouped[key][i].id, id:grouped[key][i].id, name:grouped[key][i].name, color:grouped[key][i].color, price:grouped[key][i].price}));

		
	}	
	}
	$('#checkboxes').append('<button onclick="checkout();">Checkout</button>');
}
function checkout()
{
	var selected = [];
	var total = 0;
	output = "";
	$('#checkboxes input:checked').each(function() {
    selected.push($(this).attr('id'));
});
_.each(selected,function (item){
	_.each(pc,function (num){
		if(item == num.id)
		{
			_.each(shop,function(val){
				if(num.name == val.name)
				{
					output += '<p>name:'+num.name+'&nbsp;&nbsp;'+'size:'+num.size+'&nbsp&nbsp'+
					'color:'+num.color+'&nbsp&nbsp'+'price:'+num.price+'&nbsp&nbsp'+
					'qty:'+val.qty+'&nbsp&nbsp&nbsp&nbspTotal:'+(num.price*val.qty)+'</p>';
					total += (num.price*val.qty);
				}
			})
		}
	})
})
$('#checkboxes').empty();
$('body').append(output);
$('body').append('<br>Total:'+total);
}