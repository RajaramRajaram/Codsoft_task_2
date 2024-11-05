document.addEventListener("DOMContentLoaded", function() {
    // Hide loader after page load
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('hidden');
    }, 2000);
});

// Scroll to Section
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}
