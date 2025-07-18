const token = localStorage.getItem("token");
if (!token) location.href = "login.html";

async function cargarTransacciones(seccion) {
  
  const res = await fetch(`${API_URL}/transactions`+`${seccion!=null?`?seccion=${seccion}`:``}`, {
    method:"GET",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return alert("Error al cargar transacciones");

  const data = await res.json();
  const containerTransacciones = document.getElementById("listaTransacciones");
  containerTransacciones.innerHTML = "";
  let montoIngreso=0;
  let montoGasto=0;

  console.log(data)

  data.forEach(t => {
    t.tipo=="ingreso" ? montoIngreso+=t.monto : montoGasto+=t.monto;//aprovechando el bucle se obtienen los ingresos y gastos totales

    let fecha = new Date(t.fecha);
    let fechaStr = fecha.toLocaleDateString('es-MX', {timeZone: 'America/Mexico_City'});
    let horaStr = fecha.toLocaleTimeString('es-MX', {timeZone: 'America/Mexico_City', hour: '2-digit', minute: '2-digit', hour12: true});
    const divTransacciones = document.createElement("div");
    
    //se crean las trajetas para cada transaccion

    divTransacciones.className = "col-md-4";

    divTransacciones.innerHTML = `
      <div class="card shadow-sm text-bg-light bg-gradient">
        <div class="card-body">
          <h5 class="card-title text-capitalize text-${t.tipo == "gasto" ? "danger":"success"} text-end">${t.tipo}</h5>
          <p class="card-text">
            <strong>
              Descripción:
            </strong>
            ${t.descripcion}
          </p>
          <p class="card-text"><strong>Monto:</strong> $${formatearConComas(t.monto.toFixed(2))}</p>
          <p class="card-text text-secondary">
            ${fechaStr} | ${horaStr}
          </p>
          <div class="d-flex justify-content-end gap-2">
            <button class="btn btn-md btn-outline-danger" onclick="guardarIdTransaccion('${t._id}')" data-bs-toggle="modal" data-bs-target="#eliminarTransaccionModal">
              <i class="bi bi-trash"></i>
            </button>
            <button class="btn btn-md btn-outline-primary" onclick="editar('${t._id}')">
              <i class="bi bi-pencil-square"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    containerTransacciones.appendChild(divTransacciones);
  });

  //se crean los apartados para los montos y gastos totales

  ["Ingreso","Gasto"].forEach(trs => {
    const containerTipo = document.getElementById(`totalTransacciones${trs}`);
    let total = trs === 'Ingreso' ? montoIngreso : montoGasto
    containerTipo.innerHTML = "";
    const divTipo = document.createElement("div");
      divTipo.innerHTML = `
            <h5 class="text-${trs === 'Ingreso' ? 'success' : 'danger'} fs-3 ">${trs}s totales</h5>
            <p class = "fs-5"><strong>Monto:</strong> $${formatearConComas(total.toFixed(2))}</p>
      `;
    containerTipo.appendChild(divTipo)
  });
  
  //se crea el apartado del restante 

  let restante = montoIngreso-montoGasto;
  const containerRestante = document.getElementById(`restanteTotal`);
  containerRestante.innerHTML = "";
  const divRestante = document.createElement("div");
    
    divRestante.innerHTML = `
          <h5 class="text-primary fs-3">Restante total</h5>
          <p class="text-${restante < 0 ? "danger":"succes"} fs-5"><strong>Monto:</strong> $${formatearConComas(restante.toFixed(2))}</p>
    `;
  containerRestante.appendChild(divRestante);
}

let idTransaccion = null;

function guardarIdTransaccion(id){
  idTransaccion=id;
}

async function eliminarTransaccionConfirmada() {
  if (idTransaccion !== null) {
    await eliminar(idTransaccion);
    transaccionAEliminar = null;
    const modal = bootstrap.Modal.getInstance(document.getElementById('eliminarTransaccionModal'));
    modal.hide();
  }
}

async function eliminar(id) {
  
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

function formatearConComas(numero) {
  return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

cargarTransacciones();