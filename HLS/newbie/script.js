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

        function viewDiv(){
         document.getElementById("download-block").style.display = "block";
         document.getElementById("nid").style.display = "none";
         document.getElementById("snid").style.display = "none";
         document.getElementById("gbid").style.display = "none";
         document.getElementById("ipid").style.display = "none";
       };
