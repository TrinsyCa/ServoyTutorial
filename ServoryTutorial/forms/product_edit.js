/**
 * @properties={typeid:35,uuid:"79B35785-028E-4350-B6FC-EA3A58DD554E",variableType:-4}
 */
var _backForm = null;
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E50B0128-23B9-4973-8797-109EDD8AC3CF"}
 */
function CancelEdit(event) {
	elements.saveSuccessLabel.visible = false;
	scopes.LabelScope.hideErrorLabels(requiredFields, controller.getName());
	databaseManager.revertEditedRecords();
    if(_backForm != null) {
    	forms[_backForm].controller.show();
    }
    else {
    	forms.products.controller.show();
    }
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"47E3F692-75FE-4603-B6C7-F421375078E2"}
 */
function onShow(firstShow, event) {
}
/**
 * @type {Array<String>}
 *
 * @properties={typeid:35,uuid:"A228E2FE-E9C2-4139-B9F5-B1F04CC1D1B5",variableType:-4}
 */
var requiredFields = ['productname'];
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8B66BEEB-E70F-485F-BB36-FA3DAF93B81E"}
 */
function saveProduct(event) {
	var hasError = scopes.LabelScope.validateFields(requiredFields, controller.getName(), foundset);
    if(!hasError) {
    	databaseManager.saveData();
    	
    	elements.saveSuccessLabel.visible = true;
    	
        forms.products.controller.show();
    }
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E83D98F-3D12-4F5E-A947-6C094BCA2263"}
 */
function onHide(event) {
	elements.saveSuccessLabel.visible = false;
	scopes.LabelScope.hideErrorLabels(requiredFields, controller.getName());
	databaseManager.revertEditedRecords();
}
/**
 * @properties={typeid:24,uuid:"9289F003-736C-40AD-8747-B78956CA02BC"}
 */
function openForNew() {
	foundset.newRecord();
	foundset.discontinued = 1;
}
