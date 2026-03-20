function trocarTela(e, tipo) {
  const img = document.getElementById("tela");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach(t => t.classList.remove("active"));
  e.target.classList.add("active");

  if (tipo === "dashboard") img.src = "img/Dashboard.jpg";
  if (tipo === "ganhos") img.src = "img/Ganhos.png";
  if (tipo === "gastos") img.src = "img/Gastos.png";
}