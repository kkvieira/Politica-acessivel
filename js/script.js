(function () {
    var form = document.getElementById("form-contato");
    if (!form) { return; }
    var retorno = document.getElementById("retorno");

    form.addEventListener("submit", function (evento) {
        evento.preventDefault();
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }
        var nome = form.elements["nome"].value.trim().split(" ")[0];
        retorno.textContent = "Obrigado, " + nome + "! Sua mensagem foi registrada. Em breve a equipe entrará em contato.";
        retorno.hidden = false;
        retorno.focus();
        form.reset();
    });
})();
