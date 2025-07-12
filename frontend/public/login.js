async function login() {
  const email = document.getElementById("email").value;
  const clave = document.getElementById("clave").value;

  const res = await fetch(`${API_URL}/users/login`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ email, clave }),
  });

  if (res.ok) {
    const data = await res.json();
    localStorage.setItem("token", data.token);
    location.href = "./transactions.html";
  } else {
    alert("Error en login");
  }
}