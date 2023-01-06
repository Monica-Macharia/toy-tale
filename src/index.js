let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


  //GET all toys and render as cards on the DOM

  function display(item){
    let location = document.querySelector("#toy-collection")
    let toy = document.createElement("div")
    toy.className = "card"
    location.appendChild(toy)

      // for (let item of data){
      
      // toy.innerHTML = `<img src= "${item.image}" >`
        
      // }
    //   console.log(data)
    
     
      toy.innerHTML = `<img src= "${item.image}" >`
     
   
  }
  
  
  fetch("http://localhost:3000/toys")
  .then(response => response.json())
  .then(data => data.map(function(item){
      display(item)
  } ))
  //Use a form to create a new card and use POST to persist
  //click like button and count on the DOM.

});


