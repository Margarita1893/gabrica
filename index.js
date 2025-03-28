document.getElementById("clientForm").addEventListener("submit", function(event) {
    let nombreCliente = document.getElementById("nombreCliente");
    let rtc = document.getElementById("rtc");
    let invalidChars = /[#¿?,]/;

    // Validación del Nombre del Cliente (solo letras, acentos y ñ)
    let nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/;
    if (!nombreRegex.test(nombreCliente.value)) {
        alert("El nombre solo debe contener letras, espacios y caracteres acentuados.");
        event.preventDefault();
        return;
    }

    // Validación del campo RTC (solo números)
    let rtcRegex = /^[0-9]+$/;
    if (!rtcRegex.test(rtc.value)) {
        alert("El RTC solo debe contener números.");
        event.preventDefault();
        return;
    }

    // Validación de caracteres inválidos en todos los campos
    let inputs = document.querySelectorAll("input, select");
    for (let input of inputs) {
        if (invalidChars.test(input.value)) {
            alert("No se permiten caracteres inválidos: # ¿ ? ,");
            event.preventDefault();
            return;
        }
    }
});

