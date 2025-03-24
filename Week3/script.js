// learnt how to automate scrolling using Claude
const track = document.querySelector('.carouselTrack');

function duplicateItems() {
    const items = track.innerHTML; 
    track.innerHTML += items; 
}

function startAutoScroll() {
    let scrollAmount = 0;
    setInterval(() => {
        scrollAmount += 1;
        track.style.transform = `translateX(-${scrollAmount}px)`;

      
        if (scrollAmount >= track.scrollWidth / 2) {
            scrollAmount = 0;
        }
    }, 20);
}

duplicateItems();
startAutoScroll();
