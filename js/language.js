// Language Toggle Functionality
document.addEventListener('DOMContentLoaded', () => {
  const langToggle = document.getElementById('langToggle');
  const htmlTag = document.documentElement;
  
  // Check if a language preference is stored
  const savedLanguage = localStorage.getItem('language') || 'ar';
  
  // Set initial language
  setLanguage(savedLanguage);
  
  // Toggle language when button is clicked
  langToggle.addEventListener('click', () => {
    const currentLang = htmlTag.getAttribute('lang');
    const newLang = currentLang === 'ar' ? 'en' : 'ar';
    
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  });
  
  function setLanguage(lang) {
    htmlTag.setAttribute('lang', lang);
    htmlTag.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update toggle button text
    const langSpan = langToggle.querySelector('span');
    langSpan.textContent = lang === 'ar' ? 'EN' : 'AR';
    
    // Update page content based on language
    updateContent(lang);
  }
  
  function updateContent(lang) {
    // This function will be expanded to handle all text translations
    // For now, we'll just handle a few key elements
    
    const translations = {
      'page-title': {
        'ar': 'مطعم الزعيم',
        'en': 'Zaeem Restaurant'
      },
      'restaurant-name': {
        'ar': 'الزعيم',
        'en': 'El Zaeem'
      },
      'restaurant-tagline': {
        'ar': 'أشهى المأكولات الشرقية',
        'en': 'Finest Eastern Cuisine'
      },
      'nav-home': {
        'ar': 'الرئيسية',
        'en': 'Home'
      },
      'nav-menu': {
        'ar': 'قائمة الطعام',
        'en': 'Menu'
      },
      'contact-label': {
        'ar': 'للطلب والتوصيل',
        'en': 'Order & Delivery'
      },
      'all-category': {
        'ar': 'الكل',
        'en': 'All'
      },
      'plates-category': {
        'ar': 'علب وأصناف',
        'en': 'Plates & Dishes'
      },
      'sides-category': {
        'ar': 'أصناف جانبية',
        'en': 'Side Dishes'
      },
      'sandwiches-category': {
        'ar': 'سندوتشات',
        'en': 'Sandwiches'
      },
      'breadcrumb-home': {
        'ar': 'الرئيسية',
        'en': 'Home'
      },
      'breadcrumb-menu': {
        'ar': 'قائمة الطعام',
        'en': 'Menu'
      },
      'hero-title': {
        'ar': 'مرحباً بكم في مطعم الزعيم',
        'en': 'Welcome to Zaeem Restaurant'
      },
      'hero-subtitle': {
        'ar': 'أشهى المأكولات الشرقية بأيدي أمهر الطهاة',
        'en': 'The most delicious Eastern cuisine by skilled chefs'
      },
      'cta-button': {
        'ar': 'استعرض القائمة',
        'en': 'View Menu'
      },
      'feature-fast': {
        'ar': 'خدمة سريعة',
        'en': 'Fast Service'
      },
      'feature-delivery': {
        'ar': 'توصيل للمنازل',
        'en': 'Home Delivery'
      },
      'feature-quality': {
        'ar': 'جودة عالية',
        'en': 'High Quality'
      },
      'location-title': {
        'ar': 'موقعنا',
        'en': 'Our Location'
      },
      'footer-text': {
        'ar': 'جميع الحقوق محفوظة',
        'en': 'All Rights Reserved'
      }
    };
    
    // Update document title
    document.title = lang === 'ar' ? 'مطعم الزعيم' : 'Zaeem Restaurant';
    
    // Update navigation links
    const navHomeLinks = document.querySelectorAll('.nav-link[href="home.html"]');
    const navMenuLinks = document.querySelectorAll('.nav-link[href="index.html"]');
    
    navHomeLinks.forEach(link => {
      link.textContent = translations['nav-home'][lang];
    });
    
    navMenuLinks.forEach(link => {
      link.textContent = translations['nav-menu'][lang];
    });
    
    // Update contact label
    const contactLabels = document.querySelectorAll('.contact-label');
    contactLabels.forEach(label => {
      label.textContent = translations['contact-label'][lang];
    });
    
    // Update category tabs if they exist
    const allCategoryTab = document.querySelector('.category-tab[data-category="all"]');
    const platesCategoryTab = document.querySelector('.category-tab[data-category="plates"]');
    const sidesCategoryTab = document.querySelector('.category-tab[data-category="sides"]');
    const sandwichesCategoryTab = document.querySelector('.category-tab[data-category="sandwiches"]');
    
    if (allCategoryTab) allCategoryTab.textContent = translations['all-category'][lang];
    if (platesCategoryTab) platesCategoryTab.textContent = translations['plates-category'][lang];
    if (sidesCategoryTab) sidesCategoryTab.textContent = translations['sides-category'][lang];
    if (sandwichesCategoryTab) sandwichesCategoryTab.textContent = translations['sandwiches-category'][lang];
    
    // Update breadcrumb if it exists
    const breadcrumbHome = document.querySelector('.breadcrumb a[href="home.html"]');
    const breadcrumbCurrentPage = document.querySelector('.breadcrumb .current-page');
    
    if (breadcrumbHome) breadcrumbHome.textContent = translations['breadcrumb-home'][lang];
    
    if (breadcrumbCurrentPage) {
      // Check if we're on the menu page
      const currentPage = window.location.pathname.includes('menu.html') ? 'breadcrumb-menu' : 'breadcrumb-home';
      breadcrumbCurrentPage.textContent = translations[currentPage][lang];
    }
    
    // Update hero section if it exists
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const ctaButton = document.querySelector('.cta-button');
    
    if (heroTitle) heroTitle.textContent = translations['hero-title'][lang];
    if (heroSubtitle) heroSubtitle.textContent = translations['hero-subtitle'][lang];
    if (ctaButton) ctaButton.textContent = translations['cta-button'][lang];
    
    // Update feature titles if they exist
    const featureTitles = document.querySelectorAll('.feature-title');
    if (featureTitles.length === 3) {
      featureTitles[0].textContent = translations['feature-fast'][lang];
      featureTitles[1].textContent = translations['feature-delivery'][lang];
      featureTitles[2].textContent = translations['feature-quality'][lang];
    }
    
    // Update restaurant name and tagline
    const logoTitle = document.querySelector('.logo-text h1');
    const logoTagline = document.querySelector('.logo-text p');
    
    if (logoTitle) logoTitle.textContent = translations['restaurant-name'][lang];
    if (logoTagline) logoTagline.textContent = translations['restaurant-tagline'][lang];
    
    // Update location section if it exists
    const locationTitle = document.querySelector('.location .section-title');
    if (locationTitle) locationTitle.textContent = translations['location-title'][lang];
    
    // Update footer text
    const footerText = document.querySelector('.footer-text');
    if (footerText && lang === 'en') {
      footerText.innerHTML = `${translations['footer-text'][lang]} &copy; 2025 <span>${translations['restaurant-name'][lang]}</span>`;
    } else if (footerText && lang === 'ar') {
      footerText.innerHTML = `${translations['footer-text'][lang]} &copy; 2025 <span>${translations['restaurant-name'][lang]}</span>`;
    }
  }
});
