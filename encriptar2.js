//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".btn__encriptar");
const txtEncriptar = document.querySelector(".encriptar__box");
const aviso = document.querySelector(".texto__aviso");
const respuesta = document.querySelector(".desencriptar__tarjeta");
const contenido = document.querySelector(".desencriptar__contenedor");
const btnCopiar = document.querySelector(".btn__copiar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

//-------Funciones Comunes-------//
const mostrarAviso = (mensaje) => {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;

    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
};

const validarTexto = (texto) => {
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    if (texto === "") {
        mostrarAviso("El campo de texto no debe estar vacío");
        return false;
    } else if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
        return false;
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
        return false;
    }
    return true;
};

//-------Funciones de Encriptación y Desencriptación-------//
const encriptarTexto = (texto) => {
    return texto.replace(/a/g, "ai")
                .replace(/b/g, "bat")
                .replace(/c/g, "cat")
                .replace(/d/g, "dat")
                .replace(/e/g, "enter")
                .replace(/f/g, "fet")
                .replace(/g/g, "gat")
                .replace(/h/g, "hat")
                .replace(/i/g, "imes")
                .replace(/j/g, "jat")
                .replace(/k/g, "kat")
                .replace(/l/g, "lat")
                .replace(/m/g, "mat")
                .replace(/n/g, "nat")
                .replace(/o/g, "ober")
                .replace(/p/g, "pat")
                .replace(/q/g, "qat")
                .replace(/r/g, "rat")
                .replace(/s/g, "sat")
                .replace(/t/g, "tat")
                .replace(/u/g, "ufat")
                .replace(/v/g, "vat")
                .replace(/w/g, "wat")
                .replace(/x/g, "xat")
                .replace(/y/g, "yat")
                .replace(/z/g, "zat");
};

const desencriptarTexto = (texto) => {
    return texto.replace(/ai/g, "a")
                .replace(/bat/g, "b")
                .replace(/cat/g, "c")
                .replace(/dat/g, "d")
                .replace(/enter/g, "e")
                .replace(/fet/g, "f")
                .replace(/gat/g, "g")
                .replace(/hat/g, "h")
                .replace(/imes/g, "i")
                .replace(/jat/g, "j")
                .replace(/kat/g, "k")
                .replace(/lat/g, "l")
                .replace(/mat/g, "m")
                .replace(/nat/g, "n")
                .replace(/ober/g, "o")
                .replace(/pat/g, "p")
                .replace(/qat/g, "q")
                .replace(/rat/g, "r")
                .replace(/sat/g, "s")
                .replace(/tat/g, "t")
                .replace(/ufat/g, "u")
                .replace(/vat/g, "v")
                .replace(/wat/g, "w")
                .replace(/xat/g, "x")
                .replace(/yat/g, "y")
                .replace(/zat/g, "z");
};

//-------Boton de Encriptar-------//
btnEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    if (validarTexto(texto)) {
        texto = encriptarTexto(texto);
        respuesta.textContent = texto;
        btnCopiar.style.visibility = "visible";
        contenido.style.display = "none";
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    let texto = txtEncriptar.value;

    if (validarTexto(texto)) {
        texto = desencriptarTexto(texto);
        respuesta.textContent = texto;
        btnCopiar.style.visibility = "visible";
        contenido.style.display = "none";
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", (e) => {
    e.preventDefault();
    let textoACopiar = respuesta.textContent;
    navigator.clipboard.writeText(textoACopiar)
        .then(() => {
            mostrarAviso("Texto copiado al portapapeles");
        })
        .catch(() => {
            mostrarAviso("Error al copiar el texto");
        });
});
