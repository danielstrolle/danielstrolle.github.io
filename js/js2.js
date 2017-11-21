(function(){
    function adjustSize() {
        var navbarHeight = $('nav').height();
        var windowHeight = $('body').height();
        var footerHeight = $('footer').height();
        $('#top, #bottom').height(((windowHeight - navbarHeight) - footerHeight) / 2);
    }
        adjustSize();
    $(window).on('resize', adjustSize);
})();


//FIND A WAY TO FULLY SHOW THE FOOTER, GET THE FULL FOOTER HEIGHT AND SUBTRACT THAT