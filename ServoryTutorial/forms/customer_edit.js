/**
 * @properties={typeid:35,uuid:"9DE55C82-482B-4779-8590-D72AAB2772DB",variableType:-4}
 */
var _backForm = null;
/**
 * TODO generated, please specify type and doc for the params
 * @param name
 *
 * @properties={typeid:24,uuid:"83E1F09C-0069-4E77-8C92-E6E54ACE4792"}
 */
function backFormName(name) {
	if (_backForm && forms[_backForm]) {
        if (_backForm === 'customers') {
            forms[_backForm].foundset.loadAllRecords();
        }
        application.showForm(forms[_backForm]);
    }
}
/**
 * TODO generated, please specify type and doc for the params
 * @param customer
 *
 * @properties={typeid:24,uuid:"3243CF68-AEA2-4DDD-8A7C-89E7A695BBBB"}
 */
function selectedCustomer(customer) {
	
}
/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"EBCC11D6-B918-4F2E-82A1-99C124412084"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
}
