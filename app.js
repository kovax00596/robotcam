if (username === USER && password === PASS) {
    alert("Ingresaste a la app del robot!");
    const audio = new Audio('https://www.soundjay.com/button/beep-07.wav');
    audio.play();
  
    // Abrir nueva pestaña con la interfaz del robot
    window.open('inicio.html', '_blank');
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
  