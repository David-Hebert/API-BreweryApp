class RandomDrink {
    constructor(drinkName, drinkImage, drinkCategory, isAlcoholic, glassType, drinkInstructions, drinkIngredients) {
        this.drinkName = drinkName;
        this.drinkImage = drinkImage;
        this.drinkCategory = drinkCategory;
        this.isAlcoholic = isAlcoholic;
        this.glassType = glassType;
        this.drinkInstructions = drinkInstructions;
        this.drinkIngredients = drinkIngredients;
    }
}

const randomDrink = () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(drink => {
        console.log(drink.drinks[0])
        drinkClass(drink.drinks[0])
    })
    //.then(randomDrink => drinkArray.push.strDrink)
    //.then(console.log(drinkArray))
    //.then(() => drinkClass(RandomDrink))
}


const drinkClass = (drink) => {
    let drinkName = drink.strDrink
    let drinkImage = drink.strDrinkThumb
    let drinkCategory = drink.strCategory
    let isAlcoholic = drink.strAlcoholic
    let glassType = drink.strGlass
    let drinkInstructions = drink.strInstructions

    let drinkIngredients = []
    for (let i = 1; i < 14; i++) {
        //console.log((drink["strIngredient" + i]))
        if (drink["strIngredient" + i] !== null) {
            let ingredient = []
            ingredient.push(drink["strMeasure" + i])
            ingredient.push(drink["strIngredient" + i])
            drinkIngredients.push(ingredient.join(" "))
        }
    }

    let newDrink = new RandomDrink(drinkName, drinkImage, drinkCategory, isAlcoholic, glassType, drinkInstructions, drinkIngredients)
    console.log(newDrink)
    console.log(drinkIngredients)

    displayDrink(newDrink);
    //console.log(RandomDrink)
}

const displayDrink = (newDrink) => {
    let drinkResults = document.getElementById("drinkContainer")
        let cocktailName = newDrink.drinkName;
        let isAlcoholic = newDrink.isAlcoholic;
        console.log(newDrink)

        let imageOfDrink = new Image()
        imageOfDrink.src = newDrink.drinkImage;
        drinkResults.append(imageOfDrink);
        //console.log(imageOfDrink.src);

        let nameOfDrink = document.createElement("h3");
        nameOfDrink.innerHTML = newDrink.drinkName;
        drinkResults.append(nameOfDrink);

        let alcoholicOrNot = document.createElement("p");
        alcoholicOrNot.innerHTML = newDrink.isAlcoholic;
        drinkResults.append(alcoholicOrNot);

        let categoryOfDrink = document.createElement("p");
        categoryOfDrink.innerHTML = newDrink.drinkCategory;
        drinkResults.append(categoryOfDrink);

        let glassForDrink = document.createElement("p");
        glassForDrink.innerHTML = newDrink.glassType;
        drinkResults.append(glassForDrink);

        let ingredientsForDrink = document.createElement("li");
        ingredientsForDrink.innerHTML = newDrink.drinkIngredients;
        drinkResults.append(ingredientsForDrink);

        let instructionsForDrink = document.createElement("p");
        instructionsForDrink.innerHTML = newDrink.drinkInstructions;
        drinkResults.append(instructionsForDrink);
}