function generarReporteFinal() {
  const totalVendido = Number(document.getElementById("totalVendido")?.value || 0);
  const gananciaBruta = Number(document.getElementById("gananciaBruta")?.value || 0);

  const costoTexto = document.getElementById("costo")?.innerText || "0";
  const utilidadVentaTexto = document.getElementById("utilidadVenta")?.innerText || "0%";
 

  const totalCobrado = Number(document.getElementById("totalCobrado")?.innerText || 0);
  const diferenciaCobro = Number(document.getElementById("diferenciaCobro")?.innerText || 0);
  const estadoCobro = document.getElementById("estadoCobro")?.innerText || "Pendiente";

  const totalGastos = Number(document.getElementById("totalGastos")?.innerText || 0);
  const totalSalarios = Number(document.getElementById("totalSalarios")?.innerText || 0);

  const totalUsd = Number(document.getElementById("totalUsdComprados")?.innerText || 0);
  const totalCup = Number(document.getElementById("totalCupUsados")?.innerText || 0);
  const totalDivisaEfectivo = Number(document.getElementById("totalDivisaEfectivo")?.innerText || 0);
  const totalDivisaTarjeta = Number(document.getElementById("totalDivisaTarjeta")?.innerText || 0);

  const costo = Number(costoTexto || 0);
  const gananciaNeta = gananciaBruta - totalGastos - totalSalarios;

  document.getElementById("reporteTotalVendido").innerText = totalVendido.toFixed(2);
  document.getElementById("reporteGananciaBruta").innerText = gananciaBruta.toFixed(2);
  document.getElementById("reporteCosto").innerText = costo.toFixed(2);
  document.getElementById("reporteUtilidadVenta").innerText = utilidadVentaTexto;
 
  document.getElementById("reporteTotalCobrado").innerText = totalCobrado.toFixed(2);
  document.getElementById("reporteDiferenciaCobro").innerText = diferenciaCobro.toFixed(2);
  document.getElementById("reporteEstadoCobro").innerText = estadoCobro;

  document.getElementById("reporteTotalGastos").innerText = totalGastos.toFixed(2);
  document.getElementById("reporteTotalSalarios").innerText = totalSalarios.toFixed(2);
  document.getElementById("reporteGananciaNeta").innerText = gananciaNeta.toFixed(2);

  document.getElementById("reporteTotalUsd").innerText = totalUsd.toFixed(2);
  document.getElementById("reporteTotalCup").innerText = totalCup.toFixed(2);
  document.getElementById("reporteDivisaEfectivo").innerText = totalDivisaEfectivo.toFixed(2);
  document.getElementById("reporteDivisaTarjeta").innerText = totalDivisaTarjeta.toFixed(2);
}