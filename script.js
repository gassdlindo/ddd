function vTurbChangePlayer() {
  // Substituindo os parâmetros do vídeo com o link fornecido
  vTurbPlayer = {
    id: "newPlayerId", // Substitua com um ID único para o player
    org_id: "yourOrgId", // Substitua pelo seu ID de organização
    name: "Nome do seu vídeo",
    version: "v1", // Versão do player
    video_id: "newVideoId", // Substitua com o ID do seu vídeo
    options: {
      autoplay: "smartplay",
      theme: "#04A7F6",
      foreground_color: "#FFFFFF",
      video: {
        width: 720,
        height: 900
      },
      cdn: "cdn.seusite.com", // CDN do seu vídeo (se aplicável)
      thumbnail_key: "path-to-your-thumbnail.jpg", // Caminho da miniatura do vídeo
      conversion_params: [],
      displays: {
        big_play: true,
        play_pause: true,
        forward: true,
        volume: true,
        seekbar: true,
        fullscreen: true
      }
    },
    video_url: "https://vcdn.emalm.com/video/aUFk3/aUFk3-MUX-low.mp4" // Link do seu vídeo
  };

  var e = document.getElementById(`vid_${vTurbPlayer.id}`);
  if (!e) {
    var t = document.getElementById(`scr_${vTurbSrcId}`);
    var r = document.createElement("DIV");
    r.id = `vid_${vTurbPlayer.id}`;
    t.parentElement.insertBefore(r, t);
  }
}

function vTurbCreatSmartvdsElements() {
  var e, t, r;
  document.getElementById(`vid_${vTurbPlayer.id}`) || (e = document, t = e.getElementById(`scr_${vTurbSrcId}`),
    (r = e.createElement("DIV")).id = `vid_${vTurbPlayer.id}`, r.style.position = "relative", r.style.width = "100%", 
    r.style.padding = `${vTurbPlayer.video_aspect_ratio}% 0 0`, t.parentElement.insertBefore(r, t));
  
  var thumbnail = document.getElementById(`thumb_${vTurbPlayer.id}`);
  if (!thumbnail) {
    var img = document.createElement("IMG");
    img.id = `thumb_${vTurbPlayer.id}`;
    img.src = `https://link-da-sua-miniatura.com`; // Substitua com o link da sua miniatura
    img.style.position = "absolute";
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";
    r.appendChild(img);
  }
}

function vTurbLoadSmrtvds() {
  var e = window, t = document;
  e.smrtvds || (r = e.smrtvds = function() {
    r.callMethod ? r.callMethod.apply(r, arguments) : r.queue.push(arguments);
  }, e._smrtvds = r, r.push = r, r.loaded = true, r.version = "1.1", r.queue = [], a = t.createElement("script"), 
  a.async = true, a.src = `https://link-para-o-seu-script-do-player.com/smartplayer.min.js`, t.getElementsByTagName("head")[0].appendChild(a));
  
  window.smrtvds(`vid_${vTurbPlayer.id}`, vTurbPlayer.org_id, vTurbPlayer.video_id, vTurbPlayer.options);
}

function vTurbSmrtvds() {
  vTurbCreatSmartvdsElements();
  vTurbLoadSmrtvds();
}

vTurbSrcId = "newPlayerId"; // Substitua com o seu ID de player
vTurbPlayer = vTurbOriginalPlayer; // Ajuste conforme necessário
vTurbSmrtvds();
