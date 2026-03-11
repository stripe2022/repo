function formatearNumero(input) {
  let valor = input.value.replace(/,/g, "").replace(/[^\d.]/g, "");

  if (valor === "") {
    input.value = "";
    return;
  }

  const partes = valor.split(".");
  if (partes.length > 2) {
    valor = partes[0] + "." + partes.slice(1).join("");
  }

  const numero = Number(valor);
  if (isNaN(numero)) return;

  input.value = numero.toLocaleString("en-US", {
    maximumFractionDigits: 2
  });
}

function calcularVentas() {
  const vendidoTexto = document.getElementById("totalVendido").value.replace(/,/g, "");
  const gananciaTexto = document.getElementById("gananciaBruta").value.replace(/,/g, "");

  const vendido = Number(vendidoTexto || 0);
  const ganancia = Number(gananciaTexto || 0);

  const costo = vendido - ganancia;
  const utilidadVenta = vendido > 0 ? (ganancia / vendido) * 100 : 0;

  document.getElementById("costo").innerText =
    costo.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

  document.getElementById("utilidadVenta").innerText =
    utilidadVenta.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }) + "%";
}