console.log('+----------Ejercicio vehiculo: Objeto--------------+');


//Definimos los atributos que piden en el ejercicio

const vehiculo = {
	tamaño_Tanque: 100, 		
	kilometro_Litro: 0.2,  	 
    radio_Neumatico: 15, 		 
	color: 'black',  		   
    estado_Motor: true,		
	cantidad_Combustible: 40,    
	indicador_neumatico_viaje: 0,		  
	indicador_Aceleracion: 0,	
	distancia_Recorrida: 0,	    
	

//Recorrido del vehículo basado en el radio de los neumáticos   

    neumatico_viaje(){			
		const PI = 3.14;
		this.neumatico_viaje = this.radio_Neumatico * 2 * PI;
		console.log(`La distancia recorrida en centímetros por el neumático es: ${this.neumatico_viaje}`);
		console.log(`La distancia recorrida en metros por llanta es: ${(this.neumatico_viaje/100).toFixed(3)}`);
	},

//LLenar el tanque con combustible

	llenar_combustible(){   	
		let aux_cantidad_Combustible = Math.random() * 100;
		if(aux_cantidad_Combustible <= (this.tamaño_Tanque - this.cantidad_Combustible)){
			this.cantidad_Combustible += aux_cantidad_Combustible;
			console.log(`Nuevo estado de combustible ${this.cantidad_Combustible} litros`);
		}
		else{
			console.log('El combustible excede la capacidad máxima del tanque');
		}
	},



//Encender el vehículo

    encender(){				
		if(!this.estado_Motor){
			if(this.cantidad_Combustible >= 2){ 	//Mínimo 2 litros de combustible
				this.estado_Motor = true;
				console.log('El vehiculo ahora esta encendido');
				this.aceleracion();
			}
		}
		else{    //Combustible consumido
			console.log('El vehiculo ya esta encendido');
		}
	},


    //Acelerar el vehículo. También suma la distania recorrida

	aceleracion(){

		if(this.cantidad_Combustible > 0){
			this.indicador_Aceleracion = Math.random() * 100 ;
			console.log(`La velocidad es: ${this.indicador_Aceleracion} kilometros`);
			this.distancia_Recorrida += this.indicador_Aceleracion;
			console.log(`La distancia recorrida del vehiculo es: ${this.distancia_Recorrida} kilometros`);
			let combustible_Consumido = this.indicador_Aceleracion * this.kilometro_Litro
			this.cantidad_Combustible -= combustible_Consumido;
			console.log(`${combustible_Consumido} litros de combustible consumidos`);
			console.log(`Nuevo estado de combustible ${this.cantidad_Combustible} litros`);
		}
		else{
			this.apagar();
			console.log('combustible insuficiente');
		}
	},

    //Apagar el vehículo

	apagar(){			
		if(this.estado_Motor){
			this.estado_Motor = false;
			console.log('El vehiculo esta apagado');
		}
		else{
			console.log('El vehiculo esta encendido');
		}
	}
}

vehiculo.aceleracion();
console.log('Segunda vuelta del vehiculo');
vehiculo.aceleracion();
console.log('Tercera  vuelta del vehiculo'); // Hola 
vehiculo.aceleracion();
console.log('Cuatro vuelta del vehiculo');
vehiculo.aceleracion();
console.log('Quinto vuelta del vehiculo');
vehiculo.aceleracion();

//MARCA
C:\Users\carde>set | findstr USER
ALLUSERSPROFILE=C:\ProgramData
FPS_BROWSER_USER_PROFILE_STRING=Default
USERDOMAIN=DESKTOP-KFT6CKQ
USERDOMAIN_ROAMINGPROFILE=DESKTOP-KFT6CKQ
USERNAME=carde
USERPROFILE=C:\Users\carde
