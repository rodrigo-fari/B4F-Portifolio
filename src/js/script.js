// Efeito de rotação dos círculos de fundo baseado no scroll
document.addEventListener('DOMContentLoaded', function () {
	// Criar os círculos de fundo
	const backgroundCircles = document.createElement('div');
	backgroundCircles.className = 'background-circles';

	// Criar os três círculos
	const circle1 = document.createElement('div');
	circle1.className = 'blur-circle circle1';

	const circle2 = document.createElement('div');
	circle2.className = 'blur-circle circle2';

	const circle3 = document.createElement('div');
	circle3.className = 'blur-circle circle3';

	// Adicionar círculos ao container
	backgroundCircles.appendChild(circle1);
	backgroundCircles.appendChild(circle2);
	backgroundCircles.appendChild(circle3);

	// Adicionar ao body
	document.body.appendChild(backgroundCircles);

	// Função para animar os círculos baseado no scroll
	function animateCircles() {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
		const scrollProgress = Math.max(0, Math.min(1, scrollTop / maxScroll));

		// Calcular rotação global (360 graus para scroll completo)
		const globalRotation = scrollProgress * 360;

		// Aplicar rotação global no container inteiro
		const container = document.querySelector('.background-circles');
		if (container) {
			container.style.transform = `rotate(${globalRotation}deg)`;
		}

		// Calcular variações de escala baseadas no scroll
		// Usando diferentes frequências para cada círculo
		const scale1 = 0.8 + (Math.sin(scrollProgress * Math.PI * 4) * 0.3); // Varia entre 0.5 e 1.1
		const scale2 = 0.9 + (Math.sin(scrollProgress * Math.PI * 3) * 0.2); // Varia entre 0.7 e 1.1
		const scale3 = 0.7 + (Math.sin(scrollProgress * Math.PI * 5) * 0.4); // Varia entre 0.3 e 1.1

		// Aplicar escalas diferentes mantendo as posições originais
		circle1.style.transform = `translateY(-50%) scale(${scale1})`;
		circle2.style.transform = `translate(-50%, -50%) scale(${scale2})`;
		circle3.style.transform = `translateY(-50%) scale(${scale3})`;
	}

	// Adicionar listener de scroll 
	window.addEventListener('scroll', function () {
		animateCircles();
	});

	// Chamar uma vez para definir posição inicial
	animateCircles();
});
