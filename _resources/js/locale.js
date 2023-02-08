const messages = {
    ko: {
        VISUAL: {
            DESC1: `취향을 갖지마세요.`, 
            DESC2: `출구가 없으니까요.`, 
        },
        OPNNG: {
            DESC1: `오프닝은 ‘취향을 여는 공간＇이라는 테마를 가진 와인바로 인류가 유구한 역사를 통해 즐겨왔던 ‘와인과 미술＇이라는 취향을 선보이는 공간입니다.`,
            DESC2: `오프닝은 500여종의 와인을 소개하고 있으며, 또한 와인과 함께 즐기기에 좋은 다양한 식사메뉴를 선보이고 있습니다.`,
            DESC3: `이와 함께, 국내외 아티스트들의 작품들을 공간을 통해 전시하고 있으며, 이를 통해 미식과 예술을 동시에 즐길 수 있는 경험을 제공하고 있습니다.`,
            DESC4: `점점 개인의 취향이 고도화 되어가는 현대 사회에서 미식과 예술을 동시에 즐길 수 있는 오프닝이라는 와인바는 반드시 태어났어야 하는 필연적 공간이라고 생각합니다.`,
            DESC5: `오랫동안 존재하겠습니다.`,
            BUTTON: `예약하기`
        },
        WINE: {
            DESC1: `오프닝은 전문 소믈리에를 통해서 엄선된 500여종의 와인을 선보입니다.`,
            DESC2: `모든 와인들은, 오프닝만의 전용 타블렛 PC 메뉴판을 통하여, 품종, 종류, 지역, 특징(탄닌 / 바디감 / 당도 등)으로 고객이 직접 필터링 할 수 있습니다.`,
            DESC3: `소믈리에의 추천을 통해 와인을 추천받을 수 있음은 물론이고, 오프닝만의 메뉴판을 통해서 고객이 개인의 취향에 맞는 와인을 직접 고를 수 있는 새로운 경험을 선사합니다.`,
        },
        CUISINE: {
            DESC1: `오프닝의 메뉴들은 한끼의 식사로 충분한 것들과, 와인을 보다 맛있게  <br class="PC-B">즐길 수 있도록 돕는 안주류 등으로 구성되어 있습니다.`,
            DESC2: `크게, 스몰디쉬 / 파스타 / 스테이크 / 치즈 / 샤퀴테리 / 디저트로 구성된 오프닝의 모든 메뉴들은 <br class="PC-B">‘와인과의 조화‘를 무엇보다 지향하고 있으며, 조화를 넘어서 와인도 음식도 더 맛있을 수 있는 궁극의 마리아쥬를 목표로 <br class="PC-B">하고 있습니다.`,
        },
        ART: {
            DESC1: `오프닝은 오너가 수집하고 있는 다양한 미술 작품들을 <br class="PC-B">공간을 통해서 전시합니다.`,
            DESC2: `오프닝은 상시 작품들을 공간에 설치하여 선보이고 있으며, 이와 별도로 연 1~2회 소장품만으로 구성된 전시회를 개최하고 있습니다.`,
            DESC3: `전문 갤러리나 미술관이 아닌, 공간을 가진 컬렉터가 선보이는 소장전으로, 오프닝 전시만의 전시 소개글인 ‘수집의 변’을 통해 주제를 <br class="PC-B">전달하고 있습니다.`,
        },
        HISTORY: {
            DATE1: `2020년 11월`,
            DESC1: `주식회사 테이스트 앤드 테이스트 창립`,
            DATE2: `2021년 7월`,
            DESC2: `와인바 오프닝 오픈`,
            DATE3: `2022년 4월`,
            DESC3: `오프닝 1st Exhibition SPRING PARADOX 개최`,
            DATE4: `2022년 7월`,
            DESC4: `미쉐린 가이드 서울 등재(선발표)`,
            DATE5: `2022년 8월`,
            DESC5: `오프닝 2nd Exhibition THE PRESENG 개최`,
        },
        MEMBERSHIP: {
            DESC1: `오프닝은 오프닝을 보다 풍부하게 이용하실 수 있는 멤버쉽 프로그램을 <br class="PC-B">운영하고 있습니다.`,
            DESC2: `멤버쉽 프로그램의 상담은 유선 (☎ <a href="tel:02-2088-5844">02)2088-5844</a>) 을 통해서 가능합니다.`,
            DESC3: `멤버쉽 프로그램 이용시의 베네핏은 아래와 같습니다.`,
            BENEFITS: {
                DESC1: `프라이빗 룸 이용`,
                DESC2: `방문 당 1병 콜키지 가능(750ml 기준이며 업장에서 빈티지까지 동일한 <br class="PC-B">와인을 판매 중인 경우에는 콜키지가 불가능합니다.)`,
                DESC3: `오프닝 오리지널 기프트 제공`,
                DESC4: `오프닝 멤버쉽 전용 이벤트 참석 가능`,
                DESC5: `개인 와인 보관 서비스`,
            },
        },
        BOOK: {
            DESC1: `오프닝의 예약은 캐치테이블을 통해서 이루어지고 있습니다. 다만, 5인 이상 예약 시에는 유선(<a href="tel:02-2088-5844">02-2088-5844</a>)을 통한 예약을 진행하고 있습니다.`,
            DESC2: `오프닝은 노키즈 존이며, 이용 시 4인 이하 기준 750ml 와인 1병 이상을 주문해 주셔야 합니다. 또한 크리스마스, 발렌타인 데이 등의 특별한 날에는 별도 코스 메뉴를 운영하고 있으며, 운영 방식은 사전에 별도 고지하고 있습니다.`,
            BUTTON: `캐치테이블 예약하기  &gt;`,
        },
        ADDRESS: `서울시 강남구 도산대로 34길 22 빌딩 모노폴 지하 1층 OPNNG`,
    },
    en: {
        VISUAL: {
            DESC1: `The best thing to do is not to have taste`,
            DESC2: `Since there is no way out`,
        },
        OPNNG: {
            DESC1: `Described as a "space for finding one's own taste," <br class="PC-B">OPNNG is devoted to curating wine and fine art, two things that have long been highly valued throughout history.`,
            DESC2: `In order to provide the best wine experience, OPNNG offers over 500 varieties of wines in conjunction with diverse dishes.`,
            DESC3: `A number of pieces of art from home and abroad are also displayed and presented inside the space. By combining delicacies with art, OPNNG is designed to provide guests with a pleasure they will never forget.`,
            DESC4: `In this modern world where individual tastes are constantly and rapidly advancing, OPPNG is considered a place that must be inevitable.`,
            DESC5: `In this regard, we will be present.`,
            BUTTON: `Book`
        },
        WINE: {
            DESC1: `With over 500 varieties of wine available, <br class="PC-B">OPNNG presents carefully selected wines selected by professional sommeliers.`,
            DESC2: `OPNNG's own menu system on a tablet PC allows guests to search for all wine <br class="PC-B">by filtrating by grape varieties, colors, regions, and taste noteworthiness.`,
            DESC3: `As well as sommelier recommendations, OPNNG's pad menu allows guests to discover their own taste in wine.`,
        },
        CUISINE: {
            DESC1: `A variety of meals and munchies are available on the OPNNG menu in order to enhance the enjoyment of wine drinking.`,
            DESC2: `Throughout the meal, a variety of small dishes, pastas, steaks, cheeses, charcuterie, and desserts are presented under the aim of maintaining a balance with wine, ultimately bringing guests the perfect possible mariage.`,
        },
        ART: {
            DESC1: `Within the space of OPNNG, <br class="PC-B">various works of art owned by the CEO are displayed.`,
            DESC2: `In addition to the collection being on display at all times, <br class="PC-B">special exhibitions are held 1 to 2 times a year featuring the collection's artworks.`,
            DESC3: `The "rhetoric of collection" is a means by which OPPNG conveys the message of the exhibition in a manner other than a museum or gallery.`,
        },
        HISTORY: {
            DATE1: `NOV. 2020`,
            DESC1: `tasteandtaste inc. established`,
            DATE2: `JUL. 2021`,
            DESC2: `Wine bar OPNNG opened`,
            DATE3: `APR. 2022`,
            DESC3: `OPNNG’s 1st Exhibition ‘SPRING PARADOX’ held`,
            DATE4: `JUL. 2022 `,
            DESC4: `Michellin Guide Seoul selected and registered (pre-released)`,
            DATE5: `AUG. 2022`,
            DESC5: `OPNNG’s 2nd Exhibition ‘THE PRESENT’ held`,
        },
        MEMBERSHIP: {
            DESC1: `As part of OPNNG's commitment to enriching customers' experiences, OPNNG offers a membership program.`,
            DESC2: `Membership inquiries may be made via phone at <a href="tel:820220885844">(82)2-2088-5844</a> during business hours.`,
            DESC3: `The following is a list of benefits offered to members.`,
            BENEFITS: {
                DESC1: `Private room (Only for the members)`,
                DESC2: `Corkage (one 750ml bottle per visit that are not currently served at OPNNG)`,
                DESC3: `OPNNG’s original gift`,
                DESC4: `Invitation to OPNNG’s special event for members only`,
                DESC5: `Private wine cellarage services`,
            },
        },
        BOOK: {
            DESC1: `The reservation system of OPNNG is operated by Catch Table. <br class="PC-B">For reservations of more than four people, a phone booking service is available at <a href="tel:820220885844">(82)2-2088-5844</a>.`,
            DESC2: `OPNNG is a no-kids zone.<br>
            OPNNG requires the minimum order of one bottle of 750ml wine per table. <br class="PC-B">During special occasions such as Christmas and Valentine's Day, OPNNG offers a special menu and gives advance notice of the event.`,
            BUTTON: `Book via Catchtable &gt;`,
        },
        ADDRESS: `22, Dosan-daero 34-gil, Gangnam-gu, Seoul, (Building Monopole) B1`,
    }
};