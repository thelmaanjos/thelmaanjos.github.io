const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      status.innerHTML = "Oba! Mensagem enviada com sucesso";
      status.style.backgroundColor = "#22c014";
      status.style.color = "#FFFFFF";
      form.reset();
    })
    .catch((error) => {
      status.innerHTML = "Oops! Erro. Por favor, reenvie a mensagem";
      document.getElementById("form-status").style.backgroundColor = "#cf0022";
      document.getElementById("form-status").style.color = "#FFFFFF";
    });
}
form.addEventListener("submit", handleSubmit);
