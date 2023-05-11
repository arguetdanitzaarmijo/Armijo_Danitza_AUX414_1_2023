


let Harry_Styles =
{
    nombre:' Harry Styles',
    edad: 29,
    genero:' pop',
     canciones:['Woman','Golden','Water Melon Sugar','Adore you'],
    activos: true,
    informacion(){
        console.log(`el cantante es  ${this.nombre} tiene ${this.edad} el genero que canta es ${this.genero} y sus canciones son ${this.canciones }  y actualmente esta ${this.activos}` );

    },
    edadActual(a){
        this.edad = a;
        console.log('su edad actual de Harry es  :', this.edad);
    },
    nuevasCanciones(b){
        this.canciones=b;
        console.log('la nueva cancion de Harry es :', this. canciones);
    }
}

Harry_Styles.informacion();
Harry_Styles.edadActual(32);
Harry_Styles.nuevasCanciones('As it Was');