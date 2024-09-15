// Creando la super clase
class Multimedia {
  constructor(url) {
    this._url = url;
  }
  getUrl() {
    return this._url;
  }
}

// Creando la clase hija
class Reproductor extends Multimedia {
  constructor(url, id) {
    super(url);
    this._id = id;
  }
}

let accionesVideo = (() => {
  return {
    insertarVideo: (url, id) => {
      let iframe = null;
      iframe = document.getElementById(id);
      iframe.src = url;
    },
  };
})();

const collapseOne = document.querySelector(
  'button[data-target="#collapseOne"]',
);
const collapseTwo = document.querySelector(
  'button[data-target="#collapseTwo"]',
);
const collapseThree = document.querySelector(
  'button[data-target="#collapseThree"]',
);

collapseOne.addEventListener("click", () => {
  let url = "https://www.youtube.com/embed/XqZsoesa55w?si=ZltZwAcea_0tffMu";
  accionesVideo.insertarVideo(url, "musica");
});
