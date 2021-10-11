const btnCargar = document.getElementById("btnCargar");
  btnCargar.addEventListener("click",()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(json => {
   let info = "";
   for (let i=0;i<json.length;i++){
     info += `<option value = '${json[i].id}'> ${json[i].name} </option>`
   }
   const datos = document.getElementById("users")
   datos.innerHTML=info;
  });
});

const menUser = document.getElementById("users");
  menUser.addEventListener("change",()=>{
  const divposts = document.getElementById("posts") 
  let id = document.getElementById("users").value
  fetch('https://jsonplaceholder.typicode.com/posts?userId='+ id)
  .then((response) => response.json())
  .then((json) => {
    let publi = "";
    for (let i=0;i<json.length;i++){
      publi += `<div>
        <h3>${json[i].title}</h3> 
        <p>${json[i].body}</p>
      </div>`
    }
    divposts.innerHTML = publi;
  });
});

const btnComs = document.getElementById("btnComs");
  btnComs.addEventListener("click",()=> {
    const divcoms = document.getElementById("coms")
    fetch('https://jsonplaceholder.typicode.com/comments/')
    .then((response) => response.json())
    .then((json)=> {
      let comentario ="";
      for (let i=0; i<json.length;i++){
        comentario += `<div> <hr>
          <h1> Coment ${json[i].id} </h1> 
          <h2> ${json[i].name} </h2>
          <p> ${json[i].body} </p>
        </div>`
     } 
      divcoms.innerHTML = comentario;
  });
});
