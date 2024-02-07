document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var data = {
      email: email,
      password: password,
    };

    fetch("http://127.0.0.1:8000/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          window.location.href = "./APS Front/reservas/reservas.html?token=" + data.token;
        } else {
          alert("Credenciais inválidas. Por favor, tente novamente.");
        }
      })
      .catch((error) => console.error("Erro:", error));
  });
