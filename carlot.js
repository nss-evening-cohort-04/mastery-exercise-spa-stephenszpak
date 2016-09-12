var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
    	var inventoryLoader = new XMLHttpRequest();
     	inventoryLoader.addEventListener("load", function () {
      		inventory = JSON.parse(this.responseText);
      		populatePage(inventory);
      });
     	inventoryLoader.open("GET", "inventory.json");
     	inventoryLoader.send();
    }
  };
})();