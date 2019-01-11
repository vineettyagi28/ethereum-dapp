function calculateIncrements(startPrice, reservePrice, priceChange) {
    var noOfDecrements = (startPrice - reservePrice) / priceChange;
    console.log(noOfDecrements);
    var cars = new Array();
    for (var i = 0; i <= noOfDecrements; i++) {
        cars[i] = (startPrice - (i * priceChange));
    }
    console.log(cars.toString());
}