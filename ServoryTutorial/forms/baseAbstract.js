
/**
 * @param menuItemId
 * @param {JSEvent} event
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C322C043-8F00-49EF-B4AA-79B2C145F8BA"}
 */
function onMenuItemSelected(menuItemId, event) {
	var menuItem = elements.sidenav_1.getMenuItem(menuItemId);
	forms[menuItem.id].controller.show();
	return false;
}
