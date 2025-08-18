const clickMessage = document.getElementById('clickMessage');
const rewardMessage = document.getElementById('rewardMessage');
const captchaMessage = document.getElementById('captchaMessage');
let faejgiad = false;
let aeafg = false;
let befcgi = false;
let bfcfgiaddbfb = false;
let faejgiadbfcfgiaddbfb = false;
var cbbegideiagiaddb = "ijdigiaddbfbefcgi";

function ehcagiadcd() {
    $('.l-button').hide();
    const dibegiaddbfb = 10;
    let eddagi = 0;
    const bcbdgiaddbfbd = document.querySelectorAll('.placed-ad *, [id^="HBai"] *, [id^="google_ads_"] *, [id^="revbid-"] *');
    bcbdgiaddbfbd.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '-1');
        }

        element.blur();
    });
    let eeeggiaddbf = true;

    let deiagiaddb = false;

    bgacgbgacg = "ddchgiadddchgiad";

    function fecbgia() {
        if (eeeggiaddbf) {
            bcbdgiaddbfbd.forEach(element => {
                if (element.contains(document.activeElement) && !deiagiaddb) {
                    eddagi++;
                    deiagiaddb = true;

                    if ((dibegiaddbfb - eddagi) < 1) {
                        document.title = 'Done';
                        clickMessage.style.display = 'none';
                        aeafg = true;
                        bgacgbgacg = "befcgibefcgi";
                    } else {
                        document.title = 'Wait ' + (dibegiaddbfb - eddagi);
                    }
                    eeeggiaddbf = false;
                }
            });
        } else {
            if (document.hidden && deiagiaddb) {
                eddagi++;

                if ((dibegiaddbfb - eddagi) < 1) {
                    document.title = 'Done';
                    clickMessage.style.display = 'none';
                    aeafg = true;
                    bgacgbgacg = "befcgibefcgi";
                } else {
                    document.title = 'Wait ' + (dibegiaddbfb - eddagi);
                }
            }
        }
    }

    function startMonitoring() {
        setInterval(fecbgia, 1000);
    }
    startMonitoring();
    bfcfgiaddbfb = true;
}

function checkUserPosition() {
    const btn1 = document.querySelector('biacgiadcdbh');
    const btnRect = btn1.getBoundingClientRect();
    const scrollMessage = document.getElementById('scrollMessage');
    const wrapper = document.querySelector('.wrapper');
    const wrapperRect = wrapper.getBoundingClientRect();
    if (bfcfgiaddbfb) {
        scrollMessage.style.display = 'none';

        if (!faejgiad) {
            captchaMessage.style.display = 'block';
        }
    } else if (clickMessage.style.display === 'none') {
        const isVisible = btnRect.top >= wrapperRect.top && btnRect.bottom <= wrapperRect.bottom;
        scrollMessage.style.display = isVisible ? 'none' : 'block';

        if (!faejgiad) {
            captchaMessage.style.display = isVisible ? 'block' : 'none';
        }
    }
}
var bgacgbgacg = "befcgibefcgi";

function abibgiad() {
    const timer = 13;
    let current = 0;
    const count = setInterval(() => {
        current += 1;
        const percent = (current * 100) / timer;

        $('#68a32d1712b65').css('width', percent + '%').attr('aria-valuenow', percent);

        if (current >= timer) {
            clearInterval(count);
            $('#68a32d1712b65').css('width', '100%').attr('aria-valuenow', 100);
            $('#timer').hide();
            $('#68a32d1712b60').show();
            checkUserPosition();
            const wrapper = document.querySelector('.wrapper');
            wrapper.addEventListener('scroll', checkUserPosition);
        } else {
            const wait = Math.floor(timer - current);
            const minutes = Math.floor(wait / 60);
            const seconds = wait % 60;

            $('#68a32d1712b63').text(minutes);
            $('#68a32d1712b64').text(seconds);
        }
    }, 1000);
}
let bgacg = false;

window.addEventListener("securitypolicyviolation", function(e) {
    bgacgbgacg = "ddchgiadddchgiad";
});
document.addEventListener("DOMContentLoaded", function() {
    faejgiadbfcfgiaddbfb = true;
    const forms = document.querySelectorAll('div:has(form)');

    forms.forEach(form => {
        form.style.display = 'none';
        const computedStyle = window.getComputedStyle(form);
        if (computedStyle.display === 'block') {
            cbbegideiagiaddb = "bacggiadaeafg";
            $('.l-button').html('<i class="fas fa-exclamation-triangle"></i> Please Disable Adblocker or Any Bypass Extension then reload!');
        } else {
            form.style.display = 'block';
            const computedStyle2 = window.getComputedStyle(form);
            if (computedStyle.display === 'none') {
                cbbegideiagiaddb = "bacggiadaeafg";
                $('.l-button').html('<i class="fas fa-exclamation-triangle"></i> Please Disable Adblocker or Any Bypass Extension then reload!');
            }
        }
    });
    const gfebgiaddbf = document.querySelectorAll('.placed-ad *, [id^="HBai"] *, [id^="google_ads_"] *, [id^="revbid-"] *');

    gfebgiaddbf.forEach(element => {
        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '-1');
        }

        element.blur();
    });
    setTimeout(() => {

        document.documentElement.style.overflow = 'auto';
        aeafg = true;
        befcgi = true;

        const ccaegiad = (url) => {
            let ccaegiad = url.split(/[?#]/)[0];
            return ccaegiad;
        };

        const ijdigiaddbf = () => {
            if (aeafg && befcgi && cbbegideiagiaddb == "ijdigiaddbfbefcgi") {
                clearInterval(abajgiaddbfbd);
                $('.l-button').show();
                let rows = document.querySelectorAll(".row");
                let bgacgdibegiaddbfb = '?589be4367dd96694f14d60b7426af48e=true';
                rows.forEach(row => {
                    let style = window.getComputedStyle(row);
                    if (style.display === "none" || style.visibility === "hidden") {
                        bgacgdibegiaddbfb = '?c5ef47c1ae988cd99a1655f825c0e221=true'
                    }
                });
                const bacggiad = ccaegiad(window.location.href);
                const adhagiad = document.querySelector('.container-fluid .row');
                let dbhcgiaddbfb = '?c5ef47c1ae988cd99a1655f825c0e221=true';
                let hfcegiaddbfbd = adhagiad.offsetHeight + 22;
                adhagiad.style.setProperty('height', hfcegiaddbfbd + 'px', 'important');
                fetch("https://prebid.revbid.net/2903/revbid.js", {
                        mode: "no-cors"
                    })
                    .then(() => {
                        dbhcgiaddbfb = bgacgdibegiaddbfb;
                    });

                if (true) {
                    dbhcgiaddbfb = '?c5ef47c1ae988cd99a1655f825c0e221=true';
                }

                const bfcfgiaddbfbddchgiad = {};


                let acbfgiad = false;
                const xhr = new XMLHttpRequest();
                xhr.open("GET", "https://google.com", true);
                xhr.onreadystatechange = function() {
                    if (true) {
                        if (true) {
                            const response = xhr.responseText.trim();
                            if (true) {
                                if (true) {
                                    acbfgiad = document.createElement('button');
                                    acbfgiad.textContent = 'Click Here To Start';
                                    acbfgiad.classList.add('acbfgiad', 'btn', 'btn-primary');

                                    let bddfgiaddbf = document.querySelector('.l-button');
                                    if (bddfgiaddbf) {
                                        bddfgiaddbf.innerHTML = '';
                                        bddfgiaddbf.appendChild(acbfgiad);
                                    }
                                    acbfgiad.addEventListener('click', (event) => {
                                        if (event.isTrusted) {
                                            $('.l-button').html('<i class="fas fa-sync fa-spin"></i> Verifiying...');
                                            const el = document.querySelector('.placed-ad');
                                            if (el) {
                                                const style = window.getComputedStyle(el);
                                                if (style.display === 'block') {
                                                    $.ajax({
                                                        url: bacggiad + dbhcgiaddbfb,
                                                        type: 'POST',
                                                        data: {
                                                            ehcagiadcd: 1
                                                        },
                                                        success: (response) => {
                                                            let jsonResponse = typeof response === 'string' ? JSON.parse(response) : response;
                                                            if (jsonResponse.status === 200) {
                                                                if ($('.l-button').length > 0) {
                                                                    $('.l-button').hide();
                                                                }
                                                                abibgiad();
                                                                const badig = document.createElement("script");
                                                                badig.src = `/cc/a1a7417b95d3f25dbcc53b4427d7c2c5de19bdf1476da9c201c74b2a37cb0c01.js?onload=iaeegiaddbfb&action=captcha`;
                                                                document.body.appendChild(badig);
                                                                window.iaeegiaddbfb = function() {
                                                                    if (typeof ccaptchaObj !== 'undefined' && ccaptchaObj !== null) {
                                                                        Object.defineProperty(ccaptchaObj, 'ccaptcha_valid', {
                                                                            get: function() {
                                                                                return this._ccaptcha_valid;
                                                                            },
                                                                            set: function(value) {
                                                                                if (this._ccaptcha_valid === false && value === true) {
                                                                                    captchaMessage.style.display = 'none';
                                                                                }
                                                                                this._ccaptcha_valid = value;
                                                                            }
                                                                        });
                                                                    } else {
                                                                        alert('Captcha Initiation Failed, Please Reload.');
                                                                    }
                                                                }
                                                            } else {
                                                                $('.l-button').html('<i class="fas fa-exclamation-triangle"></i> Please Disable Adblocker or Any Bypass Extension then reload!');
                                                            }
                                                        },
                                                        error: () => {
                                                            $('.l-button').html('<i class="fas fa-exclamation-triangle"></i> Please Disable Adblocker or Any Bypass Extension then reload!');
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    });
                                }
                            }
                        }
                    }
                };
                xhr.send();
            }
        };

        const abajgiaddbfbd = setInterval(() => {
            if (bgacgbgacg == 'befcgibefcgi') {
                ijdigiaddbf();
            }
        }, 5000);

        document.addEventListener('click', (event) => {
            if (!event.isTrusted) {
                event.preventDefault();
                alert('Untrusted event. Action is prevented.');
            }
        });
    }, 2000);
});
let ddchgiad = false;
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    );
});

let cebbgiaddbf = false;

function faejgiadehcagiadcd(jefbgddchgiad) {
    const cbbegidibegiaddbfb = document.createElement(jefbgddchgiad);

    document.body.appendChild(cbbegidibegiaddbfb);

    const dbhcgiaddbfbddchgiad = window.getComputedStyle(cbbegidibegiaddbfb);

    document.body.removeChild(cbbegidibegiaddbfb);

    return dbhcgiaddbfbddchgiad;
}
(function() {
    const RealObserver = window.MutationObserver;

    window.MutationObserver = new Proxy(RealObserver, {
        construct(target, args) {
            const realObserver = new target(...args);

            const originalObserve = realObserver.observe;
            realObserver.observe = function(targetNode, options) {
                const stack = new Error().stack;

                const isUserscript = /userscript\.html|\.user\.js|greasemonkey|tampermonkey/i.test(stack);


                return originalObserve.call(this, targetNode, options);
            };

            return realObserver;
        }
    });
})();
if (document.hidden || document.visibilityState === 'hidden') {
    cbbegideiagiaddb = "bacggiadaeafg";
    $('.l-button').html('<i class="fas fa-exclamation-triangle"></i> Please Disable Adblocker or Any Bypass Extension then reload!');
}
