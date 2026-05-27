# Magyarázó — Project Context

## Stack
- React, deployed on Vercel
- URL: https://magyarazo-react.vercel.app
- Gemini API — translations and assistant
- Web Speech API — pronunciation fallback
- localStorage — user dictionary

## Design System (Bauhaus)
- Background: #f5f2fa
- Black: #1a1a1a (nav, headings)
- Red: #e84c3d (CTA buttons, active nav)
- Yellow: #f5c842
- Blue: #3a6ea5
- Green: #2a9d5c

## Screens Status
- [x] Home — Bauhaus done
- [ ] Words (Nouns) — partial
- [ ] Assistant — old design
- [ ] Dictionary — old design
- [ ] Flashcards — old design
- [x] Grammar — 20 cards live, Bauhaus design, RU/UK i18n

## Last Done
<!-- UPDATE THIS EVERY SESSION -->
- React Portal for modal centering ✅
- Word cards click handler fixed ✅
- 20 grammar cards added with quiz + RU/UK i18n ✅
- RU/UK language toggle (full i18n) ✅
- Noun category tabs fixed (transport, health, tech) ✅
- Duplicate nouns cleaned up (214 unique nouns) ✅

## Known Bugs
<!-- UPDATE THIS EVERY SESSION -->
- Adjectives list has ~12 duplicate entries across topic groups

## TODO (priority order)
1. Bauhaus redesign: Assistant, Dictionary, Flashcards screens
2. Expand dictionary to 1000 words
3. Days streak on home screen
4. Flashcard progress system
5. Push notifications — word of the day
6. 100+ situational phrases and dialogues

## Grammar Cards (20 total, content ready)

### Group I — Place & Movement (red #e84c3d)
01. Куда? — -ba/-be
02. Где? — -ban/-ben
03. Откуда? — -ból/-ből
04. Куда (к кому)? — -hoz/-hez/-höz
05. Где (у кого)? — -nál/-nél
06. Откуда (от кого)? — -tól/-től
07. На что? — -ra/-re
08. На чём? — -n/-on/-en/-ön
09. С чего? — -ról/-ről

### Group II — Verbs (green #2a9d5c)
10. Я делаю — -ok/-ek/-ök
11. Я делал — -tam/-tem
12. Буду делать — fog +
13. Есть/нет — van/nincs
14. Нужно — kell

### Group III — Nouns (purple #7c5dd6)
15. Много (мн. число) — -k
16. Что (прям. доп.) — -t/-at/-et
17. Мой/твой/его — -m/-d/-ja

### Group IV — Questions (yellow #a07800)
18. Кто? Что? — ki?/mi?
19. Где? Куда? Откуда? — hol?/hova?/honnan?
20. Когда? Сколько? — mikor?/mennyi?

## Monetization Plan
- First 1000 users: free
- Then Freemium: 1.99€/month
- Audience: Ukrainian/Russian Telegram & Facebook groups in Hungary
- B2B: factories with Ukrainian workers (~200€/month)
