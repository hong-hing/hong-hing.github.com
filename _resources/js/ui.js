
document.addEventListener('DOMContentLoaded', function() {
    const sUserAgent = navigator.userAgent;
    const isOpera = sUserAgent.indexOf("Opera") > -1;
    const isIE = sUserAgent.indexOf("compatible") > -1 
               && sUserAgent.indexOf("MSIE") > -1
               && !isOpera;
    const _body = document.querySelector('body');
    const initialClientHeight = window.innerHeight;
    let isIOS;

    localStorage.setItem('initialClientHeight', initialClientHeight);

    // vh
    const setScreenSize = () => {
        let vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const checkOS = () => {
        var agent = window.navigator.userAgent;
        if( agent.indexOf( 'iPhone' ) > -1 || agent.indexOf( 'iPad' ) > -1 ){
            // console.log('iOS');
            return isIOS = true;
        }
        // console.log('not iOS');
        return isIOS = false;
    }

    // navigation
    const navEvent = () => {
        const _openMenuBtn = document.querySelector('.e-menu');
        const _navigation = document.getElementById('navigation');
        const _wrap = document.getElementById('wrap');
        const dim = document.createElement('div');
        let _target;

        _openMenuBtn.addEventListener('click', (event) => {
            _target = event.currentTarget;
            dim.setAttribute('class', 'dimmed');
            dim.setAttribute('id', 'dimmedMenu');

            _target.classList.toggle('active');

            if( _target.classList.contains('active') ) {
                _navigation.classList.add('active');
                
                _wrap.append(dim);
            } else {
                _navigation.classList.remove('active');
                document.getElementById('dimmedMenu').remove();
            }
        });
    }

    const removeActiveClassevent = el => {
        [...el.parentElement.children].forEach(sib => sib.classList.remove('active'))
    };

    const scrollEventDetect = () => {
        let scrollTop = window.pageYOffset;
        const _header = document.getElementById('header');

        if(scrollTop >= 100) {
            _header.classList.add('scrolled');
        } else {
            _header.classList.remove('scrolled');
        }
    }

    const scrollDirectionDetect = () => {
        let preScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let lastScrollTop = 0;
        const _wrap = document.getElementById('wrap');

        window.addEventListener('scroll', () => {
            lastScrollTop = window.pageYOffset;

            if(preScrollTop < lastScrollTop) {
                // down
                _wrap.classList.remove('up-scroll');
                _wrap.classList.add('down-scroll');
            } else if(preScrollTop > lastScrollTop) {
                // up
                _wrap.classList.remove('down-scroll');
                _wrap.classList.add('up-scroll');
            }
            
            if(lastScrollTop === 0) {
                _wrap.classList.remove('down-scroll');
                _wrap.classList.remove('up-scroll');
            }

            preScrollTop = lastScrollTop;
        });
    }

    const defaultNavActiveSet = () => {
        mainScrollNavEvent();
    }

    const mainScrollNavEvent = () => {
        let scrollTop = window.pageYOffset;
        let menuSection = document.querySelectorAll('.section');
        let menuLI = document.querySelectorAll('.p-main #navigation .spread.PC-B li');
        let scrollEl = document.querySelector('body');

        let scrollBottom = (node) => {
            node.scrollTop = node.scrollHeight;
        }
        let bodyScrollBottom = scrollEl.scrollHeight - scrollTop - window.innerHeight;

        scrollBottom(scrollEl);

        menuSection.forEach( function(item, index) { 
            let targetTop = item.offsetTop - 100;

            if ( targetTop <= scrollTop ) { 
                removeActiveClassevent(menuLI[index]);
                menuLI[index].classList.add('active'); 
            } else if(scrollTop <= 52) {
                removeActiveClassevent(menuLI[index]);
                menuLI[0].classList.add('active');
            } else if(bodyScrollBottom == 0) {
                removeActiveClassevent(menuLI[index]);
                menuLI[menuLI.length - 1].classList.add('active');
            }
        });
    };

    const snbActiveScroll = () => {
        let _menus = document.querySelectorAll('.p-main #navigation .spread.PC-B a');
        let _target, _targetMenu, offsetY;

        if(_menus !== null) {
            [].map.call( _menus, item => {
                item.addEventListener('click', (event) => {
                    event.preventDefault();

                    _target = event.currentTarget;
                    _targetMenu = document.querySelector(_target.getAttribute('href'));
                    offsetY = _targetMenu.offsetTop;

                    window.scrollTo(0, offsetY);
                });
            } );
        }
    };

    const textMoveDetectScroll = () => {
        let scrollTop = window.pageYOffset;
        let moveTextList = document.querySelectorAll('.text-move');
        let scrollEl = document.querySelector('body');
        let thisboxTop;

        let scrollBottom = (node) => {
            node.scrollTop = node.scrollHeight;
        }

        scrollBottom(scrollEl);

        moveTextList.forEach( function(item, index) { 
            let targetTop;
            let windowH = window.innerHeight;
            thisboxTop = item.parentElement.offsetTop;
            targetTop = item.offsetTop + thisboxTop;

            if ( targetTop - windowH <= scrollTop ) { 
                removeActiveClassevent(moveTextList[index]);
                moveTextList[index].classList.add('detect'); 
            } 
        });
    };

    const isTextMoveInWindow = () => {
        let moveTextList = document.querySelectorAll('.text-move');
        let windowH = window.innerHeight;

        [].map.call(moveTextList, item => {
            if ( item.pageYOffset < windowH ) {
                console.log(window.pageYOffset , windowH);
                textMoveDetectScroll();
            }
        });
    }

    // resize
    window.addEventListener('resize', () => {
        // default
        setScreenSize();

    });

    window.addEventListener('scroll', () => {
        clearTimeout(window.scrollEndTimer);
        window.scrollEndTimer = setTimeout(() => {
            scrollEventDetect();
            textMoveDetectScroll();

            let checkMain = document.querySelector('.p-main');
            if(checkMain !== null) {
                mainScrollNavEvent();
            }
        }, 20);
    });

    window.addEventListener('load', () => {
        document.getElementById('wrap').classList.add('loaded');
        init();
    });

    const init = () => {
        // default
        checkOS();
        setScreenSize();
        navEvent();
        snbActiveScroll();
        scrollEventDetect();

        scrollDirectionDetect();

        isTextMoveInWindow();

        let checkMain = document.querySelector('.p-main');
        if(checkMain !== null) {
            defaultNavActiveSet();
        }
    };

    // init();
    
});
