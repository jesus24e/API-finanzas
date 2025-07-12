async function register() {
  const email = document.getElementById("email").value;
  const nombre = document.getElementById("nombre").value;
  const clave = document.getElementById("clave").value;

  const res = await fetch(`${API_URL}/users/register`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, nombre, clave }),
  });

  if (res.ok) {
    alert("Usuario registrado! Por favor inicia sesión.");
    location.href = "login.html";
  } else {
    alert("Error al registrar");
  }
}