/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"15A6AAA0-B863-4852-9C02-123C50830FC4"}
 */
var _backForm = null;
/**
 * @properties={typeid:35,uuid:"5E82714E-41DF-4F7D-B4D9-722611DE852D",variableType:-4}
 */
var _noRemove = false;
/**
 * @properties={typeid:35,uuid:"33402B6F-0FFF-4532-8FE9-D83DC264797F",variableType:-4}
 */
var _isNew = false;
/**
 * @properties={typeid:35,uuid:"E7EF280A-E90F-48A0-A09A-8F414A408400",variableType:-4}
 */
var selectedCustomerId = null;
/**
 * @properties={typeid:24,uuid:"211C30CE-03FA-45F5-88DD-5EB9F8155A34"}
 */
function openForNew() {
	_isNew = true;
	
	elements.customerInfo_companyname.visible = false;
    elements.customerInfo_companyname.text = '';
	elements.customerInfo_companyTypeAhead.enabled = true;
	elements.customerInfo_companyTypeAhead.visible = true;
    
	foundset.newRecord();
 }
/**
 * TODO generated, please specify type and doc for the params
 * @param selectedCustomer
 *
 * @properties={typeid:24,uuid:"A3BBA267-B572-44DC-B8B5-989E3C8EBD0D"}
 */
function openForCustomer(selectedCustomer) {
	_isNew = true;
	foundset.newRecord();
	foundset.customerid = selectedCustomer; 
	selectedCustomerId = selectedCustomer;
	databaseManager.saveData();
}
/**
 * @type {Array<String>}
 *
 * @properties={typeid:35,uuid:"BFA73D4B-3BD1-4833-B67F-ACD18DF51D12",variableType:-4}
 */
var requiredFields = ['customerid', 'orderdate', 'shipcountry', 'shipcity', 'shipaddress', 'shippostalcode', 'shipregion', 'shipvia'];
/**
 * @type {Array<String>}
 *
 * @properties={typeid:35,uuid:"B0EEF20B-CC5D-4E8C-8D50-E129362ADF0D",variableType:-4}
 */
var requiredFieldsDetails = ['productid', 'unitprice'];
/**
 * TODO generated, please specify type and doc for the params
 * @param event
 *
 * @properties={typeid:24,uuid:"4118DA4B-33B5-43F5-8A64-9244A3DE25A5"}
 */
function saveOrder(event) {	
	var hasError = scopes.LabelScope.validateFields(requiredFields, controller.getName(), foundset);
	if(!hasError) {
		if(databaseManager.hasRecordChanges(foundset)) {
			databaseManager.saveData(foundset)
	    }
		
	    var detailsFoundset = foundset.orders_to_order_details;
	    var hasErrorDetails = scopes.LabelScope.validateFields(requiredFieldsDetails, controller.getName(), detailsFoundset);
	    if(!hasErrorDetails) {
	    	if(detailsFoundset.quantity == null || detailsFoundset == 0) {
	    		detailsFoundset.quantity = 1;
	    	}
	    	
	    	if (databaseManager.hasRecordChanges(detailsFoundset)) {
		    	databaseManager.saveData(detailsFoundset)
		    }
	    	
		    elements.saveSuccessLabel.visible = true;
		    
		    _noRemove = true;
		    
		    /*var jobName = new Date().getTime().toString();
		    var startDate = new Date();
		    startDate.setSeconds(startDate.getSeconds() + 1);
		    plugins.scheduler.addJob(jobName, startDate, function() {
		        forms.orders.controller.show();
		    });*/
		    
		    forms.orders.controller.show();
	    }
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"02A60D6D-1DA7-4A0B-9ED0-9B736BC8CD7E"}
 */
function cancelOrder(event) {
	scopes.LabelScope.hideErrorLabels(requiredFields, controller.getName());
	scopes.LabelScope.hideErrorLabels(requiredFieldsDetails, controller.getName());
	elements.saveSuccessLabel.visible = false;
	if (_isNew == true) {
        foundset.deleteRecord();
    } else {
        databaseManager.revertEditedRecords();
    }
    _isNew = false;
	
    databaseManager.setAutoSave(true);
    
    if(_backForm != null) {
    	forms[_backForm].controller.show();
    }
    else {
    	forms.orders.controller.show();
    }
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"94616B29-78DA-4739-A2C9-EE9B4ED57739"}
 */
function addOrder(event) {
	var detailsFoundset = foundset.orders_to_order_details;
	
	var newOrder = detailsFoundset.getRecord(detailsFoundset.newRecord());
	newOrder.customerid = selectedCustomerId;
	newOrder.orderdate = new Date();
	
	detailsFoundset.orderid = newOrder.orderid;
	detailsFoundset.productid = null;
	detailsFoundset.quantity = 1;
	detailsFoundset.unitprice = 0; 
	detailsFoundset.discount = 0;
    
    databaseManager.saveData(detailsFoundset);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"F87C16E7-08F2-44E3-B7F2-6FB2C111FA19"}
 */
function onShow(firstShow, event) {
	elements.customerInfo_companyname.text = foundset.orders_to_customers.companyname;
	databaseManager.setAutoSave(false);
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C09B21FC-F19F-4DA6-B5E6-BE1E4DE8FC76"}
 */
function deleteProduct(event) {
	var detailsFoundset = foundset.orders_to_order_details;
	detailsFoundset.deleteRecord(detailsFoundset.getSelectedIndex());
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"DBC8F3E8-0F13-4C3F-921E-AE99763BF05C"}
 */
function onHide(event) {
	scopes.LabelScope.hideErrorLabels(requiredFields, controller.getName());
	scopes.LabelScope.hideErrorLabels(requiredFieldsDetails, controller.getName());
	elements.saveSuccessLabel.visible = false;
	elements.customerInfo_companyname.visible = true;
	elements.customerInfo_companyTypeAhead.enabled = false;
	elements.customerInfo_companyTypeAhead.visible = false;
	if (_isNew == true && _noRemove == false) {
        foundset.deleteRecord();
    } else if (_noRemove == false) {
        databaseManager.revertEditedRecords();
    }
    _isNew = false;
    _noRemove = false;
    
    databaseManager.setAutoSave(true);
    
    if(_backForm != null) {
    	forms[_backForm].controller.show();
    }
    else {
    	forms.orders.controller.show();
    }
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
 * @properties={typeid:24,uuid:"1FDB06FE-552D-47F2-BE37-C5D5DD91F9FB"}
 */
function onDataChangeProduct(oldValue, newValue, event) {
	if(newValue) {
		elements.productid_ErrorLabel.visible = false;
	}
	return true
}
