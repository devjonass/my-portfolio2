function showToastify(message) {
  var toastify = document.createElement("div");
  toastify.className = "toastify";
  toastify.textContent = message;
  document.body.appendChild(toastify);

  setTimeout(function () {
    toastify.classList.add("show");
    setTimeout(function () {
      toastify.classList.remove("show");
      setTimeout(function () {
        toastify.remove();
        // Após a remoção do toastify, envie o formulário
        $("#contact-form")[0].submit();
      }, 300);
    }, 3000);
  }, 100);
}

// Evento para interceptar o envio do formulário
$("#contact-form").submit(function (event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  setTimeout(function () {
    $("#contact-form")[0].submit();
  }, 2000);

  // Exibe o toastify
  showToastify("Mensagem enviada com sucesso!");
});
