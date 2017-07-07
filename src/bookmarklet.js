javascript:(function(){
    var script = document.createElement('script');
    script.src = 'https://raw.githubusercontent.com/Glenf/sjk/master/build/sjk.js';
    script.asyc = true;

    var el = document.createElement('div');
    el.id = 'sjk-loader';
    el.style.position = 'absolute';
    el.style.top = '0';
    el.style.left = '0';
    el.style.width = '100%';
    el.style.textAlign = 'center';
    el.style.backgroundColor = '#cecece';
    el.style.border = '1px solid #000';

    var p = document.createElement('p');
    p.innerText = 'Ladataan päivitettyä ulkoasua!';

    el.appendChild(p);

    document.querySelector('body').appendChild(el);
    document.querySelector('head').appendChild(script);
})();

