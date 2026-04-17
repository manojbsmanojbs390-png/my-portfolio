// Simple interaction: Log when a project is clicked
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').innerText;
        alert(`You clicked on ${title}! Put your project link here.`);
    });
});