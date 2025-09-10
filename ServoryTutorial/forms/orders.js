/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"16ED6697-D65A-4584-B6E1-9EC1B8489B8B"}
 */
function NewOrder(event) {
	forms.order_edit.openForNew();
	forms.order_edit.controller.show();
}
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"E477CAD7-6CF6-43A4-B058-7E55AEE76820"}
 */
function EditOrder(event) {
    forms.order_edit.controller.show();
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
 * @private
 *
 * @properties={typeid:24,uuid:"75825FFE-2B9C-44E8-950F-BB99340CFAED"}
 */

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
 * @private
 *
 * @properties={typeid:24,uuid:"E6DC2349-A4DF-47F8-9B64-A36FF7577313"}
 */
function onDataChangeCustomer(oldValue, newValue, event) {
	shipaddress = orders_to_customers.address;
	shipcity = orders_to_customers.city;
	shipregion = orders_to_customers.region;
	shippostalcode = orders_to_customers.postalcode;
	shipcountry = orders_to_customers.country;
	return true;
}
 
 /**
 * Called when the columns data is changed.
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param [oldvalue]
 * @param [newvalue]
 * @param {JSEvent} [event]
 * @param {JSRecord} [record]
 *
 * @return {Boolean}
 *
 * @private
 *
 * @properties={typeid:24,uuid:"05397A3A-1C4D-47CE-8C8A-9A52C2655696"}
 */
 
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"858DA413-1697-4541-B054-AAD99239D8CD"}
 */
function addItem(event) {
	orders_to_order_details.createRecord();
	orders_to_order_details.quantity = 1;
}

/** @type {String}
 * @properties={typeid:35,uuid:"78FB3CD3-73B1-4764-B0C5-DFDF406DEF06"}
 */
var searchText = '';

/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1EA86330-C739-4E46-A5D1-38DA0FD92285"}
 * @AllowToRunInFind
 */

function doSearch(event) { 
    if (!searchText) {
        foundset.loadAllRecords();
        return;
    }
    
    var q = datasources.db.example_data.orders.createSelect();
        q.where.add(
            q.or.add(
            	q.columns.orderid.eq(parseInt(searchText))
            ).add(
                q.joins.orders_to_customers.columns.companyname.lower.like(searchText.toLowerCase() + "%")
            ).add(
                q.columns.shipcity.lower.like(searchText.toLowerCase() + "%")
            ).add(
                q.columns.shipaddress.lower.like(searchText.toLowerCase() + "%")
            )
			.add(
                q.columns.shipcountry.lower.like(searchText.toLowerCase() + "%")
            )
        );
    foundset.loadRecords(q);
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"1D25790B-7C9C-4DEA-A7BE-5D9C2CA36717"}
 */
function showCustomers(event) {
	application.showForm(forms.customers);
}

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2D04AC79-ACFA-40DC-9592-68A3D5ECE739"}
 */
function onShow(firstShow, event) {
	// TODO Auto-generated method stub
}

/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @private
 *
 * @properties={typeid:24,uuid:"8342B7E1-2A39-40DD-B088-28A65B08B517"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.orderDataGrid.getColumn(columnindex);
	if (column.id == "trashBtn") {
		if(plugins.dialogs.showQuestionDialog('Delete Order','Are you sure you want to delete this order?','No','Yes') === 'Yes') {
			foundset.deleteRecord(foundset.getSelectedIndex());
		}
	}
}
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"7F89561C-F6EE-492A-8120-99A78F69E084",variableType:93}
 */
var filterCalendarStartProvider = null;
/**
 * @type {Date}
 *
 * @properties={typeid:35,uuid:"1B439721-9A30-4DE1-A2F2-3A26C41857E3",variableType:93}
 */
var filterCalendarEndProvider = null;
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
 * @properties={typeid:24,uuid:"F5E97C9C-B0BE-45C9-95CC-D7CC48B7E8DD"}
 */
function searchByDates(oldValue, newValue, event) {
	if (filterCalendarStartProvider != null && filterCalendarEndProvider != null) {
        var startDate = filterCalendarStartProvider;
        var endDate = filterCalendarEndProvider;
        
        if (startDate == null || endDate == null) {
            foundset.loadAllRecords();
            return true;
        }
        
        endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 59, 59);
        
        var query = datasources.db.example_data.orders.createSelect();
        query.where.add(query.columns.orderdate.between(startDate, endDate));
        
        foundset.loadRecords(query);
    }
    return true;
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"5BACE82C-2C93-47B3-8B8C-5D77868F1F1A"}
 */
function onHide(event) {
	filterCalendarStartProvider = null;
	filterCalendarEndProvider = null;
	foundset.loadAllRecords();
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"C4C666BD-57C6-4ADF-BD05-C53131BD55E5"}
 */
function clearFilters(event) {
	forms.orders.onHide(event);
}
