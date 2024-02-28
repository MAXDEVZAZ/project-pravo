setInterval(function() {
    let windowWidth = document.documentElement.clientWidth;
    let bgImageHeight = windowWidth * (1640 / 3840);
    document.getElementById("header").style.height = bgImageHeight + 'px';
}, 100);