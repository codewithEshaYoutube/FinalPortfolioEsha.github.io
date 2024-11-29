const upload = document.getElementById('upload');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const brightnessInput = document.getElementById('brightness');
const contrastInput = document.getElementById('contrast');
const downloadButton = document.getElementById('download');

let img = new Image();

upload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        img.src = e.target.result;
        img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
        };
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

function applyFilters() {
    ctx.filter = `brightness(${brightnessInput.value}%) contrast(${contrastInput.value}%)`;
    ctx.drawImage(img, 0, 0);
}

brightnessInput.addEventListener('input', applyFilters);
contrastInput.addEventListener('input', applyFilters);

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'enhanced-image.png';
    link.href = canvas.toDataURL();
    link.click();
});
