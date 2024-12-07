'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
  const a = { name: 0 };
  let b = { name: 0 };
  b.name = 2;
  a.name = 2;
  b = { born: 2000 };
  /* Я МОЖУ ЗМІНЮВАТИ ЗНАЧЕННЯ ЗА КЛЮЧЕМ АЛЕ НЕ МОЖУ ЗМІНИТИ ОБ'ЄКТ ПРИСВОЄНИЙ
  *  В КОНСТАНТУ
  */
};

module.exports = { fn };
