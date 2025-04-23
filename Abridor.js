(function () {
  "use strict";

  class Abridor {
    #rodar = true;
    async abrir(documento) {

      const lista = documento.querySelectorAll("li.book:not(.expanded):not(.expanding):not(.loading-book)");
      for (let i = 0; i < 100 && i < lista.length; i++) {
        if (
          !(lista[i].className.includes("expanded") ||
            lista[i].className.includes("loading-book")) &&
          this.#rodar
        ) {
          lista[i].focus();
          lista[i].click();
        }
      }
      return new Promise(async (resolve) => {
        await Abridor.aguardarItensCarregar(documento);
        if (this.#rodar && lista.length != 0) {
          await this.abrir(documento);
        }
        resolve();
      });
    }
    get rodar() { return this.#rodar; }
    set rodar(valor) { this.#rodar = Boolean(valor); }

    static aguardarItensCarregar(documento) {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (!documento.querySelector(".expanding, .loading-book")) {
            resolve();
          }
          Abridor.aguardarItensCarregar(documento);
        }, 1000);
      });
    }
  }

  const abridor = new Abridor();
  abridor.abrir(document.querySelector("#toc-panel"));

  const btnIniciar = document.createElement("button");
  btnIniciar.accessKey = "i";
  btnIniciar.addEventListener("click", () => {
    abridor.rodar = true;
    abridor.abrir(document.querySelector("#toc-panel"));
    alert("iniciado");
  });
  document.body.append(btnIniciar);

  const btnParar = document.createElement("button");
  btnParar.accessKey = "p";
  btnParar.addEventListener("click", () => {
    abridor.rodar = false;
    alert("Parado");
  });
  document.body.append(btnParar);

  alert(`Script instalado e iniciado,

Para parar o precesso de abertura use Alt + P
E para iniciar novemente use Alt + I
`);
})();