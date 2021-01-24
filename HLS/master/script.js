        $(document).ready(function(){
            $('input.form-field').change(function() {
                if($('input.form-field').map(function(index, domElement) {
                   if ($(domElement).val() !== "")
                      return domElement;
                }).length < 2) {
                   $("input[type='submit']").attr('disabled','disabled');                
                } else {
                   $("input[type='submit']").removeAttr('disabled');
                }
                });
        });