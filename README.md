A [jQuery](http://www.jquery.com/) plugin that will show or hide a "dependent" field based on some other "master" field.

Example Usage
---------------

You probably want to just [look at the example](https://github.com/znbailey/jQuery-Dependent-Fields/blob/master/example.html), but if you prefer to read prose instead of code, here goes --

`$('#dependent-field').dependsOn('#master-field');`

If #master-field is a checkbox, the row containing '#dependent-field' will be shown/hidden based on whether the master field is checked/unchecked, respectively.

If #master-field is a select/dropdown, the row containing '#dependent-field' will be shown/hidden based on whether the selected option has a non-empty value.

You may additionally specify a conditional value or values:

`$('#dependent-field').dependsOn('#master-field', 'value');`

`$('#dependent-field').dependsOn('#master-field', ['value', 'value2']);`

This only makes sense when used with a select element - if the value of the selected option is any of the specified values, the dependent field will be shown.

*Note*: Like you'd expect, you may use any jQuery selector for the first call. The plugin is also written to support idiomatic jQuery chain-ability so you can do things like:

`$('input.depends-on-xyz').dependsOn('#xyz').somethingElse().anotherThing()`

If you have a input text in a container div, you can specify the 'depends-container' class in the master 
container DIV:

```
<div class="depends-container">
{{ form_row(form.my_input) }}
</div>
```

Also you can give a callback after the toggle:

``` 

var fieldRequired = function(){
	var target = $('#target').find('input[type="text"]');

	if(target.is(':visible')){   
    	
    	//add require
    	target.attr(required,required);

	}else{

    	//remove require
    	target.removeAttr(required);
    	
    }
}

$('.ui.depends.target').dependsOn('.ui.depends.master',null,fieldRequired);

```



Known Limitations/Shortcomings
---------------

* Only works with checkboxes and select elements.
* The plugin depends on your form field being wrapped in a row using a paragraph tag as it looks for the closest wrapping paragraph tag to show/hide. If you use a div or some other element type to wrap your form rows, you will need to modify the .closest('p') calls to use .closest('div') or whatnot.