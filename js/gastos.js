function calcularGastos() {
  const onat = Number(document.getElementById("gastoOnat")?.value || 0);
  const extras = Number(document.getElementById("gastoExtras")?.value || 0);
  const transporte = Number(document.getElementById("gastoTransporte")?.value || 0);
  const otros = Number(document.getElementById("gastoOtros")?.value || 0);

  const totalGastos = onat + extras + transporte + otros;

  document.getElementById("totalGastos").innerText = totalGastos.toFixed(2);
}