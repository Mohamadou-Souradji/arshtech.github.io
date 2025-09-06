// Fonction pour initialiser les carousels
function initCarousels() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach((carousel) => {
        const images = carousel.querySelector('.carousel-images');
        const imageCount = images.children.length;
        let currentIndex = 0;
        
        // Créer les boutons de navigation
        const nav = document.createElement('div');
        nav.className = 'carousel-nav';
        
        for (let i = 0; i < imageCount; i++) {
            const button = document.createElement('button');
            if (i === 0) button.classList.add('active');
            button.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
            });
            nav.appendChild(button);
        }
        
        carousel.appendChild(nav);
        
        function updateCarousel() {
            // Déplacer les images
            images.style.transform = `translateX(-${currentIndex * (100 / imageCount)}%)`;
            
            // Mettre à jour les boutons actifs
            nav.querySelectorAll('button').forEach((btn, i) => {
                btn.classList.toggle('active', i === currentIndex);
            });
        }
        
        // Défilement automatique
        setInterval(() => {
            currentIndex = (currentIndex + 1) % imageCount;
            updateCarousel();
        }, 3000); // Change toutes les 3 secondes
    });
}

// Démarrer quand la page est chargée
document.addEventListener('DOMContentLoaded', initCarousels);