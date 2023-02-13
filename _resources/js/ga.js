// 운영일 경우에만 실행
if(window.location.hostname == 'www.baropnng.com' || window.location.hostname == 'www.baropnng.co.kr' || window.location.hostname == 'www.baropnng.kr' || window.location.hostname == 'www.baropnng.net') {
    console.log('window.location.hostname', window.location.hostname);
    let ga_id = 'G-XNSHWEFPFH'; // 운영 GA id
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + ga_id;
    head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', ga_id);
}