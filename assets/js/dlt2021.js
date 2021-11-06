const langArr = {
    '1':{
        'ru':"Старт",
        'uz':'Bosh sahifa',
        'de':'Hauptseite'
    },
    '2':{
        'ru':"Партнёры",
        'uz':'Hamkorlar',
        'de':'Partner'
    },
    '3':{
        'ru':"Контакт",
        'uz':'Aloqa',
        'de':'Kontakt'
    },
    '4':{
        'ru':"XIV Конференция преподавателей немецкого языка Узбекистана 2021",
        'uz':'O‘zbekistondagi nemis tili o‘qituvchilarining XIV anjumani 2021',
        'de':'XIV. Deutschlehrertag 2021 in Usbekistan'
    },
    '5':{
        'ru':"О конференции",
        'uz':'Konferensiya haqida',
        'de':'Über die Konferenz'
    },
    '6':{
        'ru':"Целью конференции являются отражение актуальной тематики и проблематики современной педагогики, презентация новейших технических и учебно-методических достижений в сфере образования. В рамках конференции будут представлены результаты внедрения новейших исследований, а также передового зарубежного и отечественного опыта в области цифровых технологий в процесс обучения немецкому языку на всех этапах образования.",
        'uz':"Anjuman ta'limining barcha bosqichlarida nemis tilini o'qitish jarayoni eng so'nggi tadqiqot tajribalari, shungindek, raqamli texnologiyalar soxasidagi ilg'or xorijiy va milliy tajribani jo'riy natijalarini o'z ichiga oladi",
        'de':"Die Aufgaben der Konferenz sind: Reflexion relevanter Themen und Probleme der modernen Fremdsprachenpädagogik- und Methodik. Die Konferenz präsentiert die Ergebnisse der Einführung von neuesten Lehrprogrammen sowie fortgeschrittene ausländische und inländische Erfahrungen im Bereich der digitalen Technologien im DaF-Unterricht in allen Bildungsstufen."
    },
    '7':{
        'ru':"Программа конференции",
        'uz':"Konferensiya dasturi",
        'de':"Konferenzprogramm"
    },
    '8':{
        'ru':"Где",
        'uz':'Qayerda',
        'de':'Wo'
    },
    '9':{
        'ru':"Ташкент",
        'uz':'Toshkent',
        'de':'Taschkent'
    },
    '10':{
        'ru':"Когда",
        'uz':"Qachon",
        'de':"Wann"
    },
    '11':{
        'ru':"4-5 ноября 2021 г.",
        'uz':"4-5-Noyabr, 2021-yil",
        'de':"04. - 05. November 2021"
    },
    '12':{
        'ru':"Конференция преподавателей немецкого языка Узбекистана",
        'uz':"O‘zbekistondagi nemis tili o‘qituvchilarining anjumani",
        'de':"Deutschlehrertag 2021 in Usbekistan"
    },
    '13':{
        'ru':"04-05 ноября 2021 года состоится XIV конференция преподавателей немецкого языка Узбекистана. Конференция организуется в сотрудничестве  Немецкой службой академических обменов (ДААД) и Посольством ФРГ в Ташкенте.",
        'uz':"2021 yilning 04-05 noyabr kunlari O’zbekistondagi nemis tili o’qituvchilarining XIV anjumani bo’lib o’tadi. Anjuman  Nemis akademik almashuv xizmati (DAAD) va Germaniyaning O'zbekistondagi elchihonasi bilan hamkorlikda tashkil etilmoqda. ",
        'de':"Am 04. und 05. November 2021 findet der XIV. Deutschlehrertag in Usbekistan statt. Der Deutschlehrertag findet in Kooperation mit , dem Deutschen Akademischen Austauschdienst (DAAD) und der deutschen Botschaft in Taschkent statt."
    },
    '14':{
        'ru':"Посольством ФРГ в Ташкенте. И в этом году мы предлагаем много интересных мастер-классов, на которых Вы сможете освежить и расширить свои знания. Одновременно у Вас будет возможность к обмену мнениями с коллегами со всей страны.",
        'uz':"Bu yil ham biz Sizga bir qancha qiziqarli master klass va seminarlarni taqdim etamiz. Siz ularda ishtirok etib, o’zingizning bilim, malaka va ko’nikmalaringizni yangilash va kengaytirish, shu bilan birga o’z hamkasblaringiz bilan tajriba almashish imkoniga ega bo’lasiz.",
        'de':"Auch in diesem Jahr bieten wir wieder viele interessante Workshops, in denen Sie Ihre Kenntnisse auffrischen und erweitern können. Gleichzeitig haben Sie die Möglichkeit, sich mit Kollegen aus dem ganzen Land auszutauschen."
    },
    '15':{
        'ru':"Гёте-институт Ташкент приглашает к участию на конференции учителей школ, лицеев и колледжей.",
        'uz':"O‘zbekistondagi Gyote Instituti umumiy o’rta ta’lim maktablarida, Akademik litsey va Kasb hunar kolledjida faoliyat yuritayotgan nemis tili o’qituvchilarini ushbu anjumanda ishtirok etish uchun taklif qiladi. ",
        'de':"Das Goethe-Institut Usbekistan ermöglicht die Teilnahme für Deutschlehrerinnen und Deutschlehrern, die an Schulen, Berufsschulen, Lyzeen und Kollegs unterrichten."
    },
    '16':{
        'ru':"Просмотр в онлайн",
        'uz':"Online ko'rish",
        'de':"Online ansehen"
    },
    '17':{
        'ru':"Партнер",
        'uz':"Hamkorlar",
        'de':"Partner"
    },
    '18':{
        'ru':"Контакт",
        'uz':"Biz bilan bog'lanish",
        'de':"Kontakt"
    },
    '19':{
        'ru':"Для информации",
        'uz':"Murojaat uchun:",
        'de':"für Anfragen"
    },
    '20':{
        'ru':"Адрес",
        'uz':"Manzil",
        'de':"Die Anschrift"
    },
    '21':{
        'ru':"Улица Амира Темура, 42",
        'uz':"Amir Temur ko'chasi 42-uy",
        'de':"Amir-Temur-Straße, 42"
    },
    '22':{
        'ru':"Номер телефона",
        'uz':"Telefon nomer",
        'de':"Telefonnummer"
    },
    '23':{
        'ru':"Войти через Zoom",
        'uz':"Zoom orqali kirish",
        'de':"Mit Zoom"
    },
    '24':{
        'ru':"Войти",
        'uz':"Kirish",
        'de':"Eintreten"
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