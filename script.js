// -------------------Nome e senha temporária de login------------------- //

function log() {

    let senhaInput = document.getElementById("senha");
    //let nameInput = document.getElementById("nome");

    if (senhaInput.value == "123") {

        document.getElementById("login").style.display = "none";
        document.getElementById("href").href = "menu.html";

    } else {

        document.getElementById("login").style.display = "flex";

    }
}

// -------------------Mascarando Inputs dos telefones------------------- //

function tel() {
    const tel = document.getElementById('phoneNumber'); // Seletor do campo de telefone

    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)); // Dispara quando autocompletado o campo

    const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
        tel.value = valor // Insere o(s) valor(es) no campo
    }
}

function tel2() {
    const tel = document.getElementById('emergNumber'); // Seletor do campo de telefone

    tel.addEventListener('keypress', (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo
    tel.addEventListener('change', (e) => mascaraTelefone(e.target.value)); // Dispara quando autocompletado o campo

    const mascaraTelefone = (valor) => {
        valor = valor.replace(/\D/g, "");
        valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
        valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
        tel.value = valor // Insere o(s) valor(es) no campo
    }
}

// Obrigado Daniel Nicolleti pela solução :)
// Link:https://pt.stackoverflow.com/questions/51109/como-mascarar-um-input-no-html5
//
// --------------------------------------------------------------------- //

function cpf() {
   console.log("funcionou");
    var v = i.value;
    
    if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
       i.value = v.substring(0, v.length-1);
       return;
    }
    
    i.setAttribute("maxlength", "14");
    if (v.length == 3 || v.length == 7) i.value += ".";
    if (v.length == 11) i.value += "-";
 
 }