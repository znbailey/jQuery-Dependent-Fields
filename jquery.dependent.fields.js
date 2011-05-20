(function( $ ){

  $.fn.dependsOn = function(element, value) {
    var elements = this;
    //add change handler to element
    $(element).change(function(){
      var $this = $(this);
      var showEm = false;
      if ( $this.is('input[type="checkbox"]') ) {
        showEm = $this.is(':checked');
      } else if ( $this.is('select') ) {
        var fieldValue = $this.find('option:selected').val();
        var showEm = false;
        if ( !value ) {
          showEm = fieldValue && $.trim(fieldValue) != '';
        } else if (typeof(value) === 'string') {
          showEm = value == fieldValue;
        } else if ($.isArray(value)) {
          showEm = ($.inArray(fieldValue, value) !== -1);
        }
      }
      elements.closest('p').toggle(showEm);
    });

    //hide the dependent fields
    return elements.each(function(){
      var $this = $(this);
      $this.closest('p').hide();
    });
  };
})( jQuery );