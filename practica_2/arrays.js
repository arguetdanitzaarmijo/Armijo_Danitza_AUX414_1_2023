
//mostrar autos

let auto = 'Toyota';
let marcas = [];

let autos = ['Nissan', 'Honda', 'Ford', 'Toyota', 'Alfa Romero'];
marcas.push(autos);
let automax = [0];
for (let i = 0; i < autos.length; i++) 
{ 
        if (automax.length <= autos[i].length) 
        { 
            automax = autos[i];
        }
        
}
console.log('Autos = ',marcas);
console.log(auto);
console.log(automax);

//serie fibinacci
let n = 7;
let a = 0;
let b = 1;
let c = 0;
let fibonacci = [];
fibonacci.push(a);
fibonacci.push(b);
for (let i = 0; i < n-2; i++) {
    c = a + b;
    a = b;
    b = c;
    fibonacci.push(c);
}
console.log( "los 7 primeros numeros de la serie fibonacci son :"+" " +fibonacci);

//numeros pares e impares 
    let array = [2 ,6 ,8,15,17, 22, 7 ,14]
    let nummayor=[0];
    let resultadopares=[];
    let   resultadoimpar=[];
    for(let i=0; i<array.length; i++){
         if(nummayor<= array[i])
         {
            nummayor=array[i];
         }
    }
    for(let i=0; i<array.length; i++)
    {
       if  ((array [i]% 2) ==0)
       {
           resultadopares.push(array[i]);   
        }
        else
        {
         resultadoimpar.push(array[i]);
        }
    }

    
    console.log('los numeros pares del array son  =',resultadopares);
    console.log('los numeros impares del array son= ',resultadoimpar);
    console.log( "el numero mayor es "+ '' + nummayor);
    


//dos arrays
let cocacola=['3lt','2lt','500ml','300ml'];
let precio = [13, 10, 5, 3];

 for(let i=0; i<cocacola.length;i++)
{
    for(i=0;i<precio.length;i++)
 console.log(" cocaloca de :", cocacola[i] +' '+'el precio es de ', precio[i]);
     
}