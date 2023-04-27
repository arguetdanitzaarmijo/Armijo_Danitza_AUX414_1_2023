let suma= document.getElementById("suma");
let reiniciarP = document.getElementById("boton-reiniciar")
let botonImc = document.getElementById("boton-imc");
let efect = document.getElementById("efect");
let dividir = document.getElementById("dividir");
let resta =document.getElementById("resta");
function sumarNumeros () {
    let txt1 = document.getElementById("txt1").value;
    let txt2 = document.getElementById("txt2").value;
    let result = parseInt(txt1) + parseInt(txt2);
    console.log("La suma es: " , result);
    //  alert("la suma es: " + result)
}

function restardosnumeros(){
    let num1=document.getElementById("num5").value;
    let num2=document.getElementById("num6").value;
    let resultresta =parseInt(num1)-parseInt(num2);
    console.log('la resra es ',resultresta);
   // alert ( 'la resta es:'+ (parseInt(num1)-parseInt(num2)));
    
}
function multiplicarNumeros(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let resultmulti =parseInt(num1)*parseInt(num2);
    console.log('la multiplicacion es',resultmulti)
    //alert("el efecto: "+ parseInt(num1)*parseInt(num2));
}

function dividirN(){
    let num1=document.getElementById("num3").value;
    let num2=document.getElementById("num4").value;
    let resuldivi = parseInt(num1)/parseInt(num2);
    console.log('la division es',resuldivi.toFixed(2));
   // alert("la division es: "+ ( parseInt(num1)/parseInt(num2)));
}

function calcularIMC (){
    
    let masculino = document.getElementById("m"); 
    let femenino = document.getElementById("f");
  
    if (!masculino.checked && !femenino.checked) {
      console.log ("marque una opcion");
    } else if (masculino.checked) {
      //  console.log("MASCULINO 👨");
    } else {
       // console.log("FEMENINO 👩");   
    }
     let peso = document.getElementById("peso").value;
      let altura = document.getElementById("altura").value;
      let imc = peso/(Math.pow (altura,2));
    
   
    let estado = '';
    switch (true) {
        case imc<18:
            estado = 'bajo peso'
            break;
        case (imc>18.5 && imc<24.9):
            estado = 'normal'
             break;
        case (imc>25  && imc<29.9):
            estado = 'sobre peso'
            break;
            case (imc>30):
                estado = 'obesidad'
                break;    
  }
    
    console.log('tu IMC es: ' + imc.toFixed(2) + ' tu estado es: ' + estado);
}
function reiniciarPrograma() {
    location.reload()
}

suma.addEventListener('click',sumarNumeros);
reiniciarP.addEventListener('click', reiniciarPrograma);
botonImc.addEventListener('click', calcularIMC);
efect.addEventListener('click',multiplicarNumeros);
dividir.addEventListener('click',dividirN);
resta.addEventListener('click',restardosnumeros);