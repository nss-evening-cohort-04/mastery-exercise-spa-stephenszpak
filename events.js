var CarLot = (function () {
  var carContainer = document.getElementsByClassName("border-this");
  var userInput = document.getElementById("userInput");

  return {
    activateEvents: (function() {
      for (var i = 0; i < carContainer.length; i++) {
        carContainer[i].addEventListener("click", function(event) {
          for (var x = 0; x < carContainer.length; x++) {
            carContainer[x].classList.remove('selected');
          }
            event.currentTarget.classList.add('selected');
            selectedDescription = event.currentTarget;
            userInput.focus();
            userInput.value = null;
          });
        };  
        userInput.addEventListener('keyup', function(e) {
          if (selectedDescription) {
          selectedDescription.querySelector('.description').innerHTML = this.value;
      }
  });
    })
  

  }
    
})(CarLot || {});




  // for (var i = 0; i < carContainer.length; i++) {
  //   carContainer[i].addEventListener("click", function(event) {
  //       for (var x = 0; x < carContainer.length; x++) {
  //           carContainer[x].classList.remove('selected');
  //       }
  //         event.currentTarget.classList.add('selected');
  //         selectedDescription = event.currentTarget;
  //         userInput.focus();
  //         userInput.value = null;
  //     });
  // };

  // userInput.addEventListener('keyup', function(e) {
  //   if (selectedDescription) {
  //       selectedDescription.querySelector('.description').innerHTML = this.value;
  //     }
  // });