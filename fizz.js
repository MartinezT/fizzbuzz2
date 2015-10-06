$(function () {
  var user_number = prompt('Enter a number!');
  for (var index = 1; index <= user_number; index += 1) {
    if (index % 3 === 0 && index % 5 === 0) {
      document.write('fizzbuzz' + '<br />');
    } else if (index % 3 === 0) {
      document.write('fizz' + '<br />');
    } else if (index % 5 === 0) {
      document.write('buzz' + '<br />')
   } else {
    document.write(index + '<br />');
    }
  }
});