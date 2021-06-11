'use strict'
function Bola(context){
	this.context = context;
	this.x = 0;
	this.y = 0;
	this.velocidadeX = 0;
	this.velocidadeY = 0;
	this.cor = 'black';
	this.raio = 10;
}

Bola.prototype = {
	atualizar: function(){
		let ctx = this.context;
		
		if(this.x < this.raio || this.x > ctx.canvas.width - this.raio){
			this.velocidadeX *= -1;
		}
		if(this.y < this.raio || this.y > ctx.canvas.height - this.raio){
			this.velocidadeY *= -1;
		}
		
		this.x += this.velocidadeX;
		this.y += this.velocidadeY;
	},
	desenhar: function(){
		let ctx = this.context;
		
		// Guarda configuracoes atuais
		ctx.save();
		
		// Dar cor a bola
		ctx.fillStyle = this.cor;
		
		// Desenha a bola
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.raio, 0, Math.PI*2, false);
		ctx.fill();
		
		// Volta as configuracoes anteriores
		ctx.restore();
	}
}



