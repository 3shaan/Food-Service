const loadData =(food)=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`)
    .then(res => res.json())
    .then(data => footData(data.meals))
}
    
const footData = (foods)=>{
    const foodList = document.getElementById('food-list');
    foodList.innerHTML='';
    foods.forEach(food => {
    // console.log(food)
      
      const div = document.createElement('div')
    div.classList.add('col')
    div.innerHTML =`
    <div class="card">
    <img src="${food.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${food.strMeal}</h5>
      <p class="card-text">${food.strInstructions.slice(0,200)}...</p>
      <button onclick="foodById(${food.idMeal})" type="button" class="btn btn-primary" >
    Know More
  </button>
    `     
    foodList.appendChild(div);

    });
}

 const hid = document.getElementById('food-details');
 const foodDetail = document.getElementById('food-details');


const foodById= (id)=>{
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  .then(res => res.json())
  .then(data => foodDetails(data.meals[0]))
}

  const foodDetails = (foodData)=>{
    console.log(foodData);
    hid.style.display = 'block'
    foodDetail.innerHTML=`
    <i onclick="hiddenBtn()" id="cross" class="fa-solid fa-circle-xmark"></i>
    <img src="${foodData.strMealThumb}" alt="" class="card-img-top img-fluid">
    <h3>${foodData.strMeal}</h3>
    <p class="text" >${foodData.strInstructions}</p>
    <a href="${foodData.strYoutube}"target="_blank" class="btn btn-primary">View Full Tutorial On Youtube</a>
    `
    console.log(foodData.strYoutube)

  }


  const hiddenBtn = ()=>{
    console.log('jdd')
    hid.style.display='none'
    foodDetail.innerHTML ='';
  }
// loadData('rice');

document.getElementById('btn').addEventListener('click',()=>{
  const input = document.getElementById('input');
  const inputValue = input.value;
  if(inputValue === ''){
    alert('please input food name')
  }
  else{
    loadData(inputValue);
  }
  
  // console.log(inputValue);
 
})
