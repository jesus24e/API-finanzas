const token = localStorage.getItem("token");
if (!token) location.href = "login.html";

async function cargarTransacciones() {
  const res = await fetch(`${API_URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return alert("Error al cargar transacciones");

  const data = await res.json();
  console.log(data)
  const container = document.getElementById("listaTransacciones");
  container.innerHTML = "";

  data.forEach(t => {
    let fecha = new Date(t.updatedAt);
    let fechaStr = fecha.toLocaleDateString('es-MX', {timeZone: 'America/Mexico_City'});
    let horaStr = fecha.toLocaleTimeString('es-MX', {timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', hour12: true});
    const div = document.createElement("div");
    div.className = "col-md-4";

    div.innerHTML = `
      <div class="card shadow-sm text-bg-light bg-gradient">
        <div class="card-body">
          <h5 class="card-title text-capitalize text-${t.tipo == "gasto" ? "danger":"success"}">${t.tipo}</h5>
          <p class="card-text"><strong>Monto:</strong> $${formatearConComas(t.monto.toFixed(2))}</p>
          <p class="card-text">
            <strong>
              Descripción:
            </strong>
            ${t.descripcion}
          </p>
          <p class="card-text">
            ${fechaStr} | ${horaStr}
          </p>
          <div class="d-flex justify-content-end gap-2">
            <button class="btn btn-sm btn-outline-primary" onclick="editar('${t._id}')">Editar</button>
            <button class="btn btn-sm btn-outline-danger" onclick="eliminar('${t._id}')">Eliminar</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}

async function obtenerTotal(tipoTransaccion){
  const res = await fetch(`${API_URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return alert("Error al cargar transacciones");

  const data = await res.json();
  const container = document.getElementById(`totalTransacciones${tipoTransaccion}`);

  let total=0
  for(const t of data){
    if(t.tipo==tipoTransaccion.toLowerCase()){
      total+=t.monto
    }
  }

  container.innerHTML = "";
  const div = document.createElement("div");
    
    div.innerHTML = `
          <h5 class="text-${tipoTransaccion === 'Ingreso' ? 'success' : 'danger'} fs-3">${tipoTransaccion}s totales</h5>
          <p class = "fs-5"><strong>Monto:</strong> $${formatearConComas(total.toFixed(2))}</p>
    `;
    container.appendChild(div);
}

async function obtenerRestante() {
    const res = await fetch(`${API_URL}/transactions`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return alert("Error al cargar transacciones");

  const data = await res.json();
  const container = document.getElementById(`restanteTotal`);

  let totalGasto=0;
  let totalIngreso=0;

  for(const t of data){
    if(t.tipo=="gasto"){
      totalGasto+=t.monto
    }
    if(t.tipo=="ingreso"){
      totalIngreso+=t.monto
    }
  }

  let restante = totalIngreso-totalGasto;
  console.log(restante)
  container.innerHTML = "";
  const div = document.createElement("div");
    
    div.innerHTML = `
          <h5 class="text-primary fs-3">Restante total</h5>
          <p class="text-${restante < 0 ? "danger":"succes"} fs-5"><strong>Monto:</strong> $${formatearConComas(restante.toFixed(2))}</p>
    `;
  container.appendChild(div);
}

async function eliminar(id) {
  if (!confirm("¿Estás seguro de eliminar esta transacción?")) return;
  const res = await fetch(`${API_URL}/transactions/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.ok) {
    alert("Transacción eliminada");
    cargarTransacciones();
  } else {
    alert("Error al eliminar");
  }
}

function editar(id) {
  location.href = `editTransaction.html?id=${id}`;
}

function logout() {
  localStorage.removeItem("token");
  location.href = "../index.html";
}

function cargarDatosTransacciones(){
  cargarTransacciones();
  obtenerTotal("Gasto");
  obtenerTotal("Ingreso");
  obtenerRestante();
}

function formatearConComas(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

cargarDatosTransacciones();      