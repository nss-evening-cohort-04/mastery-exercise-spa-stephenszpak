function populatePage (inventory) {
	var outputInventory = document.getElementById("container");
	var carInfo = ""

	for (var i = 0; i < inventory.cars.length; i++) {
		currentCar = inventory.cars[i];
		
		carInfo += "<div class='border-this'>"
		carInfo += `<div class='make'>${currentCar.make}  ${currentCar.model}</div>`;
		carInfo += `<div class='model'></div>`;
		carInfo += `<div class='year'>${currentCar.year}</div>`;
		carInfo += `<div class='price'>${currentCar.price} USD</div><br>`;
		carInfo += `<div class='description'> Description: ${currentCar.description}</div>`;
		carInfo += "</div>"
	};	

	outputInventory.innerHTML += carInfo

	var carContainer = document.getElementsByClassName("border-this");
	var userInput = document.getElementById("userInput");

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


  // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
};


CarLot.loadInventory();

