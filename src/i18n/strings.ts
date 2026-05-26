import type { AppLang } from '../types'

type StringsShape = {
  tagline: string
  wod_label: string
  listen: string
  card_words: string
  card_asst: string
  card_asst_sub: string
  card_dict: string
  card_dict_sub_empty: string
  card_flash: string
  card_flash_sub: string
  nav_home: string
  nav_words: string
  nav_asst: string
  nav_dict: string
  nav_grammar: string
  words_title: string
  tab_verbs: string
  tab_nouns: string
  tab_adj: string
  search_verb: string
  topic_all: string
  topic_people: string
  topic_body: string
  topic_food: string
  topic_home: string
  topic_city: string
  topic_work: string
  topic_time: string
  topic_nature: string
  topic_shop: string
  topic_docs: string
  topic_emotions: string
  topic_transport: string
  topic_health: string
  topic_tech: string
  asst_title: string
  mic_status: string
  cam_label: string
  asst_placeholder: string
  loading_text: string
  ocr_reading: string
  save: string
  settings_api: string
  gemini_key: string
  gemini_hint: string
  dict_title: string
  dict_search: string
  sort_date: string
  sort_alpha: string
  add_word: string
  export_btn: string
  import_btn: string
  clear_all: string
  dict_empty: string
  dict_no_results: string
  dict_group_verb: string
  dict_group_noun: string
  dict_group_adj: string
  dict_group_manual: string
  quiz_title: string
  quiz_back: string
  quiz_exit: string
  quiz_what: string
  mode_builtin: string
  mode_saved: string
  mode_all: string
  dir_hu_ru: string
  dir_ru_hu: string
  quiz_start: string
  quiz_retry: string
  quiz_restart: string
  quiz_back_finish: string
  quiz_empty_saved: string
  quiz_n_words: (n: number) => string
  quiz_empty: string
  quiz_score: (correct: number, total: number) => string
  modal_forms_title: string
  modal_examples: string
  save_to_dict: string
  saved_in_dict: string
  antonym_label: string
  form_where: string
  form_where_to: string
  form_where_from: string
  form_what: string
  form_hint_where: string
  form_hint_where_to: string
  form_hint_where_from: string
  form_hint_what: string
  add_form_title: string
  add_dir_hu2ru: string
  add_dir_ru2hu: string
  add_label_hu: string
  add_placeholder_hu: string
  add_label_natlang: string
  add_placeholder_natlang: string
  add_label_natlang_r: string
  add_placeholder_natlang_r: string
  add_label_hu_r: string
  add_placeholder_hu_r: string
  add_cancel: string
  add_save: string
  home_n_words: (n: number, pl: string) => string
  home_dict_info: (n: number, pl: string) => string
  translating: string
}

export const STRINGS: Record<AppLang, StringsShape> = {
  ru: {
    tagline: 'Венгерский для жизни в Венгрии',
    wod_label: 'Слово дня',
    listen: 'ПОСЛУШАТЬ',
    card_words: 'Слова',
    card_asst: 'Помощник',
    card_asst_sub: 'спроси что угодно',
    card_dict: 'Словарь',
    card_dict_sub_empty: 'сохранённые слова',
    card_flash: 'Флэшкарты',
    card_flash_sub: 'проверь себя',
    nav_home: 'Главная',
    nav_words: 'Слова',
    nav_asst: 'Помощник',
    nav_dict: 'Словарь',
    nav_grammar: 'Граматика',
    words_title: 'Слова · Szavak',
    tab_verbs: 'Глаголы',
    tab_nouns: 'Существительные',
    tab_adj: 'Прилагательные',
    search_verb: 'Поиск глагола...',
    topic_all: 'Все',
    topic_people: 'Люди',
    topic_body: 'Тело и здоровье',
    topic_food: 'Еда и напитки',
    topic_home: 'Дом и быт',
    topic_city: 'Город и транспорт',
    topic_work: 'Работа и инструменты',
    topic_time: 'Время',
    topic_nature: 'Природа',
    topic_shop: 'Магазин',
    topic_docs: 'Документы',
    topic_emotions: 'Эмоции',
    topic_transport: 'Транспорт',
    topic_health: 'Здоровье',
    topic_tech: 'Технологии',
    asst_title: 'Помощник · Asszisztens',
    mic_status: 'Нажмите чтобы говорить',
    cam_label: 'Сфотографировать',
    asst_placeholder: 'Введите венгерское слово или фразу...',
    loading_text: 'Запрашиваю ответ...',
    ocr_reading: 'Читаю текст...',
    save: 'СОХРАНИТЬ',
    settings_api: 'Настройки API',
    gemini_key: 'Gemini API ключ',
    gemini_hint: 'Бесплатный ключ на',
    dict_title: 'Словарь · Szótár',
    dict_search: 'Поиск в словаре...',
    sort_date: 'По дате',
    sort_alpha: 'По алфавиту',
    add_word: 'ДОБАВИТЬ СЛОВО',
    export_btn: 'ЭКСПОРТ',
    import_btn: 'ИМПОРТ',
    clear_all: 'ОЧИСТИТЬ ВСЁ',
    dict_empty: 'Сохраняйте слова нажимая ♡ в карточках',
    dict_no_results: 'Ничего не найдено',
    dict_group_verb: 'Глаголы',
    dict_group_noun: 'Существительные',
    dict_group_adj: 'Прилагательные',
    dict_group_manual: 'Добавлено вручную',
    quiz_title: 'Флэшкарты',
    quiz_back: '← Назад',
    quiz_exit: '← Выйти',
    quiz_what: 'Что изучаем?',
    mode_builtin: 'Слова приложения',
    mode_saved: 'Мой словарь',
    mode_all: 'Все слова вместе',
    dir_hu_ru: 'ВЕН → РУС',
    dir_ru_hu: 'РУС → ВЕН',
    quiz_start: '▶ Начать',
    quiz_retry: '↺ Повторить ошибки',
    quiz_restart: 'Начать заново',
    quiz_back_finish: '← В словарь',
    quiz_empty_saved: 'Словарь пуст — добавьте слова, чтобы начать.',
    quiz_n_words: (n) => `${n} слов`,
    quiz_empty: 'пусто',
    quiz_score: (c, t) => `${c} из ${t} правильно`,
    modal_forms_title: 'Падежные формы',
    modal_examples: 'Примеры',
    save_to_dict: 'СОХРАНИТЬ В СЛОВАРЬ',
    saved_in_dict: 'В СЛОВАРЕ ✓',
    antonym_label: 'Антоним',
    form_where: 'Где?',
    form_where_to: 'Куда?',
    form_where_from: 'Откуда?',
    form_what: 'Кого/что?',
    form_hint_where: 'я в магазине, я дома',
    form_hint_where_to: 'иду в магазин, иду домой',
    form_hint_where_from: 'иду из магазина, из дома',
    form_hint_what: 'вижу продавца, хочу кофе',
    add_form_title: 'Добавить слово',
    add_dir_hu2ru: 'Венгерский → Русский',
    add_dir_ru2hu: 'Русский → Венгерский',
    add_label_hu: 'Венгерское слово',
    add_placeholder_hu: 'например: köszönöm',
    add_label_natlang: 'Перевод на русский',
    add_placeholder_natlang: 'например: спасибо',
    add_label_natlang_r: 'Русское слово',
    add_placeholder_natlang_r: 'например: спасибо',
    add_label_hu_r: 'Перевод на венгерский',
    add_placeholder_hu_r: 'например: köszönöm',
    add_cancel: 'ОТМЕНА',
    add_save: 'СОХРАНИТЬ',
    home_n_words: (n, pl) => `${n} ${pl}`,
    home_dict_info: (n, pl) => `В словаре ${n} ${pl}`,
    translating: 'Перевожу…',
  },
  uk: {
    tagline: 'Угорська для життя в Угорщині',
    wod_label: 'Слово дня',
    listen: 'ПОСЛУХАТИ',
    card_words: 'Слова',
    card_asst: 'Помічник',
    card_asst_sub: 'запитай що завгодно',
    card_dict: 'Словник',
    card_dict_sub_empty: 'збережені слова',
    card_flash: 'Флешкарти',
    card_flash_sub: 'перевір себе',
    nav_home: 'Головна',
    nav_words: 'Слова',
    nav_asst: 'Помічник',
    nav_dict: 'Словник',
    nav_grammar: 'Граматика',
    words_title: 'Слова · Szavak',
    tab_verbs: 'Дієслова',
    tab_nouns: 'Іменники',
    tab_adj: 'Прикметники',
    search_verb: 'Пошук дієслова...',
    topic_all: 'Всі',
    topic_people: 'Люди',
    topic_body: 'Тіло та здоровʼя',
    topic_food: 'Їжа та напої',
    topic_home: 'Дім та побут',
    topic_city: 'Місто та транспорт',
    topic_work: 'Робота та інструменти',
    topic_time: 'Час',
    topic_nature: 'Природа',
    topic_shop: 'Магазин',
    topic_docs: 'Документи',
    topic_emotions: 'Емоції',
    topic_transport: 'Транспорт',
    topic_health: 'Здоровʼя',
    topic_tech: 'Технології',
    asst_title: 'Помічник · Asszisztens',
    mic_status: 'Натисніть, щоб говорити',
    cam_label: 'Сфотографувати',
    asst_placeholder: 'Введіть угорське слово або фразу...',
    loading_text: 'Запитую відповідь...',
    ocr_reading: 'Читаю текст...',
    save: 'ЗБЕРЕГТИ',
    settings_api: 'Налаштування API',
    gemini_key: 'Gemini API ключ',
    gemini_hint: 'Безкоштовний ключ на',
    dict_title: 'Словник · Szótár',
    dict_search: 'Пошук у словнику...',
    sort_date: 'За датою',
    sort_alpha: 'За алфавітом',
    add_word: 'ДОДАТИ СЛОВО',
    export_btn: 'ЕКСПОРТ',
    import_btn: 'ІМПОРТ',
    clear_all: 'ОЧИСТИТИ ВСЕ',
    dict_empty: 'Зберігайте слова натискаючи ♡ у картках',
    dict_no_results: 'Нічого не знайдено',
    dict_group_verb: 'Дієслова',
    dict_group_noun: 'Іменники',
    dict_group_adj: 'Прикметники',
    dict_group_manual: 'Додано вручну',
    quiz_title: 'Флешкарти',
    quiz_back: '← Назад',
    quiz_exit: '← Вийти',
    quiz_what: 'Що вивчаємо?',
    mode_builtin: 'Слова застосунку',
    mode_saved: 'Мій словник',
    mode_all: 'Всі слова разом',
    dir_hu_ru: 'УГ → УКР',
    dir_ru_hu: 'УКР → УГ',
    quiz_start: '▶ Почати',
    quiz_retry: '↺ Повторити помилки',
    quiz_restart: 'Почати знову',
    quiz_back_finish: '← До словника',
    quiz_empty_saved: 'Словник порожній — додайте слова, щоб почати.',
    quiz_n_words: (n) => `${n} слів`,
    quiz_empty: 'порожньо',
    quiz_score: (c, t) => `${c} з ${t} правильно`,
    modal_forms_title: 'Відмінкові форми',
    modal_examples: 'Приклади',
    save_to_dict: 'ЗБЕРЕГТИ В СЛОВНИК',
    saved_in_dict: 'В СЛОВНИКУ ✓',
    antonym_label: 'Антонім',
    form_where: 'Де?',
    form_where_to: 'Куди?',
    form_where_from: 'Звідки?',
    form_what: 'Кого/що?',
    form_hint_where: 'я в магазині, я вдома',
    form_hint_where_to: 'йду в магазин, йду додому',
    form_hint_where_from: 'йду з магазину, з дому',
    form_hint_what: 'бачу продавця, хочу каву',
    add_form_title: 'Додати слово',
    add_dir_hu2ru: 'Угорська → Українська',
    add_dir_ru2hu: 'Українська → Угорська',
    add_label_hu: 'Угорське слово',
    add_placeholder_hu: 'наприклад: köszönöm',
    add_label_natlang: 'Переклад українською',
    add_placeholder_natlang: 'наприклад: дякую',
    add_label_natlang_r: 'Українське слово',
    add_placeholder_natlang_r: 'наприклад: дякую',
    add_label_hu_r: 'Переклад угорською',
    add_placeholder_hu_r: 'наприклад: köszönöm',
    add_cancel: 'СКАСУВАТИ',
    add_save: 'ЗБЕРЕГТИ',
    home_n_words: (n, pl) => `${n} ${pl}`,
    home_dict_info: (n, pl) => `У словнику ${n} ${pl}`,
    translating: 'Перекладаю…',
  },
}
