/**
 * @properties={typeid:35,uuid:"0B94A84B-E62F-473A-98DC-99E537D6CA69",variableType:-4}
 */
var _backForm = null;
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"22E87D5D-4B01-414D-ADFC-CDF8B656D7C9"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5B3FA541-0A37-4B3E-B71E-31A71FD5E1BF"}
 */
function EditCustomer(event) {
	forms.customer_edit.controller.show();
	forms.customer_edit._backForm = "customer_overview";
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C7173CB9-207B-4CEE-89EC-3073E9E17B90"}
 */
function addOrderForCustomer(event) {
	forms.order_edit.openForCustomer(foundset.customerid);
	forms.order_edit._backForm = "customer_overview";
	forms.order_edit.controller.show();
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"525FF340-B3EF-45A0-BDAF-D278A7DE24B9"}
 */
function deleteCustomer(event) {
	if(plugins.dialogs.showQuestionDialog('Delete Customer','Are you sure you want to delete this customer?','No', 'Yes') === 'Yes') {
		foundset.deleteRecord();
		forms.customers.controller.show();
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"A8A9F86A-97F0-4BB4-BECF-954E54C400F4"}
 */
function cancelOverview(event) {
	if(_backForm != null) {
		forms[_backForm].controller.show();
	}
	else {
		forms.customers.controller.show();
	}
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"94633F3B-622D-437D-BC07-3CFFB35825ED"}
 */
function onHide(event) {
	_backForm = null;
}
