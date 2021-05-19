const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

// Crear eventos
cargarEventos();
function cargarEventos() {
	listaCursos.addEventListener('click', cargarEvento);
}

// Agregar curso
function cargarEvento(e) {
	if (e.target.classList.contains('agregar-carrito')) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerCurso(cursoSeleccionado);
	}
}

// Leer curso seleccionado
function leerCurso(curso) {
	console.log(curso);
}
