const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            revealOnScroll.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.step, .feature-grid p, .philosophy-box, .download-buttons, h2').forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
    revealOnScroll.observe(el);
});

window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        nav.style.background = "rgba(10, 10, 10, 0.8)";
        nav.style.backdropFilter = "blur(12px)";
        nav.style.padding = "20px 40px";
    } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.padding = "40px";
    }
});
