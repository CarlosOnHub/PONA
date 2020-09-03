'use strict'
var usuarios = [];
   getUsuarios()
  .then(data => data.json())
  .then(users => {
    listarUsuario(users);
    return getBret();
})
  .then(data => data.json())
  .then(bret => {
    mostrarJanet(bret);
    return getInfo();
  })
  .then(data => { 
      console.log(data);
  })

  function getUsuarios(){
    return fetch("https://jsonplaceholder.typicode.com/users");
  }

  function getBret(){
    return fetch("https://jsonplaceholder.typicode.com/users/1");
  }


  function listarUsuario(usuarios){
    usuarios.map((usuario, i)=>{
        var elementoUsuario=document.createElement("li");
        elementoUsuario.innerHTML=`${i}: <b>Nombre: </b>${usuario.name}, <b>Nombre de usuario: </b>${usuario.username}`;
        document.querySelector("#usuarios").append(elementoUsuario);
    });
  }

  function mostrarJanet(usuario){
        var elementoUsuario=document.createElement("h3");
        elementoUsuario.innerHTML=`<b>Nombre: </b>${usuario.name}, <b>Nombre de usuario: </b>${usuario.username}`;
        document.querySelector("#bret").append(elementoUsuario);
  }

  function getInfo(){
    var profesor = {
      nombre: 'Pona',
      apellidos: 'Nab',
      url: 'https://www.static-contents.youth4work.com/y4w/Images/Users/20190716221303.png?v=20190716221303'
    }
    return new Promise((resolve, reject) => {
      var profeS = JSON.stringify(profesor);
      if(typeof profesor != 'string') return reject('Error');
      return resolve(profeS);
    });
  }

 /* function getInfo(){
      var profesor = {
        nombre: 'Pona',
        apellidos: 'Nab',
        url: 'https://www.static-contents.youth4work.com/y4w/Images/Users/20190716221303.png?v=20190716221303'
      };
       return new Promise((resolve, reject) => {
       var profesor_string = "";
       setTimeout(function(){
        profesor_string = JSON.stringify(profesor);
        if(typeof profesor_string != 'string' || profesor_string == '')
       return reject('error');
       return resolve(profesor_string);
       },2500);
      });
    } */