function iframe1(){
    if (document.getElementById('select-modelo-1').value == '1') {
        document.getElementById('iframe1-vertical').src="https://sixthdaysystems.github.io/convite-dois-ponto-zero/tematico/instagram/index";
        document.getElementById('iframe1-horizontal').src="https://sixthdaysystems.github.io/convite-dois-ponto-zero/tematico/instagram/index";
    }else if(document.getElementById('select-modelo-1').value == '2'){
        //document.getElementById('iframe1-vertical').src="https://sixthdaysystems.github.io/convite-dois-ponto-zero/flork/modelo1";
        //document.getElementById('iframe1-horizontal').src="https://sixthdaysystems.github.io/convite-dois-ponto-zero/flork/modelo1";
        document.getElementById('iframe1-vertical').src="https://sixthdaysystems.github.io/aniversario/ravy/index";
        document.getElementById('iframe1-horizontal').src="https://sixthdaysystems.github.io/aniversario/ravy/index";
    }else {
        document.getElementById('iframe1-vertical').src="";
        document.getElementById('iframe1-horizontal').src="";
    }
}