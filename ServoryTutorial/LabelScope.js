// Validation


/**
 * TODO generated, please specify type and doc for the params
 * @param requiredFields
 * @param formName
 *
 * @properties={typeid:24,uuid:"99BCAD23-15DF-420D-80EE-DA492852BC94"}
 */
 function validateFields(requiredFields, formName, customFoundset) {
    var form = forms[formName];
    var fs = customFoundset;
    var errorMessages = [];
    var hasError = false;
    
    for (var i = 0; i < requiredFields.length; i++) {
        var fieldName = requiredFields[i];
        var value = fs[fieldName];
        var errorLabelName = fieldName + '_ErrorLabel';
        
        if (!value) {
            if (form.elements[errorLabelName]) {
                form.elements[errorLabelName].visible = true;
            }
            
            var labelText = form.elements[errorLabelName] ? form.elements[errorLabelName].text : "Fields are can not be empty";
            var message = labelText;
            errorMessages.push(message);
            hasError = true;
        } else {
            if (form.elements[errorLabelName]) {
                form.elements[errorLabelName].visible = false;
            }
        }
    }
    
    if (hasError) {
        var popupMessage = errorMessages.join('<br><br>');
        plugins.dialogs.showErrorDialog('Validation Error', popupMessage);
    }
    
    return hasError;
}

/**
 * TODO generated, please specify type and doc for the params
 * @param requiredFields
 * @param formName
 *
 * @properties={typeid:24,uuid:"45B2CA96-9888-436B-B9DC-0FDF2B6B2D8F"}
 */
function hideErrorLabels(requiredFields, formName) {
    var form = forms[formName];
    for (var i = 0; i < requiredFields.length; i++) {
        var fieldName = requiredFields[i];
        var errorLabelName = fieldName + '_ErrorLabel';
        if (form.elements[errorLabelName]) {
            form.elements[errorLabelName].visible = false;
        }
    }
}

// Validation