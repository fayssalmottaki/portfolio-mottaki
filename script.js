document.addEventListener('DOMContentLoaded', () => {
    
    // 1. REVEAL ELEMENTS ON SCROLL
    const reveals = document.querySelectorAll('.reveal');
    const handleReveal = () => {
        reveals.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 100) el.classList.add('active');
        });
    };
    window.addEventListener('scroll', handleReveal);
    handleReveal(); // Initial check

    // 2. NAVBAR SCROLL EFFECT
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        window.scrollY > 50 ? nav.classList.add('scrolled') : nav.classList.remove('scrolled');
    });
});

// 3. MODAL FUNCTIONS
function openModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(id) {
    const modal = document.getElementById('modal-' + id);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Fermeture si clic à l'extérieur de la modale
window.onclick = function(event) {
    if (event.target.className === 'modal-overlay') {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typewriter');
    const phrases = [
        "Systèmes, Infrastructures et Réseaux",
        "Expert en Cybersécurité",
        "Architecte Virtualisation",
        "Solutions Haute Disponibilité"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50;
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause à la fin
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000); // Démarre après 1 seconde
});
window.onclick = e => { 
    if (e.target.classList.contains('modal-overlay')) { 
        e.target.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    } 
};