let listaDivisas = [];

function agregarDivisa() {
  const fecha = document.getElementById("fechaDivisa")?.value || "";
  const usd = Number(document.getElementById("usdDivisa")?.value || 0);
  const tasa = Number(document.getElementById("tasaDivisa")?.value || 0);
  const metodo = document.getElementById("metodoDivisa")?.value || "efectivo";

  if (!fecha) {
    alert("Introduce la fecha");
    return;
  }

  if (usd <= 0) {
    alert("Introduce la cantidad de USD");
    return;
  }

  if (tasa <= 0) {
    alert("Introduce la tasa");
    return;
  }

  const subtotal = usd * tasa;

  listaDivisas.push({
    fecha,
    usd,
    tasa,
    subtotal,
    metodo
  });

  renderDivisas();
  limpiarFormularioDivisas();
}

function renderDivisas() {
  const tbody = document.getElementById("tablaDivisas");
  tbody.innerHTML = "";

  let totalUsd = 0;
  let totalCup = 0;
  let totalEfectivo = 0;
  let totalTarjeta = 0;

  listaDivisas.forEach((item) => {
    totalUsd += item.usd;
    totalCup += item.subtotal;

    if (item.metodo === "efectivo") {
      totalEfectivo += item.subtotal;
    }

    if (item.metodo === "tarjeta") {
      totalTarjeta += item.subtotal;
    }

    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${item.fecha}</td>
      <td>${item.usd.toFixed(2)}</td>
      <td>${item.tasa.toFixed(2)}</td>
      <td>${item.subtotal.toFixed(2)}</td>
      <td>${item.metodo}</td>
    `;

    tbody.appendChild(fila);
  });

  document.getElementById("totalUsdComprados").innerText = totalUsd.toFixed(2);
  document.getElementById("totalCupUsados").innerText = totalCup.toFixed(2);
  document.getElementById("totalDivisaEfectivo").innerText = totalEfectivo.toFixed(2);
  document.getElementById("totalDivisaTarjeta").innerText = totalTarjeta.toFixed(2);
}

function limpiarFormularioDivisas() {
  document.getElementById("fechaDivisa").value = "";
  document.getElementById("usdDivisa").value = "";
  document.getElementById("tasaDivisa").value = "";
  document.getElementById("metodoDivisa").value = "efectivo";
}