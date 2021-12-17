$(function() {
    $.get('https://numbersapi.com/random/', function(data) {
      arr = data.split(' ') 
      question = 'What '+ arr.slice(1, ).join(' ').slice(0, -1) + '?'
      $('#question').text(question);
      $('#number').text(arr[0]);
    });
  });
  $(document).on('click', '#btn', function() {
    $('#number').toggle() 
  });

  $(document).on('click', '#reloadbtn', function() {
    window.location.reload(true);
  });