    $("button").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
       

        console.log(response);


       
        var results = response.data;
    
         for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalDiv.prepend(p);
            animalDiv.prepend(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);
      
         }
      })
    });

    $("thebutton").on("click", function() {
      var animal = $(this).attr("data-animal");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        animal + "&api_key=dc6zaTOxFJmzC&limit=10";

      $.ajax({
        url: queryURL,
        method: "GET"
      }).done(function(response) {
       

        console.log(response);


       
        var results = response.data;
    
         for (var i = 0; i < results.length; i++) {

            var animalDiv = $("<div class='item'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var animalImage = $("<img>");
            animalImage.attr("src", results[i].images.fixed_height.url);

            animalDiv.prepend(p);
            animalDiv.prepend(animalImage);

            $("#gifs-appear-here").prepend(animalDiv);
      
         }
      })
    });
     

     $(".gif").on("click", function() {
      // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
      var animal = $(this).attr("data-animal");
      var animate = $(this).attr("data-animate")
      var still = $(this).attr("src", $(this).attr("data-still"));

      console.log(still)
      // If the clicked image's state is still, update its src attribute to what its data-animate value is.
      // Then, set the image's data-state to animate
      // Else set src to the data-still value
      if (state === "still") {
        $(this).attr("src", animate );
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
