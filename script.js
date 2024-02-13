
$("form").on("submit", function (evt) {
  evt.preventDefault();

  let $newMovie =
    (`<div>
    <p>The movie is called ${$("#movie-title").val()} and its rating is ${$('#movie-rating').val()}</p>
    <button id="delete-button">Delete Movie</button>
    </div>
    `);

  $('.movie-container').append($newMovie);
});

$(".movie-container").on("click", "button", function (evt) {
  $(evt.target).parent().remove();
});