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

		// Calcular variações de escala baseadas no scroll com transições mais suaves
		// Usando diferentes frequências para cada círculo e começando do estado inicial
		const baseScale1 = 1.0;
		const baseScale2 = 1.0;
		const baseScale3 = 1.0;

		const scale1 = baseScale1 + (Math.sin(scrollProgress * Math.PI * 2) * 0.15); // Varia suavemente
		const scale2 = baseScale2 + (Math.sin((scrollProgress * Math.PI * 2) + Math.PI / 3) * 0.1); // Offset diferente
		const scale3 = baseScale3 + (Math.sin((scrollProgress * Math.PI * 2) + Math.PI / 1.5) * 0.2); // Outro offset

		// Aplicar escalas diferentes mantendo as posições originais
		circle1.style.transform = `translateY(-50%) scale(${scale1})`;
		circle2.style.transform = `translate(-50%, -50%) scale(${scale2})`;
		circle3.style.transform = `translateY(-50%) scale(${scale3})`;
	}

	// Usar requestAnimationFrame para animações mais suaves
	let ticking = false;
	function requestTick() {
		if (!ticking) {
			requestAnimationFrame(animateCircles);
			ticking = true;
		}
	}

	// Adicionar listener de scroll 
	window.addEventListener('scroll', function () {
		requestTick();
		ticking = false;
	});

	// Chamar uma vez para definir posição inicial
	animateCircles();
});
