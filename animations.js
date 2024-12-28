document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => {
        observer.observe(element);
    });
});

function toggleCaption(element) {
    const jp = element.querySelector('.caption-jp');
    const en = element.querySelector('.caption-en');
    if (jp.classList.contains('active')) {
        jp.classList.remove('active');
        en.classList.add('active');
    } else {
        jp.classList.add('active');
        en.classList.remove('active');
    }
}