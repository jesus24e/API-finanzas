const token = localStorage.getItem("token");
if (!token) location.href = "login.html";

async function guardar(event) {
  event.preventDefault();
  const tipo = document.getElementById("tipo").value;
  const monto = Number(document.getElementById("monto").value);
  const descripcion = document.getElementById("descripcion").value;
  const fecha = new Date(document.getElementById("fechaHora").value);
  console.log(fecha)
  const res = await fetch(`${API_URL}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ tipo, monto, descripcion, fecha})
    
  });
  
  if (res.ok) {
    alert("Transacción guardada");
    location.href = "transactions.html";
  } else {
    alert("Error al guardar transacción");
  }
}

function obtenerFechaActual() {
 document.getElementById("fechaHora").value = formatearFecha(Date.now());
}

obtenerFechaActual()