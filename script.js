function log() {

    nomeInput = document.getElementById("nome");
    senhaInput = document.getElementById("senha");

    if (senhaInput.value == "123") {

        document.getElementById("login").style.display="none";
        document.getElementById("href").href="menu.html";

    } else {

        document.getElementById("login").style.display="flex";
        
    }
}



