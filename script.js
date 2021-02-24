const searchForFood = () => {
    document.getElementById('food-section').innerHTML = "";
    document.getElementById('food-infoSection').innerHTML = "";
    const foodName = document.getElementById('food-name').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
    fetch(url)
        .then(response => response.json())
        .then(data => showFood(data))
        .catch(error => document.getElementById('food-section').innerHTML = `<h3>Sorry. ${foodName} is not available..</h3>`);
    document.getElementById('food-name').value = '';
}

const showFood = foodsName => {
    const foodSection = document.getElementById('food-section');
    console.log(foodsName.meals.length);
     console.log(foodsName.meals[0]);
    foodsName.meals.forEach(foodName => {
        const imgFood = foodName.strMealThumb;
        const nameFood = foodName.strMeal;
        const imgAndNameInfo = document.createElement('div');
        imgAndNameInfo.className = 'img-name';
        imgAndNameInfo.innerHTML = `
            <div onclick="foodInfo('${foodName.strMealThumb}','${foodName.strMeal}','${foodName.strIngredient1}','${foodName.strIngredient2}','${foodName.strIngredient3}','${foodName.strIngredient4}','${foodName.strIngredient5}','${foodName.strIngredient6}')">
            <img src=${imgFood}>
            <h3>${nameFood}</h3>
            </div>
        `;
        foodSection.appendChild(imgAndNameInfo);
    });

}

const foodInfo = (img, name ,Ingredient_1,Ingredient_2,Ingredient_3,Ingredient_4,Ingredient_5,Ingredient_6,Ingredient_7) => {
    document.getElementById('food-infoSection').innerHTML="";
    const info = document.getElementById('food-infoSection');

    const infoDetail = document.createElement('div');
    infoDetail.className = 'info-food';
    infoDetail.innerHTML =`
    <img src=${img}>
    <h3>${name}</h3>
    <h4>Ingredients</h4>
    <l>
        <li>${Ingredient_1}</li>
        <li>${Ingredient_2}</li>
        <li>${Ingredient_3}</li>
        <li>${Ingredient_4}</li>
        <li>${Ingredient_5}</li>
        <li>${Ingredient_6}</li>
        <li>${Ingredient_7}</li>
    </ol>
    `;

    info.appendChild(infoDetail);



}