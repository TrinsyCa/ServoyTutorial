
/**
 * Called when the mouse is clicked on a row/cell (foundset and column indexes are given).
 * the foundsetindex is always -1 when there are grouped rows
 *
 * @param {Number} foundsetindex
 * @param {Number} [columnindex]
 * @param {JSRecord} [record]
 * @param {JSEvent} [event]
 *
 * @properties={typeid:24,uuid:"06073F5B-4FDE-424A-8157-1E8046FFD482"}
 */
function EditOrder(foundsetindex, columnindex, record, event) {
	forms.order_edit._backForm = 'customer_overview';
	forms.order_edit.controller.show();
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
 * @properties={typeid:24,uuid:"82C76720-A8E0-4267-8E58-04E074C90C3C"}
 */
function onCellClick(foundsetindex, columnindex, record, event) {
	var column = elements.list_customer_productsDataGrid.getColumn(columnindex);
	if (column.id == "trashBtn") {
		if(plugins.dialogs.showQuestionDialog('Delete Order','Are you sure you want to delete this order?','No','Yes') === 'Yes') {
			foundset.deleteRecord(foundset.getSelectedIndex());
		}
	}
}
