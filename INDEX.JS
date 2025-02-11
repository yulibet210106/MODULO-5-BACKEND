let libros = [
    { titulo: 'El Hobbit', autor: 'J.R.R. Tolkien', paginas: 300 },
    { titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', paginas: 400 },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J.K. Rowling', paginas: 350 }
];
// 1. Imprimir el nombre y autor del segundo libro
console.log(`Libro: ${libros[1].titulo}, Autor: ${libros[1].autor}`);

// 2. Actualizar el número de páginas del primer libro a 350
libros[0].paginas = 350;

// 3. Imprimir la información completa del primer libro después de la actualización
console.log(libros[0]);

// 4. Usar map para generar un nuevo array con solo titulo y autor
let librosReducidos = libros.map(({ titulo, autor }) => ({ titulo, autor }));

console.log(librosReducidos);
//--------------------------------------------
//Punto 2: Cálculo de Estadísticas Básicas: Dado el siguiente array de estudaintes y utilizando un bucle for:
const estudiantes1 = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let sumaEdades = 0;

// Recorremos el array y sumamos las edades
//.length se usa para obtener la cantidad de elementos en un array, la cantidad de caracteres en un string, o la longitud de otros objetos similares.

for (let i = 0; i < estudiantes1.length; i++) {
    sumaEdades += estudiantes1[i].edad;
}

// Calculamos el promedio de edad de todos los estudiantes.
let promedioEdad = sumaEdades / estudiantes1.length;

// Imprimimos los resultados
console.log(`Suma de edades: ${sumaEdades}`);
console.log(`Promedio de edad: ${promedioEdad.toFixed(2)}`);
//numero.toFixed(n);
//✅ numero → Es un número cualquiera.
//✅ n → Cantidad de decimales que quieres mostrar.
//-----------------------------------
//Punto 3: Búsqueda y Filtrado de Datos: Dado el siguiente array de productos:
let productos = [
    { nombre: 'Camisa', categoria: 'Ropa', precio: 20 },
    { nombre: 'Computadora', categoria: 'Electrónica', precio: 800 },
    { nombre: 'Zapatos', categoria: 'Ropa', precio: 50 },
    { nombre: 'Teléfono', categoria: 'Electrónica', precio: 300 }
];

//1.Filtrar productos de la categoria ropa
let ropa = productos.filter(producto => producto.categoria === 'Ropa');
console.log("Productos de la categoría 'Ropa':", ropa);

//2.filtrar productos con precio mayor a 30 y guardalos en preciosMayores
let preciosMayores = productos.filter(producto => producto.precio > 30);
console.log("Productos con precio mayor a 30:", preciosMayores);

//RETO: Encontrar el estudiante con el mayor promedio
const estudiantes = [
    { nombre: "Pedro", edad: 29, promedio: 7.9 },
    { nombre: "Ana", edad: 33, promedio: 8.9 },
    { nombre: "Pablo", edad: 32, promedio: 9.5 },
    { nombre: "Juan", edad: 25, promedio: 6.0 },
    { nombre: "Maria", edad: 28, promedio: 7.3 },
    { nombre: "Andres", edad: 45, promedio: 8.7 },
];

let mejorEstudiante = estudiantes[0]; 

// Suponemos que el primero es el mejor

for (let i = 1; i < estudiantes.length; i++) {
    if (estudiantes[i].promedio > mejorEstudiante.promedio) {
        mejorEstudiante = estudiantes[i];
    }
}

console.log("El estudiante con el mayor promedio es:", mejorEstudiante);
