function onClick (event) {
    event.preventDefault();
    
    const mensaje = {
      name: document.getElementById('comercio').value,
      email: document.getElementById('titular').value,
      message: document.getElementById('celular').value
    }
    console.log(mensaje);
  
  
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(mensaje),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => { 
          console.log(json);
          Swal.fire(
              'Enviado',
              'Gracias por tu comentario', 
              'success'
          );
          cleanForm();
          /* redirectUrl(); */
      })
      .catch((err) => console.log(err));
  
  }

  function cleanForm() {
      let formulario = document.getElementById('formulario');    
      formulario.reset();    
  }
  function redirectUrl(){
      window.location.href = "https://google.com";    
  }

  let boton = document.getElementById("enviar");
    boton.addEventListener("click", onClick);
  
    
    //recibir el tiempo del clima
    let temp;
    let nombre;
    let viento;
    let nacionalidad;
  
async function getWeather(){
   await fetch("https://api.openweathermap.org/data/2.5/weather?lat=-24.16854505399388&lon=-65.32021464441563&appid=a82606b099222f528c9b4d414865f352", {
      method:"GET"
    })
    .then((response) => response.json())
    .then((json) => {
      temp = json.main.temp-273.15;
      nombre = json.name;
      viento = json.wind.speed;
      nacionalidad = json.sys.country
      console.log(json);
    })
    .catch((error) => console.log(error + "Algo paso aqui...ERROR!"));

    tarjetaPadre.innerHTML = `<h4><b>${nombre} ${nacionalidad}</b></h4>
    <p>Temperatura: ${temp.toFixed(2)} °C</p>
    <p>Viento: ${viento} Km/h</p>`
    console.log(tarjetaPadre);
  }
  getWeather();
  
const tarjetaPadre = document.querySelector(".tarjeta-central");


