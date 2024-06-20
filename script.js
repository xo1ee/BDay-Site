$(document).ready(function() {
  var titleText = $("#title").text(); // Get the text content of the title
  var newText = "";

  // Loop through each character in the title text
  for (var i = 0; i < titleText.length; i++) {
      var char = titleText.charAt(i);

      // Check if the character is a space
      if (char === " ") {
          newText += " "; // Preserve space with a simple space character
      } else {
          var spanClass = i % 2 === 0 ? "color1" : "color2"; // Alternate color classes

          // Create a span for each character with the appropriate color class and tilt class
          newText += "<span class='" + spanClass + " tilted'>" + char + "</span>";
      }
  }

  // Replace the content of the title with the newly constructed HTML
  $("#title").html(newText);
});