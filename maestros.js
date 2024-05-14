document.addEventListener("DOMContentLoaded", function() {
  var menuItems = document.querySelectorAll("#menu li a");

  menuItems.forEach(function(item) {
    item.addEventListener("mouseover", function() {
      this.style.backgroundColor = "red";
    });

    item.addEventListener("mouseout", function() {
      this.style.backgroundColor = "transparent";
    });
  });
    
});

document.getElementById('openMenu').addEventListener('click', function() {
  document.getElementById('sideMenu').style.right = '0';
});

document.getElementById('sideMenu').addEventListener('click', function() {
  document.getElementById('sideMenu').style.right = '-250px';
});


// Aquí puedes agregar más maestros si es necesario
const teachers = [
    {
        id: 'teacher1',
        name: 'Mtra. Carmelina Navarro',
        description: 'Es una de las maestras mas importantes de la carrera de programacion'
    },
    {
        id: 'teacher2',
        name: 'Jorge Luis',
        description: 'Es el laboratorista de la carrera, se dedica a darle cuidado a las maquinas'
    },
    {
        id: 'teacher3',
        name: 'Mtro. Enrique Suchiapa',
        description: 'Es uno de las maestros mas importantes de la carrera de programacion'
    },
    {
        id: 'teacher4',
        name: 'I.S.C. Abigail Villa Rodríguez',
        description: 'Es una nueva maestra recien ingresada al plantel 20 Uruapan CECyTEM'
    },
    
];

// Función para agregar la información de los maestros a la página
function populateTeachers() {
    teachers.forEach(teacher => {
        const teacherElement = document.getElementById(teacher.id);
        teacherElement.querySelector('h2').textContent = teacher.name;
        teacherElement.querySelector('p').textContent = teacher.description;
    });
}


// Llama a la función al cargar la página
populateTeachers();

document.addEventListener("DOMContentLoaded", function(){
    var footer = document.getElementById('myFooter');
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes = fecha.getMonth() + 1; // Los meses empiezan en 0, así que sumamos 1
    var año = fecha.getFullYear();
    footer.innerHTML += '<p>Fecha: ' + dia + '/' + mes + '/' + año + '</p>';
});



document.addEventListener("DOMContentLoaded", function() {
  var index = 0;
  var slides = document.querySelectorAll("#logos img");
  var totalSlides = slides.length;

  function nextSlide() {
    slides[index].style.display = "none";
    index = (index + 1) % totalSlides;
    slides[index].style.display = "block";
  }

  // Cambia a la siguiente imagen cada 3 segundos (ajusta el tiempo según prefieras)
  setInterval(nextSlide, 1000);
});


