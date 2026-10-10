// Mark JS as available so CSS can enable JS-only UI (filter bar, collapsed news).
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // News: expand / collapse
  var toggle = document.querySelector('.news-toggle');
  var list = document.querySelector('.news-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      var expanded = list.classList.toggle('is-expanded');
      toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      toggle.textContent = expanded ? 'Show fewer' : 'Show all news';
    });
  }

  // Publications: year filter
  var pills = document.querySelectorAll('.year-filter .pill');
  var pubs = document.querySelectorAll('.pub');
  pills.forEach(function (pill) {
    pill.addEventListener('click', function () {
      var f = pill.getAttribute('data-filter');
      pills.forEach(function (p) { p.classList.toggle('is-active', p === pill); });
      pubs.forEach(function (pub) {
        pub.hidden = !(f === 'all' || pub.getAttribute('data-year') === f);
      });
    });
  });
});
