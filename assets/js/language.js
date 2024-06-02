document.addEventListener('DOMContentLoaded', function() {
    // Load language from localStorage
    const savedLang = localStorage.getItem('lang') || 'en';
    const savedDir = localStorage.getItem('dir') || 'ltr';
    document.documentElement.setAttribute('lang', savedLang);
    document.documentElement.setAttribute('dir', savedDir);
  
    // Function to load translations
    function loadTranslations(lang) {
      fetch(`/assets/lang/${lang}.json`)
        .then(response => response.json())
        .then(data => {
          document.querySelectorAll('[data-lang]').forEach(element => {
            const key = element.getAttribute('data-lang');
            if (data[key]) {
              element.innerText = data[key];
            }
          });
        });
    }
  
    // Load initial translations
    loadTranslations(savedLang);
  
    // Function to set language and direction
    function setLanguage(lang, dir) {
      document.documentElement.setAttribute('lang', lang);
      document.documentElement.setAttribute('dir', dir);
      localStorage.setItem('lang', lang);
      localStorage.setItem('dir', dir);
      loadTranslations(lang);
    }
  
    // Event listeners for language switch
    document.querySelectorAll('.dropdown [data-lang-switch]').forEach(element => {
      element.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang-switch');
        const dir = lang === 'ar' ? 'rtl' : 'ltr';
        setLanguage(lang, dir);
      });
    });
  });
  