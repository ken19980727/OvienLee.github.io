/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $titleBar = null,
        $nav = $('#nav'),
        $wrapper = $('#wrapper');

    // Breakpoints.
    breakpoints({
        xlarge: ['1281px', '1680px'],
        large: ['1025px', '1280px'],
        medium: ['737px', '1024px'],
        small: ['481px', '736px'],
        xsmall: [null, '480px'],
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Tweaks/fixes.

    // Polyfill: Object fit.
    if (!browser.canUse('object-fit')) {

        $('.image[data-position]').each(function() {

            var $this = $(this),
                $img = $this.children('img');

            // Apply img as background.
            $this
                .css('background-image', 'url("' + $img.attr('src') + '")')
                .css('background-position', $this.data('position'))
                .css('background-size', 'cover')
                .css('background-repeat', 'no-repeat');

            // Hide img.
            $img
                .css('opacity', '0');

        });

    }

    // Header Panel.

    // Nav.
    var $nav_a = $nav.find('a');

    $nav_a
        .addClass('scrolly')
        .on('click', function() {

            var $this = $(this);

            // External link? Bail.
            if ($this.attr('href').charAt(0) != '#')
                return;

            // Deactivate all links.
            $nav_a.removeClass('active');

            // Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
            $this
                .addClass('active')
                .addClass('active-locked');

        })
        .each(function() {

            var $this = $(this),
                id = $this.attr('href'),
                $section = $(id);

            // No section for this link? Bail.
            if ($section.length < 1)
                return;

            // Scrollex.
            $section.scrollex({
                mode: 'middle',
                top: '5vh',
                bottom: '5vh',
                initialize: function() {

                    // Deactivate section.
                    $section.addClass('inactive');

                },
                enter: function() {

                    // Activate section.
                    $section.removeClass('inactive');

                    // No locked links? Deactivate all links and activate this section's one.
                    if ($nav_a.filter('.active-locked').length == 0) {

                        $nav_a.removeClass('active');
                        $this.addClass('active');

                    }

                    // Otherwise, if this section's link is the one that's locked, unlock it.
                    else if ($this.hasClass('active-locked'))
                        $this.removeClass('active-locked');

                }
            });

        });

    // Title Bar.
    $titleBar = $(
            '<div id="titleBar">' +
            '<a href="#header" class="toggle"></a>' +
            '<span class="title">' + $('#logo').html() + '</span>' +
            '</div>'
        )
        .appendTo($body);

    // Panel.
    $header
        .panel({
            delay: 500,
            hideOnClick: true,
            hideOnSwipe: true,
            resetScroll: true,
            resetForms: true,
            side: 'right',
            target: $body,
            visibleClass: 'header-visible'
        });

    // Scrolly.
    $('.scrolly').scrolly({
        speed: 1000,
        offset: function() {

            if (breakpoints.active('<=medium'))
                return $titleBar.height();

            return 0;

        }
    });

})(jQuery);

const sec3_1 = new Vue({
    el: '#aigo',
    data: {
        awards: [{
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「利用情感語意分析建構商家網路評價機制」-佳作',
                simple_text: ['Establish an algorithm/system to filter malicious online reviews of merchants and design a brand-new rating mechanism that quantifies the score more accurately, thus enhancing the objectivity and reliability of the evaluations.'],
            },
            {
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「原住民語音生成」-特優',
                simple_text: ['Use AI to input an indigenous sentence and generate the corresponding sound to achieve the effect of Text to Speech (TTS) on the front-end webpage of the local setting.',
                	'Use Tacotron and Tacotron2 (improved version) as the TTS model.' , 
                	'The total length of the sentence is 6 hours, with sentence intervals falling within 4sec~10sec, and the Log-Spectral Distance is less than 15.']
            },
        ]
    }
})

const sec3_2 = new Vue({
    el: '#hackathon',
    data: {
        awards: [{
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「利用情感語意分析建構商家網路評價機制」-佳作',
                simple_text: ['Establish an algorithm/system to filter malicious online reviews of merchants and design a brand-new rating mechanism that quantifies the score more accurately, thus enhancing the objectivity and reliability of the evaluations.'],
            },
            {
                title: '經濟部工業局-AI 產業實戰應用人才淬煉計畫(AIGO)「原住民語音生成」-特優',
                simple_text: ['Use AI to input an indigenous sentence and generate the corresponding sound to achieve the effect of Text to Speech (TTS) on the front-end webpage of the local setting.',
                    'Use Tacotron and Tacotron2 (improved version) as the TTS model.' , 
                    'The total length of the sentence is 6 hours, with sentence intervals falling within 4sec~10sec, and the Log-Spectral Distance is less than 15.']
            },
        ]
    }
})