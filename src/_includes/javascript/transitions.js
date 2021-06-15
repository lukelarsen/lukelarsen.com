function localStorageGet(key, defaultValue) {
    var v = window.localStorage.getItem(key);
    try {
        v = v !== null ? JSON.parse(v) : defaultValue;
    } catch (e) {
        v = defaultValue;
    }
    return v;
}
function localStorageStore(key, val) {
    window.localStorage[key] = JSON.stringify(val);
}

var easingIn = 'power1.in';
var easingOut = 'power2.out';
var duration = 1;
var delay = 0.25;
var colors = {
    '/': '#54535E',
    '/uplynk/': '#CC040B',
    '/lightning-league/': '#DDAF1D',
    '/bindable/': '#C6343A',
    '/about/': '#22B2AE',
    '/blog/': '#DA7B3C',
    '/pickleball/': '#365679',
    '/resume/': '#6D6D8F',
};

var options = [
    {
        from: '(.*)', // meaning any
        to: '(.*)', // meaning any
        out: function (next, data) {
            var isFromBlog = data.transition.from.indexOf('/blog/') === 0;
            var from = isFromBlog ? '/blog/' : data.transition.from;

            document.querySelector('.overlay').style.right = '-200%';
            document.querySelector('.overlay__current-color').style.background =
                colors[from];
            document.querySelector('.overlay__next-color').style.background =
                colors[data.transition.to];

            gsap.to('.overlay', {
                right: '-50%',
                duration: duration,
                ease: easingIn,
            });

            setTimeout(next, 1000);
        },
        in: function (next, data) {
            var isFromBlog = data.transition.from.indexOf('/blog/') === 0;
            var isToBlog = data.transition.to.indexOf('/blog/') === 0;
            var from = isFromBlog ? '/blog/' : data.transition.from;
            var to = isToBlog ? '/blog/' : data.transition.to;

            document.querySelector('.frame-left').style.background =
                colors[data.transition.to];
            document.querySelector('.frame-right').style.background =
                colors[data.transition.to];

            document.querySelector('.overlay').style.right = '-50%';
            document.querySelector('.overlay__current-color').style.background =
                colors[from];
            document.querySelector('.overlay__next-color').style.background =
                colors[to];

            document.querySelector('.hero-text').style.marginLeft = '30px';
            document.querySelector('.hero-text').style.opacity = 0;

            gsap.to('.overlay', {
                right: '100%',
                duration: duration,
                ease: easingOut,
            });

            gsap.to('.hero-text', {
                marginLeft: '0%',
                opacity: 1,
                delay: delay,
                duration: duration,
                ease: 'power.inOut',
            });

            var transitionState = localStorageGet('transition', true);
            if (transitionState) {
                document.getElementById('transitionToggle').innerHTML =
                    'Turn transitions off';
            } else {
                document.getElementById('transitionToggle').innerHTML =
                    'Turn transitions on';
            }

            setTimeout(next, 1250);
        },
    },
];

var transitionCheck = localStorageGet('transition', true);
var swup = null;

function createSwup() {
    swup = new Swup({
        plugins: [
            new SwupJsPlugin(options),
            new SwupPreloadPlugin(),
            new SwupScrollPlugin(),
        ],
    });
    // swup.preloadPages();
}

function destroySwup() {
    try {
        swup.destroy();
    } catch (e) {}
    swup = null;
}

if (transitionCheck) {
    createSwup();
    document.getElementById('transitionToggle').innerHTML = 'Turn transitions off';
} else {
    document.getElementById('transitionToggle').innerHTML = 'Turn transitions on';
}

function toggleTransition() {
    var transitionChanged = localStorageGet('transition', true);
    transitionChanged = !transitionChanged;
    localStorageStore('transition', transitionChanged);

    destroySwup();
    if (transitionChanged) {
        createSwup();
        document.getElementById('transitionToggle').innerHTML =
            'Turn transitions off';
    } else {
        document.getElementById('transitionToggle').innerHTML =
            'Turn transitions on';
    }
}
