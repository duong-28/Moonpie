document.getElementById('dropdown').addEventListener('change', function() {
    var selectedOption = this.value;

    if (selectedOption === 'option1') {
        document.body.style.backgroundImage = "url('image/144p.jpeg')";
    } else if (selectedOption === 'option2') {
        document.body.style.backgroundImage = "url('image/240p.jpeg')";
    } else if (selectedOption === 'option3') {
        document.body.style.backgroundImage = "url('image/480p.jpeg')";
    } else if (selectedOption === 'option4') {
        document.body.style.backgroundImage = "url('image/720p.jpeg')";
    } else if (selectedOption === 'option5') {
        document.body.style.backgroundImage = "url('image/youu1.gif')";
    } else {
        document.body.style.backgroundImage = "";
    }
});
