var zoomer = function () {
    document.getElementById('img-zoomer-box')
        .addEventListener('mousemove', function (e) {


            console.log("entered listener");
            //console.log(e);


            var original = document.getElementById('img1'),
                magnified = document.getElementById('img2'),
                style = magnified.style,
                x = e.pageX - this.offsetLeft,
                y = e.pageY - this.offsetTop,
                imgWidth = original.width,
                imgHeight = original.height,
                xperc = ((x / imgWidth) * 100),
                yperc = ((y / imgHeight) * 100);


            console.log("x", x, "y", y, "xperc", xperc, "yperc", yperc);

            
            if (x > (.01 * imgWidth)) {
                xperc += (.15 * xperc); //.15
            };//lets user scroll past right edge of image

            if (y >= (.01 * imgHeight)) {
                yperc += (.15 * yperc); //.15
            };//lets user scroll past bottom edge of image
  
            style.backgroundPositionX = (xperc+20) + '%'; //-9
            style.backgroundPositionY = (yperc+20) + '%'; //-9


            style.left = (x - 174) + 'px'; //-180
            style.top = (y - 174) + 'px'; //-180

        });
}();
