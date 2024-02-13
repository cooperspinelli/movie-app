
$("form").on("submit", function (evt) {

  console.log('form submitted');
  console.log(evt);
  evt.preventDefault();

  $newParagraph = (`<p>The movie is called ${$("#movie-title").val()} and its rating is ${$('#movie-rating').val()}</p>`);

  $('.movie-container').append($newParagraph);
});