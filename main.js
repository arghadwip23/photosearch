console.log('Hello World!');
$('form').submit(function(event) {
  event.preventDefault();
  $('#photo').empty();
  var search = $('#search').val();
  var url = 'http://api.unsplash.com/search/photos?query='+search+'&client_id=4CsRSQrzR-BWipkoi--Hf1cVskuRxToT-dhzsoWKm6s&per_page=35';
  
  $.ajax({
    method: 'GET',
    url: url,
    success: function(data) {
      console.log(data)
      
      data.results.forEach(photo => {
        
        $('#photo').append(

          `
          <div class="card" style="width: 20rem;" id='card'>
            <img class="card-img-top" src="${photo.urls.regular}" alt="Card image cap">
            <div class="card-body">
              <p class="card-text">${photo.description}</p>
            </div>
          </div>
        
          `
       )
     })
    }
 })
})
