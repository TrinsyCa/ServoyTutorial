/**
 * @properties={typeid:35,uuid:"9DE55C82-482B-4779-8590-D72AAB2772DB",variableType:-4}
 */
var _backForm = null;

/**
 * @properties={typeid:24,uuid:"8F47431C-C1DB-4FDF-84B9-4CC3CECB6C84"}
 */
function openForNew() {
	foundset.newRecord();
	databaseManager.saveData();
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"8AF5515F-E90F-4FCE-A1FD-B1C0043CF68B"}
 */
function onShow(firstShow, event) {
	databaseManager.setAutoSave(false);
}
/**
 * @type {Array<String>}
 *
 * @properties={typeid:35,uuid:"B3F36F7A-110D-4905-B5A5-4D8125EE47D2",variableType:-4}
 */
var requiredFields = ['customerid', 'companyname'];
/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"1AAD6FA4-F2DA-43F9-ABE1-A213FC94ED20"}
 */
function onHide(event) {
	elements.saveSuccessLabel.visible = false;
	databaseManager.revertEditedRecords();
	databaseManager.setAutoSave(true);
	_backForm = null;
	scopes.LabelScope.hideErrorLabels(requiredFields, controller.getName());
}
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 * 
 *
 * @properties={typeid:24,uuid:"5947E197-5573-45E5-85AC-D6D414E41B59"}
 */
function saveCustomer(event) {
    var hasError = scopes.LabelScope.validateFields(requiredFields, controller.getName(), foundset);
    if (!hasError) {
        databaseManager.saveData();
        
        elements.saveSuccessLabel.visible = true;
        
        forms.customer_overview.controller.show();
    }
}
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"605B40DD-9FA6-4C42-BDA2-1E98B73D0A2A"}
 */
function cancelCustomer(event) {
	scopes.LabelScope.hideErrorLabels(requiredFields, controller.getName());
	elements.saveSuccessLabel.visible = false;
	databaseManager.revertEditedRecords();
	if(_backForm != null) {
		forms[_backForm].controller.show();
	}
	else {
		forms.customers.controller.show();
	}
}
/**
 * TODO generated, please specify type and doc for the params
 * @param customerid
 *
 * @properties={typeid:24,uuid:"7DA13BAA-04DC-4A16-942A-61CB37976BCB"}
 */
function EditSelectedCustomer(customerid) {
	foundset.customerid = customerid;
}