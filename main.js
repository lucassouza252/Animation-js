'use strict'

let canvas = document.getElementById('meu_canvas');
let context = canvas.getContext('2d');

let b1 = new Bola(context);
b1.x = 100;
b1.y = 200;
b1.velocidadeX = 20;
b1.velocidadeY = -10;
b1.cor = 'red';
b1.raio = 20;

let b2 = new Bola(context);
b2.x = 200;
b2.y = 100;
b2.velocidadeX = -10;
b2.velocidadeY = 20;
b2.cor = 'blue';
b2.raio = 30;

let animacao = new Animacao(context);
animacao.novoSprite(b1);
animacao.novoSprite(b2);

// Liga a animacao
animacao.ligar();