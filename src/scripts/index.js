document.addEventListener('DOMContentLoaded', function() {

    let scrollingGif;
    
    if (window.screen.width < 600) {
        scrollingGif = document.getElementById('scrolling-gif-mobile');
    } else {
        scrollingGif = document.getElementById('scrolling-gif');
    }

    scrollingGif.classList.add('block');
    scrollingGif.classList.remove('hidden');
    
    const moreButton = document.getElementById('more-button');

    let isScrolling = false;
    let animationFrameId = null;


    function easeOutCubic(t) {
        return 1 - Math.pow(1 - t, 3);
    }

    function slowScroll(duration) {
        const start = window.scrollY;
        const target = scrollingGif.offsetHeight;
        const distance = target - start;
        let startTime = null;
        isScrolling = true;

        function animation(currentTime) {
            if (!isScrolling) {
                cancelAnimationFrame(animationFrameId);
                return;
            }

            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const easedProgress = easeOutCubic(progress);

            window.scrollTo(0, start + distance * easedProgress);

            if (timeElapsed < duration) {
                animationFrameId = requestAnimationFrame(animation);
            } else {
                isScrolling = false;
            }
        }

        animationFrameId = requestAnimationFrame(animation);
    }

    
    moreButton.addEventListener('click', function() {
        slowScroll(5000); // change this for timing adjustment
    });

    window.addEventListener('wheel', stopScrolling);
    window.addEventListener('touchmove', stopScrolling);

    function stopScrolling() {
        if (isScrolling) {
            isScrolling = false;
            cancelAnimationFrame(animationFrameId);
        }
    }
});
