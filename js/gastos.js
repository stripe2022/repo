let listaGastos = [];

function agregarGasto() {
  const concepto = document.getElementById("conceptoGasto")?.value.trim() || "";
  const montoTexto = document.getElementById("montoGasto")?.value.replace(/,/g, "") || "0";
  const descripcion = document.getElementById("descripcionGasto")?.value.trim() || "";

  const monto = Number(montoTexto);

  if (!concepto) {
    alert("Introduce el concepto del gasto");
    return;
  }

  if (monto <= 0) {
    alert("Introduce un monto válido");
    return;
  }

  listaGastos.push({
    concepto,
    monto,
    descripcion
  });

  renderGastos();
  limpiarFormularioGastos();
}

function renderGastos() {
  const tbody = document.getElementById("tablaGastos");
  tbody.innerHTML = "";

  let total = 0;

  listaGastos.forEach((item, index) => {
    total += item.monto;

    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${item.concepto}</td>
      <td>${item.monto.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
      <td>${item.descripcion || "—"}</td>
      <td>
        <button type="button" onclick="eliminarGasto(${index})">Eliminar</button>
      </td>
    `;

    tbody.appendChild(fila);
  });

  document.getElementById("totalGastos").innerText =
    total.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function eliminarGasto(index) {
  listaGastos.splice(index, 1);
  renderGastos();
}

function limpiarFormularioGastos() {
  document.getElementById("conceptoGasto").value = "";
  document.getElementById("montoGasto").value = "";
  document.getElementById("descripcionGasto").value = "";
}