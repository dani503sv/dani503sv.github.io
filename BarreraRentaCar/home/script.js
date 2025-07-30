document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Animaciones al hacer scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.animate__animated');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                const animationClass = element.classList[1];
                element.style.opacity = '1';
                element.classList.add(animationClass);
            }
        });
    }

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página

    // Simular carga de más vehículos
    document.getElementById('loadMore').addEventListener('click', function() {
        this.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Cargando...';
        
        // Simular carga con timeout
        setTimeout(() => {
            this.innerHTML = 'No hay más vehículos disponibles';
            this.classList.remove('btn-primary');
            this.classList.add('btn-secondary');
            this.disabled = true;
        }, 1500);
    });

    // Efecto hover en tarjetas de vehículos
    vehicleItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.querySelector('.card').style.transform = 'translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.querySelector('.card').style.transform = 'translateY(0)';
        });
    });
});

// Manejo del formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const form = this;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;
    
    // Mostrar spinner de carga
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Enviando...';
    submitBtn.disabled = true;
    
    // Simular envío (en producción usaría fetch o similar)
    setTimeout(() => {
        // Aquí iría la lógica real de envío con fetch
        // Por ahora simulamos un envío exitoso después de 1.5 segundos
        const success = Math.random() > 0.2; // 80% de éxito para demostración
        
        if (success) {
            document.getElementById('formSuccess').classList.remove('d-none');
            document.getElementById('formError').classList.add('d-none');
            form.reset();
        } else {
            document.getElementById('formError').classList.remove('d-none');
            document.getElementById('formSuccess').classList.add('d-none');
        }
        
        submitBtn.innerHTML = originalBtnText;
        submitBtn.disabled = false;
    }, 1500);
});