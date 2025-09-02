/**
 * @properties={typeid:35,uuid:"BFF9F4CC-D5FE-40BA-B63A-4D6080DF8EFD",variableType:-4}
 */
var _isNew = false;
/**
 * @properties={typeid:35,uuid:"FC3B30B5-F3FC-4DA4-A0D4-0542160BFB58",variableType:-4}
 */
var _backForm = null;
/**
 * @properties={typeid:35,uuid:"F663629B-31FB-4BFF-BC5D-6169E9805AA5",variableType:-4}
 */
var _tempRecord = null;
/**
 * TODO generated, please specify type and doc for the params
 * @param {String} backFormName
 *
 * @properties={typeid:24,uuid:"52F405E7-D37C-46CE-A59B-3C696ACE642D"}
 */
var selectedCustomerId = null;
/**
 * TODO generated, please specify type and doc for the params
 * @param backFormName
 *
 * @properties={typeid:24,uuid:"B916041A-220C-469E-81F5-FC3914A3838E"}
 */
/**
 * TODO generated, please specify type and doc for the params
 * @param backFormName
 *
 * @properties={typeid:24,uuid:"32A365BE-E8DF-4043-96E8-FD820E09DF33"}
 */
function openForNew(backFormName) {
	_isNew = true;
    _backForm = backFormName || 'orders';
    
    databaseManager.setAutoSave(false);
    
    activateCustomerSelection();
    
    if (!foundset.getRecord(foundset.newRecord())) {
        return;
    }
 }
/**
 * @properties={typeid:24,uuid:"244F5208-24A2-4147-8841-90E999FDC732"}
 */
function activateCustomerSelection() {
	elements.customerInfo_companyname.text = '';
	elements.customerInfo_companyTypeAhead.enabled = true;
	elements.customerInfo_companyTypeAhead.visible = true;
}
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2110A042-47A4-4217-830B-B92D840C7448"}
 */
function saveOrder(event) {
	if (!databaseManager.saveData()) {
        application.output("Veri kaydı sırasında hata oluştu!");
        return;
    }
    
    forms.orders.controller.show();
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
	databaseManager.revertEditedRecords();
    forms.orders.controller.show();
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
	var newOrder = foundset.getRecord(foundset.newRecord());
	newOrder.customerid = selectedCustomerId;
	newOrder.orderdate = new Date();
	
	databaseManager.saveData();
	
	var orderDetailsFoundset = newOrder.orders_to_order_details;
    orderDetailsFoundset.newRecord();
    orderDetailsFoundset.orderid = newOrder.orderid;
    orderDetailsFoundset.productid = null;
    orderDetailsFoundset.quantity = 0;
    orderDetailsFoundset.unitprice = 0; 
    
    databaseManager.saveData();
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2C112FB7-84A0-42EB-AF4A-0F946024B16F"}
 */
function onHide(event) {
	databaseManager.setAutoSave(true);
}
