(() => {
  // DOM Functions
  const $ = q => document.querySelector(q);
  const $$ = q => Array.from(document.querySelectorAll(q));
  const $attr = name => el => el.getAttribute(name);
  const $set = (name, val) => el => el.setAttribute(name, value);
  const $unset = (name) => el => el.removeAttribute(name);

  // Pure Functions
  const noop = () => {};
  const id = v => v;
  const collect = (list, keyFn, valueFn) => list.reduce((next, obj) => {
    obj[keyFn(next)] = valueFn(next);
    return obj;
  }, {});

  // Variables
  const $themes = $$('link[data-theme]');
  const $themeLink = collect($themes, $attr('data-theme'), id);

  const setTheme = theme => {
    $themes.forEach($set('disabled', true));
    $themeLink[theme] && $unset('disabled')($themeLink[theme]);
  };

  $('style-selector').addEventListener('select', e => setTheme(e.target.value));
}());
