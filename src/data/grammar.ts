export interface GrammarExample {
  hu: string
  ru: string
  uk: string
}

export interface GrammarCardData {
  id: string
  num: number
  groupIndex: number
  suffix: string
  title: { ru: string; uk: string }
  rule: { ru: string; uk: string }
  examples: GrammarExample[]
  quiz: {
    question: { ru: string; uk: string }
    answer: string
    options: string[]
  }
  hasTip: boolean
}

export interface GrammarGroupData {
  index: number
  title: { ru: string; uk: string }
  headerBg: string
  bar: string
}

export const grammarGroups: GrammarGroupData[] = [
  { index: 0, title: { ru: 'Место и движение', uk: 'Місце і рух' },  headerBg: '#1a1a1a', bar: '#e84c3d' },
  { index: 1, title: { ru: 'Глаголы',          uk: 'Дієслова' },     headerBg: '#2a9d5c', bar: '#2a9d5c' },
  { index: 2, title: { ru: 'Существительные',  uk: 'Іменники' },     headerBg: '#7c5dd6', bar: '#7c5dd6' },
  { index: 3, title: { ru: 'Вопросы',          uk: 'Питання' },      headerBg: '#a07800', bar: '#f5c842' },
]

export const grammarCards: GrammarCardData[] = [
  // ── GROUP I — Place & motion ──────────────────────────────────
  {
    id: 'g01', num: 1, groupIndex: 0,
    suffix: '-ba / -be',
    title: { ru: 'Куда?', uk: 'Куди?' },
    rule: {
      ru: 'Добавь -ba или -be к слову. Слово с A, O, U → -ba. С E, I, Ö, Ü → -be.',
      uk: 'Додай -ba або -be до слова. Слово з A, O, U → -ba. З E, I, Ö, Ü → -be.',
    },
    examples: [
      { hu: 'gyárba',    ru: 'на завод',    uk: 'на завод'    },
      { hu: 'kórházba',  ru: 'в больницу',  uk: 'у лікарню'   },
      { hu: 'iskolába',  ru: 'в школу',     uk: 'до школи'    },
      { hu: 'bankba',    ru: 'в банк',      uk: 'в банк'      },
    ],
    quiz: {
      question: { ru: 'Как сказать "в аптеку" (gyógyszertár)?', uk: 'Як сказати "в аптеку" (gyógyszertár)?' },
      answer: 'gyógyszertárba',
      options: ['gyógyszertárba', 'gyógyszertárban', 'gyógyszertárból'],
    },
    hasTip: true,
  },
  {
    id: 'g02', num: 2, groupIndex: 0,
    suffix: '-ban / -ben',
    title: { ru: 'Где?', uk: 'Де?' },
    rule: {
      ru: 'Добавь -ban/-ben — ты уже находишься внутри. A, O, U → -ban. E, I, Ö, Ü → -ben.',
      uk: 'Додай -ban/-ben — ти вже знаходишся всередині. A, O, U → -ban. E, I, Ö, Ü → -ben.',
    },
    examples: [
      { hu: 'gyárban',   ru: 'на заводе',   uk: 'на заводі'   },
      { hu: 'kórházban', ru: 'в больнице',  uk: 'у лікарні'   },
      { hu: 'iskolában', ru: 'в школе',     uk: 'у школі'     },
      { hu: 'bankban',   ru: 'в банке',     uk: 'в банку'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "я в больнице" (kórház)?', uk: 'Як сказати "я в лікарні" (kórház)?' },
      answer: 'kórházban',
      options: ['kórházban', 'kórházba', 'kórháztól'],
    },
    hasTip: true,
  },
  {
    id: 'g03', num: 3, groupIndex: 0,
    suffix: '-ból / -ből',
    title: { ru: 'Откуда?', uk: 'Звідки?' },
    rule: {
      ru: 'Добавь -ból/-ből — движение изнутри наружу. A, O, U → -ból. E, I, Ö, Ü → -ből.',
      uk: 'Додай -ból/-ből — рух зсередини назовні. A, O, U → -ból. E, I, Ö, Ü → -ből.',
    },
    examples: [
      { hu: 'gyárból',   ru: 'с завода',    uk: 'з заводу'    },
      { hu: 'kórházból', ru: 'из больницы', uk: 'з лікарні'   },
      { hu: 'iskolából', ru: 'из школы',    uk: 'зі школи'    },
      { hu: 'bankból',   ru: 'из банка',    uk: 'з банку'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "из школы" (iskola)?', uk: 'Як сказати "зі школи" (iskola)?' },
      answer: 'iskolából',
      options: ['iskolából', 'iskolában', 'iskolába'],
    },
    hasTip: true,
  },
  {
    id: 'g04', num: 4, groupIndex: 0,
    suffix: '-hoz / -hez / -höz',
    title: { ru: 'Куда (к кому)?', uk: 'Куди (до кого)?' },
    rule: {
      ru: 'К человеку или предмету снаружи. O, A, U → -hoz. E, I → -hez. Ö, Ü → -höz.',
      uk: 'До людини або предмета ззовні. O, A, U → -hoz. E, I → -hez. Ö, Ü → -höz.',
    },
    examples: [
      { hu: 'orvoshoz',    ru: 'к врачу',         uk: 'до лікаря'     },
      { hu: 'főnökhöz',   ru: 'к начальнику',     uk: 'до начальника' },
      { hu: 'kollégához', ru: 'к коллеге',         uk: 'до колеги'     },
      { hu: 'szomszédhoz',ru: 'к соседу',          uk: 'до сусіда'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "к начальнику" (főnök)?', uk: 'Як сказати "до начальника" (főnök)?' },
      answer: 'főnökhöz',
      options: ['főnökhöz', 'főnöknél', 'főnöktől'],
    },
    hasTip: true,
  },
  {
    id: 'g05', num: 5, groupIndex: 0,
    suffix: '-nál / -nél',
    title: { ru: 'Где (у кого)?', uk: 'Де (у кого)?' },
    rule: {
      ru: 'Находишься рядом с человеком или местом снаружи. A, O, U → -nál. E, I, Ö, Ü → -nél.',
      uk: 'Знаходишся поруч з людиною або місцем ззовні. A, O, U → -nál. E, I, Ö, Ü → -nél.',
    },
    examples: [
      { hu: 'orvosnál',    ru: 'у врача',      uk: 'у лікаря'     },
      { hu: 'főnöknél',   ru: 'у начальника',  uk: 'у начальника' },
      { hu: 'kollégánál', ru: 'у коллеги',      uk: 'у колеги'     },
      { hu: 'szomszédnál',ru: 'у соседа',       uk: 'у сусіда'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "у врача" (orvos)?', uk: 'Як сказати "у лікаря" (orvos)?' },
      answer: 'orvosnál',
      options: ['orvosnál', 'orvoshoz', 'orvostól'],
    },
    hasTip: true,
  },
  {
    id: 'g06', num: 6, groupIndex: 0,
    suffix: '-tól / -től',
    title: { ru: 'Откуда (от кого)?', uk: 'Звідки (від кого)?' },
    rule: {
      ru: 'Уходишь от человека или предмета снаружи. A, O, U → -tól. E, I, Ö, Ü → -től.',
      uk: 'Йдеш від людини або предмета ззовні. A, O, U → -tól. E, I, Ö, Ü → -től.',
    },
    examples: [
      { hu: 'orvostól',    ru: 'от врача',      uk: 'від лікаря'     },
      { hu: 'főnöktől',   ru: 'от начальника',  uk: 'від начальника' },
      { hu: 'kollégától', ru: 'от коллеги',      uk: 'від колеги'     },
      { hu: 'szomszédtól',ru: 'от соседа',       uk: 'від сусіда'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "от соседа" (szomszéd)?', uk: 'Як сказати "від сусіда" (szomszéd)?' },
      answer: 'szomszédtól',
      options: ['szomszédtól', 'szomszédnál', 'szomszédhoz'],
    },
    hasTip: true,
  },
  {
    id: 'g07', num: 7, groupIndex: 0,
    suffix: '-ra / -re',
    title: { ru: 'На что?', uk: 'На що?' },
    rule: {
      ru: 'На поверхность сверху или направление. A, O, U → -ra. E, I, Ö, Ü → -re.',
      uk: 'На поверхню зверху або напрямок. A, O, U → -ra. E, I, Ö, Ü → -re.',
    },
    examples: [
      { hu: 'asztalra',    ru: 'на стол',     uk: 'на стіл'    },
      { hu: 'buszra',      ru: 'на автобус',  uk: 'на автобус' },
      { hu: 'munkahelyre', ru: 'на работу',   uk: 'на роботу'  },
      { hu: 'polcra',      ru: 'на полку',    uk: 'на полицю'  },
    ],
    quiz: {
      question: { ru: 'Как сказать "на автобус" (busz)?', uk: 'Як сказати "на автобус" (busz)?' },
      answer: 'buszra',
      options: ['buszra', 'buszon', 'buszról'],
    },
    hasTip: true,
  },
  {
    id: 'g08', num: 8, groupIndex: 0,
    suffix: '-n / -on / -en / -ön',
    title: { ru: 'На чём?', uk: 'На чому?' },
    rule: {
      ru: 'Находишься на поверхности. Пара для -ra/-re. A, O, U → -on. E, I → -en. Ö, Ü → -ön.',
      uk: 'Знаходишся на поверхні. Пара для -ra/-re. A, O, U → -on. E, I → -en. Ö, Ü → -ön.',
    },
    examples: [
      { hu: 'asztalon',    ru: 'на столе',    uk: 'на столі'   },
      { hu: 'buszon',      ru: 'в автобусе',  uk: 'в автобусі' },
      { hu: 'munkahelyen', ru: 'на работе',   uk: 'на роботі'  },
      { hu: 'polcon',      ru: 'на полке',    uk: 'на полиці'  },
    ],
    quiz: {
      question: { ru: 'Как сказать "на работе" (munkahely)?', uk: 'Як сказати "на роботі" (munkahely)?' },
      answer: 'munkahelyen',
      options: ['munkahelyen', 'munkahelyre', 'munkahelyről'],
    },
    hasTip: true,
  },
  {
    id: 'g09', num: 9, groupIndex: 0,
    suffix: '-ról / -ről',
    title: { ru: 'С чего?', uk: 'З чого?' },
    rule: {
      ru: 'Движение с поверхности. Пара для -ra/-re. A, O, U → -ról. E, I, Ö, Ü → -ről.',
      uk: 'Рух з поверхні. Пара для -ra/-re. A, O, U → -ról. E, I, Ö, Ü → -ről.',
    },
    examples: [
      { hu: 'asztalról',    ru: 'со стола',    uk: 'зі столу'  },
      { hu: 'buszról',      ru: 'с автобуса',  uk: 'з автобуса'},
      { hu: 'munkahelyről', ru: 'с работы',    uk: 'з роботи'  },
      { hu: 'polcról',      ru: 'с полки',     uk: 'з полиці'  },
    ],
    quiz: {
      question: { ru: 'Как сказать "с работы" (munkahely)?', uk: 'Як сказати "з роботи" (munkahely)?' },
      answer: 'munkahelyről',
      options: ['munkahelyről', 'munkahelyen', 'munkahelyre'],
    },
    hasTip: true,
  },

  // ── GROUP II — Verbs ──────────────────────────────────────────
  {
    id: 'g10', num: 10, groupIndex: 1,
    suffix: '-ok / -ek / -ök',
    title: { ru: 'Я делаю', uk: 'Я роблю' },
    rule: {
      ru: 'Настоящее время, 1-е лицо. A, O, U → -ok. E, I → -ek. Ö, Ü → -ök.',
      uk: 'Теперішній час, 1-а особа. A, O, U → -ok. E, I → -ek. Ö, Ü → -ök.',
    },
    examples: [
      { hu: 'dolgozok', ru: 'работаю',  uk: 'працюю' },
      { hu: 'beszélek', ru: 'говорю',   uk: 'говорю' },
      { hu: 'főzök',    ru: 'готовлю',  uk: 'готую'  },
      { hu: 'olvasok',  ru: 'читаю',    uk: 'читаю'  },
    ],
    quiz: {
      question: { ru: 'Как сказать "я плачу" (fizet)?', uk: 'Як сказати "я плачу" (fizet)?' },
      answer: 'fizetek',
      options: ['fizetek', 'fizetok', 'fizetök'],
    },
    hasTip: true,
  },
  {
    id: 'g11', num: 11, groupIndex: 1,
    suffix: '-tam / -tem',
    title: { ru: 'Я делал', uk: 'Я робив' },
    rule: {
      ru: 'Прошедшее время, 1-е лицо. A, O, U → -tam. E, I, Ö, Ü → -tem.',
      uk: 'Минулий час, 1-а особа. A, O, U → -tam. E, I, Ö, Ü → -tem.',
    },
    examples: [
      { hu: 'dolgoztam', ru: 'работал', uk: 'працював' },
      { hu: 'beszéltem', ru: 'говорил', uk: 'говорив'  },
      { hu: 'főztem',    ru: 'готовил', uk: 'готував'  },
      { hu: 'olvastam',  ru: 'читал',   uk: 'читав'    },
    ],
    quiz: {
      question: { ru: 'Как сказать "я работал" (dolgozik)?', uk: 'Як сказати "я працював" (dolgozik)?' },
      answer: 'dolgoztam',
      options: ['dolgoztam', 'dolgoztem', 'dolgozok'],
    },
    hasTip: true,
  },
  {
    id: 'g12', num: 12, groupIndex: 1,
    suffix: 'fog + -ni',
    title: { ru: 'Буду делать', uk: 'Буду робити' },
    rule: {
      ru: 'Будущее время = fog в нужной форме + глагол с -ni. Fogok / fogsz / fog / fogunk / fogtok / fognak.',
      uk: 'Майбутній час = fog у потрібній формі + дієслово з -ni. Fogok / fogsz / fog / fogunk / fogtok / fognak.',
    },
    examples: [
      { hu: 'dolgozni fogok',  ru: 'буду работать',   uk: 'буду працювати'  },
      { hu: 'menni fogok',     ru: 'буду идти',        uk: 'буду йти'        },
      { hu: 'beszélni fogsz',  ru: 'будешь говорить',  uk: 'будеш говорити'  },
      { hu: 'főzni fog',       ru: 'будет готовить',   uk: 'буде готувати'   },
    ],
    quiz: {
      question: { ru: 'Как сказать "буду говорить" (beszél)?', uk: 'Як сказати "буду говорити" (beszél)?' },
      answer: 'beszélni fogok',
      options: ['beszélni fogok', 'fogok beszél', 'beszélek fogni'],
    },
    hasTip: false,
  },
  {
    id: 'g13', num: 13, groupIndex: 1,
    suffix: 'van / nincs',
    title: { ru: 'Есть / нет', uk: 'Є / немає' },
    rule: {
      ru: 'Van = есть/существует. Nincs = нет/не существует. Не спрягается — одна форма для всех лиц.',
      uk: 'Van = є/існує. Nincs = немає/не існує. Не відмінюється — одна форма для всіх осіб.',
    },
    examples: [
      { hu: 'Van munkám.',  ru: 'У меня есть работа.', uk: 'У мене є робота.'   },
      { hu: 'Nincs idő.',   ru: 'Нет времени.',         uk: 'Немає часу.'        },
      { hu: 'Van orvos?',  ru: 'Есть врач?',            uk: 'Є лікар?'           },
      { hu: 'Nincs pénz.', ru: 'Нет денег.',            uk: 'Немає грошей.'      },
    ],
    quiz: {
      question: { ru: 'Как сказать "нет времени"?', uk: 'Як сказати "немає часу"?' },
      answer: 'Nincs idő',
      options: ['Nincs idő', 'Van idő', 'Nem idő'],
    },
    hasTip: false,
  },
  {
    id: 'g14', num: 14, groupIndex: 1,
    suffix: 'kell',
    title: { ru: 'Нужно', uk: 'Треба' },
    rule: {
      ru: 'Kell = нужно/надо. Не изменяется по лицам. Kell + существительное или kell + инфинитив на -ni.',
      uk: 'Kell = треба/потрібно. Не змінюється по особах. Kell + іменник або kell + інфінітив на -ni.',
    },
    examples: [
      { hu: 'Kell egy orvos.',  ru: 'Нужен врач.',     uk: 'Потрібен лікар.'  },
      { hu: 'Kell menni.',      ru: 'Нужно идти.',      uk: 'Треба йти.'       },
      { hu: 'Kell a pénz.',     ru: 'Нужны деньги.',    uk: 'Потрібні гроші.'  },
      { hu: 'Kell segítség?',   ru: 'Нужна помощь?',    uk: 'Потрібна допомога?'},
    ],
    quiz: {
      question: { ru: 'Как сказать "нужен врач"?', uk: 'Як сказати "потрібен лікар"?' },
      answer: 'Kell egy orvos',
      options: ['Kell egy orvos', 'Kellek egy orvos', 'Van egy orvos'],
    },
    hasTip: false,
  },

  // ── GROUP III — Nouns ─────────────────────────────────────────
  {
    id: 'g15', num: 15, groupIndex: 2,
    suffix: '-k',
    title: { ru: 'Мн. число', uk: 'Мн. число' },
    rule: {
      ru: 'Множественное число — добавь -k. Если трудно произнести — вставь гласную: -ak, -ek, -ok, -ök.',
      uk: 'Множина — додай -k. Якщо важко вимовити — встав голосну: -ak, -ek, -ok, -ök.',
    },
    examples: [
      { hu: 'munkák',  ru: 'работы',    uk: 'роботи'    },
      { hu: 'orvosok', ru: 'врачи',     uk: 'лікарі'    },
      { hu: 'busszok', ru: 'автобусы',  uk: 'автобуси'  },
      { hu: 'iskolák', ru: 'школы',     uk: 'школи'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "врачи" (orvos)?', uk: 'Як сказати "лікарі" (orvos)?' },
      answer: 'orvosok',
      options: ['orvosok', 'orvosak', 'orvosek'],
    },
    hasTip: true,
  },
  {
    id: 'g16', num: 16, groupIndex: 2,
    suffix: '-t / -at / -et',
    title: { ru: 'Прям. доп.', uk: 'Прям. доп.' },
    rule: {
      ru: 'Прямое дополнение (Accusative) — кого/что вижу, хочу, ищу. Добавь -t к слову.',
      uk: 'Прямий додаток (Accusative) — кого/що бачу, хочу, шукаю. Додай -t до слова.',
    },
    examples: [
      { hu: 'kávét kérek',    ru: 'хочу кофе',       uk: 'хочу кави'         },
      { hu: 'munkát keresek', ru: 'ищу работу',       uk: 'шукаю роботу'      },
      { hu: 'orvost hívok',   ru: 'вызываю врача',    uk: 'викликаю лікаря'   },
      { hu: 'házat veszek',   ru: 'покупаю дом',      uk: 'купую будинок'     },
    ],
    quiz: {
      question: { ru: 'Как сказать "хочу кофе" (kávé)?', uk: 'Як сказати "хочу кави" (kávé)?' },
      answer: 'Kávét kérek',
      options: ['Kávét kérek', 'Kávé kérek', 'Kávéba kérek'],
    },
    hasTip: true,
  },
  {
    id: 'g17', num: 17, groupIndex: 2,
    suffix: '-m / -d / -ja',
    title: { ru: 'Мой / твой / его', uk: 'Мій / твій / його' },
    rule: {
      ru: 'Притяжательность через суффикс. -m = мой/моя. -d = твой/твоя. -ja/-je = его/её.',
      uk: 'Присвійність через суфікс. -m = мій/моя. -d = твій/твоя. -ja/-je = його/її.',
    },
    examples: [
      { hu: 'munkám',  ru: 'моя работа',      uk: 'моя робота'      },
      { hu: 'munkád',  ru: 'твоя работа',     uk: 'твоя робота'     },
      { hu: 'munkája', ru: 'его/её работа',   uk: 'його/її робота'  },
      { hu: 'házam',   ru: 'мой дом',         uk: 'мій дім'         },
    ],
    quiz: {
      question: { ru: 'Как сказать "мой паспорт" (útlevél)?', uk: 'Як сказати "мій паспорт" (útlevél)?' },
      answer: 'útlevelem',
      options: ['útlevelem', 'útleveled', 'útlevele'],
    },
    hasTip: false,
  },

  // ── GROUP IV — Questions ──────────────────────────────────────
  {
    id: 'g18', num: 18, groupIndex: 3,
    suffix: 'ki? / mi?',
    title: { ru: 'Кто? Что?', uk: 'Хто? Що?' },
    rule: {
      ru: 'Ki = кто (о людях). Mi = что (о предметах и понятиях). Ki → kinek/kit/kitől. Mi → minek/mit/mitől.',
      uk: 'Ki = хто (про людей). Mi = що (про предмети і поняття). Ki → kinek/kit/kitől. Mi → minek/mit/mitől.',
    },
    examples: [
      { hu: 'Ki ez?',      ru: 'Кто это?',            uk: 'Хто це?'           },
      { hu: 'Mi ez?',      ru: 'Что это?',             uk: 'Що це?'            },
      { hu: 'Mi a neve?',  ru: 'Как его зовут?',       uk: 'Як його звати?'    },
      { hu: 'Ki a főnök?', ru: 'Кто начальник?',       uk: 'Хто начальник?'    },
    ],
    quiz: {
      question: { ru: 'Как спросить "кто твой начальник"?', uk: 'Як запитати "хто твій начальник"?' },
      answer: 'Ki a főnöked?',
      options: ['Ki a főnöked?', 'Mi a főnöked?', 'Hol a főnöked?'],
    },
    hasTip: false,
  },
  {
    id: 'g19', num: 19, groupIndex: 3,
    suffix: 'hol? / hova? / honnan?',
    title: { ru: 'Где? Куда? Откуда?', uk: 'Де? Куди? Звідки?' },
    rule: {
      ru: 'Три вопроса для места. Hol = где (состояние). Hova = куда (движение к). Honnan = откуда (движение от).',
      uk: 'Три питання для місця. Hol = де (стан). Hova = куди (рух до). Honnan = звідки (рух від).',
    },
    examples: [
      { hu: 'Hol van a kórház?', ru: 'Где больница?',    uk: 'Де лікарня?'     },
      { hu: 'Hova mész?',        ru: 'Куда идёшь?',      uk: 'Куди йдеш?'      },
      { hu: 'Honnan jössz?',     ru: 'Откуда идёшь?',    uk: 'Звідки йдеш?'    },
      { hu: 'Hol lakol?',        ru: 'Где живёшь?',      uk: 'Де живеш?'       },
    ],
    quiz: {
      question: { ru: 'Как спросить "где больница"?', uk: 'Як запитати "де лікарня"?' },
      answer: 'Hol van a kórház?',
      options: ['Hol van a kórház?', 'Hova van a kórház?', 'Honnan a kórház?'],
    },
    hasTip: false,
  },
  {
    id: 'g20', num: 20, groupIndex: 3,
    suffix: 'mikor? / mennyi?',
    title: { ru: 'Когда? Сколько?', uk: 'Коли? Скільки?' },
    rule: {
      ru: 'Mikor = когда. Mennyi = сколько (количество, цена). Hány = сколько (число, счётные предметы).',
      uk: 'Mikor = коли. Mennyi = скільки (кількість, ціна). Hány = скільки (число, лічильні предмети).',
    },
    examples: [
      { hu: 'Mikor nyit?',      ru: 'Когда открывается?',  uk: 'Коли відкривається?' },
      { hu: 'Mennyi az ára?',   ru: 'Сколько стоит?',      uk: 'Скільки коштує?'     },
      { hu: 'Mikor jössz?',     ru: 'Когда придёшь?',      uk: 'Коли прийдеш?'       },
      { hu: 'Hány óra?',        ru: 'Сколько времени?',    uk: 'Котра година?'       },
    ],
    quiz: {
      question: { ru: 'Как спросить "когда открывается"?', uk: 'Як запитати "коли відкривається"?' },
      answer: 'Mikor nyit?',
      options: ['Mikor nyit?', 'Mennyi nyit?', 'Hány nyit?'],
    },
    hasTip: false,
  },
]
