//
// Get the names of the people running the top 25 most expensive
// AirBnB rentals in New York using CartoDB's SQL API and list them.
//

$(document).ready(function () {
  // Use jQuery to call the SQL API
  $.getJSON('https://daviswinslow.cartodb.com/api/v2/sql?q=SELECT Distinct(industry) FROM coop_form_responses ORDER BY industry DESC')
    
    // When it's done it will pass the parsed response in data
    .done(function (data) {
    
      // For each row in the response...
      $.each(data.rows, function () {
        // ... select the results list and append a new item for this host
        //
        // $('<li></li>') probably looks weird. It creates a new <li> element.
        $('.results').append($('<li></li>').text(this.host_name));
      });
    })
   
    // This function is called if the API call fails
    .fail(function (resp) {
      $('body').append(
        $('<div></div>')
          .text(resp.responseJSON.error[0])
          .addClass('error')
      );
    });
});
