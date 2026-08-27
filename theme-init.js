(function () {
  try {
    var pref = localStorage.getItem('theme-preference');
    if (pref === 'light' || pref === 'dark') {
      document.documentElement.setAttribute('data-theme', pref);
    }
  } catch {
    // private browsing / storage disabled: falls through to the default theme
  }
})();
