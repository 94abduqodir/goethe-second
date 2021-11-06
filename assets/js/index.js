const langArr = {
    '1':{
        'ru':"Старт",
        'uz':'Bosh sahifa',
        'de':'Hauptseite'
    },
    '2':{
        'ru':"Конференция преподавателей немецкого языка Узбекистана",
        'uz':"O’zbekistondagi nemis tili o’qituvchilarining anjumani",
        'de':'Deutschlehrertag 2021 in Usbekistan'
    },
    '3':{
        'ru':"",
        'uz':'',
        'de':''
    },
    '4':{
        'ru':"Войти",
        'uz':'Kirish',
        'de':'Eintreten'
    },
    '5':{
        'ru':"ПРЕПОДАВАНИЕ НЕМЕЦКОГО ЯЗЫКА В ЭПОХУ ЦИФРОВЫХ ТЕХНОЛОГИЙ",
        'uz':"RAQAMLI TEXNOLOGIYALAR DAVRIDA NEMIS TILINI O'QITISH",
        'de':'DAF-UNTERRICHT IM DIGITALEN ZEITALTER'
    },
    '6':{
        'ru':"Международная конференция",
        'uz':'Xalqaro konferensiya',
        'de':'Internationale Konferenz'
    },
    '7':{
        'ru':"Войти",
        'uz':'Kirish',
        'de':'Eintreten'
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
  console.log(lang)
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
//   document.querySelector('.caru-1-h1').innerHTML = langArr['caru-1-h1'][hash]
  
  for(let key in langArr){
    document.querySelector('.nav-' + key).innerHTML = langArr[key][hash]
  }
  
  // for(let key in spakersArr){
  //   document.querySelector('.nav-' + key).innerHTML = langArr[key][hash]
  // }
}


changeLanguage();