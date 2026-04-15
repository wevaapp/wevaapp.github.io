function createParticles() {
    const container = document.getElementById('particles');
    const colors = ['#6366f1', '#ec4899', '#06b6d4'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.transform = `scale(${Math.random() * 1.5 + 0.5})`;
        
        particle.style.animation = `float ${Math.random() * 3 + 3}s ease-in-out infinite`;
        container.appendChild(particle);
    }
}
createParticles();