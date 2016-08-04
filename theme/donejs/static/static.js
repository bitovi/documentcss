steal(
    "jquery",
    "./content_list.js",
    "./frame_helper.js",
    "./versions.js",
    "./js/line-highlight",
    "./js/collapse.js",
    "./js/dropdown.js",
    "./js/tooltip.js",
    "./js/popover.js",
    "./js/responsive-tables.js",
    "./js/lazy-youtube.js",
    "./js/affix.js",
    "./styles/styles.less!",
    "./prettify", function($, ContentList, FrameHelper, Versions, Highlighter){
        var codes = document.getElementsByTagName("code");
        for (var i = 0; i < codes.length; i++) {
            var code = codes[i];
            if (code.parentNode.nodeName.toUpperCase() === "PRE") {
                code.className = code.className + " prettyprint";
            }
        }
        prettyPrint();
        Highlighter();

        new ContentList(".contents");
        new FrameHelper("body");
        new Versions($("#versions, .sidebar-title:first"));


        $('textarea').click(function(){
            this.select();
        });


        //set Guides as active in main navigation if nothing else is active
        if ( $( ".navbar-nav:first > .active" ).length === 0 ) {
            if(window.location.href.indexOf("/docs/") !== -1) {
                $( ".guides-menu" ).addClass( "active" );
            } else if(window.location.href.indexOf("/examples/")){
                $( ".examples-menu" ).addClass( "active" );
            }

        }

        var isMobileSize = false;
        var windowResize = function () {
            var width = $( window ).width();
            if ( width < 768 ) {
                isMobileSize = true;
            } else {
                isMobileSize = false;
            }
        };
        windowResize();
        $( window ).resize( windowResize );

        $( ".sidebar-wrapper" ).mousemove( function ( m ) {
            if ( !isMobileSize ) {
                var $this = $( this );
                var hoverScrollZoneSize = 50;
                var pos = $this.position();
                if ( m.clientY < pos.top + hoverScrollZoneSize ) {
                    //scroll up
                    $this.scrollTop( $this.scrollTop() - 10 );
                } else if ( m.clientY > pos.top + $this.height() - hoverScrollZoneSize ) {
                    //scroll down
                    $this.scrollTop( $this.scrollTop() + 10 );
                }
            }
        });


        var getNavToHeaderEl = function ( hEl ) {
            var id = "";
            if ( hEl.length ) {
                id = hEl[ 0 ].id;
            } else if ( hEl.id ) {
                id = hEl.id;
            } else if ( typeof hEl === "string" ) {
                id = hEl;
            }
            if ( id.length === 0 ) {
                return $();
            }
            return $( ".contents a[href*='" + id + "']" );
        };

        $( "section.comment h3" ).each(function(){
            //fix duplicate id problem
            var ids = $( '[id="' + this.id + '"]' );
            if( ids.length > 1 && ids[ 0 ] === this ) {
                var navTo = getNavToHeaderEl( ids );
                ids.each( function ( x, el ) {
                    var aEl = navTo.get( x );
                    aEl.href = aEl.href.replace( el.id, el.id + x );

                    el.id = el.id + x;
                });
            }
        });

        var getSpyableElementFromPoint = (function () {
            var lastElAtPoint, x, y;
            var fromThese = $( "section.comment > *" );

            var eachFn = function ( i, el ) {
                var elPos = el.getBoundingClientRect();
                if ( elPos.left <= x && x <= elPos.right && elPos.top <= y && y <= elPos.bottom ) {
                    lastElAtPoint = el;
                }
            };

            return function ( xArg, yArg ) {
                lastElAtPoint = null;
                x = xArg;
                y = yArg;
                fromThese.each( eachFn );
                return lastElAtPoint;
            };
        })();

        var scrollSpyCurrentH2 = $( "#scrollSpyCurrentH2" );
        var scrollSpyCurrentH3 = $( "#scrollSpyCurrentH3" );
        var activeH2Li = $();
        var doJQCollapsing = $( "body:not(.home)" ).length ? true : false;

        if ( doJQCollapsing ) {
            $( ".contents ul ul" ).hide();
        }

        var disableBodyScroll = [];
        var setBodyScroll = function () {
            var doDisable = false;
            for ( var i = 0; i < disableBodyScroll.length; i++ ) {
                doDisable |= disableBodyScroll[ i ]();
            }
            if ( doDisable ) {
                document.body.style.overflow = "hidden";
                $( "#greyOutUnderNav" ).show();
            } else {
                document.body.style.overflow = "";
                $( "#greyOutUnderNav" ).hide();
            }
        };

        var scrollPosOnMenuOpen = -1;
        $( ".scroll-spy-title" ).on( "click", function () {
            var menu = $( ".sidebar-wrapper" );
            if ( menu.is( ".active" ) ) {
                menu.removeClass( "active" );
                setBodyScroll();
                $( this ).find( ".menu-indicator" ).addClass( "menus-closed" ).removeClass( "menus-open" );
                scrollPosOnMenuOpen = -1;
            } else {
                menu.addClass( "active" );
                setBodyScroll();
                $( this ).find( ".menu-indicator" ).addClass( "menus-open" ).removeClass( "menus-closed" );
                scrollPosOnMenuOpen = $( window ).scrollTop();
            }
        });
        disableBodyScroll.push( function () {
            return $( ".sidebar-wrapper" ).is( ".active" );
        });

        $( function () {
            var menu = $( "#bs-example-navbar-collapse-1" );
            if ( !menu.length ) return;

            disableBodyScroll.push( function () {
                return menu.is( ".in" );
            });

            menu.on( "shown.bs.collapse", setBodyScroll );
            menu.on( "hidden.bs.collapse", setBodyScroll );
        });

        $( "#greyOutUnderNav" ).click( function () {
            if ( $( ".sidebar-wrapper" ).is( ".active" ) ) {
                $( ".scroll-spy-title" ).click();
            }
            if ( $( "#bs-example-navbar-collapse-1" ).is( ".in" ) ) {
                $( "#bs-example-navbar-collapse-1" ).collapse( "hide" );
            }
        });

        var lastH3 = null;
        var bounceAnimTO = null;
        $( window ).scroll(function () {
            //if ( scrollPosOnMenuOpen > -1 ) {
            //    $( 'html, body' ).scrollTop( scrollPosOnMenuOpen );
            //    return;
            //}
            var el = $( getSpyableElementFromPoint( ~~( document.body.offsetWidth / 2 ), 250 ) );
            if ( !el.length ) {
                var temp = $( ".comment h2:first-of-type" );
                if ( temp.length && $( window ).scrollTop() + 250 < temp.offset().top ) {
                    scrollSpyCurrentH2.addClass( "h2Only" );
                    scrollSpyCurrentH2.html( "Table of Contents" );
                    scrollSpyCurrentH3.html( "" );
                }
                return;
            }
            var h2 = el[ 0 ].tagName.toLowerCase() === "h2" ? el : el.prevAll( "h2:first" );
            var h3 = el[ 0 ].tagName.toLowerCase() === "h3" ? el : el.prevAll( "h3:first" );

            if ( !h2.length ) {
                return;
            }

            var navToH2 = getNavToHeaderEl( h2 ).closest( "li" );
            var navToH3 = navToH2.find( "ul li" ).has( getNavToHeaderEl( h3 ) );

            if ( navToH3.length ) {
                scrollSpyCurrentH2.removeClass( "h2Only" );
                scrollSpyCurrentH2.html( navToH2.find( "a" ).html() );
                scrollSpyCurrentH3.html( navToH3.find( "a" ).html() );
                if ( lastH3 !== navToH3[ 0 ] ) {
                    lastH3 = navToH3[ 0 ];
                    clearTimeout( bounceAnimTO );
                    scrollSpyCurrentH3.addClass( "js-shrink-bounce" );
                    bounceAnimTO = setTimeout( function () {
                        scrollSpyCurrentH3.removeClass( "js-shrink-bounce" );
                    }, 75 );
                }
            } else {
                scrollSpyCurrentH2.addClass( "h2Only" );
                scrollSpyCurrentH2.html( navToH2.find( "a" ).html() );
                //scrollSpyCurrentH3.html( "" );
            }

            $( ".sidebar ul ul li.active" ).not( navToH3 ).removeClass( "active" );
            navToH3.addClass( "active" );

            var curH2Li = navToH2.closest( "li" );
            if ( activeH2Li[ 0 ] !== curH2Li[ 0 ] ) {
                activeH2Li.removeClass( "active" );
                if ( doJQCollapsing ) activeH2Li.find( "ul" ).hide( 250 );

                activeH2Li = curH2Li;

                activeH2Li.addClass( "active" );
                if ( doJQCollapsing ) activeH2Li.find( "ul" ).show( 250 );
            }
        });

        $( "body:not(.home)" ).find( "h3, h4, h5" ).each( function () {
            if ( !this.id ) {
                var tag = this.tagName.toLowerCase();
                var prevTag = "h" + ( parseInt( tag.replace( /h(\d)/, "$1" ) ) - 1 );
                var prevEl = $( this ).prevAll( prevTag ).get( 0 );
                var prevId = (prevEl) ? prevEl.id : '';

                this.id = prevId + "__" + $( this ).text().replace( /[^a-z0-9]/gi, "" );
            }
            var html = "<a class='linkToHeader' href='#section=" + this.id + "'>";
            html += "<img src='static/img/link.svg'>";
            html += "</a>";
            $( this ).prepend( html );
        });

        //hijack guide page jumps, animate scroll
        $( function () {
            var clickFn = function () {
                var thisLi = $( this ).closest( "li" );
                if ( $( ".sidebar-wrapper" ).is( ".active" ) && thisLi.is( "ul > li > ul > li" ) ) {
                    $( ".scroll-spy-title" ).click();
                }
            };

            $( ".contents a" ).each( function () {
                this.href = this.href.replace( "#", "#section=" );

                $( this ).on( "click", clickFn );

                return true;
            });

            var hashOnLoad = window.location.hash;
            if ( hashOnLoad ) {
                var jumpTo = hashOnLoad.replace( /.*?#section=/, "#" );
                if ( $( jumpTo ).length ) {
                    var offset = -55;
                    $( 'html, body' ).animate({
                        scrollTop: $( jumpTo ).offset().top + offset
                    }, 500);
                }
            }
        });

        window.addEventListener( "hashchange", function ( hashChangeEvent ) {
            var offset = -55;
            var newHash = hashChangeEvent.newURL.replace( /.*?(#.*)/g, "$1" );

            if ( newHash.indexOf( "#section=" ) === -1 ) return;

            var jumpTo = newHash.replace( /.*?#section=/, "#" );
            var distance = Math.abs($('body').scrollTop() - ($( jumpTo ).offset().top + offset));
            var duration = Math.max(500, (distance / 6000) * 250);

            $( 'html, body' ).animate({
                scrollTop: $( jumpTo ).offset().top + offset
            }, duration);
        }, false );





        $( window ).scroll(function () {
            if ( !isMobileSize ) return;

            //.container-fluid > row > *
                //.usability.wrapper
                //.performance.wrapper
                //.maintainable.wrapper
                //.community.wrapper

            var el = document.elementFromPoint( ~~( document.body.offsetWidth / 2 ), 325 );
            el = $( el ).closest( ".container-fluid > .row > *" );
            if ( !el.length ) {
                return;
            }
            var curSect = el.is( ".usability.wrapper, .performance.wrapper, .maintainable.wrapper, .community.wrapper" );
            if ( curSect ) {
                curSect = el;
            } else {
                curSect = el.prevAll( ".usability.wrapper, .performance.wrapper, .maintainable.wrapper, .community.wrapper" ).eq( 0 );
            }

            if ( !curSect.length && $( window ).scrollTop() < ($( ".hero" ).height() - 50) ) {
                //none are active and you're above usability.wrapper so un-fixed and un-condensed
                $( "body.home .overview-nav, body.community .overview-nav" ).removeClass( "fixed" );
                $( "body.home .overview-nav .overview-btn, body.community .overview-nav .overview-btn" ).removeClass( "condensed" ).removeClass( "active" );
            } else if ( curSect.is( ".usability.wrapper" ) ) {
                //fixed, condensed, usability is active
                $( "body.home .overview-nav, body.community .overview-nav" ).addClass( "fixed" );
                $( "body.home .overview-nav .overview-btn, body.community .overview-nav .overview-btn" ).addClass( "condensed" ).removeClass( "active" );
                $( "body.home .overview-nav .usability-btn, body.community .overview-nav .usability-btn" ).addClass( "active" );
            } else if ( curSect.is( ".performance.wrapper" ) ) {
                //fixed, condensed, performance is active
                $( "body.home .overview-nav, body.community .overview-nav" ).addClass( "fixed" );
                $( "body.home .overview-nav .overview-btn, body.community .overview-nav .overview-btn" ).addClass( "condensed" ).removeClass( "active" );
                $( "body.home .overview-nav .performance-btn, body.community .overview-nav .performance-btn" ).addClass( "active" );
            } else if ( curSect.is( ".maintainable.wrapper" ) ) {
                //fixed, condensed, maintainable is active
                $( "body.home .overview-nav, body.community .overview-nav" ).addClass( "fixed" );
                $( "body.home .overview-nav .overview-btn, body.community .overview-nav .overview-btn" ).addClass( "condensed" ).removeClass( "active" );
                $( "body.home .overview-nav .maintainable-btn, body.community .overview-nav .maintainable-btn" ).addClass( "active" );
            } else if ( curSect.is( ".community.wrapper" ) ) {
                //none are active but still is fixed and condensed
                $( "body.home .overview-nav, body.community .overview-nav" ).addClass( "fixed" );
                $( "body.home .overview-nav .overview-btn, body.community .overview-nav .overview-btn" ).addClass( "condensed" ).removeClass( "active" );
            }
        });
        //hijack home page page jumps, animate scroll
        $( function () {
            $( ".triptych .box" ).click( function () {
                var offset = -140;
                var jumpto = $( this ).attr( "data-scrollto" );
                if ( jumpto === "#performance" ) {
                    offset = -50;
                }
                $( 'html, body' ).animate({
                    scrollTop: $( jumpto ).offset().top + offset
                }, 500);
            });

            var clickFn = function () {
                var offset = -140;
                var jumpto = this.href.replace( /.*?#section=/, "#" );
                if ( jumpto === "#performance" ) {
                    offset = -95;
                }
                $( 'html, body' ).animate({
                    scrollTop: $( jumpto ).offset().top + offset
                }, 500);
            };

            var hashOnLoad = window.location.hash;
            var jumpOnLoad = null;

            $( ".overview-nav a" ).each( function () {
                this.href = this.href.replace( "#", "#section=" );

                if ( hashOnLoad && this.href.replace( /.*?#section=/, "#section=" ) === hashOnLoad ) {
                    jumpOnLoad = this;
                }

                $( this ).on( "click", clickFn );

                return true;
            });

            if ( jumpOnLoad ) clickFn.call( jumpOnLoad );
        });

        $(function () {
          $('.matrix-table [data-toggle="popover"]').popover({
            viewport: {
              selector: '.table-wrapper'
            },
            container: '.table-wrapper'
          });
          $('[data-toggle="popover"]:not(.matrix-table [data-toggle="popover"])').popover();
          $('[data-toggle="popover"]').on('shown.bs.popover', function(ev){
                var popoverId = $(this).attr('aria-describedby');
                $('#' + popoverId).find('.youtube-player').lazyYoutube();
            });
        });

        // Only show one popover at a time
        $('body').on('click', function (e) {
          $('[data-toggle="popover"][aria-describedby]').each(function () {
            var $trigger = $(this);
            var $target = $(e.target);
            var popoverId = $trigger.attr('aria-describedby');
            var $popover = $('#' + popoverId);

            var isTrigger = $target.is($trigger);
            var isWithinTrigger = $target.parents('[aria-describedby="' + popoverId + '"]').length !== 0;
            var isWithinPopup = $target.parents('#' + popoverId).length !== 0;

            // Hide a popover if the click is outside of the current popover
            // Where outside means the click:
            // - is not on the trigger
            // - is not on an element inside the trigger (for complex triggers)
            // - is not on an element inside the open popover
            if(!(isTrigger || isWithinTrigger || isWithinPopup)) {
                // There is a bug in Bootstrap where calling `hide` does not
                // reset the inState object so the next click on a trigger does
                // not show a popup. https://github.com/twbs/bootstrap/issues/16732
                // So we dig into the popover instance and do that ourselves
                $trigger.one('hidden.bs.popover', function(){
                    $(this).data('bs.popover').inState.click = false;
                }).popover('hide');
            }
          });
        });

        $(function () {
            if($('#js-matrix-legend-affix').length) {

                $('.has-popover').removeAttr('title data-original-title');

                var $el = $('.matrix-wrapper');
                $('#js-matrix-legend-affix').affix({
                    offset: {
                        top: $el.offset().top,
                        // about 46798.73px from the bottom
                        bottom: function() {
                            return $(document).height() - ($el.offset().top + $el.height() + 60)
                        }
                    }
                });
            }
        })

    });
