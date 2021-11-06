const langArr = {
    "unit":{
        'ru':"Канференсия",
        'uz':'Conference',
        'de':'Bildungskonferenz'
    },
    '1':{
        'ru':"Старт",
        'uz':'Bosh sahifa',
        'de':'Hauptseite'
    },
    '2':{
        'ru':"О нас",
        'uz':'Biz haqimizda',
        'de':'Über uns'
    },
    '3':{
        'ru':"Референты",
        'uz':'Ma\'ruzachilar',
        'de':'Referenten'
    },
    '4':{
        'ru':"Повестка дня",
        'uz':'Kun tartibi',
        'de':'Agenda'
    },
    '5':{
        'ru':"Место проведения",
        'uz':'Konferensiya joyi',
        'de':'Varanstaltungsort'
    },
    '6':{
        'ru':"Галерея",
        'uz':'Galereya',
        'de':'Galerie'
    },
    '7':{
        'ru':"Партнёры",
        'uz':'Hamkorlar',
        'de':'Partner'
    },
    '8':{
        'ru':"Контакт",
        'uz':'Aloqa',
        'de':'Kontakt'
    },
    '9':{
        'ru':"Преподавание немецкого языка в эпоху цифровых технологий",
        'uz':'Raqamli Texnologiyalar davrida Nemis tilini o\'qitish',
        'de':'DAF-UNTERRICHT IM DIGITALEN ZEITALTER'
    },
    '10':{
        'ru':"",
        'uz':'',
        'de':''
    },
    '11':{
        'ru':"",
        'uz':'',
        'de':''
    },
    '12':{
        'ru':"О конференции",
        'uz':'Konferensiya haqida',
        'de':'Über die Konferenz'
    },
    '13':{
        'ru':"Целью конференции являются отражение актуальной тематики и проблематики современной педагогики, презентация новейших технических и учебно-методических достижений в сфере образования. В рамках конференции будут представлены результаты внедрения новейших исследований, а также передового зарубежного и отечественного опыта в области цифровых технологий в процесс обучения немецкому языку на всех этапах образования.",
        'uz':"Anjuman ta'limining barcha bosqichlarida nemis tilini o'qitish jarayoni eng so'nggi tadqiqot tajribalari, shungindek, raqamli texnologiyalar soxasidagi ilg'or xorijiy va milliy tajribani jo'riy natijalarini o'z ichiga oladi",
        'de':"Die Aufgaben der Konferenz sind: Reflexion relevanter Themen und Probleme der modernen Fremdsprachenpädagogik- und Methodik. Die Konferenz präsentiert die Ergebnisse der Einführung von neuesten Lehrprogrammen sowie fortgeschrittene ausländische und inländische Erfahrungen im Bereich der digitalen Technologien im DaF-Unterricht in allen Bildungsstufen."
    },
    '14':{
        'ru':"Где",
        'uz':'Qayerda',
        'de':'Wo'
    },
    '15':{
        'ru':"Онлайн",
        'uz':"Onlayn",
        'de':'Online'
    },
    '16':{
        'ru':"Когда",
        'uz':"Qachon",
        'de':"Wann"
    },
    '17':{
        'ru':"",
        'uz':"",
        'de':""
    },
    '18':{
        'ru':"Спикеры мероприятия",
        'uz':"Tadbir ma'ruzachilari",
        'de':"Keynotespeaker der Veranstaltung"
    },
    '19':{
        'ru':"Наши спикеры",
        'uz':"Bizning ma'ruzachilar",
        'de':"Unsere Referenten"
    },
    '20':{
        'ru':"Руководитель направления магистратуры  Немецкий как иностранный/ немецкий как второй язык, Университет Ёханнеса Гуттенберга, Майнц",
        'uz':"Mayns, Yoxannes  Guttenberg Universiteti, Nemis tili ikkinchi chet tili sifatida  Magistratura bo‘limi boshlig‘i",
        'de':"Leiterin des Masterstudiengangs Deutsch als Fremdsprache / Deutsch als Zweitsprache, JGU Mainz"
    },
    '21':{
        'ru':"Представитель издательства Клетт",
        'uz':"Klett nashriyot vakili",
        'de':"Redaktionsleiter für die Lehrwerke Deutsch als Fremdsprache bei Ernst Klett Sprachen in München/Stuttgart"
    },
    '22':{
        'ru':"Лектор ДААД, Национальный университет Узбекистана",
        'uz':"O‘zbekiston Milliy Universiteti, DAAD- Lektori",
        'de':"DAAD-Lektor, Nationale Universität Usbekistans"
    },
    '23':{
        'ru':"Test-DaF Institut g.a.s.t.",
        'uz':"Test-DaF Institut g.a.s.t.",
        'de':"Test-DaF Institut g.a.s.t."
    },
    '24':{
        'ru':"Лектор ДААД, Самаркандский государственный институт иностранных языков",
        'uz':"DAAD o'qituvchisi, Samarqand davlat chet tillari instituti",
        'de':"DAAD-Lektor, Staatliches Fremdspracheninstitut Samarkand"
    },
    '25':{
        'ru':"Лектор ДААД, Ферганский государственный университет",
        'uz':"DAAD o'qituvchisi, Farg'ona davlat universiteti",
        'de':"DAAD-Lektor, Staatliche Universität Fergana"
    },
    '26':{
        'ru':"Повестка дня",
        'uz':'Kun tartibi',
        'de':'Agenda'
    },
    '27':{
        'ru':"план мероприятия",
        'uz':"Bizning tadbirlar rejasi",
        'de':"Veranstaltungsablauf"
    },
    '28':{
        'ru':"Первый день",
        'uz':"Birinchi kun",
        'de':"1.Tag"
    },
    '29':{
        'ru':"Второй день",
        'uz':"Ikkinchi kun",
        'de':"2.Tag"
    },
    '30':{
        'ru':"Адрес конференции",
        'uz':"Konferensiya manzili",
        'de':"Konferenzadresse"
    },
    '31':{
        'ru':"Информация об адресе конференции",
        'uz':"Konferensiya manzili haqida ma'lumot",
        'de':"Informationen zur Konferenzadresse"
    },
    '32':{
        'ru':"Онлайн",
        'uz':"Onlayn",
        'de':'Online'
    },
    '33':{
        'ru':"Целью конференции являются отражение актуальной тематики и проблематики современной педагогики, презентация новейших технических и учебно-методических достижений в сфере образования. В рамках конференции будут представлены результаты внедрения новейших исследований, а также передового зарубежного и отечественного опыта в области цифровых технологий в процесс обучения немецкому языку на всех этапах образования.",
        'uz':"Anjuman ta'limining barcha bosqichlarida nemis tilini o'qitish jarayoni eng so'nggi tadqiqot tajribalari, shungindek, raqamli texnologiyalar soxasidagi ilg'or xorijiy va milliy tajribani jo'riy natijalarini o'z ichiga oladi",
        'de':"Die Aufgaben der Konferenz sind: Reflexion relevanter Themen und Probleme der modernen Fremdsprachenpädagogik- und Methodik. Die Konferenz präsentiert die Ergebnisse der Einführung von neuesten Lehrprogrammen sowie fortgeschrittene ausländische und inländische Erfahrungen im Bereich der digitalen Technologien im DaF-Unterricht in allen Bildungsstufen."
    },
    '34':{
        'ru':"Галерея",
        'uz':"Galereya",
        'de':"Galerie"
    },
    '35':{
        'ru':"Вы можете увидеть наши мероприятия в нашей галерее",
        'uz':"Bizning galereyamizda bo'lib o'tgan tadbirlarimizni ko'rishingiz mumkin",
        'de':"Unsere Veranstaltungen finden Sie in unserer Galerie"
    },
    '36':{
        'ru':"Партнер",
        'uz':"Hamkorlar",
        'de':"Partner"
    },
    '37':{
        'ru':"Контакт",
        'uz':"Biz bilan bog'lanish",
        'de':"Kontakt"
    },
    '38':{
        'ru':"Для информации",
        'uz':"Murojaat uchun:",
        'de':"für Anfragen"
    },
    '39':{
        'ru':"Адрес",
        'uz':"Manzil",
        'de':"Die Anschrift"
    },
    '40':{
        'ru':"Улица Амира Темура, 42",
        'uz':"Amir Temur ko'chasi 42-uy",
        'de':"Amir-Temur-Straße, 42"
    },
    '41':{
        'ru':"Номер телефона",
        'uz':"Telefon nomer",
        'de':"Telefonnummer"
    },
    '42':{
        'ru':"Эл. адрес",
        'uz':"Elektron pochta",
        'de':"Email"
    },
    '43':{
        'ru':"Целью конференции являются отражение актуальной тематики и проблематики современной педагогики, презентация новейших технических и учебно-методических достижений в сфере образования. В рамках конференции будут представлены результаты внедрения новейших исследований, а также передового зарубежного и отечественного опыта в области цифровых технологий в процесс обучения немецкому языку на всех этапах образования.",
        'uz':"Anjuman ta'limining barcha bosqichlarida nemis tilini o'qitish jarayoni eng so'nggi tadqiqot tajribalari, shungindek, raqamli texnologiyalar soxasidagi ilg'or xorijiy va milliy tajribani jo'riy natijalarini o'z ichiga oladi.",
        'de':"Die Aufgaben der Konferenz sind: Reflexion relevanter Themen und Probleme der modernen Fremdsprachenpädagogik- und Methodik. Die Konferenz präsentiert die Ergebnisse der Einführung von neuesten Lehrprogrammen sowie fortgeschrittene ausländische und inländische Erfahrungen im Bereich der digitalen Technologien im DaF-Unterricht in allen Bildungsstufen."
    },
    '44':{
        'ru':"Полезные Ссылки",
        'uz':"Foydali Havolalar",
        'de':"Nützliche Links"
    },
    '45':{
        'ru':"Goethe-Institut Usbekistan",
        'uz':"Goethe-Institut Usbekistan",
        'de':"Goethe-Institut Usbekistan"
    },
    '46':{
        'ru':"Агентство",
        'uz':"Agentlik",
        'de':"Agentur"
    },
    '47':{
        'ru':"DAAD",
        'uz':"DAAD",
        'de':"DAAD"
    },
    '48':{
        'ru':"Cornelsen",
        'uz':"Cornelsen",
        'de':"Cornelsen"
    },
    '49':{
        'ru':"Полезные Ссылки",
        'uz':"Foydali Havolalar",
        'de':"Nützliche Links"
    },
    '50':{
        'ru':"Министерство высшего образования",
        'uz':"Oliy ta'lim vazirligi",
        'de':"Ministerium für Höhere Bildung"
    },
    '51':{
        'ru':"Klett",
        'uz':"Klett",
        'de':"Klett"
    },
    '52':{
        'ru':"Министерство народного образования",
        'uz':"Xalq ta'lim vazirligi",
        'de':"Ministerium für öffentliche Bildung"
    },
    '53':{
        'ru':"Hueber",
        'uz':"Hueber",
        'de':"Hueber"
    },
    '54':{
        'ru':"Контакт",
        'uz':"Biz bilan bog'lanish",
        'de':"Kontakt"
    },
    '55':{
        'ru':"Церемония открытия",
        'uz':"Ochilish marosimi",
        'de':"Eröffnungszeremonie"
    },
    '56':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '57':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '58':{
        'ru':"Постоянный представитель Посольства Федеративной Республики Германия в Узбекистане",
        'uz':"Germanya Federativ Respublikasining O'zbekistondagi elchixonasi doimiy vakili",
        'de':"Ständige Vertreterin, Botschaft der Bundesrepublik Deutschland in Usbekistan"
    },
    '59':{
        'ru':"Министерство высшего и среднего специального  образования Республики Узбекистан",
        'uz':"O'zbekiston Respublikasi Oliy va o'rta maxsus ta'lim vazirligi",
        'de':"Hochschulministerium der Republik Usbekistan"
    },
    '60':{
        'ru':"И.о.Директора Агентство по популяризации изучения иностранных языков при Кабинете Министров Республики Узбекистан",
        'uz':"O‘zbekiston Respublikasi Vazirlar Mahkamasi huzuridagi Хorijiy tillarni o‘rganishni ommalashtirish agentligi direktori v.v.b.",
        'de':"Stellvertretender Direktor der Agentur für die Förderung des Fremdsprachenerwerbs bei dem Ministerkabinett der Republik Usbekistan"
    },
    '61':{
        'ru':"Министерство народного образования Республики Узбекистан",
        'uz':"O'zbekiston Respublikasi Xalq ta'limi vazirligi",
        'de':"Volksbildungsministerium der Republik Usbekistan"
    },
    '62':{
        'ru':"Лектор ДААД, Национальный университет Узбекистана",
        'uz':"O'zbekiston Milliy universiteti, DAAD- Lektori",
        'de':"DAAD-Lektor, Nationale Universität Usbekistans"
    },
    '63':{
        'ru':"Директор Гете-Института в Узбекистане",
        'uz':"O'zbekistondagi Gyote instituti direktori",
        'de':"Direktor des Goethe-Instituts in Usbekistan"
    },
    '64':{
        'ru':"Обзор цифрового формата экзамена TestDaF",
        'uz':"TestDaF raqamli imtihon formatining yangi ko'rinishi",
        'de':"Der digitale TestDaF im Überblick "
    },
    '65':{
        'ru':"Требования урока немецкого языка – цифровизация",
        'uz':"Nemis tili darslarida qoʼyiladigan talablar - Raqamlashtirish",
        'de':"Herausforderungen des DaF-Unterrichts - die Digitalisierung"
    },
    '66':{
        'ru':"Современные обучающие программы и цифровые технологии обучения для урока немецкого языка в дошкольном, начальном, среднем и высшем образовании",
        'uz':"Bogʼcha-maktab-oliy taʼlim tizimida zamonaviy taʼlim dasturlari va raqamli texnoligiyalari",
        'de':"Moderne Lehrprogramme und digitale Technologien für den Deutschunterricht im Elementar-, Primar-, Sekundarbereich sowie in der Hochschulbildung"

    },
    '67':{
        'ru':"Международные стандарты в обучении иностранным языкам",
        'uz':"Xorijiy tillarni kiritishda xalqaro standartlar",
        'de':"Internationale Standards im Fremdsprachenunterricht"
    },
    '68':{
        'ru':"Новая концепция обеспечения преемственности и непрерывности в процессе обучения иностранным языкам",
        'uz':"Xorijiy tillarni oʼqitishda uzluksizlikni taʼminlash yangi kontseptsiyasi",
        'de':"Ein neues Konzept zur Gewährleistung von Kontinuität im Fremdsprachenunterricht"
    },

    '69':{
        'ru':"Секция 1",
        'uz':"1-Bo'lim",
        'de':"Sektion 1"
    },
    '70':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '71':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '72':{
        'ru':"Секция 2",
        'uz':"2-Bo'lim",
        'de':"Sektion 2"
    },
    '73':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '74':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '75':{
        'ru':"Секция 3",
        'uz':"3-Bo'lim",
        'de':"Sektion 3"
    },
    '76':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '77':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '78':{
        'ru':"Секция 4",
        'uz':"4-Bo'lim",
        'de':"Sektion 4"
    },
    '79':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '80':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '81':{
        'ru':"Секция 1",
        'uz':"1-Bo'lim",
        'de':"Sektion 1"
    },
    '82':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '83':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '84':{
        'ru':"Литературно читать литературу",
        'uz':"Adabiy o'qiladigan adabiyot",
        'de':"Literatur literarisch lesen"
    },
    '85':{
        'ru':"Цифровые инструменты в онлайн-обучении",
        'uz':"Onlayn o'qishning raqamli vositalari",
        'de':"Digitale Werkzeuge im (Online-) Unterricht."
    },
    '86':{
        'ru':"Учите немецкий онлайн? Почему нет?",
        'uz':"Nemis tilini onlayn o'rganasizmi? Nega yo'q?",
        'de':"Deutsch online lernen? Warum nicht?"
    },
    '87':{
        'ru':"Мультимедийные ресурсы школьных учебных центров Узбекистана",
        'uz':"O'zbekistondagi maktab o'quv markazlarining multimediya resurslar",
        'de':"Multimediale Ressourcen der Schullehrwerken in Usbekistan"
    },
    '88':{
        'ru':"Секция 2",
        'uz':"2-Bo'lim",
        'de':"Sektion 2"
    },
    '89':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '90':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '91':{
        'ru':"Концепция CLIL на уроках немецкого языка",
        'uz':"Nemis tili darslarida CLIL konsepti",
        'de':"Zwei Fliegen mit einer Klappe oder das CLIL-Konzept im Primarunterricht"
    },
    '92':{
        'ru':"",
        'uz':"Qarshidagi 'quyoshli' maktabi",
        'de':"Die Sonnenschule und PASCH"
    },
    '93':{
        'ru':"Стиль CLIL на уроках немецкого языка в школе",
        'uz':"Maktabdagi nemis tili mashulotlarida CLIL uslubi",
        'de':"CLIL und DaF Unterricht in der Schule"
    },
    '94':{
        'ru':"Секция 3",
        'uz':"3-Bo'lim",
        'de':"Sektion 3"
    },
    '95':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '96':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '97':{
        'ru':"Образовательный проект Гёте-института «ПрофиУни».",
        'uz':"'ProfiUni' Gyote institutining ta'lim loyihasi",
        'de':"Internationalisierung der Berufsbildung, Berufe der Zukunft. Vorstellung des Bildungsprojekts „ProfiUni“"
    },
    '98':{
        'ru':"Презентация портала www.profnavigator.uz",
        'uz':"www.profnavigator.uz portali taqdimoti",
        'de':"„Mein Beruf – meine Zukunft“ – Vorstellung des Portals www.profnavigator.uz"
    },
    '99':{
        'ru':"",
        'uz':"Kasbga yo'naltirilgan nemis tili",
        'de':"Berufssprache Deutsch"
    },
    '100':{
        'ru':"",
        'uz':"Nemis tili bilan kasbga yo'naltirish loyihasi",
        'de':"Arbeit in Tridem bei der Berufsorientierung in der Schule: Vorstellung der Projekte"
    },
    '101':{
        'ru':"Секция 4",
        'uz':"4-Bo'lim",
        'de':"Sektion 4"
    },
    '102':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '103':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
    },
    '104':{
        'ru':"Dhoch3 – учебные модули для подготовки учителей  немецкого языка в университетах мира",
        'uz':"Dhoch3 – OTM larda bo‘lajak nemis tili o‘qituvchilari uchun modul",
        'de':"„Dhoch3 - Studienmodule für die Deutschlehrer-Ausbildung an Hochschulen weltweit“"
    },
    '105':{
        'ru':"Научная работа.",
        'uz':"Ilmiy ish yozish prinsiplari.",
        'de':"Wissenschaftliches Arbeiten."
    },
    '106':{
        'ru':"«Региональные мобильные группы: цели и задачи»",
        'uz':"“Regionale Mobilgruppen: Ziele und Aufgaben”",
        'de':"“Regionale Mobilgruppen: Ziele und Aufgaben”"
    },
    '107':{
        'ru':"Использование DLL-современных образовательных программ в вузах Узбекистана",
        'uz':"DLL-zamonaviy taʼlim dasturidan O‘zbekistondagi OTM larda foydalanish",
        'de':"DLL Implementierung ins Curriculum der Hochschulen Usbekistans"
    },
    '108':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '109':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '110':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '111':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '112':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '113':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '114':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '115':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '116':{
        'ru':"Модератор",
        'uz':"Moderator",
        'de':"Moderatorin"
    },
    '117':{
        'ru':"Программа конференции",
        'uz':"Konferensiya dasturi",
        'de':"Konferenzprogramm"
    },
    '118':{
        'ru':"Сертификат",
        'uz':"Sertifikat",
        'de':"Zertifikat"
    },
}


/*
'14':{
    'ru':"",
    'uz':"",
    'de':""
},
*/





const select = document.querySelector('select')
const allLang = ['uz', 'ru', 'de']

select.addEventListener('change', changeURLLanguage);

function changeURLLanguage(){
  let lang = select.value;
  location.href = window.location.pathname + '#' +lang;
  location.reload();
}

function changeLanguage(){
  let hash = window.location.hash;
  hash = hash.substr(1)
  console.log(hash)
  if(!allLang.includes(hash)){
    location.href = window.location.pathname + '#uz';
    location.reload();
  }
  select.value = hash;
  // document.querySelector('title').innerHTML = langArr['unit'][hash]
  
  for(let key in langArr){
    document.querySelector('.nav-' + key).innerHTML = langArr[key][hash]
  }
  
  // for(let key in spakersArr){
  //   document.querySelector('.nav-' + key).innerHTML = langArr[key][hash]
  // }
}


changeLanguage();