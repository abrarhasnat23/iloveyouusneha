const lines = document.querySelectorAll('.line');

lines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.7}s`;
});
