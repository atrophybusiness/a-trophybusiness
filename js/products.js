function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

function handleScroll() {
    const elements1 = document.querySelectorAll('.ShopByApparelContainer');
    const elements2 = document.querySelectorAll('.BestSellerTitleText2');
    const elements3 = document.querySelectorAll('.BestSeller2');

    elements1.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });

    elements2.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });

    elements3.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);

handleScroll();