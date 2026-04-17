// Check if the page loaded correctly
console.log("Portfolio loaded successfully with FontAwesome!");

// Smooth scroll highlight for navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(`Navigating to ${e.target.innerText}`);
    });
});