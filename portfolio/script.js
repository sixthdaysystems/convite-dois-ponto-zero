function iframe1(){
    if (document.getElementById('select-modelo-1').value == '1') {
        document.getElementById('iframe1-vertical').src="https://sixthdaysystems.github.io/convite-dois-ponto-zero/flork/modelo1";
        document.getElementById('iframe1-horizontal').src="https://sixthdaysystems.github.io/convite-dois-ponto-zero/flork/modelo1";
    }else{
        document.getElementById('iframe1-vertical').src="";
        document.getElementById('iframe1-horizontal').src="";
    }
}