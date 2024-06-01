function toggleDropdown() {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.classList.toggle('hidden');
}

function changeLanguage(lang) {
  if (lang === 'en') {
    document.documentElement.lang = 'en';
    // Add your code to change the content language to English
  } else if (lang === 'ar') {
    document.documentElement.lang = 'ar';
    // Add your code to change the content language to Arabic
  }
  toggleDropdown();
}