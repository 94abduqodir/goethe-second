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
        'ru':"XV Конференция преподавателей немецкого языка Узбекистана 2022",
        'uz':'O‘zbekistondagi nemis tili o‘qituvchilarining XV anjumani 2022',
        'de':'XV. Deutschlehrertag 2022 in Usbekistan'
    },
    '5':{
        'ru':"О конференции",
        'uz':'Konferensiya haqida',
        'de':'Über die Konferenz'
    },
    '6':{
        'ru':"Anjumanning asosiy maqsadi, ta'limining barcha bosqichlarida nemis tilini o'qitish jarayonidagi ilg'or xorijiy va milliy tajribani jo'riy etish natijalarini taqdim etish, bu borada mutaxassislarning fikrlari bilan tanishish, o‘zaro tajriba almashish, shuningdek, eng yangi nemis tili darsliklari va o‘quv uslubiy qo‘llanmalar taqdimotida ishtirok etib, ulardan o‘quv mashg‘ulotlarida samarali foydalanish uslublari bilan tanishishdir.",
        'uz':"Anjumanning asosiy maqsadi, ta'limining barcha bosqichlarida nemis tilini o'qitish jarayonidagi ilg'or xorijiy va milliy tajribani jo'riy etish natijalarini taqdim etish, bu borada mutaxassislarning fikrlari bilan tanishish, o‘zaro tajriba almashish, shuningdek, eng yangi nemis tili darsliklari va o‘quv uslubiy qo‘llanmalar taqdimotida ishtirok etib, ulardan o‘quv mashg‘ulotlarida samarali foydalanish uslublari bilan tanishishdir.",
        'de':"Anjumanning asosiy maqsadi, ta'limining barcha bosqichlarida nemis tilini o'qitish jarayonidagi ilg'or xorijiy va milliy tajribani jo'riy etish natijalarini taqdim etish, bu borada mutaxassislarning fikrlari bilan tanishish, o‘zaro tajriba almashish, shuningdek, eng yangi nemis tili darsliklari va o‘quv uslubiy qo‘llanmalar taqdimotida ishtirok etib, ulardan o‘quv mashg‘ulotlarida samarali foydalanish uslublari bilan tanishishdir."
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
        'ru':"3-4 ноября 2022 г.",
        'uz':"3-4-Noyabr, 2022-yil",
        'de':"03. - 04. November 2022"
    },
    '12':{
        'ru':"Конференция преподавателей немецкого языка Узбекистана",
        'uz':"O‘zbekistondagi nemis tili o‘qituvchilarining anjumani",
        'de':"Deutschlehrertag 2022 in Usbekistan"
    },
    '13':{
        'ru':"03-04 ноября 2022 года состоится XV конференция преподавателей немецкого языка Узбекистана.",
        'uz':"2022 yilning 03-04 noyabr kunlari O’zbekistondagi nemis tili o’qituvchilarining XV anjumani bo’lib o’tadi.",
        'de':"Am 03. und 04. November 2022 findet der XV. Deutschlehrertag in Usbekistan statt."
    },
    '14':{
        'ru':"Конференция организуется в сотрудничестве с Центром по вопросам школьного образования за границей (ЦфА), Немецкой службой академических обменов (ДААД) и Посольством ФРГ в Ташкенте.",
        'uz':"Anjuman Xorijdagi maktablar markaziy boshqarmasi (ZfA), Nemis akademik almashuv xizmati (DAAD) va Germaniyaning O'zbekistondagi elchihonasi bilan hamkorlikda tashkil etilmoqda.",
        'de':"Der Deutschlehrertag findet in Kooperation mit der Zentralstelle für das Auslandsschulwesen (ZfA), dem Deutschen Akademischen Austauschdienst (DAAD) und der deutschen Botschaft in Taschkent statt."
    },
    '15':{
        'ru':"И в этом году мы предлагаем много интересных мастер-классов, на которых Вы сможете освежить и расширить свои знания. Одновременно у Вас будет возможность к обмену мнениями с коллегами со всей страны.",
        'uz':"Bu yil ham biz Sizga bir qancha qiziqarli master klass va seminarlarni taqdim etamiz. Siz ularda ishtirok etib, o’zingizning bilim, malaka va ko’nikmalaringizni yangilash va kengaytirish, shu bilan birga o’z hamkasblaringiz bilan tajriba almashish imkoniga ega bo’lasiz.",
        'de':"Auch in diesem Jahr bieten wir wieder viele interessante Workshops, in denen Sie Ihre Kenntnisse auffrischen und erweitern können. Gleichzeitig haben Sie die Möglichkeit, sich mit Kollegen aus dem ganzen Land auszutauschen."
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