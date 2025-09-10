/**
 * @properties={type:4,typeid:36,uuid:"2881DA35-2DAA-450D-B9B0-D2DE4B93F8F0"}
 */
 function order_total()
 {
 	var sum = 0;
 	for (var i = 1; i <= orders_to_order_details.getSize(); i++) {
 		var record = orders_to_order_details.getRecord(i);
 		sum += record.subtotal;
 	}
 	return sum;
 }