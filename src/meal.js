function nameMenuItem(name) {

return (`Delicious ${name}`)
}

function createMenuItem(name, price, type){
  return {
    name: name,
    price: price,
    type: type
  }
}

function addIngredients(ingredient, quant) {
  console.log (ingredient, quant)
  //  return arr.push(ingredient)

   quant.push(ingredient);
  }


// addIngredients("cheese",quant)
// addIngredients("peppers", quant)
// addIngredients("onion"), quant



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


