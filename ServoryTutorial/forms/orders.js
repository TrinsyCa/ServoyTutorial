
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"16ED6697-D65A-4584-B6E1-9EC1B8489B8B"}
 */
function NewOrder(event) {
	forms.order_edit.openForNew('orders');
    forms.order_edit.controller.show();
}
/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @private
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
    searchText = searchText.trim();
    if (!searchText) {
        foundset.loadAllRecords();
        return;
    }
    
    var s = searchText.toLowerCase() + "%";
    
    var q = datasources.db.example_data.orders.createSelect();
    /*
    if (/^\d{1,2}[-\.]\d{1,2}[-\.]\d{4}$/.test(searchText) || /^\d{4}-\d{2}-\d{2}$/.test(searchText)) {
        var searchDate = null;
        
        if (/^\d{1,2}[-\.]\d{1,2}[-\.]\d{4}$/.test(searchText)) {
            var parts = searchText.split(/[-\.]/);
            var day = parts[0].padStart(2, '0');
            var month = parts[1].padStart(2, '0');
            var year = parts[2];
            searchDate = new Date(year + '-' + month + '-' + day);
        }
        else {
            searchDate = new Date(searchText);
        }
        
        if (!isNaN(searchDate.getTime())) {
            var nextDay = new Date(searchDate);
            nextDay.setDate(nextDay.getDate() + 1);
            
            q.where.add(
                q.and.add(
                    q.columns.orderdate.ge(searchDate)
                ).add(
                    q.columns.orderdate.lt(nextDay)
                )
            );
        }
    }
    */
        q.where.add(
            q.or.add(
            	q.columns.orderid.eq(parseInt(searchText))
            ).add(
                q.joins.orders_to_customers.columns.companyname.lower.like(searchText + "%")
            ).add(
                q.columns.shipcity.lower.like(searchText + "%")
            ).add(
                q.columns.shipcountry.lower.like(searchText + "%")
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
		if(plugins.dialogs.showQuestionDialog('Delete Customer','Are you sure you want to delete this order?','No', 'Yes') === 'Yes') {
			foundset.deleteRecord(foundset.getSelectedIndex());
		}
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
 * @properties={typeid:24,uuid:"F5E97C9C-B0BE-45C9-95CC-D7CC48B7E8DD"}
 */
function searchByDates(oldValue, newValue, event) {
	// TODO Auto-generated method stub
	return true
}
