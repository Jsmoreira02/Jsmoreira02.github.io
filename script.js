function downloadCV() {
    const link = document.createElement('a');
    link.href = 'styles/meu_cv.pdf'; 
    link.download = 'Joao_Moreira_CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

window.addEventListener('scroll', function() {
    const screenPosition = window.innerHeight / 1.2;
    const projectBoxes = document.querySelectorAll('.project-box');
    
    projectBoxes.forEach((box) => {
        const boxPosition = box.getBoundingClientRect().top;
        
        if (boxPosition < screenPosition) {
            box.classList.add('visible');
            box.classList.remove('hidden');
        }

        if (boxPosition > window.innerHeight || boxPosition < 0) {
            box.classList.remove('visible');
            box.classList.add('hidden');
        }
    });
});