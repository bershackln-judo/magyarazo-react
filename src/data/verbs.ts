import type { Verb } from '../types'

export const verbs: Verb[] = [
  {
    hu: 'van',
    ru: 'быть',
    uk: 'бути',
    transcription: '[вон]',
    examples: [
      { hu: 'Ez jó.', ru: 'Это хорошо.', uk: 'Це добре.' },
      { hu: 'Ő tanár.', ru: 'Он/она учитель.', uk: 'Він/вона вчитель.' },
      { hu: 'Itthon van.', ru: 'Он/она дома.', uk: 'Він/вона вдома.' },
    ]
  },
  {
    hu: 'kér',
    ru: 'просить, заказывать',
    uk: 'просити, замовляти',
    transcription: '[кэр]',
    examples: [
      { hu: 'Kérek egy kávét.', ru: 'Мне, пожалуйста, кофе.', uk: 'Мені, будь ласка, каву.' },
      { hu: 'Mit kérsz?', ru: 'Что ты хочешь?', uk: 'Що ти хочеш?' },
      { hu: 'Kérem a számlát.', ru: 'Счёт, пожалуйста.', uk: 'Рахунок, будь ласка.' },
    ]
  },
  {
    hu: 'megy',
    ru: 'идти',
    uk: 'іти',
    transcription: '[медь]',
    examples: [
      { hu: 'Megyek haza.', ru: 'Я иду домой.', uk: 'Я йду додому.' },
      { hu: 'Hova mész?', ru: 'Куда ты идёшь?', uk: 'Куди ти йдеш?' },
      { hu: 'Ő elmegy a boltba.', ru: 'Он идёт в магазин.', uk: 'Він іде до магазину.' },
    ]
  },
  {
    hu: 'jön',
    ru: 'приходить',
    uk: 'приходити',
    transcription: '[йён]',
    examples: [
      { hu: 'Jövök!', ru: 'Иду! (сейчас приду)', uk: 'Іду! (зараз прийду)' },
      { hu: 'Mikor jössz?', ru: 'Когда ты придёшь?', uk: 'Коли ти прийдеш?' },
      { hu: 'Ő holnap jön.', ru: 'Он придёт завтра.', uk: 'Він прийде завтра.' },
    ]
  },
  {
    hu: 'tud',
    ru: 'знать, мочь',
    uk: 'знати, могти',
    transcription: '[туд]',
    examples: [
      { hu: 'Tudom.', ru: 'Я знаю.', uk: 'Я знаю.' },
      { hu: 'Tudsz magyarul?', ru: 'Ты знаешь венгерский?', uk: 'Ти знаєш угорську?' },
      { hu: 'Nem tudok menni.', ru: 'Я не могу идти.', uk: 'Я не можу іти.' },
    ]
  },
  {
    hu: 'kell',
    ru: 'нужно, надо',
    uk: 'потрібно, треба',
    transcription: '[кэлл]',
    examples: [
      { hu: 'Menni kell.', ru: 'Нужно идти.', uk: 'Треба іти.' },
      { hu: 'Kell egy perc.', ru: 'Нужна минута.', uk: 'Потрібна хвилина.' },
      { hu: 'Nem kell.', ru: 'Не нужно.', uk: 'Не потрібно.' },
    ]
  },
  {
    hu: 'ad',
    ru: 'давать',
    uk: 'давати',
    transcription: '[од]',
    examples: [
      { hu: 'Add ide!', ru: 'Дай сюда!', uk: 'Дай сюди!' },
      { hu: 'Adok neked valamit.', ru: 'Я дам тебе кое-что.', uk: 'Я дам тобі дещо.' },
      { hu: 'Ő pénzt ad.', ru: 'Он даёт деньги.', uk: 'Він дає гроші.' },
    ]
  },
  {
    hu: 'vesz',
    ru: 'брать, покупать',
    uk: 'брати, купувати',
    transcription: '[вэс]',
    examples: [
      { hu: 'Veszek kenyeret.', ru: 'Я куплю хлеб.', uk: 'Я куплю хліб.' },
      { hu: 'Mit veszel?', ru: 'Что ты берёшь?', uk: 'Що ти береш?' },
      { hu: 'Vegyél tejet!', ru: 'Купи молока!', uk: 'Купи молока!' },
    ]
  },
  {
    hu: 'mond',
    ru: 'говорить, сказать',
    uk: 'говорити, сказати',
    transcription: '[монд]',
    examples: [
      { hu: 'Mit mondasz?', ru: 'Что ты говоришь?', uk: 'Що ти кажеш?' },
      { hu: 'Mondd meg!', ru: 'Скажи мне!', uk: 'Скажи мені!' },
      { hu: 'Ő azt mondja, hogy…', ru: 'Он говорит, что…', uk: 'Він каже, що…' },
    ]
  },
  {
    hu: 'lát',
    ru: 'видеть',
    uk: 'бачити',
    transcription: '[лат]',
    examples: [
      { hu: 'Látom.', ru: 'Я вижу.', uk: 'Я бачу.' },
      { hu: 'Látod azt?', ru: 'Ты это видишь?', uk: 'Ти це бачиш?' },
      { hu: 'Nem látok semmit.', ru: 'Я ничего не вижу.', uk: 'Я нічого не бачу.' },
    ]
  },
  {
    hu: 'fizet',
    ru: 'платить',
    uk: 'платити',
    transcription: '[физэт]',
    examples: [
      { hu: 'Fizetek.', ru: 'Я плачу.', uk: 'Я плачу.' },
      { hu: 'Ki fizet?', ru: 'Кто платит?', uk: 'Хто платить?' },
      { hu: 'Kártyával fizetek.', ru: 'Я плачу картой.', uk: 'Я плачу карткою.' },
    ]
  },
  {
    hu: 'eszik',
    ru: 'есть (принимать пищу)',
    uk: 'їсти',
    transcription: '[эсик]',
    examples: [
      { hu: 'Mit eszel?', ru: 'Что ты ешь?', uk: 'Що ти їси?' },
      { hu: 'Eszem egy szendvicset.', ru: 'Я ем бутерброд.', uk: 'Я їм бутерброд.' },
      { hu: 'Ő sokat eszik.', ru: 'Он много ест.', uk: 'Він багато їсть.' },
    ]
  },
  {
    hu: 'iszik',
    ru: 'пить',
    uk: 'пити',
    transcription: '[ишик]',
    examples: [
      { hu: 'Mit iszol?', ru: 'Что ты пьёшь?', uk: 'Що ти п\'єш?' },
      { hu: 'Iszom egy pohár vizet.', ru: 'Я пью стакан воды.', uk: 'Я п\'ю склянку води.' },
      { hu: 'Ő kávét iszik.', ru: 'Он пьёт кофе.', uk: 'Він п\'є каву.' },
    ]
  },
  {
    hu: 'segít',
    ru: 'помогать',
    uk: 'допомагати',
    transcription: '[шэгит]',
    examples: [
      { hu: 'Segítek!', ru: 'Я помогу!', uk: 'Я допоможу!' },
      { hu: 'Tudsz segíteni?', ru: 'Ты можешь помочь?', uk: 'Ти можеш допомогти?' },
      { hu: 'Ő mindig segít.', ru: 'Он всегда помогает.', uk: 'Він завжди допомагає.' },
    ]
  },
  {
    hu: 'ért',
    ru: 'понимать',
    uk: 'розуміти',
    transcription: '[эрт]',
    examples: [
      { hu: 'Értem.', ru: 'Я понимаю.', uk: 'Я розумію.' },
      { hu: 'Érted?', ru: 'Ты понимаешь?', uk: 'Ти розумієш?' },
      { hu: 'Nem értem.', ru: 'Я не понимаю.', uk: 'Я не розумію.' },
    ]
  },
  {
    hu: 'akar',
    ru: 'хотеть',
    uk: 'хотіти',
    transcription: '[окор]',
    examples: [
      { hu: 'Mit akarsz?', ru: 'Что ты хочешь?', uk: 'Що ти хочеш?' },
      { hu: 'Akarok menni.', ru: 'Я хочу идти.', uk: 'Я хочу іти.' },
      { hu: 'Ő nem akar várni.', ru: 'Он не хочет ждать.', uk: 'Він не хоче чекати.' },
    ]
  },
  {
    hu: 'csinál',
    ru: 'делать',
    uk: 'робити',
    transcription: '[чинал]',
    examples: [
      { hu: 'Mit csinálsz?', ru: 'Что ты делаешь?', uk: 'Що ти робиш?' },
      { hu: 'Csinálok valamit.', ru: 'Я делаю кое-что.', uk: 'Я роблю дещо.' },
      { hu: 'Mit csináljak?', ru: 'Что мне делать?', uk: 'Що мені робити?' },
    ]
  },
  {
    hu: 'hall',
    ru: 'слышать',
    uk: 'чути',
    transcription: '[холл]',
    examples: [
      { hu: 'Hallom.', ru: 'Я слышу.', uk: 'Я чую.' },
      { hu: 'Hallod?', ru: 'Ты слышишь?', uk: 'Ти чуєш?' },
      { hu: 'Nem hallok semmit.', ru: 'Я ничего не слышу.', uk: 'Я нічого не чую.' },
    ]
  },
  {
    hu: 'keres',
    ru: 'искать',
    uk: 'шукати',
    transcription: '[кэрэш]',
    examples: [
      { hu: 'Mit keresel?', ru: 'Что ты ищешь?', uk: 'Що ти шукаєш?' },
      { hu: 'A kulcsomat keresem.', ru: 'Я ищу свои ключи.', uk: 'Я шукаю свої ключі.' },
      { hu: 'Ő munkát keres.', ru: 'Он ищет работу.', uk: 'Він шукає роботу.' },
    ]
  },
  {
    hu: 'vár',
    ru: 'ждать',
    uk: 'чекати',
    transcription: '[вар]',
    examples: [
      { hu: 'Várok rád.', ru: 'Я жду тебя.', uk: 'Я чекаю на тебе.' },
      { hu: 'Várj!', ru: 'Подожди!', uk: 'Зачекай!' },
      { hu: 'Meddig vársz?', ru: 'Как долго ты ждёшь?', uk: 'Як довго ти чекаєш?' },
    ]
  },
  {
    hu: 'alszik',
    ru: 'спать',
    uk: 'спати',
    transcription: '[олсик]',
    examples: [
      { hu: 'Alszom.', ru: 'Я сплю.', uk: 'Я сплю.' },
      { hu: 'Jól aludtál?', ru: 'Ты хорошо поспал?', uk: 'Ти добре поспав?' },
      { hu: 'A gyerek alszik.', ru: 'Ребёнок спит.', uk: 'Дитина спить.' },
    ]
  },
  {
    hu: 'ül',
    ru: 'сидеть',
    uk: 'сидіти',
    transcription: '[юль]',
    examples: [
      { hu: 'Ülök a padon.', ru: 'Я сижу на скамейке.', uk: 'Я сиджу на лавці.' },
      { hu: 'Ülj le!', ru: 'Садись!', uk: 'Сідай!' },
      { hu: 'Hol ülsz?', ru: 'Где ты сидишь?', uk: 'Де ти сидиш?' },
    ]
  },
  {
    hu: 'áll',
    ru: 'стоять',
    uk: 'стояти',
    transcription: '[алл]',
    examples: [
      { hu: 'Állok a buszmegállóban.', ru: 'Я стою на автобусной остановке.', uk: 'Я стою на автобусній зупинці.' },
      { hu: 'Állj meg!', ru: 'Стой!', uk: 'Стій!' },
      { hu: 'Ő az ajtóban áll.', ru: 'Он стоит в дверях.', uk: 'Він стоїть у дверях.' },
    ]
  },
  {
    hu: 'jár',
    ru: 'ходить',
    uk: 'ходити',
    transcription: '[яр]',
    examples: [
      { hu: 'Gyalog járok.', ru: 'Я хожу пешком.', uk: 'Я ходжу пішки.' },
      { hu: 'Jársz edzésre?', ru: 'Ты ходишь на тренировки?', uk: 'Ти ходиш на тренування?' },
      { hu: 'Ő iskolába jár.', ru: 'Он ходит в школу.', uk: 'Він ходить до школи.' },
    ]
  },
  {
    hu: 'utazik',
    ru: 'путешествовать',
    uk: 'подорожувати',
    transcription: '[утозик]',
    examples: [
      { hu: 'Utazom Budapestre.', ru: 'Я еду в Будапешт.', uk: 'Я їду до Будапешта.' },
      { hu: 'Hova utazol?', ru: 'Куда ты едешь?', uk: 'Куди ти їдеш?' },
      { hu: 'Ő sokat utazik.', ru: 'Он много путешествует.', uk: 'Він багато подорожує.' },
    ]
  },
  {
    hu: 'dolgozik',
    ru: 'работать',
    uk: 'працювати',
    transcription: '[долгозик]',
    examples: [
      { hu: 'Dolgozom.', ru: 'Я работаю.', uk: 'Я працюю.' },
      { hu: 'Hol dolgozol?', ru: 'Где ты работаешь?', uk: 'Де ти працюєш?' },
      { hu: 'Ő otthon dolgozik.', ru: 'Он работает дома.', uk: 'Він працює вдома.' },
    ]
  },
  {
    hu: 'tanul',
    ru: 'учиться',
    uk: 'вчитися',
    transcription: '[тонул]',
    examples: [
      { hu: 'Magyarul tanulok.', ru: 'Я учу венгерский.', uk: 'Я вчу угорську.' },
      { hu: 'Mit tanulsz?', ru: 'Что ты учишь?', uk: 'Що ти вчиш?' },
      { hu: 'Ő sokat tanul.', ru: 'Он много учится.', uk: 'Він багато вчиться.' },
    ]
  },
  {
    hu: 'olvas',
    ru: 'читать',
    uk: 'читати',
    transcription: '[олвош]',
    examples: [
      { hu: 'Könyvet olvasok.', ru: 'Я читаю книгу.', uk: 'Я читаю книгу.' },
      { hu: 'Mit olvasol?', ru: 'Что ты читаешь?', uk: 'Що ти читаєш?' },
      { hu: 'Ő minden nap olvas.', ru: 'Он читает каждый день.', uk: 'Він читає кожен день.' },
    ]
  },
  {
    hu: 'ír',
    ru: 'писать',
    uk: 'писати',
    transcription: '[ир]',
    examples: [
      { hu: 'Levelet írok.', ru: 'Я пишу письмо.', uk: 'Я пишу листа.' },
      { hu: 'Írsz nekem?', ru: 'Ты напишешь мне?', uk: 'Ти напишеш мені?' },
      { hu: 'Ő szépen ír.', ru: 'Он красиво пишет.', uk: 'Він гарно пише.' },
    ]
  },
  {
    hu: 'néz',
    ru: 'смотреть',
    uk: 'дивитися',
    transcription: '[нэз]',
    examples: [
      { hu: 'Tévét nézek.', ru: 'Я смотрю телевизор.', uk: 'Я дивлюся телевізор.' },
      { hu: 'Mit nézel?', ru: 'Что ты смотришь?', uk: 'Що ти дивишся?' },
      { hu: 'Nézd meg!', ru: 'Посмотри!', uk: 'Подивися!' },
    ]
  },
  {
    hu: 'hallgat',
    ru: 'слушать',
    uk: 'слухати',
    transcription: '[холлгот]',
    examples: [
      { hu: 'Zenét hallgatok.', ru: 'Я слушаю музыку.', uk: 'Я слухаю музику.' },
      { hu: 'Mit hallgatsz?', ru: 'Что ты слушаешь?', uk: 'Що ти слухаєш?' },
      { hu: 'Hallgass rám!', ru: 'Слушай меня!', uk: 'Слухай мене!' },
    ]
  },
  {
    hu: 'beszél',
    ru: 'разговаривать',
    uk: 'розмовляти',
    transcription: '[бэсэл]',
    examples: [
      { hu: 'Magyarul beszélek.', ru: 'Я говорю по-венгерски.', uk: 'Я говорю угорською.' },
      { hu: 'Tudsz angolul beszélni?', ru: 'Ты можешь говорить по-английски?', uk: 'Ти можеш говорити англійською?' },
      { hu: 'Ő sokat beszél.', ru: 'Он много говорит.', uk: 'Він багато говорить.' },
    ]
  },
  {
    hu: 'nyit',
    ru: 'открывать',
    uk: 'відкривати',
    transcription: '[нит]',
    examples: [
      { hu: 'Nyisd ki az ajtót!', ru: 'Открой дверь!', uk: 'Відчини двері!' },
      { hu: 'Nyitok egy ablakot.', ru: 'Я открою окно.', uk: 'Я відкрию вікно.' },
      { hu: 'Mikor nyit a bolt?', ru: 'Когда открывается магазин?', uk: 'Коли відкривається магазин?' },
    ]
  },
  {
    hu: 'zár',
    ru: 'закрывать',
    uk: 'закривати',
    transcription: '[зар]',
    examples: [
      { hu: 'Zárd be az ajtót!', ru: 'Закрой дверь!', uk: 'Зачини двері!' },
      { hu: 'Zárom az ablakot.', ru: 'Я закрываю окно.', uk: 'Я закриваю вікно.' },
      { hu: 'Mikor zár a posta?', ru: 'Когда закрывается почта?', uk: 'Коли закривається пошта?' },
    ]
  },
  {
    hu: 'hoz',
    ru: 'приносить',
    uk: 'приносити',
    transcription: '[хоз]',
    examples: [
      { hu: 'Hozok valamit.', ru: 'Я принесу кое-что.', uk: 'Я принесу дещо.' },
      { hu: 'Mit hozol?', ru: 'Что ты принесёшь?', uk: 'Що ти принесеш?' },
      { hu: 'Hozz vizet!', ru: 'Принеси воды!', uk: 'Принеси води!' },
    ]
  },
  {
    hu: 'visz',
    ru: 'уносить, нести',
    uk: 'нести, відносити',
    transcription: '[вис]',
    examples: [
      { hu: 'Viszem a táskát.', ru: 'Я несу сумку.', uk: 'Я несу сумку.' },
      { hu: 'Mit viszel?', ru: 'Что ты несёшь?', uk: 'Що ти несеш?' },
      { hu: 'Vidd el!', ru: 'Унеси это!', uk: 'Віднеси це!' },
    ]
  },
  {
    hu: 'küld',
    ru: 'отправлять',
    uk: 'відправляти',
    transcription: '[кюльд]',
    examples: [
      { hu: 'Küldök egy üzenetet.', ru: 'Я отправлю сообщение.', uk: 'Я надішлю повідомлення.' },
      { hu: 'Küldsz képet?', ru: 'Ты пришлёшь фото?', uk: 'Ти пришлеш фото?' },
      { hu: 'Küld el a levelet!', ru: 'Отправь письмо!', uk: 'Відправ листа!' },
    ]
  },
  {
    hu: 'főz',
    ru: 'готовить (еду)',
    uk: 'готувати (їжу)',
    transcription: '[фёз]',
    examples: [
      { hu: 'Ebédet főzök.', ru: 'Я готовлю обед.', uk: 'Я готую обід.' },
      { hu: 'Mit főzöl?', ru: 'Что ты готовишь?', uk: 'Що ти готуєш?' },
      { hu: 'Ő nagyon jól főz.', ru: 'Он очень хорошо готовит.', uk: 'Він дуже добре готує.' },
    ]
  },
  {
    hu: 'vásárol',
    ru: 'покупать',
    uk: 'купувати',
    transcription: '[вашарол]',
    examples: [
      { hu: 'A piacon vásárolok.', ru: 'Я покупаю на рынке.', uk: 'Я купую на ринку.' },
      { hu: 'Hol vásárolsz?', ru: 'Где ты покупаешь?', uk: 'Де ти купуєш?' },
      { hu: 'Ő sokat vásárol online.', ru: 'Он много покупает онлайн.', uk: 'Він багато купує онлайн.' },
    ]
  },
  {
    hu: 'rendel',
    ru: 'заказывать',
    uk: 'замовляти',
    transcription: '[рэндэл]',
    examples: [
      { hu: 'Pizzát rendelek.', ru: 'Я заказываю пиццу.', uk: 'Я замовляю піцу.' },
      { hu: 'Mit rendelsz?', ru: 'Что ты заказываешь?', uk: 'Що ти замовляєш?' },
      { hu: 'Online rendelünk.', ru: 'Мы заказываем онлайн.', uk: 'Ми замовляємо онлайн.' },
    ]
  },
  {
    hu: 'foglal',
    ru: 'бронировать',
    uk: 'бронювати',
    transcription: '[фоглол]',
    examples: [
      { hu: 'Szobát foglalok.', ru: 'Я бронирую номер.', uk: 'Я бронюю номер.' },
      { hu: 'Foglaltál helyet?', ru: 'Ты забронировал место?', uk: 'Ти забронював місце?' },
      { hu: 'Asztalt szeretnék foglalni.', ru: 'Я хотел бы забронировать столик.', uk: 'Я хотів би забронювати столик.' },
    ]
  },
  {
    hu: 'hív',
    ru: 'звонить',
    uk: 'телефонувати, дзвонити',
    transcription: '[хив]',
    examples: [
      { hu: 'Hívlak később.', ru: 'Я позвоню тебе позже.', uk: 'Я подзвоню тобі пізніше.' },
      { hu: 'Ki hívott?', ru: 'Кто звонил?', uk: 'Хто дзвонив?' },
      { hu: 'Hívj fel!', ru: 'Позвони мне!', uk: 'Подзвони мені!' },
    ]
  },
  {
    hu: 'találkozik',
    ru: 'встречаться',
    uk: 'зустрічатися',
    transcription: '[толалкозик]',
    examples: [
      { hu: 'Hat órakor találkozunk.', ru: 'Мы встречаемся в шесть.', uk: 'Ми зустрічаємося о шостій.' },
      { hu: 'Hol találkozunk?', ru: 'Где мы встретимся?', uk: 'Де ми зустрінемося?' },
      { hu: 'Találkoztam vele.', ru: 'Я встретился с ним.', uk: 'Я зустрівся з ним.' },
    ]
  },
  {
    hu: 'indul',
    ru: 'отправляться',
    uk: 'вирушати',
    transcription: '[індул]',
    examples: [
      { hu: 'Indulok.', ru: 'Я отправляюсь.', uk: 'Я вирушаю.' },
      { hu: 'Mikor indulsz?', ru: 'Когда ты отправляешься?', uk: 'Коли ти вирушаєш?' },
      { hu: 'A vonat hamarosan indul.', ru: 'Поезд скоро отправляется.', uk: 'Поїзд незабаром відправляється.' },
    ]
  },
  {
    hu: 'érkezik',
    ru: 'прибывать',
    uk: 'прибувати',
    transcription: '[эркэзик]',
    examples: [
      { hu: 'Mikor érkezik a busz?', ru: 'Когда прибывает автобус?', uk: 'Коли прибуває автобус?' },
      { hu: 'Már megérkeztem.', ru: 'Я уже прибыл.', uk: 'Я вже прибув.' },
      { hu: 'Ő holnap érkezik.', ru: 'Он прибывает завтра.', uk: 'Він прибуває завтра.' },
    ]
  },
  {
    hu: 'megáll',
    ru: 'останавливаться',
    uk: 'зупинятися',
    transcription: '[мэгалл]',
    examples: [
      { hu: 'Megállok itt.', ru: 'Я останавливаюсь здесь.', uk: 'Я зупиняюся тут.' },
      { hu: 'Álljon meg!', ru: 'Остановитесь!', uk: 'Зупиніться!' },
      { hu: 'A busz megáll itt.', ru: 'Автобус останавливается здесь.', uk: 'Автобус зупиняється тут.' },
    ]
  },
  {
    hu: 'fordul',
    ru: 'поворачивать',
    uk: 'повертати',
    transcription: '[фордул]',
    examples: [
      { hu: 'Fordulj jobbra!', ru: 'Поверни направо!', uk: 'Поверни праворуч!' },
      { hu: 'Az utca végén fordulj balra.', ru: 'На конце улицы поверни налево.', uk: 'На кінці вулиці поверни ліворуч.' },
      { hu: 'Fordulj meg!', ru: 'Повернись!', uk: 'Обернися!' },
    ]
  },
  {
    hu: 'siet',
    ru: 'спешить',
    uk: 'поспішати',
    transcription: '[шиэт]',
    examples: [
      { hu: 'Sietek.', ru: 'Я спешу.', uk: 'Я поспішаю.' },
      { hu: 'Ne siess!', ru: 'Не спеши!', uk: 'Не поспішай!' },
      { hu: 'Miért sietsz?', ru: 'Почему ты спешишь?', uk: 'Чому ти поспішаєш?' },
    ]
  },
  {
    hu: 'késik',
    ru: 'опаздывать',
    uk: 'запізнюватися',
    transcription: '[кэшик]',
    examples: [
      { hu: 'Késem.', ru: 'Я опаздываю.', uk: 'Я запізнююся.' },
      { hu: 'Miért késel?', ru: 'Почему ты опаздываешь?', uk: 'Чому ти запізнюєшся?' },
      { hu: 'A vonat késik.', ru: 'Поезд опаздывает.', uk: 'Поїзд запізнюється.' },
    ]
  },
  {
    hu: 'pihen',
    ru: 'отдыхать',
    uk: 'відпочивати',
    transcription: '[пихэн]',
    examples: [
      { hu: 'Pihenek egy kicsit.', ru: 'Я отдохну немного.', uk: 'Я трохи відпочину.' },
      { hu: 'Pihenj!', ru: 'Отдохни!', uk: 'Відпочинь!' },
      { hu: 'Hétvégén pihenünk.', ru: 'На выходных мы отдыхаем.', uk: 'На вихідних ми відпочиваємо.' },
    ]
  },
  {
    hu: 'játszik',
    ru: 'играть',
    uk: 'грати',
    transcription: '[ятсик]',
    examples: [
      { hu: 'Mit játszol?', ru: 'Во что ты играешь?', uk: 'У що ти граєш?' },
      { hu: 'Focizom.', ru: 'Я играю в футбол.', uk: 'Я граю у футбол.' },
      { hu: 'A gyerekek játszanak.', ru: 'Дети играют.', uk: 'Діти грають.' },
    ]
  },
  {
    hu: 'énekel',
    ru: 'петь',
    uk: 'співати',
    transcription: '[энэкэл]',
    examples: [
      { hu: 'Énekelek a zuhany alatt.', ru: 'Я пою в душе.', uk: 'Я співаю в душі.' },
      { hu: 'Tudsz énekelni?', ru: 'Ты умеешь петь?', uk: 'Ти вмієш співати?' },
      { hu: 'Ő szépen énekel.', ru: 'Он красиво поёт.', uk: 'Він гарно співає.' },
    ]
  },
  {
    hu: 'táncol',
    ru: 'танцевать',
    uk: 'танцювати',
    transcription: '[танцол]',
    examples: [
      { hu: 'Szeretek táncolni.', ru: 'Я люблю танцевать.', uk: 'Я люблю танцювати.' },
      { hu: 'Táncolsz velem?', ru: 'Ты потанцуешь со мной?', uk: 'Ти потанцюєш зі мною?' },
      { hu: 'Ő jól táncol.', ru: 'Он хорошо танцует.', uk: 'Він добре танцює.' },
    ]
  },
  {
    hu: 'nevet',
    ru: 'смеяться',
    uk: 'сміятися',
    transcription: '[нэвэт]',
    examples: [
      { hu: 'Nevetek.', ru: 'Я смеюсь.', uk: 'Я сміюся.' },
      { hu: 'Min nevetsz?', ru: 'Над чем ты смеёшься?', uk: 'З чого ти смієшся?' },
      { hu: 'Ne nevess!', ru: 'Не смейся!', uk: 'Не смійся!' },
    ]
  },
  {
    hu: 'fáj',
    ru: 'болеть',
    uk: 'боліти',
    transcription: '[фай]',
    examples: [
      { hu: 'Fáj a fejem.', ru: 'У меня болит голова.', uk: 'У мене болить голова.' },
      { hu: 'Hol fáj?', ru: 'Где болит?', uk: 'Де болить?' },
      { hu: 'Fáj a lábam.', ru: 'У меня болит нога.', uk: 'У мене болить нога.' },
    ]
  },
  {
    hu: 'érez',
    ru: 'чувствовать',
    uk: 'відчувати',
    transcription: '[эрэз]',
    examples: [
      { hu: 'Jól érzem magam.', ru: 'Я чувствую себя хорошо.', uk: 'Я почуваюся добре.' },
      { hu: 'Mit érzel?', ru: 'Что ты чувствуешь?', uk: 'Що ти відчуваєш?' },
      { hu: 'Fáradtnak érzem magam.', ru: 'Я чувствую себя уставшим.', uk: 'Я почуваюся втомленим.' },
    ]
  },
  {
    hu: 'szeret',
    ru: 'любить',
    uk: 'любити',
    transcription: '[сэрэт]',
    examples: [
      { hu: 'Szeretlek.', ru: 'Я тебя люблю.', uk: 'Я тебе люблю.' },
      { hu: 'Szeretem a kávét.', ru: 'Я люблю кофе.', uk: 'Я люблю каву.' },
      { hu: 'Ő szeret olvasni.', ru: 'Он любит читать.', uk: 'Він любить читати.' },
    ]
  },
  {
    hu: 'fél',
    ru: 'бояться',
    uk: 'боятися',
    transcription: '[фэл]',
    examples: [
      { hu: 'Félek.', ru: 'Я боюсь.', uk: 'Я боюся.' },
      { hu: 'Mitől félsz?', ru: 'Чего ты боишься?', uk: 'Чого ти боїшся?' },
      { hu: 'Ne félj!', ru: 'Не бойся!', uk: 'Не бійся!' },
    ]
  },
  {
    hu: 'örül',
    ru: 'радоваться',
    uk: 'радіти',
    transcription: '[ёрюль]',
    examples: [
      { hu: 'Örülök!', ru: 'Я рад(а)!', uk: 'Я радий/рада!' },
      { hu: 'Minek örülsz?', ru: 'Чему ты радуешься?', uk: 'Чому ти радієш?' },
      { hu: 'Örülök, hogy itt vagy.', ru: 'Я рад(а), что ты здесь.', uk: 'Я радий/рада, що ти тут.' },
    ]
  },
  {
    hu: 'gondol',
    ru: 'думать',
    uk: 'думати',
    transcription: '[гондол]',
    examples: [
      { hu: 'Mit gondolsz?', ru: 'Что ты думаешь?', uk: 'Що ти думаєш?' },
      { hu: 'Gondolok rád.', ru: 'Я думаю о тебе.', uk: 'Я думаю про тебе.' },
      { hu: 'Gondolj bele!', ru: 'Подумай об этом!', uk: 'Подумай про це!' },
    ]
  },
  {
    hu: 'emlékszik',
    ru: 'помнить',
    uk: 'пам\'ятати',
    transcription: '[эмлэксик]',
    examples: [
      { hu: 'Emlékszem rád.', ru: 'Я помню тебя.', uk: 'Я пам\'ятаю тебе.' },
      { hu: 'Emlékszel erre?', ru: 'Ты помнишь это?', uk: 'Ти пам\'ятаєш це?' },
      { hu: 'Nem emlékszem.', ru: 'Я не помню.', uk: 'Я не пам\'ятаю.' },
    ]
  },
  {
    hu: 'felejt',
    ru: 'забывать',
    uk: 'забувати',
    transcription: '[фэлэйт]',
    examples: [
      { hu: 'Ne felejtsd el!', ru: 'Не забудь!', uk: 'Не забудь!' },
      { hu: 'Elfelejtette.', ru: 'Он/она забыл(а).', uk: 'Він/вона забув(ла).' },
      { hu: 'Mindent elfelejtek.', ru: 'Я всё забываю.', uk: 'Я все забуваю.' },
    ]
  },
  {
    hu: 'ismer',
    ru: 'знать (человека)',
    uk: 'знати (людину)',
    transcription: '[ишмэр]',
    examples: [
      { hu: 'Ismerem őt.', ru: 'Я знаю его/её.', uk: 'Я знаю його/її.' },
      { hu: 'Ismersz valakit?', ru: 'Ты кого-нибудь знаешь?', uk: 'Ти когось знаєш?' },
      { hu: 'Nem ismerem.', ru: 'Я не знаю его/её.', uk: 'Я не знаю його/її.' },
    ]
  },
  {
    hu: 'magyaráz',
    ru: 'объяснять',
    uk: 'пояснювати',
    transcription: '[мадьяраз]',
    examples: [
      { hu: 'Magyarázd meg!', ru: 'Объясни!', uk: 'Поясни!' },
      { hu: 'Mit magyarázol?', ru: 'Что ты объясняешь?', uk: 'Що ти пояснюєш?' },
      { hu: 'Megmagyarázom.', ru: 'Я объясню.', uk: 'Я поясню.' },
    ]
  },
  {
    hu: 'kérdez',
    ru: 'спрашивать',
    uk: 'запитувати',
    transcription: '[кэрдэз]',
    examples: [
      { hu: 'Kérdezek valamit.', ru: 'Я спрошу кое-что.', uk: 'Я запитаю дещо.' },
      { hu: 'Miért kérdezel?', ru: 'Почему ты спрашиваешь?', uk: 'Чому ти запитуєш?' },
      { hu: 'Kérdezz bátran!', ru: 'Спрашивай смело!', uk: 'Питай сміливо!' },
    ]
  },
  {
    hu: 'válaszol',
    ru: 'отвечать',
    uk: 'відповідати',
    transcription: '[валосол]',
    examples: [
      { hu: 'Válaszolok.', ru: 'Я отвечаю.', uk: 'Я відповідаю.' },
      { hu: 'Miért nem válaszolsz?', ru: 'Почему ты не отвечаешь?', uk: 'Чому ти не відповідаєш?' },
      { hu: 'Válaszolj a kérdésre!', ru: 'Ответь на вопрос!', uk: 'Відповідай на питання!' },
    ]
  },
  {
    hu: 'köszön',
    ru: 'благодарить, здороваться',
    uk: 'дякувати, вітатися',
    transcription: '[кёсён]',
    examples: [
      { hu: 'Köszönöm!', ru: 'Спасибо!', uk: 'Дякую!' },
      { hu: 'Köszönt mindenkit.', ru: 'Он поздоровался со всеми.', uk: 'Він привітався з усіма.' },
      { hu: 'Hogyan köszönsz?', ru: 'Как ты здороваешься?', uk: 'Як ти вітаєшся?' },
    ]
  },
  {
    hu: 'épít',
    ru: 'строить',
    uk: 'будувати',
    transcription: '[эпит]',
    examples: [
      { hu: 'Házat épít.', ru: 'Он строит дом.', uk: 'Він будує дім.' },
      { hu: 'Mit építesz?', ru: 'Что ты строишь?', uk: 'Що ти будуєш?' },
      { hu: 'Új iskolát építenek.', ru: 'Они строят новую школу.', uk: 'Вони будують нову школу.' },
    ]
  },
  {
    hu: 'javít',
    ru: 'ремонтировать',
    uk: 'ремонтувати',
    transcription: '[явит]',
    examples: [
      { hu: 'Javítom az autót.', ru: 'Я ремонтирую машину.', uk: 'Я ремонтую машину.' },
      { hu: 'Ki javítja meg?', ru: 'Кто это починит?', uk: 'Хто це полагодить?' },
      { hu: 'Javíts ki engem!', ru: 'Поправь меня!', uk: 'Виправ мене!' },
    ]
  },
  {
    hu: 'tör',
    ru: 'ломать',
    uk: 'ламати',
    transcription: '[тёр]',
    examples: [
      { hu: 'Eltörte a poharat.', ru: 'Он разбил стакан.', uk: 'Він розбив склянку.' },
      { hu: 'Vigyázz, ne törd el!', ru: 'Осторожно, не сломай!', uk: 'Обережно, не зламай!' },
      { hu: 'Eltört.', ru: 'Сломалось/разбилось.', uk: 'Зламалося/розбилося.' },
    ]
  },
  {
    hu: 'visel',
    ru: 'носить (одежду)',
    uk: 'носити (одяг)',
    transcription: '[вишэл]',
    examples: [
      { hu: 'Kalapot visel.', ru: 'Он носит шляпу.', uk: 'Він носить капелюх.' },
      { hu: 'Mit viselsz?', ru: 'Что ты носишь?', uk: 'Що ти носиш?' },
      { hu: 'Egyenruhát visel.', ru: 'Он носит форму.', uk: 'Він носить форму.' },
    ]
  },
  {
    hu: 'dob',
    ru: 'бросать',
    uk: 'кидати',
    transcription: '[доб]',
    examples: [
      { hu: 'Dobd ide!', ru: 'Брось сюда!', uk: 'Кинь сюди!' },
      { hu: 'Dobj egy labdát!', ru: 'Брось мяч!', uk: 'Кинь м\'яч!' },
      { hu: 'Ő messzire dob.', ru: 'Он бросает далеко.', uk: 'Він кидає далеко.' },
    ]
  },
  {
    hu: 'fog',
    ru: 'держать',
    uk: 'тримати',
    transcription: '[фог]',
    examples: [
      { hu: 'Fogd meg!', ru: 'Держи!', uk: 'Тримай!' },
      { hu: 'Fogom a kezét.', ru: 'Я держу его руку.', uk: 'Я тримаю його руку.' },
      { hu: 'Ne engedd el, fogd!', ru: 'Не отпускай, держи!', uk: 'Не відпускай, тримай!' },
    ]
  },
  {
    hu: 'emel',
    ru: 'поднимать',
    uk: 'піднімати',
    transcription: '[эмэл]',
    examples: [
      { hu: 'Emeld fel!', ru: 'Подними!', uk: 'Підніми!' },
      { hu: 'Emelem a táskát.', ru: 'Я поднимаю сумку.', uk: 'Я піднімаю сумку.' },
      { hu: 'Nehéz emelni.', ru: 'Тяжело поднимать.', uk: 'Важко піднімати.' },
    ]
  },
  {
    hu: 'tesz',
    ru: 'класть, делать',
    uk: 'класти, робити',
    transcription: '[тэс]',
    examples: [
      { hu: 'Tedd le!', ru: 'Положи!', uk: 'Поклади!' },
      { hu: 'Hova tetted?', ru: 'Куда ты положил?', uk: 'Куди ти поклав?' },
      { hu: 'Teszek valamit.', ru: 'Я кое-что делаю.', uk: 'Я дещо роблю.' },
    ]
  },
  {
    hu: 'mutat',
    ru: 'показывать',
    uk: 'показувати',
    transcription: '[мутот]',
    examples: [
      { hu: 'Mutasd meg!', ru: 'Покажи!', uk: 'Покажи!' },
      { hu: 'Mit mutatsz?', ru: 'Что ты показываешь?', uk: 'Що ти показуєш?' },
      { hu: 'Megmutatom a térképet.', ru: 'Я покажу карту.', uk: 'Я покажу карту.' },
    ]
  },
  {
    hu: 'enged',
    ru: 'разрешать',
    uk: 'дозволяти',
    transcription: '[энгэд]',
    examples: [
      { hu: 'Engeded?', ru: 'Ты разрешаешь?', uk: 'Ти дозволяєш?' },
      { hu: 'Nem engedem.', ru: 'Я не разрешаю.', uk: 'Я не дозволяю.' },
      { hu: 'Engedd el!', ru: 'Отпусти!', uk: 'Відпусти!' },
    ]
  },
  {
    hu: 'próbál',
    ru: 'пробовать',
    uk: 'пробувати',
    transcription: '[пробал]',
    examples: [
      { hu: 'Próbálom.', ru: 'Я пробую.', uk: 'Я пробую.' },
      { hu: 'Próbáld ki!', ru: 'Попробуй!', uk: 'Спробуй!' },
      { hu: 'Megpróbálom.', ru: 'Я попробую.', uk: 'Я спробую.' },
    ]
  },
  {
    hu: 'sikerül',
    ru: 'получаться',
    uk: 'вдаватися',
    transcription: '[шикэрюль]',
    examples: [
      { hu: 'Sikerült!', ru: 'Получилось!', uk: 'Вийшло!' },
      { hu: 'Nem sikerül.', ru: 'Не получается.', uk: 'Не виходить.' },
      { hu: 'Remélem, sikerül.', ru: 'Надеюсь, получится.', uk: 'Сподіваюся, вийде.' },
    ]
  },
  {
    hu: 'kezd',
    ru: 'начинать',
    uk: 'починати',
    transcription: '[кэзд]',
    examples: [
      { hu: 'Kezdjük!', ru: 'Начнём!', uk: 'Почнімо!' },
      { hu: 'Mikor kezded?', ru: 'Когда ты начнёшь?', uk: 'Коли ти почнеш?' },
      { hu: 'Kezdem a munkát.', ru: 'Я начинаю работу.', uk: 'Я починаю роботу.' },
    ]
  },
  {
    hu: 'fejez',
    ru: 'заканчивать',
    uk: 'закінчувати',
    transcription: '[фэйэз]',
    examples: [
      { hu: 'Befejezem.', ru: 'Я заканчиваю.', uk: 'Я закінчую.' },
      { hu: 'Mikor fejezed be?', ru: 'Когда ты закончишь?', uk: 'Коли ти закінчиш?' },
      { hu: 'Fejezd be!', ru: 'Заканчивай!', uk: 'Закінчуй!' },
    ]
  },
  {
    hu: 'folytat',
    ru: 'продолжать',
    uk: 'продовжувати',
    transcription: '[фойтот]',
    examples: [
      { hu: 'Folytasd!', ru: 'Продолжай!', uk: 'Продовжуй!' },
      { hu: 'Folytatom holnap.', ru: 'Я продолжу завтра.', uk: 'Я продовжу завтра.' },
      { hu: 'Nem folytatjuk.', ru: 'Мы не продолжаем.', uk: 'Ми не продовжуємо.' },
    ]
  },
  {
    hu: 'változik',
    ru: 'меняться',
    uk: 'змінюватися',
    transcription: '[валтозик]',
    examples: [
      { hu: 'Minden változik.', ru: 'Всё меняется.', uk: 'Все змінюється.' },
      { hu: 'Az idő változik.', ru: 'Погода меняется.', uk: 'Погода змінюється.' },
      { hu: 'Sokat változtál.', ru: 'Ты сильно изменился.', uk: 'Ти сильно змінився.' },
    ]
  },
  {
    hu: 'marad',
    ru: 'оставаться',
    uk: 'залишатися',
    transcription: '[мород]',
    examples: [
      { hu: 'Maradok.', ru: 'Я остаюсь.', uk: 'Я залишаюся.' },
      { hu: 'Meddig maradsz?', ru: 'Как долго ты останешься?', uk: 'Як довго ти залишишся?' },
      { hu: 'Maradj itt!', ru: 'Оставайся здесь!', uk: 'Залишайся тут!' },
    ]
  },
  {
    hu: 'fut',
    ru: 'бегать',
    uk: 'бігати',
    transcription: '[фут]',
    examples: [
      { hu: 'Futok minden reggel.', ru: 'Я бегаю каждое утро.', uk: 'Я бігаю щоранку.' },
      { hu: 'Fuss!', ru: 'Беги!', uk: 'Біжи!' },
      { hu: 'Gyorsan fut.', ru: 'Он быстро бегает.', uk: 'Він швидко бігає.' },
    ]
  },
  {
    hu: 'ugrik',
    ru: 'прыгать',
    uk: 'стрибати',
    transcription: '[угрик]',
    examples: [
      { hu: 'Ugorj!', ru: 'Прыгай!', uk: 'Стрибай!' },
      { hu: 'Magasra ugrik.', ru: 'Он прыгает высоко.', uk: 'Він стрибає високо.' },
      { hu: 'Ne ugorj!', ru: 'Не прыгай!', uk: 'Не стрибай!' },
    ]
  },
  {
    hu: 'úszik',
    ru: 'плавать',
    uk: 'плавати',
    transcription: '[усик]',
    examples: [
      { hu: 'Úszom a tóban.', ru: 'Я плаваю в озере.', uk: 'Я плаваю в озері.' },
      { hu: 'Tudsz úszni?', ru: 'Ты умеешь плавать?', uk: 'Ти вмієш плавати?' },
      { hu: 'Ő jól úszik.', ru: 'Он хорошо плавает.', uk: 'Він добре плаває.' },
    ]
  },
  {
    hu: 'vezet',
    ru: 'вести, управлять',
    uk: 'вести, керувати',
    transcription: '[вэзэт]',
    examples: [
      { hu: 'Vezetek.', ru: 'Я веду (машину).', uk: 'Я веду (машину).' },
      { hu: 'Tudsz vezetni?', ru: 'Ты умеешь водить?', uk: 'Ти вмієш водити?' },
      { hu: 'Ő gyorsan vezet.', ru: 'Он быстро едет.', uk: 'Він швидко їде.' },
    ]
  },
  {
    hu: 'rajzol',
    ru: 'рисовать',
    uk: 'малювати',
    transcription: '[райзол]',
    examples: [
      { hu: 'Rajzolok egy képet.', ru: 'Я рисую картинку.', uk: 'Я малюю картинку.' },
      { hu: 'Rajzolj nekem!', ru: 'Нарисуй мне!', uk: 'Намалюй мені!' },
      { hu: 'Ő szépen rajzol.', ru: 'Он красиво рисует.', uk: 'Він гарно малює.' },
    ]
  },
  {
    hu: 'fest',
    ru: 'красить, рисовать (красками)',
    uk: 'фарбувати, малювати (фарбами)',
    transcription: '[фэшт]',
    examples: [
      { hu: 'Festem a falat.', ru: 'Я крашу стену.', uk: 'Я фарбую стіну.' },
      { hu: 'Mit festesz?', ru: 'Что ты рисуешь?', uk: 'Що ти малюєш?' },
      { hu: 'Ő olajképet fest.', ru: 'Он рисует маслом.', uk: 'Він малює олією.' },
    ]
  },
  {
    hu: 'takarít',
    ru: 'убирать',
    uk: 'прибирати',
    transcription: '[токорит]',
    examples: [
      { hu: 'Takarítok.', ru: 'Я убираю.', uk: 'Я прибираю.' },
      { hu: 'Mikor takarítasz?', ru: 'Когда ты убираешь?', uk: 'Коли ти прибираєш?' },
      { hu: 'Takarítsuk ki a szobát!', ru: 'Уберём комнату!', uk: 'Приберімо кімнату!' },
    ]
  },
  {
    hu: 'rak',
    ru: 'складывать, класть',
    uk: 'складати, класти',
    transcription: '[рок]',
    examples: [
      { hu: 'Rakd el!', ru: 'Убери/сложи!', uk: 'Забери/склади!' },
      { hu: 'Hova rakod?', ru: 'Куда ты кладёшь?', uk: 'Куди ти кладеш?' },
      { hu: 'Berakom a táskába.', ru: 'Я кладу в сумку.', uk: 'Я кладу в сумку.' },
    ]
  },
  {
    hu: 'köt',
    ru: 'завязывать, вязать',
    uk: 'зав\'язувати, в\'язати',
    transcription: '[кёт]',
    examples: [
      { hu: 'Kösd meg!', ru: 'Завяжи!', uk: 'Зав\'яжи!' },
      { hu: 'Köti a cipőfűzőt.', ru: 'Он завязывает шнурок.', uk: 'Він зав\'язує шнурок.' },
      { hu: 'Nem tudok kötni.', ru: 'Я не умею вязать.', uk: 'Я не вмію в\'язати.' },
    ]
  },
  {
    hu: 'vág',
    ru: 'резать',
    uk: 'різати',
    transcription: '[ваг]',
    examples: [
      { hu: 'Vágd fel!', ru: 'Нарежь!', uk: 'Наріж!' },
      { hu: 'Vágom a kenyeret.', ru: 'Я режу хлеб.', uk: 'Я ріжу хліб.' },
      { hu: 'Óvatosan vágj!', ru: 'Режь осторожно!', uk: 'Ріж обережно!' },
    ]
  },
  {
    hu: 'mos',
    ru: 'мыть',
    uk: 'мити',
    transcription: '[мош]',
    examples: [
      { hu: 'Mosok.', ru: 'Я мою.', uk: 'Я мию.' },
      { hu: 'Mosd meg a kezed!', ru: 'Вымой руки!', uk: 'Вимий руки!' },
      { hu: 'Mosógéppel mosok.', ru: 'Я стираю в машинке.', uk: 'Я пераю в машинці.' },
    ]
  },
  {
    hu: 'tölt',
    ru: 'наполнять',
    uk: 'наповнювати',
    transcription: '[тёльт]',
    examples: [
      { hu: 'Töltsd meg!', ru: 'Наполни!', uk: 'Наповни!' },
      { hu: 'Töltöm a poharat.', ru: 'Я наполняю стакан.', uk: 'Я наповнюю склянку.' },
      { hu: 'Töltsd fel a telefont!', ru: 'Зарядь телефон!', uk: 'Зарядь телефон!' },
    ]
  },
  {
    hu: 'zavar',
    ru: 'мешать, беспокоить',
    uk: 'заважати, турбувати',
    transcription: '[зовор]',
    examples: [
      { hu: 'Ne zavarj!', ru: 'Не мешай!', uk: 'Не заважай!' },
      { hu: 'Zavarlak?', ru: 'Я тебе мешаю?', uk: 'Я тобі заважаю?' },
      { hu: 'Zavar a zaj.', ru: 'Шум мешает.', uk: 'Шум заважає.' },
    ]
  },
  {
    hu: 'kínál',
    ru: 'предлагать',
    uk: 'пропонувати',
    transcription: '[кинал]',
    examples: [
      { hu: 'Kínálom egy kávéval.', ru: 'Я угощаю его кофе.', uk: 'Я пригощаю його кавою.' },
      { hu: 'Mit kínálsz?', ru: 'Что ты предлагаешь?', uk: 'Що ти пропонуєш?' },
      { hu: 'Kínálj meg!', ru: 'Угости меня!', uk: 'Пригости мене!' },
    ]
  },
  {
    hu: 'választ',
    ru: 'выбирать',
    uk: 'вибирати',
    transcription: '[валост]',
    examples: [
      { hu: 'Válassz egyet!', ru: 'Выбери одно!', uk: 'Вибери одне!' },
      { hu: 'Mit választasz?', ru: 'Что ты выбираешь?', uk: 'Що ти вибираєш?' },
      { hu: 'Nehéz választani.', ru: 'Трудно выбирать.', uk: 'Важко вибирати.' },
    ]
  },
  { hu:'él',          ru:'жить',                   uk:'жити',                    transcription:'[эл]',          examples:[{hu:'Itt élek.',ru:'Я живу здесь.',uk:'Я живу тут.'},{hu:'Jól él.',ru:'Хорошо живёт.',uk:'Добре живе.'},{hu:'Sokáig élj!',ru:'Живи долго!',uk:'Живи довго!'}] },
  { hu:'kap',         ru:'получать',                uk:'отримувати',              transcription:'[коп]',         examples:[{hu:'Levelet kapok.',ru:'Я получаю письмо.',uk:'Я отримую листа.'},{hu:'Kapsz pénzt?',ru:'Ты получаешь деньги?',uk:'Ти отримуєш гроші?'},{hu:'Ajándékot kap.',ru:'Получает подарок.',uk:'Отримує подарунок.'}] },
  { hu:'talál',       ru:'находить',                uk:'знаходити',               transcription:'[толал]',       examples:[{hu:'Megtalálom.',ru:'Я нахожу.',uk:'Я знаходжу.'},{hu:'Hol találom?',ru:'Где найти?',uk:'Де знайти?'},{hu:'Talált egy kulcsot.',ru:'Нашёл ключ.',uk:'Знайшов ключ.'}] },
  { hu:'kerül',       ru:'стоить / попасть',        uk:'коштувати / потрапити',   transcription:'[кэрюл]',       examples:[{hu:'Mennyibe kerül?',ru:'Сколько стоит?',uk:'Скільки коштує?'},{hu:'Sokba kerül.',ru:'Стоит дорого.',uk:'Коштує дорого.'},{hu:'Hogyan kerülök oda?',ru:'Как мне туда попасть?',uk:'Як мені туди потрапити?'}] },
  { hu:'jelent',      ru:'значить / означать',      uk:'означати',                transcription:'[йэлэнт]',      examples:[{hu:'Mit jelent ez?',ru:'Что это значит?',uk:'Що це означає?'},{hu:'Sokat jelent nekem.',ru:'Это много значит для меня.',uk:'Це багато означає для мене.'},{hu:'Mit jelent a szó?',ru:'Что означает слово?',uk:'Що означає це слово?'}] },
  { hu:'tart',        ru:'держать / длиться',       uk:'тримати / тривати',       transcription:'[торт]',        examples:[{hu:'Tartsd meg!',ru:'Держи!',uk:'Тримай!'},{hu:'Sokáig tart.',ru:'Это долго длится.',uk:'Це довго триває.'},{hu:'Kezét tartja.',ru:'Держит руку.',uk:'Тримає руку.'}] },
  { hu:'szól',        ru:'говорить / касаться',     uk:'говорити / стосуватися',  transcription:'[сол]',         examples:[{hu:'Miről szól?',ru:'О чём это?',uk:'Про що це?'},{hu:'Szólj nekem!',ru:'Скажи мне!',uk:'Скажи мені!'},{hu:'Szól a zene.',ru:'Играет музыка.',uk:'Грає музика.'}] },
  { hu:'mozog',       ru:'двигаться',               uk:'рухатися',                transcription:'[мозог]',       examples:[{hu:'Sokat kell mozogni.',ru:'Нужно много двигаться.',uk:'Треба багато рухатися.'},{hu:'Gyorsan mozog.',ru:'Быстро двигается.',uk:'Швидко рухається.'},{hu:'Mozdulj meg!',ru:'Подвигайся!',uk:'Поворухнися!'}] },
  { hu:'dönt',        ru:'решать / принимать решение', uk:'вирішувати',           transcription:'[дёнт]',        examples:[{hu:'Te döntöd el.',ru:'Ты решаешь.',uk:'Ти вирішуєш.'},{hu:'Dönteni kell.',ru:'Нужно решить.',uk:'Треба вирішити.'},{hu:'Jól döntöttem.',ru:'Я принял правильное решение.',uk:'Я прийняв правильне рішення.'}] },
  { hu:'tervez',      ru:'планировать',             uk:'планувати',               transcription:'[тэрвэз]',      examples:[{hu:'Mit tervezel?',ru:'Что ты планируешь?',uk:'Що ти плануєш?'},{hu:'Tervezem a nyarat.',ru:'Планирую лето.',uk:'Планую літо.'},{hu:'Jól tervez.',ru:'Хорошо планирует.',uk:'Добре планує.'}] },
  { hu:'remél',       ru:'надеяться',               uk:'сподіватися',             transcription:'[рэмэл]',       examples:[{hu:'Remélem, jó lesz.',ru:'Надеюсь, будет хорошо.',uk:'Сподіваюся, буде добре.'},{hu:'Ne adj fel, reméljünk!',ru:'Не сдавайся, будем надеяться!',uk:'Не здавайся, будемо сподіватися!'},{hu:'Mit remélt?',ru:'На что он надеялся?',uk:'На що він сподівався?'}] },
  { hu:'hisz',        ru:'верить',                  uk:'вірити',                  transcription:'[ис]',          examples:[{hu:'Hiszem, hogy igen.',ru:'Я верю, что да.',uk:'Я вірю, що так.'},{hu:'Ne higgy mindent!',ru:'Не верь всему!',uk:'Не вір всьому!'},{hu:'Benne hiszek.',ru:'Я верю в него.',uk:'Я вірю в нього.'}] },
  { hu:'bízik',       ru:'доверять',                uk:'довіряти',                transcription:'[бизик]',       examples:[{hu:'Bízom benned.',ru:'Я доверяю тебе.',uk:'Я довіряю тобі.'},{hu:'Bízz magadban!',ru:'Верь в себя!',uk:'Вір у себе!'},{hu:'Nem bízok benne.',ru:'Я ему не доверяю.',uk:'Я йому не довіряю.'}] },
  { hu:'megold',      ru:'решать (проблему)',        uk:'вирішувати (проблему)',   transcription:'[мэголд]',      examples:[{hu:'Megoldom a problémát.',ru:'Я решаю проблему.',uk:'Я вирішую проблему.'},{hu:'Hogyan oldod meg?',ru:'Как ты это решишь?',uk:'Як ти це вирішиш?'},{hu:'Megoldottuk.',ru:'Мы решили.',uk:'Ми вирішили.'}] },
  { hu:'fejlődik',    ru:'развиваться',             uk:'розвиватися',             transcription:'[фэйлёдик]',    examples:[{hu:'Sokat fejlődtél.',ru:'Ты сильно вырос.',uk:'Ти дуже виріс.'},{hu:'A város fejlődik.',ru:'Город развивается.',uk:'Місто розвивається.'},{hu:'Folyamatosan fejlődöm.',ru:'Я постоянно развиваюсь.',uk:'Я постійно розвиваюся.'}] },
  { hu:'tanít',       ru:'учить / преподавать',     uk:'вчити / викладати',       transcription:'[тонит]',       examples:[{hu:'Matematikát tanít.',ru:'Преподаёт математику.',uk:'Викладає математику.'},{hu:'Megtanít engem.',ru:'Научит меня.',uk:'Навчить мене.'},{hu:'Ki tanít téged?',ru:'Кто тебя учит?',uk:'Хто тебе вчить?'}] },
  { hu:'elad',        ru:'продавать',               uk:'продавати',               transcription:'[элод]',        examples:[{hu:'Eladja a házát.',ru:'Продаёт свой дом.',uk:'Продає свій дім.'},{hu:'Mit adsz el?',ru:'Что ты продаёшь?',uk:'Що ти продаєш?'},{hu:'Olcsón adja el.',ru:'Продаёт дёшево.',uk:'Продає дешево.'}] },
  { hu:'bérel',       ru:'арендовать / снимать',    uk:'орендувати / знімати',    transcription:'[бэрэл]',       examples:[{hu:'Lakást bérelek.',ru:'Я снимаю квартиру.',uk:'Я знімаю квартиру.'},{hu:'Autót bérelünk.',ru:'Мы арендуем машину.',uk:'Ми орендуємо машину.'},{hu:'Mennyiért béreled?',ru:'За сколько ты снимаешь?',uk:'За скільки ти знімаєш?'}] },
  { hu:'költ',        ru:'тратить (деньги)',         uk:'витрачати (гроші)',        transcription:'[кёлт]',        examples:[{hu:'Sokat költök.',ru:'Я много трачу.',uk:'Я багато витрачаю.'},{hu:'Mire költöd?',ru:'На что ты тратишь?',uk:'На що ти витрачаєш?'},{hu:'Okosan költ.',ru:'Тратит разумно.',uk:'Витрачає розумно.'}] },
  { hu:'számít',      ru:'иметь значение / рассчитывать', uk:'мати значення / розраховувати', transcription:'[самит]', examples:[{hu:'Ez sokat számít.',ru:'Это много значит.',uk:'Це багато значить.'},{hu:'Számítok rád.',ru:'Я рассчитываю на тебя.',uk:'Я розраховую на тебе.'},{hu:'Nem számít.',ru:'Не важно.',uk:'Не важливо.'}] },
  { hu:'ellenőriz',   ru:'проверять',               uk:'перевіряти',              transcription:'[эллэнёриз]',   examples:[{hu:'Ellenőrzöm a jegyedet.',ru:'Проверяю твой билет.',uk:'Перевіряю твій квиток.'},{hu:'Ellenőrizd meg!',ru:'Проверь!',uk:'Перевір!'},{hu:'Ellenőrzik a táskát.',ru:'Проверяют сумку.',uk:'Перевіряють сумку.'}] },
  { hu:'mér',         ru:'измерять / взвешивать',   uk:'вимірювати / зважувати',  transcription:'[мэр]',         examples:[{hu:'Megmérem a hőmérsékleted.',ru:'Измерю тебе температуру.',uk:'Виміряю тобі температуру.'},{hu:'Mérj súlyt!',ru:'Взвесься!',uk:'Зважся!'},{hu:'Mennyit mérsz?',ru:'Сколько ты весишь?',uk:'Скільки ти важиш?'}] },
  { hu:'javul',       ru:'улучшаться',              uk:'покращуватися',           transcription:'[йовул]',       examples:[{hu:'Az idő javul.',ru:'Погода улучшается.',uk:'Погода покращується.'},{hu:'Javulsz!',ru:'Ты прогрессируешь!',uk:'Ти прогресуєш!'},{hu:'A helyzet javult.',ru:'Ситуация улучшилась.',uk:'Ситуація покращилася.'}] },
  { hu:'felkel',      ru:'вставать (с постели)',     uk:'вставати (з ліжка)',      transcription:'[фэлкэл]',      examples:[{hu:'Korán kelek fel.',ru:'Я встаю рано.',uk:'Я встаю рано.'},{hu:'Mikor kelsz fel?',ru:'Когда ты встаёшь?',uk:'Коли ти встаєш?'},{hu:'Nehéz felkelni.',ru:'Трудно вставать.',uk:'Важко вставати.'}] },
  { hu:'lefekszik',   ru:'ложиться спать',          uk:'лягати спати',            transcription:'[лэфэксик]',    examples:[{hu:'Korán fekszem le.',ru:'Я рано ложусь.',uk:'Я рано лягаю.'},{hu:'Menj lefeküdni!',ru:'Иди ложись!',uk:'Іди лягай!'},{hu:'Mikor fekszel le?',ru:'Когда ты ложишься?',uk:'Коли ти лягаєш?'}] },
  { hu:'öltözik',     ru:'одеваться',               uk:'одягатися',               transcription:'[ёлтёзик]',     examples:[{hu:'Gyorsan öltözöm.',ru:'Я быстро одеваюсь.',uk:'Я швидко одягаюся.'},{hu:'Melegen öltözz!',ru:'Оденься тепло!',uk:'Одягнись тепло!'},{hu:'Elegánsan öltözik.',ru:'Одевается элегантно.',uk:'Одягається елегантно.'}] },
  { hu:'mosakodik',   ru:'умываться / мыться',      uk:'вмиватися / митися',      transcription:'[мошокодик]',   examples:[{hu:'Reggel mosakszom.',ru:'Утром умываюсь.',uk:'Вранці вмиваюся.'},{hu:'Mosakodj meg!',ru:'Умойся!',uk:'Вмийся!'},{hu:'Hideg vízzel mosakodik.',ru:'Умывается холодной водой.',uk:'Вмивається холодною водою.'}] },
  { hu:'reggelizik',  ru:'завтракать',              uk:'снідати',                 transcription:'[рэггэлизик]',  examples:[{hu:'Reggel reggelizel?',ru:'Ты завтракаешь утром?',uk:'Ти снідаєш вранці?'},{hu:'Nem reggeliztem.',ru:'Я не завтракал.',uk:'Я не снідав.'},{hu:'Mit reggelizel?',ru:'Что ты ешь на завтрак?',uk:'Що ти їси на сніданок?'}] },
  { hu:'ebédel',      ru:'обедать',                 uk:'обідати',                 transcription:'[эбэдэл]',      examples:[{hu:'Hol ebédelsz?',ru:'Где ты обедаешь?',uk:'Де ти обідаєш?'},{hu:'Együtt ebédelünk.',ru:'Мы обедаем вместе.',uk:'Ми обідаємо разом.'},{hu:'Már ebédeltem.',ru:'Я уже пообедал.',uk:'Я вже пообідав.'}] },
  { hu:'vacsorázik',  ru:'ужинать',                 uk:'вечеряти',                transcription:'[вочорозик]',   examples:[{hu:'Este vacsorázunk.',ru:'Вечером ужинаем.',uk:'Увечері вечеряємо.'},{hu:'Mit vacsoráztok?',ru:'Что вы едите на ужин?',uk:'Що ви їсте на вечерю?'},{hu:'Nem vacsoráztam még.',ru:'Я ещё не ужинал.',uk:'Я ще не вечеряв.'}] },
  { hu:'sétál',       ru:'гулять / прогуливаться',  uk:'гуляти / прогулюватися', transcription:'[шэтал]',       examples:[{hu:'A parkban sétálok.',ru:'Я гуляю в парке.',uk:'Я гуляю в парку.'},{hu:'Sétálj egyet!',ru:'Прогуляйся!',uk:'Прогуляйся!'},{hu:'Este sétálunk.',ru:'Вечером гуляем.',uk:'Увечері гуляємо.'}] },
  { hu:'sportol',     ru:'заниматься спортом',      uk:'займатися спортом',       transcription:'[шпортол]',     examples:[{hu:'Minden nap sportolok.',ru:'Я занимаюсь спортом каждый день.',uk:'Я займаюся спортом щодня.'},{hu:'Sportolsz eleget?',ru:'Ты достаточно занимаешься?',uk:'Ти достатньо займаєшся?'},{hu:'Sportoló ember.',ru:'Спортивный человек.',uk:'Спортивна людина.'}] },
  { hu:'edz',         ru:'тренироваться',           uk:'тренуватися',             transcription:'[эдз]',         examples:[{hu:'Az edzőteremben edzek.',ru:'Я тренируюсь в зале.',uk:'Я тренуюся в залі.'},{hu:'Mennyit edzesz?',ru:'Сколько ты тренируешься?',uk:'Скільки ти тренуєшся?'},{hu:'Keményen edz.',ru:'Тренируется усердно.',uk:'Тренується завзято.'}] },
  { hu:'repül',       ru:'летать / лететь',         uk:'літати / летіти',         transcription:'[рэпюл]',       examples:[{hu:'Repülőn repülök.',ru:'Я лечу на самолёте.',uk:'Я лечу на літаку.'},{hu:'Mikor repülsz?',ru:'Когда летишь?',uk:'Коли летиш?'},{hu:'Budapestre repülünk.',ru:'Мы летим в Будапешт.',uk:'Ми летимо до Будапешта.'}] },
  { hu:'parkol',      ru:'парковаться',             uk:'паркуватися',             transcription:'[пorkол]',      examples:[{hu:'Hol lehet parkolni?',ru:'Где можно припарковаться?',uk:'Де можна припаркуватися?'},{hu:'Ingyen parkolhatsz.',ru:'Можешь парковаться бесплатно.',uk:'Можеш паркуватися безкоштовно.'},{hu:'Tilos itt parkolni.',ru:'Здесь нельзя парковаться.',uk:'Тут не можна паркуватися.'}] },
  { hu:'felszáll',    ru:'садиться (в транспорт)',  uk:'сідати (в транспорт)',    transcription:'[фэлсалл]',     examples:[{hu:'Felszállok a buszra.',ru:'Я сажусь в автобус.',uk:'Я сідаю в автобус.'},{hu:'Melyik buszon szállsz fel?',ru:'На какой автобус ты садишься?',uk:'На який автобус ти сідаєш?'},{hu:'Felszállt a vonatra.',ru:'Сел в поезд.',uk:'Сів у поїзд.'}] },
  { hu:'kiszáll',     ru:'выходить (из транспорта)', uk:'виходити (з транспорту)', transcription:'[кисалл]',     examples:[{hu:'Hol kell kiszállni?',ru:'Где нужно выйти?',uk:'Де треба вийти?'},{hu:'Kiszállok a következő megállónál.',ru:'Я выхожу на следующей остановке.',uk:'Я виходжу на наступній зупинці.'},{hu:'Kiszállt a taxiból.',ru:'Вышел из такси.',uk:'Вийшов з таксі.'}] },
  { hu:'letölt',      ru:'скачивать',               uk:'завантажувати',           transcription:'[лэтёлт]',      examples:[{hu:'Letöltöm az alkalmazást.',ru:'Скачиваю приложение.',uk:'Завантажую додаток.'},{hu:'Letöltötted már?',ru:'Ты уже скачал?',uk:'Ти вже завантажив?'},{hu:'Ingyen letölthető.',ru:'Можно скачать бесплатно.',uk:'Можна завантажити безкоштовно.'}] },
  { hu:'feltölt',     ru:'заряжать / загружать',    uk:'заряджати / завантажувати', transcription:'[фэлтёлт]',  examples:[{hu:'Töltöm fel a telefont.',ru:'Заряжаю телефон.',uk:'Заряджаю телефон.'},{hu:'Feltöltötted a fotót?',ru:'Ты загрузил фото?',uk:'Ти завантажив фото?'},{hu:'Teljesen feltöltve.',ru:'Полностью заряжен.',uk:'Повністю заряджений.'}] },
  { hu:'töröl',       ru:'удалять / вытирать',      uk:'видаляти / витирати',     transcription:'[тёрёл]',       examples:[{hu:'Töröld le!',ru:'Удали!',uk:'Видали!'},{hu:'Töröltem az üzenetet.',ru:'Я удалил сообщение.',uk:'Я видалив повідомлення.'},{hu:'Töröld meg az asztalt.',ru:'Вытри стол.',uk:'Витри стіл.'}] },
  { hu:'nyom',        ru:'нажимать / давить',       uk:'натискати / тиснути',     transcription:'[ном]',         examples:[{hu:'Nyomd meg a gombot!',ru:'Нажми кнопку!',uk:'Натисни кнопку!'},{hu:'Ne nyomj!',ru:'Не дави!',uk:'Не тисни!'},{hu:'Erősen nyom.',ru:'Сильно давит.',uk:'Сильно тисне.'}] },
  { hu:'kapcsol',     ru:'включать / переключать',  uk:'вмикати / перемикати',    transcription:'[кончол]',      examples:[{hu:'Kapcsold be a lámpát!',ru:'Включи свет!',uk:'Ввімкни світло!'},{hu:'Kapcsold ki!',ru:'Выключи!',uk:'Вимкни!'},{hu:'Csatornát kapcsol.',ru:'Переключает канал.',uk:'Перемикає канал.'}] },
  { hu:'számol',      ru:'считать / рассчитывать',  uk:'рахувати / розраховувати', transcription:'[самол]',      examples:[{hu:'Számolj el tízig!',ru:'Посчитай до десяти!',uk:'Полічи до десяти!'},{hu:'Fejben számolok.',ru:'Считаю в уме.',uk:'Рахую в умі.'},{hu:'Nem jól számolt.',ru:'Неправильно посчитал.',uk:'Неправильно порахував.'}] },
  { hu:'bemutat',     ru:'представлять / знакомить', uk:'представляти / знайомити', transcription:'[бэмутот]',  examples:[{hu:'Bemutatom a barátomat.',ru:'Представляю своего друга.',uk:'Представляю свого друга.'},{hu:'Bemutatkozott.',ru:'Он представился.',uk:'Він представився.'},{hu:'Bemutatlak a főnöknek.',ru:'Представлю тебя начальнику.',uk:'Представлю тебе начальнику.'}] },
  { hu:'meghív',      ru:'приглашать',              uk:'запрошувати',             transcription:'[мэгив]',       examples:[{hu:'Meghívlak a bulira.',ru:'Приглашаю тебя на вечеринку.',uk:'Запрошую тебе на вечірку.'},{hu:'Meghívott ebédre.',ru:'Пригласил на обед.',uk:'Запросив на обід.'},{hu:'Köszönöm a meghívást.',ru:'Спасибо за приглашение.',uk:'Дякую за запрошення.'}] },
  { hu:'meglátogat',  ru:'навещать / посещать',     uk:'навідувати / відвідувати', transcription:'[мэглатогот]', examples:[{hu:'Meglátogatom a nagyit.',ru:'Навещаю бабушку.',uk:'Навідую бабусю.'},{hu:'Látogass meg!',ru:'Навести меня!',uk:'Навідай мене!'},{hu:'Meglátogatta a barátját.',ru:'Навестил друга.',uk:'Навідав друга.'}] },
  { hu:'megbeszél',   ru:'обсуждать / договариваться', uk:'обговорювати / домовлятися', transcription:'[мэгбэсэл]', examples:[{hu:'Megbeszéljük.',ru:'Мы договоримся.',uk:'Ми домовимося.'},{hu:'Megbeszéltem a főnökkel.',ru:'Обсудил с начальником.',uk:'Обговорив з начальником.'},{hu:'Mikor beszéljük meg?',ru:'Когда обсудим?',uk:'Коли обговоримо?'}] },
  { hu:'szervez',     ru:'организовывать',          uk:'організовувати',          transcription:'[сэрвэз]',      examples:[{hu:'Születésnapot szervez.',ru:'Организует день рождения.',uk:'Організовує день народження.'},{hu:'Ki szervezi?',ru:'Кто организует?',uk:'Хто організовує?'},{hu:'Jól szervez.',ru:'Хорошо организует.',uk:'Добре організовує.'}] },
  { hu:'üzen',        ru:'писать / присылать сообщение', uk:'надсилати повідомлення', transcription:'[юзэн]', examples:[{hu:'Üzenj nekem!',ru:'Напиши мне!',uk:'Напиши мені!'},{hu:'Üzenetet küldök.',ru:'Отправляю сообщение.',uk:'Надсилаю повідомлення.'},{hu:'Üzent a barátom.',ru:'Написал мой друг.',uk:'Написав мій друг.'}] },
  { hu:'nyer',        ru:'выигрывать',              uk:'вигравати',               transcription:'[нэр]',         examples:[{hu:'Nyertem!',ru:'Я выиграл!',uk:'Я виграв!'},{hu:'Mindig nyer.',ru:'Всегда выигрывает.',uk:'Завжди виграє.'},{hu:'Ki nyert?',ru:'Кто выиграл?',uk:'Хто виграв?'}] },
  { hu:'veszít',      ru:'проигрывать / терять',    uk:'програвати / втрачати',   transcription:'[вэсит]',       examples:[{hu:'Nem akarok veszíteni.',ru:'Не хочу проигрывать.',uk:'Не хочу програвати.'},{hu:'Veszítettünk.',ru:'Мы проиграли.',uk:'Ми програли.'},{hu:'Sokat veszített.',ru:'Много потерял.',uk:'Багато втратив.'}] },
  { hu:'ünnepel',     ru:'праздновать',             uk:'святкувати',              transcription:'[юннэпэл]',     examples:[{hu:'Születésnapot ünnepelünk.',ru:'Отмечаем день рождения.',uk:'Відзначаємо день народження.'},{hu:'Hogyan ünnepeltek?',ru:'Как вы отмечали?',uk:'Як ви відзначали?'},{hu:'Ünnepeljünk!',ru:'Отметим!',uk:'Відсвяткуємо!'}] },
  { hu:'mosolyog',    ru:'улыбаться',               uk:'посміхатися',             transcription:'[мошойог]',     examples:[{hu:'Mindig mosolyog.',ru:'Всегда улыбается.',uk:'Завжди посміхається.'},{hu:'Mosolyogj!',ru:'Улыбайся!',uk:'Посміхайся!'},{hu:'Miért mosolyogsz?',ru:'Почему ты улыбаешься?',uk:'Чому ти посміхаєшся?'}] },
  { hu:'sír',         ru:'плакать',                 uk:'плакати',                 transcription:'[шир]',         examples:[{hu:'Ne sírj!',ru:'Не плачь!',uk:'Не плач!'},{hu:'Miért sírsz?',ru:'Почему ты плачешь?',uk:'Чому ти плачеш?'},{hu:'Sírva fakadt.',ru:'Он расплакался.',uk:'Він заплакав.'}] },
  { hu:'kiabál',      ru:'кричать',                 uk:'кричати',                 transcription:'[киобал]',      examples:[{hu:'Ne kiabálj!',ru:'Не кричи!',uk:'Не кричи!'},{hu:'Miért kiabálsz?',ru:'Почему ты кричишь?',uk:'Чому ти кричиш?'},{hu:'Hangosan kiabál.',ru:'Громко кричит.',uk:'Голосно кричить.'}] },
  { hu:'suttog',      ru:'шептать',                 uk:'шептати',                 transcription:'[шуттог]',      examples:[{hu:'Suttogva mondja.',ru:'Говорит шёпотом.',uk:'Говорить пошепки.'},{hu:'Suttogj!',ru:'Говори шёпотом!',uk:'Говори пошепки!'},{hu:'Mit suttog?',ru:'Что он шепчет?',uk:'Що він шепоче?'}] },
  { hu:'foglalkozik', ru:'заниматься (чем-то)',     uk:'займатися (чимось)',      transcription:'[фоглолкозик]', examples:[{hu:'Mivel foglalkozol?',ru:'Чем ты занимаешься?',uk:'Чим ти займаєшся?'},{hu:'Ezzel foglalkozom.',ru:'Я занимаюсь этим.',uk:'Я займаюся цим.'},{hu:'Jól foglalkozik vele.',ru:'Хорошо с этим работает.',uk:'Добре з цим працює.'}] },
  { hu:'aggódik',     ru:'беспокоиться',            uk:'турбуватися',             transcription:'[оггодик]',     examples:[{hu:'Ne aggódj!',ru:'Не беспокойся!',uk:'Не турбуйся!'},{hu:'Aggódom érted.',ru:'Я беспокоюсь о тебе.',uk:'Я турбуюся про тебе.'},{hu:'Miért aggódsz?',ru:'Почему ты беспокоишься?',uk:'Чому ти турбуєшся?'}] },
  { hu:'hiányzik',    ru:'не хватать / скучать',    uk:'бракувати / сумувати',    transcription:'[хианизик]',    examples:[{hu:'Hiányzol nekem.',ru:'Я по тебе скучаю.',uk:'Я за тобою сумую.'},{hu:'Mi hiányzik?',ru:'Чего не хватает?',uk:'Чого не вистачає?'},{hu:'Hiányzik a pénz.',ru:'Не хватает денег.',uk:'Не вистачає грошей.'}] },
]
