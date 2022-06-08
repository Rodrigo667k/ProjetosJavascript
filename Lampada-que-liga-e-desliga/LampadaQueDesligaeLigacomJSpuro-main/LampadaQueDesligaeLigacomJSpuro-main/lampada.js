const turnOn = document.getElementById ( 'turnOn' );
const trunOff = document.getElementById ( 'trunOff' );
const lamp = document.getElementById ( 'lamp' );

function islampadaBroken (){
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOn () {
    if ( !islampadaBroken()){
    lamp.src = './imagens-lampada/ligada.jpg';
    }
}
function lampOff (){
    if( !islampadaBroken()){
    lamp.src = './imagens-lampada/desligada.jpg'
    }
}

function lampBroken (){
    lamp.src = './imagens-lampada/quebrada.jpg'
}

turnOn.addEventListener ( 'click', lampOn   );
trunOff.addEventListener ('click', lampOff  );
lamp.addEventListener ('mouseover', lampOn  );
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken)