
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"61B7C879-1F10-4101-8CDE-79098A7A0ADD"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.list_customer_productsDataGrid.getColumn(columnindex);
	if (column.id == "trashBtn") {
		if(plugins.dialogs.showQuestionDialog('Delete Order','Are you sure you want to delete this product','No','Yes') === 'Yes') {
			foundset.deleteRecord(foundset.getSelectedIndex());
		}
	}
}
