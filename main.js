const campoNombre = document.querySelector('.contacto__campo[type="text"]');
const emailCampo = document.getElementById("emailcampo");
const msnError = document.querySelector('.msnVerificar');
const mensajeCampo = document.querySelector('.contacto__campo--textarea');
const msnError2 = document.querySelector('.msnVacio');
let timeoutId1, timeoutId2;
const botonEnviar = document.querySelector('.contacto__boton');

msnError.textContent = "";
msnError2.textContent = "";

// Validar campo de nombre
campoNombre.addEventListener('input', () => {
    clearTimeout(timeoutId1);
    const valorNombre = campoNombre.value.trim();
    
    if (valorNombre === "") {
        msnError.textContent = "Ingrese su nombre";
        msnError.style.display = 'block';
    } else if (valorNombre.length > 30) {
        msnError.textContent = "Máximo 30 caracteres";
        msnError.style.display = 'block';
    } else {
        msnError.textContent = "";
    }
    
    timeoutId1 = setTimeout(() => {
        msnError.style.display = 'none';
    }, 3000);
});

// Validar campo de mensaje
mensajeCampo.addEventListener('input', function () {
    clearTimeout(timeoutId2);
    const mensajeValor = mensajeCampo.value.trim();

    if (mensajeValor === '') {
        msnError2.textContent = 'El mensaje no puede estar vacío';
        msnError2.style.display = 'block';
    } else {
        msnError2.textContent = '';
    }

    timeoutId2 = setTimeout(() => {
        msnError2.style.display = 'none';
    }, 3000);
});

// Validar campo de email
emailCampo.addEventListener('input', () => {
    const valorEmail = emailCampo.value.trim();
    clearTimeout(timeoutId1);

    if (valorEmail === "") {
        msnError.textContent = "Ingrese su correo electrónico";
        msnError.style.display = 'block';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail)) {
        msnError.textContent = "Ingrese un correo electrónico válido";
        msnError.style.display = 'block';
    } else {
        msnError.textContent = "";
        msnError.style.display = 'none';
    }

    timeoutId1 = setTimeout(() => {
        msnError.style.display = 'none';
    }, 3000);
});

// Al hacer clic en el botón "Enviar"
botonEnviar.addEventListener('click', function (event) {
    event.preventDefault();

    const valorNombre = campoNombre.value.trim();
    const valorMensaje = mensajeCampo.value.trim();
    const valorEmail = emailCampo.value.trim();

    if (valorNombre !== "" && valorNombre.length <= 30 && valorMensaje !== "" && valorEmail !== "") {
        alert("Mensaje enviado!\n (Es broma ˶ᵔ ᵕ ᵔ˶  No es funcional)");
    }
});
