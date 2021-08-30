function hora(){
  var corpo = document.body
  var ag = new Date()
  var hora = ag.getHours()
  var tx = document.getElementById('h1')
  var im = document.getElementById('img')
  tx.innerHTML = `<p>Agora são ${hora} horas.</p>`
  if(hora < 12)
  {
    im.innerHTML = `<img src="imagens/manha-400.png" alt="manha-400">`
    corpo.style.background = '#e6c090'
  }
  else if(hora > 12 && hora < 18)
  {
    im.innerHTML = `<img src="imagens/tarde-400.png" alt="manha-400">`
    corpo.style.background = '#794529'
  }
  else
  {
    im.innerHTML = `<img src="imagens/noite-300.png" alt="manha-400">`
    corpo.style.background = '#0A1728'
  }
}