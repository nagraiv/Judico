(function() {
    "use strict"

    const container = document.querySelector('.container__video');
    const playBtn = container.querySelector('.video__preview');
    const videoEl = container.querySelector('.video');

    container.addEventListener('click', function () {

        if (videoEl.paused) {
            videoEl.play();
            playBtn.classList.add('none');
        } else {
            videoEl.pause();
            playBtn.classList.remove('none');
        }
    });
})();
