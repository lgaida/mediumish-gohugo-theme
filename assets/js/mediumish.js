// Javascript Functions for Mediumish

// Refreshes the likes and comment counts for the current page. Assumes that page elements
// with IDs 'disqus-comments-count' and 'disqus-likes-count' exist on the current page.
// The parameters are URL-encoded before passing it.
function refreshDisqusCounts(api_key, forum, thread_id) {
  if (['localhost', '127.0.0.1'].indexOf(window.location.hostname) == -1) {
    if ( $('#disqus-comments-count').length && $('#disqus-likes-count') ) {
      var disqusMsg = 'api_key=' + encodeURIComponent(api_key) + '&' +
                      'forum=' + encodeURIComponent(forum) + '&' +
                      'thread:link=' + encodeURIComponent(thread_id);
      $.ajax({
          type: 'GET',
          url: 'https://disqus.com/api/3.0/threads/details.jsonp',
          data: disqusMsg,
          cache: false,
          dataType: 'jsonp',
          success: function (result) {
              var comments = result.response.posts;
              var likes = result.response.likes;
              $('#disqus-comments-count').html(comments);
              $('#disqus-likes-count').html(likes);
          }
      });
    }
  }
}

jQuery(document).ready(function($){

    var offset = 1250;
    var duration = 800;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
        jQuery('.back-to-top').fadeIn(duration);
        } else {
        jQuery('.back-to-top').fadeOut(duration);
        }
    });
    jQuery('.back-to-top').click(function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
    })


    // alertbar later
    $(document).scroll(function () {
        var maxScroll = $(document).height() - $(window).height();
        var y = $(this).scrollTop();
        if (y > 350 || y + 100 > maxScroll) {
            $('.alertbar').fadeIn();
        } else {
            $('.alertbar').fadeOut();
        }
    });


    // Smooth on external page
    $(function() {
      setTimeout(function() {
        if (location.hash) {
          /* we need to scroll to the top of the window first, because the browser will always jump to the anchor first before JavaScript is ready, thanks Stack Overflow: http://stackoverflow.com/a/3659116 */
          window.scrollTo(0, 0);
          target = location.hash.split('#');
          smoothScrollTo($('#'+target[1]));
        }
      }, 1);

      // taken from: https://css-tricks.com/snippets/jquery/smooth-scrolling/
      $('a[href*=\\#]:not([href=\\#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          smoothScrollTo($(this.hash));
          return false;
        }
      });

      function smoothScrollTo(target) {
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      }
    });


    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('nav').outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('nav').removeClass('nav-down').addClass('nav-up');
            $('.nav-up').css('top', - $('nav').outerHeight() + 'px');

        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('nav').removeClass('nav-up').addClass('nav-down');
                $('.nav-up, .nav-down').css('top', '0px');
            }
        }

        lastScrollTop = st;
    }


    //$('.site-content').css('margin-top', $('header').outerHeight() + 'px');

    // Enable tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Init share popover if needed
    if ( $('#share-share').length ) {
      const sharePopoverEl = $("#share-share")[0];
      var popoverOpts = {
          html: true,
          content: $('[data-name="share-popover-source"]'),
          sanitize: false,
          template: '<div class="popover d-flex" role="tooltip"><div class="popover-body"></div></div>',
          title: '',
          trigger: 'click focus',
          placement: 'top'
      }
      const sharePopover = new bootstrap.Popover(sharePopoverEl, popoverOpts);
      sharePopoverEl.addEventListener('click', function(){$('[data-toggle="tooltip"]').tooltip('hide');});
    }

    // Enable tagbar scroll buttons
    $("#scrollLeftButton").on('click', function () {
      $('#tagBar').animate(
        { scrollLeft: "-=300" }
      );
    });

    $('#scrollRightButton').on('click', function () {
      $('#tagBar').animate(
        { scrollLeft: "+=300" }
      );
    });

});