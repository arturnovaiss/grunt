function changeText(elementId, newText) {
    var element = document.getElementById(elementId);
    if (element) {
      element.textContent = newText;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('changeTextButton');
    if (button) {
      button.addEventListener('click', function() {
        changeText('textToChange', 'Texto alterado!');
      });
    }
  });
  