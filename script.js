document.getElementById('dropdown').addEventListener('change', function() {
    const moonImage = document.getElementById('moon-image');
    const selectedOption = this.value;
    
    if (selectedOption === 'default') {
        moonImage.style.display = 'none';
        return;
    }

    const imagePaths = {
        'option1': 'image/144p.jpg',
        'option2': 'image/240p.jpg',
        'option3': 'image/480p.jpg',
        'option4': 'image/720p.jpg',
        'option5': 'image/youu1.gif'
    };

    if (imagePaths[selectedOption]) {
        moonImage.src = imagePaths[selectedOption];
        moonImage.style.display = 'block';
    }
});
