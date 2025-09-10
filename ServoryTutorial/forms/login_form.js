/**
 * @protected 
 * @properties={typeid:24,uuid:"F4300E51-6CC0-47E2-B544-2DC19B3DE7DE"}
 * @override
 */
function onLoginSuccess() {
	elements.errorMsg.visible = false;
}

/**
 * @protected 
 * @param error
 *
 * @properties={typeid:24,uuid:"641F68FB-7102-486F-9F05-6B7FA01BE95E"}
 * @override
 */
function onLoginError(error) {
	elements.errorMsg.text = error;
	elements.errorMsg.visible = true;
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"7534D22C-B874-44AB-BE11-9940646006FE"}
 */
function onLoad(event) {
	// auto fill credentials in developer
	if (application.isInDeveloper()) {
		 tenantName = "admin";
		 userName = "admin";
		 password = "admin";
	}
}
