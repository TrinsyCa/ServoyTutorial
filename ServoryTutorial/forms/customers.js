/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7FB2F17C-79E2-4C4E-B0EB-CAA22EC9EE57"}
 */
var searchText = '';
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"342875A8-16D8-4A90-8AB1-D65A81472F03"}
 */
function doSearch(event) {
    if (!searchText) {  
        foundset.loadAllRecords(); 
        return;  
    }
    
    var q = datasources.db.example_data.customers.createSelect(); 
    
    q.where.add(
    	q.or.add(
    		q.columns.companyname.lower.like(searchText.toLowerCase() + "%")
    	).add(
    		q.columns.contactname.lower.like(searchText.toLowerCase() + "%")
    	).add(
    		q.columns.phone.lower.like(searchText.toLowerCase() + "%")
    	).add(
    		q.columns.country.lower.like(searchText.toLowerCase() + "%")
    	)
	);
    foundset.loadRecords(q);
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
 * @properties={typeid:24,uuid:"D81A579A-418D-47C3-B65C-042DF3C37BEF"}
 */
function EditCustomer(foundsetindex, columnindex, record, event) {
	forms.customer_overview.controller.show();
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
 * @properties={typeid:24,uuid:"0DD160B7-BC3D-41FE-BBCD-B5A1E0470D08"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.customersDataGrid.getColumn(columnindex);
	if (column.id == "trashBtn") {
		if(plugins.dialogs.showQuestionDialog('Delete Customer','Are you sure you want to delete this customer?','No', 'Yes') === 'Yes') {
			foundset.deleteRecord(foundset.getSelectedIndex());
		}
	}
}

/**
 * Fired when the button is clicked.
 *
 * @param {JSEvent} event
 *
 * @properties={typeid:24,uuid:"5219D22A-68D7-4254-B667-692DFD795007"}
 */
function NewCustomer(event) {
	forms.customer_edit.controller.show();
	forms.customer_edit.openForNew();
}

/**
 * Handle form's hide.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @properties={typeid:24,uuid:"7487B101-3CD1-4F93-8D31-4E18FD13C446"}
 */
function onHide(event) {
	searchText = '';
	foundset.loadAllRecords();
}
