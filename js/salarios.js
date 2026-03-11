let listaSalarios = [];

function agregarSalario() {
  const nombre = document.getElementById("nombreTrabajadora")?.value.trim() || "";
  const dias = Number(document.getElementById("diasTrabajados")?.value || 0);
  const salarioDia = Number(document.getElementById("salarioPorDia")?.value || 0);

  if (!nombre) {
    alert("Introduce el nombre de la trabajadora");
    return;
  }

  if (dias <= 0) {
    alert("Introduce los días trabajados");
    return;
  }

  if (salarioDia <= 0) {
    alert("Introduce el salario por día");
    return;
  }

  const total = dias * salarioDia;

  listaSalarios.push({
    nombre,
    dias,
    salarioDia,
    total
  });

  renderSalarios();
  limpiarFormularioSalarios();
}

function renderSalarios() {
  const tbody = document.getElementById("tablaSalarios");
  tbody.innerHTML = "";

  let totalGeneral = 0;

  listaSalarios.forEach((item) => {
    totalGeneral += item.total;

    const fila = document.createElement("tr");

    fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>${item.dias}</td>
      <td>${item.salarioDia.toFixed(2)}</td>
      <td>${item.total.toFixed(2)}</td>
    `;

    tbody.appendChild(fila);
  });

  document.getElementById("totalSalarios").innerText = totalGeneral.toFixed(2);
}

function limpiarFormularioSalarios() {
  document.getElementById("nombreTrabajadora").value = "";
  document.getElementById("diasTrabajados").value = "";
  document.getElementById("salarioPorDia").value = "";
}