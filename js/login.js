// ===== CONFIG =====
const USER = "martin";
const PASS = "1234";

// ===== LOGIN =====
function login() {
  const user = document.getElementById('usuario').value.trim();
  const pass = document.getElementById('password').value.trim();

  if (!validarCampos(user, pass)) return;

  if (credencialesCorrectas(user, pass)) {
    iniciarSesion();
  } else {
    mostrarError();
  }
}

// ===== VALIDACIONES =====
function validarCampos(user, pass) {
  if (!user || !pass) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos incompletos',
      text: 'Ingresá usuario y contraseña'
    });
    return false;
  }
  return true;
}

function credencialesCorrectas(user, pass) {
  return user === USER && pass === PASS;
}

// ===== ACCIONES =====
function iniciarSesion() {
  Swal.fire({
    icon: 'success',
    title: 'Bienvenido',
    text: 'Ingreso correcto',
    timer: 1200,
    showConfirmButton: false,
    background: "#e6ffed", 
    color: "#1b5e20",
    iconColor: "#2e7d32"
  });

  localStorage.setItem('login', 'true');

  const loginDiv = document.getElementById('login');
  const homeDiv = document.getElementById('home');

  loginDiv.style.opacity = '0';

  setTimeout(() => {
    loginDiv.style.display = 'none';
    homeDiv.style.display = 'block';
    document.body.classList.add('app-mode');
  }, 300);

  limpiarInputs();
}

function mostrarError() {
  Swal.fire({
    icon: 'error',
    title: 'Error',
    text: 'Usuario o contraseña incorrectos'
  });
}

function limpiarInputs() {
  document.getElementById('password').value = '';
}

// ===== LOGOUT =====
function logout() {
  localStorage.removeItem('login');

  document.getElementById('home').style.display = 'none';
  document.getElementById('login').style.display = 'flex';

  document.body.classList.remove('app-mode');

  document.getElementById('usuario').value = '';
  document.getElementById('password').value = '';
}

// ===== AUTO LOGIN =====
document.addEventListener("DOMContentLoaded", () => {

  if (localStorage.getItem('login') === 'true') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('home').style.display = 'block';
    document.body.classList.add('app-mode');
  }

  const btnCerrar = document.getElementById("btn-cerrar");
  if (btnCerrar) {
    btnCerrar.addEventListener("click", logout);
  }

});