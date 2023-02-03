const sobre = document.querySelector("#sobre");
const portifolio = document.querySelector("#portifolio");
const mensagem = document.querySelector("#mensagem");
const refresh = document.querySelector("#logo");
const play = document.querySelector("#play");

var sobre2 = document.querySelector("mensagem");
mensagem.style.display = "none";

sobre.addEventListener("click", function () {
  if (mensagem.style.display === "none") {
    mensagem.style.display = "block";
  } else {
    mensagem.style.display = "none";
  }
});

var portifolioMensagem = document.querySelector("mensagemPorti");
mensagemPorti.style.display = "none";

portifolio.addEventListener("click", function () {
  if (mensagemPorti.style.display === "none") {
    mensagemPorti.style.display = "block";
  } else {
    mensagemPorti.style.display = "none";
  }
});

function reload() {
  location.reload(true);
}

refresh.addEventListener("click", reload);

var tocar = document.querySelector("video");
video.style.display = "none";

play.addEventListener("click", function () {
  if (video.style.display === "none") {
    video.style.display = "block";
  } else {
    video.style.display = "none";
  }
});

document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("video").style.display = "none";
});
