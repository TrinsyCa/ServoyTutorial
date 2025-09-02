/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"D85CF627-B145-46D2-9880-EFE1766F9E38"}
 */
var searchText = '';
/**
 * @param {JSEvent} event
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C56EC48E-3C0A-4BC1-B856-A1089DC6B168"}
 */
function doSearch(event) {
	var s = searchText.trim().toLowerCase() + "%";
    if (!s) {  
        foundset.loadAllRecords(); 
        return;  
    }
    
    var q = datasources.db.example_data.products.createSelect(); 
    
    q.where.add(
    	q.columns.productname.lower.like(s)
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
 * @properties={typeid:24,uuid:"54FCF38B-71DE-42F6-B9CD-B60A76AFB946"}
 */
function showProduct(foundsetindex, columnindex, record, event) {
	forms.product_edit.controller.show();
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
 * @properties={typeid:24,uuid:"51829C99-5240-490B-BD1B-2A2DED17EC12"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.productsDataGrid.getColumn(columnindex);
	if (column.id == "trashBtn") {
		if(plugins.dialogs.showQuestionDialog('Delete Customer','Are you sure you want to delete this product?','No', 'Yes') === 'Yes') {
			foundset.deleteRecord(foundset.getSelectedIndex());
		}
	}
}
