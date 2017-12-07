(function( $ ){

  $.fn.dependsOn = function(element, value,callback) {
    var elements = this;
    var isContainer = false;
    //add change handler to element
    $(element).change(function(){
      var $this = $(this);
      var showEm = false;
      if ( $this.is('input[type="checkbox"]') ) {
        showEm = $this.is(':checked');
      } else if ( $this.is('select') ) {
        var fieldValue = $this.find('option:selected').val();
        if ( !value ) {
          showEm = fieldValue && $.trim(fieldValue) != '';
        } else if (typeof(value) === 'string') {
          showEm = value == fieldValue;
        } else if ($.isArray(value)) {
          showEm = ($.inArray(fieldValue, value) !== -1);
        }
      } else if ($this.is('input[type="text"]')){
        var fieldValue = $this.val();
        if ( !value ) {
          showEm = fieldValue && $.trim(fieldValue) != '';
        } else if (typeof(value) === 'string') {
          showEm = value == fieldValue;
        } else if ($.isArray(value)) {
          showEm = ($.inArray(fieldValue, value) !== -1);
        }
      }
      // add containers for input
      else if ($this.hasClass('depends-container')){ 
        isContainer=true;
        var target = $this.find('input[type="text"]');
        var fieldValue = target.val();
        if ( !value ) {
          showEm = fieldValue && $.trim(fieldValue) != '';
        } else if (typeof(value) === 'string') {
          showEm = value == fieldValue;
        } else if ($.isArray(value)) {
          showEm = ($.inArray(fieldValue, value) !== -1);
        }
      }

      if(isContainer){
        
        elements.each(function(){
          $(this).toggle(showEm);
          if(callback){
            callback();
          }
        });

      }else{
        elements.closest('p').toggle(showEm);
        if(callback){
          callback();
        }
      }
      
    });


    //hide the dependent fields
    return elements.each(function(){
      
      var $this= $(this);
      var isContainer= false;
      $(element).each(function(index){
        var el = $(this); 
        if(el.hasClass('depends-container') && el.find('input[type="text"]').length){
          isContainer = true;
          el = el.find('input[type="text"]');
          if(el.val() != '' && $this.is('visible') == false ){
            $this.show();
            if(callback){
              callback();
            }
          }
        }
      });

      if(!isContainer){
        $(this).closest('p').hide();
      }
    

    });
  };
})( jQuery );