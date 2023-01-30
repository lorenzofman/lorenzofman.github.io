window.onload = function () {
    var projects = document.getElementsByClassName('project');
    [].forEach.call(projects, function (project) {
        var slides = project.getElementsByClassName('carousel-item');
        var addActive = function (slide) {
            if (slide !== undefined){
                slide.classList.add('active');
            }
        }
        var removeActive = function (slide) {
            slide.classList.remove('active');
        }
        addActive(slides[0]);

        setInterval(function () {
            for (var i = 0; i < slides.length; i++) {
                if (i + 1 == slides.length) {
                    addActive(slides[0]);
                    slides[0].style.zIndex = 100;
                    setTimeout(removeActive, 350, slides[i]);
                    break;
                }
                if (slides[i].classList.contains('active')) {
                    slides[i].removeAttribute('style');
                    setTimeout(removeActive, 350, slides[i]);
                    addActive(slides[i + 1]);
                    break;
                }
            }
        }, 2500);
    });
}