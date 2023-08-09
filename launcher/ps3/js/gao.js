var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");

// JavaScript Document
    /*********************************/
    var _sd = 'mhf-z.jp'; //ãƒ‰ãƒ¡ã‚¤ãƒ³
    var _gaid = ''; //GAç”¨ID
    var _uaid = 'UA-82931804-1'; //UAç”¨ID
    /*********************************/

    var trackPageView = trackPageView || function(){};
    var trackEvent    = trackEvent || function(){};
    var gaoRedirect   = gaoRedirect || function(){};

    var _gaq = _gaq || [];

    (function(){
        'use strict';
        if (window.env.isConsole) {
            return false;
        }
        var _garef;
        if (location.search.indexOf('gareferrer=') > -1) {
            var _p = location.search.replace('?', '').split('&');
            for (var i = 0; i < _p.length; i++) {
                var _q = _p[i].split('=');
                if ((_q.length > 1) && (_q[0] === 'gareferrer')) {
                    _garef = decodeURIComponent(_q[1]);
                    //ga('set', 'referrer', decodeURIComponent(kv[1]));
                    break;
                }
            }
        }

        //GA
        if (_gaid) {
            _gaq.push(['_setAccount', _gaid]);
            _gaq.push(['_setDomainName', _sd]);
            if(_garef){
                _gaq.push(['_setReferrerOverride', _garef]);
            }
            _gaq.push(['_trackPageview']);
            (function() {
                var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
                ga.src = ('https:' == document.location.protocol ? 'https://web.archive.org/web/20191218022902/https://ssl' : 'https://web.archive.org/web/20191218022902/http://www') + '.google-analytics.com/ga.js';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
            })();
        }

        //UA
        if (_uaid) {
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','https://web.archive.org/web/20191218022902/http://www.google-analytics.com/analytics.js','ga');

            ga('create', _uaid,'auto', {'allowLinker': true});
            ga('require', 'linkid', 'linkid.js');
            ga('require', 'displayfeatures');
            ga('require', 'linker');

            if (_garef) {
                ga('set', 'referrer', _garef);
            }
            ga('send', 'pageview');
        }

        var gatrace = function(val,name){
            if (window.env.isConsole) {
                return false;
            }
            var n = name || 'group';
            if(val === 'group'){
                try{console.group(n);} catch(e){}
            } else if(val === 'end') {
                try{console.groupEnd();} catch(e){}
            } else{
                try{console.dir(val);} catch(e){console.log(val);}
            }
        };

        /*
        * trackPageView
        * uri_str //page url
        * title_str //page title
        */
        trackPageView = function(uri_str, title_str){
            uri_str = String(uri_str);
            title_str = String(title_str);
            //UA
            try{ga('send', 'pageview', {'page':uri_str, 'title':title_str});}catch(e){}
            //GA
            try{_gaq.push(['_trackPageview', uri_str]);}catch(e){}

            if (location.host.indexOf(_sd) < 0) {
                gatrace('group','trackPageView');
                gatrace('URL : '+ uri_str);
                gatrace('Title : '+ title_str);
                if ((uri_str.indexOf('/') !== 0) && (uri_str.indexOf('http://') !== 0) && (uri_str.indexOf('https://') !== 0)) {
                    gatrace('attention : URLãŒç›¸å¯¾ãƒ‘ã‚¹ã«ãªã£ã¦ã„ã¾ã™ã€‚ãƒ«ãƒ¼ãƒˆãƒ‘ã‚¹ã‹ãƒ•ãƒ«ãƒ‘ã‚¹ãŒæœ›ã¾ã—ã„ã§ã™ã€‚URLã®æŒ‡å®šã‚’ç¢ºèªã—ã¦ãã ã•ã„ã€‚');
                }
                gatrace('end');
            }
        };

        /*
        * trackEvent
        * cat_str //category
        * act_str //action
        * lbl_str //label
        * val_int //optional value. (int only)
        */
        trackEvent = function(cat_str, act_str, lbl_str, val_int){
            cat_str = String(cat_str);
            act_str = String(act_str);
            lbl_str = String(lbl_str);
            val_int = (isNaN(val_int))?null:val_int;
            //UA
            try{ga('send', 'event', cat_str, act_str, lbl_str, val_int);}catch(e){}
            //GA
            try{_gaq.push(['_trackEvent', cat_str, act_str, lbl_str, val_int, true]);}catch(e){}

            if (location.host.indexOf(_sd) < 0) {
                gatrace('group','trackEvent');
                gatrace('Category : '+ cat_str);
                gatrace('Action : '+ act_str);
                gatrace('Label : '+ lbl_str);
                gatrace('end');
            }
        };
        /*
        * gaoRedirect
        * href //redirect path
        * isHrefMode //true:location.href, other:location.replace()
        */
        gaoRedirect = function(href, isHrefMode){
            var redirect_url = href + location.search;
            if (document.referrer) {
                var referrer = "gareferrer=" + encodeURIComponent(document.referrer);
                redirect_url = redirect_url + (location.search ? '&' : '?') + referrer;
            }
            if (isHrefMode) {
                location.href = redirect_url;
            } else {
                location.replace(redirect_url);
            }
        };

    })();

    (function(){
        'use strict';
        var addEvt = function(trg,lis,func){
            try{trg.addEventListener(lis,func,false);}
            catch(e){trg.attachEvent('on'+lis,func);}
        };

        addEvt(window,'load',function(){
            var tagjs = document.createElement("script");
            var s = document.getElementsByTagName("script")[0];
            tagjs.async = true;
            tagjs.src = "//web.archive.org/web/20191218022902/http://s.yjtag.jp/tag.js#site=WWwSEkZ";
            s.parentNode.insertBefore(tagjs, s);
        });

        var tag = '<!-- Global site tag (gtag.js) - AdWords: 999196363 -->';
        tag += '<script async src="https://web.archive.org/web/20191218022902/https://www.googletagmanager.com/gtag/js?id=AW-999196363"></script>';
        tag += '<script>';
        tag += 'window.dataLayer = window.dataLayer || [];';
        tag += 'function gtag(){dataLayer.push(arguments);}';
        tag += "gtag('js', new Date());";
        tag += "gtag('config', 'AW-999196363');";
        tag += '</script>';
        document.write(tag);
    })();
}