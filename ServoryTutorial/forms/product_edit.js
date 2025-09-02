
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E50B0128-23B9-4973-8797-109EDD8AC3CF"}
 */
function CancelEdit(event) {
	databaseManager.revertEditedRecords();
    forms.products.controller.show();
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
	databaseManager.setAutoSave(false);
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"8B66BEEB-E70F-485F-BB36-FA3DAF93B81E"}
 */
function saveProduct(event) {
    if (!databaseManager.saveData()) {
        application.output("An error occurred during data saving!");
        return;
    }
    
    forms.products.controller.show();
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"2E83D98F-3D12-4F5E-A947-6C094BCA2263"}
 */
function onHide(event) {
	databaseManager.setAutoSave(true);
}
