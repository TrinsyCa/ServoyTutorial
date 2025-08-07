
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"16ED6697-D65A-4584-B6E1-9EC1B8489B8B"}
 */
function NewOrder(event) {
	foundset.newRecord();
}

/**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"75825FFE-2B9C-44E8-950F-BB99340CFAED"}
 */

 /**
 * Handle changed data, return false if the value should not be accepted.
 * JSEvent.data will contain extra information about dataproviderid, its scope and the scope id (record datasource or form/global variable scope)
 *
 * @param oldValue
 * @param newValue
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"E6DC2349-A4DF-47F8-9B64-A36FF7577313"}
 */
function onDataChangeCustomer(oldValue, newValue, event) {
	shipaddress = orders_to_customers.address;
	shipcity = orders_to_customers.city;
	shipregion = orders_to_customers.region;
	shippostalcode = orders_to_customers.postalcode;
	shipcountry = orders_to_customers.country;
	return true;
}
 