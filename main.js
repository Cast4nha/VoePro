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
document.querySelector('.modal-close').addEventListener('click', () => {
    document.getElementById('gallery-modal').classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
document.getElementById('gallery-modal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('gallery-modal')) {
        document.getElementById('gallery-modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}); 