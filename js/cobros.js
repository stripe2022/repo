function calcularCobros() {

  const vendido = Number(
    document.getElementById("totalVendido")?.value.replace(/,/g,"") || 0
  );

  const cash = Number(
    document.getElementById("cash")?.value.replace(/,/g,"") || 0
  );

  const tarjeta = Number(
    document.getElementById("tarjeta")?.value.replace(/,/g,"") || 0
  );

  const cheques = Number(
    document.getElementById("cheques")?.value.replace(/,/g,"") || 0
  );

  const totalCobrado = cash + tarjeta + cheques;
  const diferencia = totalCobrado - vendido;

  document.getElementById("totalCobrado").innerText =
    totalCobrado.toLocaleString("en-US",{minimumFractionDigits:2});

  document.getElementById("diferenciaCobro").innerText =
    diferencia.toLocaleString("en-US",{minimumFractionDigits:2});

  let estado = "No cuadra";

  if (vendido === 0) {
    estado = "Falta total vendido";
  } 
  else if (diferencia === 0) {
    estado = "Cuadra";
  } 
  else if (diferencia > 0) {
    estado = "Sobrante";
  } 
  else {
    estado = "Faltante";
  }

  document.getElementById("estadoCobro").innerText = estado;

}