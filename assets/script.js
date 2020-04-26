$(document).ready(function(){

    $('#highscore-user').on('submit', function() {
      $.ajax({
        type: 'POST',
        url: '/',
        data: {
          name: $('#highscore-user-name').val(),
          score: $('#points').html()
        },
        success: function(){
          // do something with the data via front-end framework
          location.reload();
        }
      });
    });
});