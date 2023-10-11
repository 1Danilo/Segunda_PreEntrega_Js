alert("Bienvenido a Clothes Commerce");

const categories = [
  {
    name: "Remeras",
    products: [
      "Remera Element Summon",
      "Remera DC Density Zone",
      "Remera Santa Cruz Chest Assorted",
    ],
  },
  {
    name: "Pantalones",
    products: [
      "Jogging Volcom Plain Melange",
      "Jogging Independent Baggy Bauhaus",
      "Pantalón Zoo York Bomber",
    ],
  },
  {
    name: "Zapatillas",
    products: [
      "Zapatillas Vans Skate Old Skool LTH Pro",
      "Zapatillas DC Manteca SS",
    ],
  },
  {
    name: "Accesorios",
    products: ["Reloj", "Billetera", "Gorra", "Cinturón"],
  },
];

const genderOptions = {
  m: {
    label: "Masculino",
    searchFunction: searchM,
  },
  f: {
    label: "Femenino",
    searchFunction: searchF,
  },
};

function genero() {
  let seleccion;
  while (true) {
    seleccion = prompt(
      "Elige tu género \n Masculino(m) \n Femenino (f)"
    );
    if (seleccion === null) {
      return;
    }

    seleccion = seleccion.toLowerCase();
    const genderOption = genderOptions[seleccion];
    if (genderOption) {
      alert(`Sos ${genderOption.label}`);
      genderOption.searchFunction();
      break;
    } else {
      alert("Género no válido, por favor vuelve a ingresar.");
    }
  }
}

function showProductMenu(category) {
  let productMenu = "Selecciona una opción:\n";
  for (let i = 0; i < category.products.length; i++) {
    productMenu += `${i + 1} - ${category.products[i]}\n`;
  }
  productMenu += `${category.products.length + 1} - Salir`;

  return productMenu;
}

function searchCategory(category) {
  let busqueda;
  do {
    busqueda = parseInt(prompt(showProductMenu(category)));

    if (isNaN(busqueda)) {
      alert("Ingrese un valor válido.");
    } else if (busqueda >= 1 && busqueda <= category.products.length) {
      const selectedProduct = category.products[busqueda - 1];
      alert(`Elegiste: ${selectedProduct}`);
    } else if (busqueda === category.products.length + 1) {
      alert("Volviendo al menú principal.");
      break;
    } else {
      alert("Opción NO Válida");
    }
  } while (true);
}

function searchM() {
  let busqueda;
  const productosDisponibles = categories.map(category => category.products);
  alert("Todos los Productos Disponibles");
  alert(productosDisponibles.join(" /  "));

  do {
    busqueda = parseInt(prompt("¿Qué deseas buscar?\n1 - Remeras\n2 - Pantalones\n3 - Zapatillas\n4 - Accesorios\n5 - Salir"));

    if (isNaN(busqueda)) {
      alert("Ingrese un valor válido.");
    } else if (busqueda >= 1 && busqueda <= categories.length) {
      const selectedCategory = categories[busqueda - 1];
      searchCategory(selectedCategory);
    } else if (busqueda === categories.length + 1) {
      alert("Gracias por usar nuestro servicio. ¡Hasta luego!");
      break;
    } else {
      alert("Opción NO Válida");
    }
  } while (true);
}

function searchF() {
  let busquedaF;
  
const productosDisponibles = categories.map(categories => category.products)
  alert("Todos los Productos Disponibles")
  alert(productosDisponibles.join(" /  "))
  do {
    busquedaF = parseInt(prompt("¿Qué deseas buscar?  \n 1 - Remeras \n 2 - Pantalones \n 3 - Salir"));

    if (isNaN(busquedaF)) {
      alert("Ingrese un valor válido.");
    } else if (busquedaF >= 1 && busquedaF <= categories.length) {
      const selectedCategory = categories[busquedaF - 1];
      searchCategory(selectedCategory);
    } else if (busquedaF === categories.length + 1) {
      alert("Gracias por usar nuestro servicio. ¡Hasta luego!");
      break;
    } else {
      alert("Opción NO Válida");
    }
  } while (true);
}

genero();