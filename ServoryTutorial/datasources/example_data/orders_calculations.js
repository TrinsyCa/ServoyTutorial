/**
 * @properties={type:8,typeid:36,uuid:"E40315FE-F5BF-4537-8D3C-4BE331D150C3"}
 */
function order_total()
{
	var sum = 0;
	for(var i = i; i <= orders_to_order_details.getSize(); i++) {
		var record = orders_to_order_details.getRecord(i);
		sum += record.subtotal;
	}
	return sum;
}
