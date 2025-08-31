document.getElementById('show-more-btn').addEventListener('click', function(event) {
    event.preventDefault();
    var hiddenParagraph = document.getElementById('hidden-paragraph');
    if (hiddenParagraph.style.display === 'none') {
        hiddenParagraph.style.display = 'block';
        this.textContent = 'Show Less';
    } else {
        hiddenParagraph.style.display = 'none';
        this.textContent = 'Show More';
    }
});