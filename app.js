let drinkArray = [];

const randomDrink = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(drink => {
        console.log(drink.drinks[0])
    })
    

}


