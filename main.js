// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Interatividade da galeria
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.querySelector('.overlay').style.opacity = '1';
    });
    item.addEventListener('mouseleave', () => {
        item.querySelector('.overlay').style.opacity = '0';
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
    } else {
        nav.classList.remove('shadow-lg', 'bg-white/95', 'backdrop-blur-sm');
    }
});

// Form validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Básica validação
        const name = contactForm.querySelector('[name="name"]').value;
        const email = contactForm.querySelector('[name="email"]').value;
        const message = contactForm.querySelector('[name="message"]').value;
        
        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos');
            return;
        }
        
        // Aqui você pode adicionar a lógica de envio do formulário
        console.log('Formulário enviado:', { name, email, message });
    });
}

// Mobile menu toggle
const mobileMenuButton = document.querySelector('#mobile-menu-button');
const mobileMenu = document.querySelector('#mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Galeria Instagram
document.querySelectorAll('.instagram-item').forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.getElementById('gallery-modal');
        const modalImage = document.getElementById('modal-image');
        const modalAvatar = document.getElementById('modal-avatar');
        const modalName = document.getElementById('modal-name');
        const modalLocation = document.getElementById('modal-location');
        const modalDescription = document.getElementById('modal-description');
        const modalDate = document.getElementById('modal-date');

        // Pegar dados do item clicado
        const img = item.querySelector('img').src;
        const avatar = item.querySelector('.flex img').src;
        const name = item.querySelector('h4').textContent;
        const location = item.querySelector('.text-sm').textContent;
        const description = item.querySelector('.line-clamp-3').textContent;

        // Preencher o modal
        modalImage.src = img;
        modalAvatar.src = avatar;
        modalName.textContent = name;
        modalLocation.textContent = location;
        modalDescription.textContent = description;
        modalDate.textContent = 'Dezembro 2023'; // Você pode tornar isso dinâmico

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Fechar modal
const modalClose = document.querySelector('.modal-close');
if (modalClose) {
    modalClose.addEventListener('click', () => {
        document.getElementById('gallery-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

// Fechar modal ao clicar fora
const galleryModal = document.getElementById('gallery-modal');
if (galleryModal) {
    galleryModal.addEventListener('click', (e) => {
        if (e.target === galleryModal) {
            galleryModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Efeito parallax no banner
const parallaxBanner = () => {
    const banner = document.querySelector('.floating-banner');
    const container = document.querySelector('.parallax-container');

    if (banner && container) {
        container.addEventListener('mousemove', (e) => {
            const rect = container.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const moveX = (mouseX - centerX) / 25;
            const moveY = (mouseY - centerY) / 25;

            banner.style.transform = `translate3d(${moveX}px, ${moveY}px, 0) translateY(${-15 * Math.sin(Date.now() / 1000)}px)`;
        });

        container.addEventListener('mouseleave', () => {
            banner.style.transform = 'translate3d(0, 0, 0)';
        });
    }
};

// Inicializar o efeito parallax
parallaxBanner();

// Controle do popup de termos - Corrigido para garantir que o popup apareça
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário já aceitou os termos
    const termsAccepted = localStorage.getItem('termsAccepted');
    const popup = document.getElementById('termsPopup');
    
    // Se o usuário não aceitou os termos anteriormente, mostrar o popup
    if (!termsAccepted && popup) {
        // Mostrar o popup imediatamente
        popup.classList.add('active');
        document.body.style.overflow = 'hidden'; // Impedir rolagem da página
    }
    
    // Evento para aceitar os termos
    const acceptButton = document.getElementById('acceptTerms');
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            localStorage.setItem('termsAccepted', 'true');
            if (popup) {
                popup.classList.remove('active');
                document.body.style.overflow = 'auto'; // Restaurar rolagem da página
            }
        });
    }
    
    // Evento para recusar os termos
    const declineButton = document.getElementById('declineTerms');
    if (declineButton) {
        declineButton.addEventListener('click', function() {
            alert('Você precisa aceitar os termos para continuar usando nosso site.');
        });
    }
});

// Animações de scroll
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('animate-fade-in');
        }
    });
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
} 