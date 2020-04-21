$(document).ready(function(){

    $('form').on('submit', function(){
  
        var item = $('form input');
        var name = {name: item.val(), score: document.getElementById("points").textContent};
  
        $.ajax({
          type: 'POST',
          url: '/',
          data: name,
          success: function(data){
            console.log('test');
            //do something with the data via front-end framework
            location.reload();
          }
        });
  
        return false;
  
    });
});