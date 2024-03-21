function nameMenuItem(name) {

return (`Delicious ${name}`)
}
nameMenuItem("Burrito")
nameMenuItem("Pizza")
nameMenuItem("Taco")

function createMenuItem(){
  let menuItem = {
    name: "French Toast",
    price: 10.99,
    type: "breakfast",
  }
}

function addIngredients(ingredient,quant) {
  quant.push(ingredient);
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


