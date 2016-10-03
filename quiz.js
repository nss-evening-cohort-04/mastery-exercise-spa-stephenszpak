function populatePage (inventory) {
	var outputInventory = document.getElementById("container");
	var carInfo = "";
	var counter = 0;

	for (var i = 0; i < inventory.cars.length; i++) {
		currentCar = inventory.cars[i];
		
		carInfo += "<div id='container'>"
		carInfo += "<div class='col-md-4'>"
		carInfo += "<div class='border-this'>"
		carInfo += `<div class='make'>${currentCar.make} ${currentCar.model}</div>`;
		carInfo += `<div class='year'>${currentCar.year}</div>`;
		carInfo += `<div class='price'>${currentCar.price} USD</div><br>`;
		carInfo += `<div class='description'> Description: ${currentCar.description}</div>`;
		carInfo += "</div>";
		carInfo += "</div>";
		carInfo += "</div> "
	};	
	
	outputInventory.innerHTML += carInfo
	CarLot.activateEvents();
};

CarLot.loadInventory();

