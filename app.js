const input = document.querySelector(".form-control");
const button = document.querySelector(".btn");
const box = document.querySelector(".box");

const URL = button.addEventListener("click", (e) => {
  e.preventDefault();
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=2fbafbe3eb671e5aaa277f9324a67ddf&units=metric`
    
  )
    .then((res) => res.json())
    .then((data) => {
      myFunction(data);
    });
  e.target.closest("form").reset();
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    myFunction(data);
  }
});

let myFunction = (data) => {
  box.innerHTML = `  <div class=
  "card" style="width: 18rem">

<div class="card-body">
</div>
<h5 class="card-title">${data.sys.country}</h5>
<ul class="list-group list-group-flush">
  <li class="list-group-item" id='name'>${data.name}</li>
  <li class="list-group-item" id='box'>${data.main.temp}<span>&#8451</span></li>
  <li class="list-group-item" id ='feels'><span>Feels-Like : </span>${data.main.feels_like}</li>
  <li class="list-group-item " id='desc'><span>Description : </span>${data.weather[0].description}</li>
  
  
</ul>

</div>`;

  document.body.style.backgroundImage =
    "url('https://source.unsplash.com/1600x900/?city," + data.name + "')";
};
// ========2..YÖNTEMMMM====================================================

// const {
//     sys: { country },
//     name,
//     main: { temp, feels_like },
//     weather: { description },
//   } = data;

//   box.innerHTML = `  <div class="card" style="width: 18rem">
// <!-- <img src="..." class="card-img-top" alt="..." /> -->
// <div class="card-body">
//   <h5 class="card-title">${country}</h5>
// </div>
// <ul class="list-group list-group-flush">
//   <li class="list-group-item">${name}</li>
//   <li class="list-group-item">${temp}</li>
//   <li class="list-group-item">${feels_like}</li>
//   <li class="list-group-item">${data.weather[0].description}</li>

// </ul>
// </div>`;
// };
