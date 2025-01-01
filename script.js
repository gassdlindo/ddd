function vTurbSmrtvds() {
  // Log para indicar que o processo está começando
  console.log("Iniciando o carregamento do vídeo");

  var videoContainer = document.createElement("div"); // Cria um container para o vídeo
  var videoElement = document.createElement("video");  // Cria o elemento de vídeo

  // Define as propriedades do vídeo
  videoElement.src = "https://vcdn.emalm.com/video/aUFk3/aUFk3-MUX-low.mp4";
  videoElement.controls = true;  // Habilita os controles do player
  videoElement.style.width = "100%"; // Define a largura do vídeo
  videoElement.style.height = "auto"; // Define a altura automática do vídeo

  // Adiciona o vídeo no container
  videoContainer.appendChild(videoElement);

  // Adiciona o container do vídeo no corpo da página
  document.body.appendChild(videoContainer);

  // Log para confirmar que o vídeo foi carregado
  console.log("Vídeo carregado e pronto para reprodução");
}

// Chama a função para executar
vTurbSmrtvds();
