function log() {

    let nomeInput = document.getElementById("nome");
    let senhaInput = document.getElementById("senha");

    if (senhaInput.value == "123") {

        document.getElementById("login").style.display = "none";
        document.getElementById("href").href = "menu.html";

    } else {

        document.getElementById("login").style.display = "flex";

    }
}

// -------------------Mascarando Inputs dos telefones------------------- //

function tel() {
    const tel = document.getElementById('phoneNumber') // Seletor do campo de telefone

    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

    const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
        tel.value = valor // Insere o(s) valor(es) no campo
    }
}

function tel2() {
    const tel = document.getElementById('emergNumber') // Seletor do campo de telefone

    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)) // Dispara quando digitado no campo
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)) // Dispara quando autocompletado o campo

    const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "")
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2")
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2")
        tel.value = valor // Insere o(s) valor(es) no campo
    }
}

// Obrigado Daniel Nicolleti pela solução :)
// Link:https://pt.stackoverflow.com/questions/51109/como-mascarar-um-input-no-html5
//
// --------------------------------------------------------------------- //