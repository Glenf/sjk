(function(document){
    var css = document.createElement('link');
    css.rel = 'stylesheet';
    css.href = 'https://raw.githubusercontent.com/Glenf/sjk/master/build/sjk.css';

    document.querySelector('head').appendChild(css);

    var loader = document.querySelector('#sjk-loader');
    loader.querySelector('p').innerText = 'Ladattu';

    setTimeout(function() {
        loader.remove();
    }, 500);


})(document);
