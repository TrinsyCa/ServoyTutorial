/**
 * @properties={typeid:35,uuid:"0B94A84B-E62F-473A-98DC-99E537D6CA69",variableType:-4}
 */
var _backForm = null;
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2E6DEC06-FC97-4D9D-90CF-9D29CE4FDAEE"}
 */
function goBack(event) {
	if (_backForm && forms[_backForm]) {
        application.showForm(forms[_backForm]);
    }
    else {
    	application.showForm(forms.customers);
    }
}
/**
 * TODO generated, please specify type and doc for the params
 * @param name
 *
 * @properties={typeid:24,uuid:"9787E70D-F753-43A4-AFED-6AEA60EFD45C"}
 */
function backFormName(name) {
	_backForm = name;
}
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
