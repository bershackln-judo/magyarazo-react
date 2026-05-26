import type { AppLang, CaseEntry } from '../types'

// ── Case examples ────────────────────────────────────────────────────────────

export const CASE_EXAMPLES: Record<string, CaseEntry> = {
  // ДОМ / ДІМ
  'ház':        { where: {ru:'в доме',         uk:'у будинку'},      whereTo: {ru:'в дом',           uk:'до будинку'},     whereFrom: {ru:'из дома',         uk:'з будинку'} },
  'lakás':      { where: {ru:'в квартире',     uk:'у квартирі'},     whereTo: {ru:'в квартиру',      uk:'до квартири'},    whereFrom: {ru:'из квартиры',     uk:'з квартири'} },
  'szoba':      { where: {ru:'в комнате',      uk:'у кімнаті'},      whereTo: {ru:'в комнату',       uk:'до кімнати'},     whereFrom: {ru:'из комнаты',      uk:'з кімнати'} },
  'fürdőszoba': { where: {ru:'в ванной',       uk:'у ванній'},       whereTo: {ru:'в ванную',        uk:'до ванної'},      whereFrom: {ru:'из ванной',       uk:'з ванної'} },
  'ágy':        { where: {ru:'в кровати',      uk:'у ліжку'},        whereTo: {ru:'в кровать',       uk:'до ліжка'},       whereFrom: {ru:'из кровати',      uk:'з ліжка'} },
  'táska':      { where: {ru:'в сумке',        uk:'у сумці'},        whereTo: {ru:'в сумку',         uk:'до сумки'},       whereFrom: {ru:'из сумки',        uk:'із сумки'} },
  'könyv':      { where: {ru:'в книге',        uk:'у книзі'},        whereTo: {ru:'в книгу',         uk:'до книги'},       whereFrom: {ru:'из книги',        uk:'з книги'} },
  // ГОРОД / МІСТО
  'város':      { where: {ru:'в городе',       uk:'у місті'},        whereTo: {ru:'в город',         uk:'до міста'},       whereFrom: {ru:'из города',       uk:'з міста'} },
  'park':       { where: {ru:'в парке',        uk:'у парку'},        whereTo: {ru:'в парк',          uk:'до парку'},       whereFrom: {ru:'из парка',        uk:'з парку'} },
  'bolt':       { where: {ru:'в магазине',     uk:'у магазині'},     whereTo: {ru:'в магазин',       uk:'до магазину'},    whereFrom: {ru:'из магазина',     uk:'з магазину'} },
  'bank':       { where: {ru:'в банке',        uk:'у банку'},        whereTo: {ru:'в банк',          uk:'до банку'},       whereFrom: {ru:'из банка',        uk:'з банку'} },
  'iskola':     { where: {ru:'в школе',        uk:'у школі'},        whereTo: {ru:'в школу',         uk:'до школи'},       whereFrom: {ru:'из школы',        uk:'зі школи'} },
  'autó':       { where: {ru:'в машине',       uk:'у машині'},       whereTo: {ru:'в машину',        uk:'до машини'},      whereFrom: {ru:'из машины',       uk:'з машини'} },
  'vonat':      { where: {ru:'в поезде',       uk:'у поїзді'},       whereTo: {ru:'в поезд',         uk:'до поїзда'},      whereFrom: {ru:'из поезда',       uk:'з поїзда'} },
  'repülő':     { where: {ru:'в самолёте',     uk:'у літаку'},       whereTo: {ru:'в самолёт',       uk:'до літака'},      whereFrom: {ru:'из самолёта',     uk:'з літака'} },
  'metró':      { where: {ru:'в метро',        uk:'у метро'},        whereTo: {ru:'в метро',         uk:'до метро'},       whereFrom: {ru:'из метро',        uk:'з метро'} },
  'taxi':       { where: {ru:'в такси',        uk:'у таксі'},        whereTo: {ru:'в такси',         uk:'до таксі'},       whereFrom: {ru:'из такси',        uk:'з таксі'} },
  'busz':       { where: {ru:'в автобусе',     uk:'в автобусі'},     whereTo: {ru:'в автобус',       uk:'до автобуса'},    whereFrom: {ru:'из автобуса',     uk:'з автобуса'} },
  'villamos':   { where: {ru:'в трамвае',      uk:'у трамваї'},      whereTo: {ru:'в трамвай',       uk:'до трамвая'},     whereFrom: {ru:'из трамвая',      uk:'з трамвая'} },
  // РАБОТА / РОБОТА
  'iroda':      { where: {ru:'в офисе',        uk:'в офісі'},        whereTo: {ru:'в офис',          uk:'до офісу'},       whereFrom: {ru:'из офиса',        uk:'з офісу'} },
  // ПРИРОДА
  'erdő':       { where: {ru:'в лесу',         uk:'у лісі'},         whereTo: {ru:'в лес',           uk:'до лісу'},        whereFrom: {ru:'из леса',         uk:'з лісу'} },
  'folyó':      { where: {ru:'в реке',         uk:'у річці'},        whereTo: {ru:'в реку',          uk:'до річки'},       whereFrom: {ru:'из реки',         uk:'з річки'} },
  'tó':         { where: {ru:'в озере',        uk:'в озері'},        whereTo: {ru:'в озеро',         uk:'до озера'},       whereFrom: {ru:'из озера',        uk:'з озера'} },
  // УЧРЕЖДЕНИЯ
  'hivatal':    { where: {ru:'в учреждении',   uk:'в установі'},     whereTo: {ru:'в учреждение',    uk:'до установи'},    whereFrom: {ru:'из учреждения',   uk:'з установи'} },
  'sor':        { where: {ru:'в очереди',      uk:'у черзі'},        whereTo: {ru:'в очередь',       uk:'до черги'},       whereFrom: {ru:'из очереди',      uk:'з черги'} },
  // ЗДОРОВЬЕ
  'kórház':     { where: {ru:'в больнице',     uk:'у лікарні'},      whereTo: {ru:'в больницу',      uk:'до лікарні'},     whereFrom: {ru:'из больницы',     uk:'з лікарні'} },
}

// ── Hungarian vowel harmony case forms ──────────────────────────────────────

export interface CaseForm {
  qKey: string
  suffix: string
  form: string
  example: string | null
}

export function getHungarianForms(word: string, lang: AppLang): CaseForm[] {
  const vowels   = 'aáeéiíoóöőuúüű'
  const backSet  = new Set([...'aáoóuú'])
  const roundSet = new Set([...'öőüű'])

  let harmony = 'back'
  for (let i = word.length - 1; i >= 0; i--) {
    const c = word[i].toLowerCase()
    if (!vowels.includes(c)) continue
    harmony = backSet.has(c) ? 'back' : 'front'
    break
  }

  const last    = word[word.length - 1].toLowerCase()
  const endsInA = last === 'a'
  const endsInE = last === 'e'

  let inessive: string, illative: string, elative: string, accusative: string

  if (harmony === 'back') {
    if (endsInA) {
      const s = word.slice(0, -1)
      inessive   = s + 'ában'
      illative   = s + 'ába'
      elative    = s + 'ából'
      accusative = s + 'át'
    } else {
      inessive   = word + 'ban'
      illative   = word + 'ba'
      elative    = word + 'ból'
      accusative = word + (vowels.includes(last) ? 't' : 'ot')
    }
  } else {
    if (endsInE) {
      const s = word.slice(0, -1)
      inessive   = s + 'ében'
      illative   = s + 'ébe'
      elative    = s + 'éből'
      accusative = s + 'ét'
    } else {
      inessive   = word + 'ben'
      illative   = word + 'be'
      elative    = word + 'ből'
      const lastVowel = [...word].reverse().find(c => vowels.includes(c)) ?? 'e'
      accusative = word + (vowels.includes(last) ? 't' : (roundSet.has(lastVowel) ? 'öt' : 'et'))
    }
  }

  const s1 = harmony === 'back' ? '-ban' : '-ben'
  const s2 = harmony === 'back' ? '-ba'  : '-be'
  const s3 = harmony === 'back' ? '-ból' : '-ből'

  const ex = CASE_EXAMPLES[word]

  if (ex) {
    const pick = (obj: { ru: string; uk: string }) =>
      lang === 'uk' ? obj.uk : obj.ru
    return [
      { qKey: 'form_where',      suffix: s1,   form: inessive,   example: pick(ex.where) },
      { qKey: 'form_where_to',   suffix: s2,   form: illative,   example: pick(ex.whereTo) },
      { qKey: 'form_where_from', suffix: s3,   form: elative,    example: pick(ex.whereFrom) },
      { qKey: 'form_what',       suffix: '-t', form: accusative, example: null },
    ]
  } else {
    return [
      { qKey: 'form_what', suffix: '-t', form: accusative, example: null },
    ]
  }
}
