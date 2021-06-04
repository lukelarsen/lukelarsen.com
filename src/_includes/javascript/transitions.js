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
    '/blog/': '#9C5D32',
    '/pickleball/': '#365679',
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

            document.querySelector('.hero-text').style.marginLeft =
                '30px';
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

            setTimeout(next, 1250);
        },
    },
];

var swup = new Swup({
    plugins: [
        new SwupJsPlugin(options),
        new SwupPreloadPlugin(),
        new SwupScrollPlugin()
    ],
});
