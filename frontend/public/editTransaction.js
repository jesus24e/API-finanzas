const token = localStorage.getItem("token");

if (!token) location.href = "login.html";

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function cargarDatos() {
  const res = await fetch(`${API_URL}/transactions/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  if (!res.ok) return alert("Error al obtener transacción");

  const data = await res.json();
  const fechaLocal = await formatearFecha(data.fecha)
  document.getElementById("tipo").value = data.tipo;
  document.getElementById("monto").value = data.monto;
  document.getElementById("descripcion").value = data.descripcion;
  document.getElementById("fechaHora").value = fechaLocal;
}

async function actualizar(event) {
  event.preventDefault();
  const tipo = document.getElementById("tipo").value;
  const monto = Number(document.getElementById("monto").value);
  const descripcion = document.getElementById("descripcion").value;
  const fecha = document.getElementById("fechaHora").value;

  const res = await fetch(`${API_URL}/transactions/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ tipo, monto, descripcion, fecha})
  });

  if (res.ok) {
    alert("Transacción actualizada");
    location.href = "transactions.html";
  } else {
    alert("Error al actualizar");
  }
}

cargarDatos();