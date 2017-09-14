var add = function(number1, number2) {
return number1 + number2;
};

var subtract = function(number1, number2) {
return number1 - number2;
};

var multiply = function(number1, number2) {
return number1 * number2;
};

var divide = function(number1, number2) {
return number1 / number2;
};

var exponent = function(number1, number2){
return number1**number2;
};

var percent = function(number1, number2){
return number1 * number2 / 100;
}


$(document).ready(function() {
  // $("#calcInput").submit(function(event) {
  //
  //   var number1 = parseInt($("#valInput").val());
  //   var number2 = parseInt($("#valInput2").val());
  //   $("#btnAdd").click(function() {
  //     var result = add(number1, number2);
  //     $("#output").text(result);
  //   });
  //   $("#btnSubtract").click(function() {
  //     var result = subtract(number1, number2);
  //     $("#output2").text(result);
  //   });
  //   $("#btnMultiply").click(function() {
  //     var result = multiply(number1, number2);
  //     $("#output3").text(result);
  //   });
  //   $("#btnDivide").click(function() {
  //     var result = divide(number1, number2);
  //     $("#output4").text(result);
  //   });
  //   event.preventDefault();
  // });



    $("#calcInput").submit(function(event) {
      var operator = $("input:radio[name=operator]:checked").val();
      var number1 = parseInt($("#valInput").val());
      var number2 = parseInt($("#valInput2").val());

      if (operator === "add") {
        var result = add(number1, number2);
        $("#output").prepend("<li>"+result+"</li>");
      } else if (operator === "subtract") {
        var result = subtract(number1, number2);
        $("#output2").prepend("<li>"+result+"</li>");
      } else if (operator === "multiply") {
        var result = multiply(number1, number2);
        $("#output3").prepend("<li>"+result+"</li>");
      } else if (operator === "divide") {
        var result = divide(number1, number2);
        $("#output4").prepend("<li>"+result+"</li>");
      } else if (operator === "exponent"){
        var result = exponent(number1, number2);
        $("#output5").prepend("<li>"+result+"</li>");
      } else if (operator ==="percent"){
        var result = percent(number1, number2);
        $("#output6").prepend("<li>"+result+"</li>");
      }
      event.preventDefault();
    });

    $("button#reset").click(function() {
      $("ul#output").empty();
      $("ul#output2").empty();
      $("ul#output3").empty();
      $("ul#output4").empty();
      $("ul#output5").empty();
      $("ul#output6").empty();
    });
  });

  //   });
  // });
  // $("#btnSubtract").click(function() {
  //   $("#calcInput").submit(function(event) {
  //     var number1 = parseInt($("#valInput").val());
  //     var number2 = parseInt($("#valInput2").val());
  //     var result = subtract(number1, number2);
  //     $("#output2").text(result);
  //     event.preventDefault();
  //   });
  // });
  // $("#btnMultiply").click(function() {
  //   $("#calcInput").submit(function(event) {
  //     var number1 = parseInt($("#valInput").val());
  //     var number2 = parseInt($("#valInput2").val());
  //     var result = multiply(number1, number2);
  //     $("#output3").text(result);
  //     event.preventDefault();
  //   });
  // });
  // $("#btnDivide").click(function() {
  //   $("#calcInput").submit(function(event) {
  //     var number1 = parseInt($("#valInput").val());
  //     var number2 = parseInt($("#valInput2").val());
  //     var result = divide(number1, number2);
  //     $("#output4").text(result);
  //     event.preventDefault();
  //   });
//   });
// });

  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number"));
  //
  // alert(subtract(number1, number2));
  //
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number"));
  //
  // alert(multiply(number1, number2));
  //
  //
  // var number1 = parseInt(prompt("Enter a number:"));
  // var number2 = parseInt(prompt("Enter another number"));
  //
  // alert(divide(number1, number2));
// })
