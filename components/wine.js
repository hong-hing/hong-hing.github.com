let wineComponent = {
    template: `
    <div class="wrap p-sub" id="wrap">
    <header class="header" id="header">
        <div class="header-inner">
            <nav class="nav font-serif" id="navigation">
                <header class="nav-header MO-B">
                    <button class="btn-icon hamberger e-menu" title="메뉴 보기"><span class="bar"></span></button>
                    <div class="logo"><img src="../_resources/images/logo.svg" alt="OPNNG"></div>
                </header>
                <div class="nav-inner">
                    <div class="spread MO-B">
                        <ul class="menu">
                            <li><a href="/index.html">OPNNG</a></li>
                            <li class="active"><a href="./wine.html">Wine</a></li>
                            <li><a href="./cuisine.html">Cuisine</a></li>
                            <li><a href="./art.html">Art</a></li>
                            <li><a href="./history.html">History</a></li>
                            <li><a href="./membership.html">Membership</a></li>
                        </ul>
                        <ul class="menu">
                            <li><a href="./book.html">Book</a></li>
                            <li><a href="https://www.instagram.com/bar_opnng/" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                    <div class="spread PC-B">
                        <ul class="menu">
                            <li class="active"><a href="#OPNNG">OPNNG</a></li>
                            <li><a href="#wine">Wine</a></li>
                            <li><a href="#cuisine">Cuisine</a></li>
                            <li><a href="#art">Art</a></li>
                            <li><a href="#history">History</a></li>
                            <li><a href="#membership">Membership</a></li>
                        </ul>
                        <ul class="menu">
                            <li><a href="#book">Book</a></li>
                            <li><a href="https://www.instagram.com/bar_opnng/" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                    <p class="foot MO-B">&copy;copyright all rights reserved OPNNG</p>
                </div>
            </nav>
            <h1 class="logo"><a href="/"><img src="../_resources/images/logo.svg" alt="OPNNG"></a></h1>
            <button class="btn btn-normal b-200 font-serif active-kr" type="button"><span class="kr">Kr</span>/<span class="en">En</span></button>
        </div>
    </header>

    <div class="container">
        <main class="contents" id="contents">
            <!-- wine -->
            <section class="section section-wine" id="wine">
                <div class="section-inner">
                    <div class="content">
                        <h2 class="section-title">Wine</h2>
                        <div class="description">
                            <p class="head-desc">오프닝은 전문 소믈리에를 통해서 엄선된 500여종의 와인을 선보입니다.</p>
                            <p>모든 와인들은, 오프닝만의 전용 타블렛 PC 메뉴판을 통하여, 품종, 종류, 지역, 특징(탄닌 / 바디감 / 당도 등)으로 고객이 직접 필터링 할 수 있습니다.</p>
                            <p>소믈리에의 추천을 통해 와인을 추천받을 수 있음은 물론이고, <br class="PC-B">오프닝만의 메뉴판을 통해서 고객이 개인의 취향에 맞는 와인을 직접 고를 수 있는 새로운 경험을 선사합니다.</p>
                        </div>
                    </div>
                    <div class="image-list">
                        <div class="one">
                            <figure><img src="../_resources/images/img_wine_01.jpg" alt="와인 이미지" loading="lazy"></figure>
                            <figure><img src="../_resources/images/img_wine_02.jpg" alt="와인 이미지" loading="lazy"></figure>
                        </div>
                        <div class="one">
                            <figure><img src="../_resources/images/img_wine_03.jpg" alt="와인 이미지" loading="lazy"></figure>
                            <figure><img src="../_resources/images/img_wine_04.jpg" alt="와인 이미지" loading="lazy"></figure>
                            <p class="text-move font-serif"><strong>Open your <br class="OMO-B">own taste</strong><span class="TA-B">We provide taste</span></p>
                        </div>
                        <div class="one">
                            <figure><img src="../_resources/images/img_wine_05.jpg" alt="와인 이미지" loading="lazy"></figure>
                            <figure><img src="../_resources/images/img_wine_06.jpg" alt="와인 이미지" loading="lazy"></figure>
                            <p class="text-move font-serif OMO-B"><span>We provide <br class="OMO-B">taste</span></p>
                        </div>
                        <div class="one">
                            <figure><img src="../_resources/images/img_wine_07.jpg" alt="와인 이미지" loading="lazy"></figure>
                            <figure><img src="../_resources/images/img_wine_08.jpg" alt="와인 이미지" loading="lazy"></figure>
                        </div>
                    </div>
                </div>
            </section>

        </main>

        <footer class="footer" id="footer">
            <div class="footer-wrap">
                <a href="javascript:;" class="btn-top font-serif" onclick="window.scrollTo(0,0);"><i class="icon top"></i>TOP</a>
                <div class="footer-inner">
                    <h3 class="footer-logo"><span class="MO-B">OPNNG</span><span class="PC-B"><img src="../_resources/images/logo.svg" alt="OPNNG"></span></h3>
                    <div class="details font-serif">
                        <dl>
                            <div>
                                <dt>Address</dt>
                                <dd>서울시 강남구 도산대로 34길 22 빌딩 모노폴 지하 1층 OPNNG</dd>
                            </div>
                            <div>
                                <dt>Contact</dt>
                                <dd><a href="tel:02-2088-5844">02-2088-5844</a></dd>
                            </div>
                            <div>
                                <dt>Instagram</dt>
                                <dd><a href="https://www.instagram.com/bar_opnng/" target="_blank">@bar_opnng</a></dd>
                            </div>
                        </dl>
                        <p class="copyright">&copy;all rights reserved OPNNG</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</div>
    `
}