// Gallery overlay functionality
const galleryImages = document.querySelectorAll('.gallery-image');
const overlay = document.createElement('div');
overlay.className = 'image-overlay';
document.body.appendChild(overlay);

const overlayImage = document.createElement('img');
overlay.appendChild(overlayImage);

const closeButton = document.createElement('button');
closeButton.textContent = 'Close';
closeButton.className = 'close-button';
overlay.appendChild(closeButton);

const prevButton = document.createElement('button');
prevButton.textContent = '<';
prevButton.className = 'prev-button';
overlay.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.textContent = '>';
nextButton.className = 'next-button';
overlay.appendChild(nextButton);

let currentIndex = 0;

function showImage(index) {
    if (index >= 0 && index < galleryImages.length) {
        overlayImage.src = galleryImages[index].src;
        currentIndex = index;
        overlay.style.display = 'flex';
    }
}

galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => showImage(index));
});

closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) showImage(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    if (currentIndex < galleryImages.length - 1) showImage(currentIndex + 1);
});

// Styling for overlay
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .image-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            justify-content: center;
            align-items: center;
            flex-direction: column;
        }
        .image-overlay img {
            max-width: 80%;
            max-height: 80%;
        }
        .close-button, .prev-button, .next-button {
            position: absolute;
            background: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            font-size: 16px;
        }
        .close-button {
            top: 200px;
            right: 20px;
        }
        .prev-button {
            left: 20px;
        }
        .next-button {
            right: 20px;
        }
    </style>
`);