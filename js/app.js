const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

// Crear eventos
cargarEventos();
function cargarEventos() {
	// Agregar curso
	listaCursos.addEventListener('click', agregarCurso);
	// Eliminar curso del carrito
	contenedorCarrito.addEventListener('click', eliminarCurso);
	// Varciar cursos del carrito
	vaciarCarritoBtn.addEventListener('click', () => {
		articulosCarrito = [];
		limpiarHTML();
	});
}

// Agregar curso
function agregarCurso(e) {
	e.preventDefault();
	if (e.target.classList.contains('agregar-carrito')) {
		const cursoSeleccionado = e.target.parentElement.parentElement;
		leerCurso(cursoSeleccionado);
	}
}

// Eliminar curso del carrito
function eliminarCurso(e) {
	if (e.target.classList.contains('borrar-curso')) {
		const cursoID = e.target.getAttribute('data-id');

		// Eliminar del array del carrito
		articulosCarrito = articulosCarrito.filter((curso) => curso.id !== cursoID);
		carritoHTML();
	}
}
// Leer curso seleccionado
function leerCurso(curso) {
	const infoCurso = {
		img: curso.querySelector('img').src,
		titulo: curso.querySelector('h4').textContent,
		precio: curso.querySelector('.precio span').textContent,
		id: curso.querySelector('a').getAttribute('data-id'),
		cantidad: 1
	};

	const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);

	if (existe) {
		// actualizar la cantidad
		const cursos = articulosCarrito.map((curso) => {
			// Con map creamos nuevo array
			if (curso.id === infoCurso.id) {
				curso.cantidad++;
				return curso;
			} else {
				return curso;
			}
		});
		articulosCarrito = [ ...cursos ];
	} else {
		articulosCarrito = [ ...articulosCarrito, infoCurso ];
	}
	carritoHTML();
}

// Mostrar en conetenedor HTML
function carritoHTML() {
	limpiarHTML();

	// Recorrer array
	articulosCarrito.forEach((curso) => {
		const row = document.createElement('tr');
		row.innerHTML = `
		<td>
			<img src="${curso.img}" width="100">
		</td>
		<td> ${curso.titulo} </td>
		<td> ${curso.precio} </td>
		<td> ${curso.cantidad} </td>
		<td>
			<a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
		</td>
		`;

		// Mostrar en HTML
		contenedorCarrito.appendChild(row);
	});
}

// Limpiar HTML
function limpiarHTML() {
	while (contenedorCarrito.firstChild) {
		contenedorCarrito.removeChild(contenedorCarrito.firstChild);
	}
}
