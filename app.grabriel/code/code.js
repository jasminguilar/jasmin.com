// Función para mostrar la notificación
function mostrarNotificacion(mensaje) {
  const noti = document.getElementById("notificacion");
  noti.textContent = mensaje;
  noti.classList.remove("oculto");
  noti.classList.add("visible");

  // Ocultar después de 3 segundos
  setTimeout(() => {
    noti.classList.remove("visible");
    noti.classList.add("oculto");
  }, 3000);
}

// Botones "Comprar"
document.querySelectorAll("button").forEach(boton => {
  if (boton.textContent === "Comprar") {
    boton.addEventListener("click", () => {
      mostrarNotificacion("¡Producto agregado al carrito!");
    });
  }
});