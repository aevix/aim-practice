$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');

        $.ajax({
          type: 'POST',
          url: '/',
          data: item,
          success: function(){
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
});