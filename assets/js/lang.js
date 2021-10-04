const langArr = {
    "unit":{
        'ru':"Канференсия",
        'uz':'Conference',
        'de':'Bildungskonferenz'
    },
    '1':{
        'ru':"Дом",
        'uz':'Bosh sahifa',
        'de':'Hauptseite'
    },
    '2':{
        'ru':"О нас",
        'uz':'Biz haqimizda',
        'de':'Über uns'
    },
    '3':{
        'ru':"Разгаворшик",
        'uz':'Ma\'ruzachilar',
        'de':'Lautsprecher'
    },
    '4':{
        'ru':"Повестка дня",
        'uz':'Kun tartibi',
        'de':'Agenda'
    },
    '5':{
        'ru':"Место проведения",
        'uz':'Konferensiya joyi',
        'de':'Vernastaltungsort'
    },
    '6':{
        'ru':"Галерея",
        'uz':'Galereya',
        'de':'Galerie'
    },
    '7':{
        'ru':"Партнер",
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
        'ru':"8-9 Октябрь, Онлайн",
        'uz':'8-9 Oktabr, Onlayn',
        'de':'8.-9. Oktober, Online'
    },
    '11':{
        'ru':"О конференции",
        'uz':'Konferensiya haqida',
        'de':'Über die Konferenz'
    },
    '12':{
        'ru':"О конференции",
        'uz':'Konferensiya haqida',
        'de':'Über die Konferenz'
    },
    '13':{
        'ru':"Процесс обучения немецкому языку на всех этапах конференционного обучения включает в себя результаты новейшего исследовательского опыта, а также внедрение передового зарубежного и отечественного опыта в области цифровых технологий.",
        'uz':"Anjuman ta'limining barcha bosqichlarida nemis tilini o'qitish jarayoni eng so'nggi tadqiqot tajribalari, shungindek, raqamli texnologiyalar soxasidagi ilg'or xorijiy va milliy tajribani jo'riy natijalarini o'z ichiga oladi",
        'de':"Die Aufgaben der Konferenz sind: Reflexion relevanter Themen und Probleme der modernen Fremdsprachenpädagogik- und Methodik. Die Konferenz präsentiert die Ergebnisse der Einführung von neuesten Lehrprogrammen sowie fortgeschrittene ausländische und inländische Erfahrungen im Bereich der digitalen Technologien im DaF-Unterricht in allen Bildungsstufen."
    },
    '14':{
        'ru':"Где",
        'uz':'Qayerda',
        'de':'Woher'
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
        'ru':"Пятница - суббота, 8-9 октября",
        'uz':"Juma - Shanba, 8-9 Oktabr",
        'de':"Freitag - Samstag, 8.-9. Oktober"
    },
    '18':{
        'ru':"Спикеры мероприятия",
        'uz':"Tadbir ma'ruzachilari",
        'de':"Sprecher der Veranstaltung"
    },
    '19':{
        'ru':"Наши спикеры",
        'uz':"Bizning ma'ruzachilar",
        'de':"Unsere Referenten"
    },
    '20':{
        'ru':"Требования урока немецкого языка – цифровизация",
        'uz':"Nemis tili darslarida qoʼyiladigan talablar - Raqamlashtirish",
        'de':"Herausforderungen des DaF-Unterrichts - die Digitalisierung"
    },
    '21':{
        'ru':"Современные обучающие программы и цифровые технологии обучения для урока немецкого языка в дошкольном, начальном, среднем и высшем образовании",
        'uz':"Bogʼcha-maktab-oliy taʼlim tizimida zamonaviy taʼlim dasturlari va raqamli texnoligiyalari",
        'de':"Moderne Lehrprogramme und digitale Technologien für den Deutschunterricht im Elementar-, Primar-, Sekundarbereich sowie in der Hochschulbildung"
    },
    '22':{
        'ru':"Научная работа",
        'uz':"Ilmiy ish",
        'de':"Wissenschaftliches Arbeiten"
    },
    '23':{
        'ru':"Обзор цифрового формата экзамена TestDaF",
        'uz':"TestDaF raqamli imtihon formatining yangi ko'rinishi",
        'de':"Der digitale TestDaF im Überblick "
    },
    '24':{
        'ru':"Цифровые инструменты в онлайн-обучении",
        'uz':"Onlayn o'qishning raqamli vositalari",
        'de':"Digitale Werkzeuge im (Online-) Unterricht"
    },
    '25':{
        'ru':"Литературно читать литературу",
        'uz':"Adabiy o'qiladigan adabiyot",
        'de':"Literatur literarisch lesen"
    },
    '26':{
        'ru':"Повестка дня",
        'uz':'Kun tartibi',
        'de':'Agenda'
    },
    '27':{
        'ru':"Наш план действий",
        'uz':"Bizning tadbirlar rejasi",
        'de':"Unser Aktionsplan"
    },
    '28':{
        'ru':"Первый день",
        'uz':"Birinchi kun",
        'de':"Tag 1"
    },
    '29':{
        'ru':"Второй день",
        'uz':"Ikkinchi kun",
        'de':"Tag 2"
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
        'ru':"Процесс обучения немецкому языку на всех этапах конференционного обучения включает в себя результаты новейшего исследовательского опыта, а также внедрение передового зарубежного и отечественного опыта в области цифровых технологий.",
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
        'ru':"Процесс обучения немецкому языку на всех этапах конференционного обучения включает в себя результаты новейшего исследовательского опыта, а также внедрение передового зарубежного и отечественного опыта в области цифровых технологий.",
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
    
    
}



/*
'14':{
    'ru':"",
    'uz':"",
    'de':""
},
*/