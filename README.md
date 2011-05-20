A [jQuery](http://www.jquery.com/) plugin that will show or hide a field based on some other dependent field.

Example Usage
---------------

`$('#form-field').dependsOn('#master-field');`

If #master-field is a checkbox, the row containing '#form-field' will be shown/hidden based on whether the master field is checked/unchecked, respectively.

If #master-field is a select/dropdown, the row containing '#form-field' will be shown/hidden based on whether the selected option has a non-empty value.

You may additionally specify a conditional value or values:

`$('#form-field').dependsOn('#master-field', 'value');`

`$('#form-field').dependsOn('#master-field', ['value', 'value2']);`

This only makes sense when used with a select element - if the value of the selected option is any of the specified values, the dependent field will be shown.

Known Limitations/Shortcomings
---------------

* Only works with checkboxes and select elements.
* The plugin depends on your form field being wrapped in a row using a paragraph tag as it looks for the closest wrapping paragraph tag to show/hide. If you use a div or some other element type to wrap your form rows, you will need to modify the .closest('p') calls to use .closest('div') or whatnot.