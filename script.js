    function encriptar() {
        var texto=document.getElementById("inputTexto").value;
        var txtCifrado1=texto.replace(/e/g, "enter");
        var txtCifrado1=txtCifrado1.replace(/i/g, "imes");
        var txtCifrado1=txtCifrado1.replace(/a/g, "ai");
        var txtCifrado1=txtCifrado1.replace(/o/g, "ober");
        var txtCifrado1=txtCifrado1.replace(/u/g, "ufat");
      
  
    document.getElementById("dibujoderecho").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").innerHTML=txtCifrado;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
  }

  function desencriptarTexto() {
    var texto=document.getElementById("inputTexto").value;
    var txtCifrado1=texto.replace(/enter/g, "e")
    var txtCifrado1=txtCifrado1.replace(/imes/g, "i")
    var txtCifrado1=txtCifrado1.replace(/ai/g, "a")
    var txtCifrado1=txtCifrado1.replace(/ober/g, "o")
    var txtCifrado1=txtCifrado1.replace(/ufat/g, "u");

    document.getElementById("dibujoderecho").style.display="none";
    document.getElementById("texto1").style.display="none";
    document.getElementById("texto2").innerHTML=txtCifrado1;
    document.getElementById("copiar").style.display= "show";
    document.getElementById("copiar").style.display= "inherit";
    }
    function copiar(){
        let contenido=document.querySelector("#texto2");
        contenido.ariaSelected();
        document.execCommand("cut")
        alert("¡Se copio!");
    }
