'use strict'
function Animacao(context){
	this.context = context;
	this.sprites = [];
	this.ligado = false;
}

Animacao.prototype = {
	novoSprite: function(sprite){
		this.sprites.push(sprite);
	},
	ligar: function(){
		this.ligado = true;
		this.proximoFrame();
	},
	desligar: function(){
		this.ligado = false;
	},
	proximoFrame: function(){
		
		// Verifica se pode continuar
		if(!this.ligado) return;
		
		// Limpa a tela ou desenha o fundo a cada ciclo
		this.limparTela();
		
		// Atualiza os Sprites
		for(let i in this.sprites){
			this.sprites[i].atualizar();
		}
		
		// Desenha os sprites
		for(let i in this.sprites){
			this.sprites[i].desenhar();
		}
		
		// Chama proximo ciclo
		let animacao = this;
		requestAnimationFrame(function(){
			animacao.proximoFrame();
		});
	},
	limparTela: function(){
		let ctx = this.context;
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
}
