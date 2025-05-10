// Menu data
const menuItems = [
  // علب وأصناف
  { 
    id: 1, 
    category: 'plates', 
    nameAr: '  فول الزعيم', 
    nameEn: 'Foul El Zaeem',
    descriptionAr: 'فول مصري مطهو على الطريقة التقليدية',
    descriptionEn: 'Egyptian beans cooked in traditional way',
    price: 15.00,
    icon: 'fa-solid fa-bowl-food',
    image: 'images/علب واصناف/فول الزعيم.png'
  },
  { 
    id: 2, 
    category: 'plates', 
    nameAr: 'فول زيت حار', 
    nameEn: 'Foul with Hot Oil',
    descriptionAr: 'فول مدمس مع زيت حار وتوابل خاصة',
    descriptionEn: 'Cooked beans with hot oil and special spices',
    price: 18.00,
    icon: 'fa-solid fa-bowl-food',
    image: 'images/علب واصناف/فول زيت حار.jpg'
  },
  { 
    id: 3, 
    category: 'plates', 
    nameAr: 'فول زيت زيتون', 
    nameEn: 'Foul with Olive Oil',
    descriptionAr: 'فول مدمس مع زيت زيتون بلدي وليمون طازج',
    descriptionEn: 'Cooked beans with olive oil and fresh lemon',
    price: 20.00,
    icon: 'fa-solid fa-bowl-food',
    image: 'images/علب واصناف/فول بالزيت الزتون.jpg'
  },
  { 
    id: 4, 
    category: 'plates', 
    nameAr: 'فول اسكندراني', 
    nameEn: 'Alexandrian Foul',
    descriptionAr: 'فول على الطريقة الاسكندرانية مع الثوم والليمون',
    descriptionEn: 'Beans cooked Alexandria style with garlic and lemon',
    price: 22.00,
    icon: 'fa-solid fa-bowl-food',
    image: 'images/علب واصناف/فول اسكندراني.jpg'
  },
  { 
    id: 5, 
    category: 'plates', 
    nameAr: 'فول دمياطي', 
    nameEn: 'Damietta Foul',
    descriptionAr: 'فول على الطريقة الدمياطية مع البصل والكمون',
    descriptionEn: 'Beans cooked Damietta style with onions and cumin',
    price: 22.00,
    icon: 'fa-solid fa-bowl-food',
    image: 'images/علب واصناف/فول دمياطي.jpeg'
  },
  { 
    id: 6, 
    category: 'plates', 
    nameAr: 'شكشوكة', 
    nameEn: 'Shakshuka',
    descriptionAr: 'طبق شكشوكة شهي محضر بالطماطم والفلفل والبيض',
    descriptionEn: 'Delicious Shakshuka with tomatoes, peppers and eggs',
    price: 25.00,
    icon: 'fa-solid fa-egg',
    image: 'images/علب واصناف/شكشوكه.jpg'
  },
  { 
    id: 7, 
    category: 'plates', 
    nameAr: 'مسقعة', 
    nameEn: 'Moussaka',
    descriptionAr: 'مسقعة باذنجان مع صلصة الطماطم',
    descriptionEn: 'Eggplant moussaka with tomato sauce',
    price: 25.00,
    icon: 'fa-solid fa-pepper-hot',
    image: 'images/علب واصناف/مسقعه.jpg'
  },
  { 
    id: 8, 
    category: 'plates', 
    nameAr: 'بابا غنوج', 
    nameEn: 'Baba Ghanoush',
    descriptionAr: 'سلطة باذنجان مشوي مع طحينة وثوم وليمون',
    descriptionEn: 'Roasted eggplant salad with tahini, garlic and lemon',
    price: 20.00,
    icon: 'fa-solid fa-bowl-rice',
    image: 'images/علب واصناف/بابا غنوج7.jpg'
  },
  { 
    id: 9, 
    category: 'plates', 
    nameAr: 'قرنبيط', 
    nameEn: 'Cauliflower',
    descriptionAr: 'قرنبيط مقلي مقرمش',
    descriptionEn: 'Crispy fried cauliflower',
    price: 18.00,
    icon: 'fa-solid fa-carrot',
    image: 'images/علب واصناف/قرنبيط'
  },
  { 
    id: 10, 
    category: 'plates', 
    nameAr: 'بطاطس صوابع', 
    nameEn: 'French Fries',
    descriptionAr: 'بطاطس مقلية مقرمشة',
    descriptionEn: 'Crispy fried potatoes',
    price: 15.00,
    icon: 'fa-solid fa-utensils',
    image: 'images/علب واصناف/بطاطس صوابع.png'
  },
  { 
    id: 11, 
    category: 'plates', 
    nameAr: 'عجينة طعمية', 
    nameEn: 'Falafel Dough',
    descriptionAr: 'عجينة طعمية طازجة محضرة من الفول المدشوش',
    descriptionEn: 'Fresh falafel dough made from crushed fava beans',
    price: 18.00,
    icon: 'fa-solid fa-bowl-food',
    image: 'images/علب واصناف/عجينة طعميه .png'
  },
  { 
    id: 12, 
    category: 'plates', 
    nameAr: 'بتنجان مخلل', 
    nameEn: 'Pickled Eggplant',
    descriptionAr: 'بتنجان مخلل بالخل والثوم والتوابل',
    descriptionEn: 'Eggplant pickled with vinegar, garlic and spices',
    price: 16.00,
    icon: 'fa-solid fa-pepper-hot',
    image: 'images/علب واصناف/بتننجان مخلل.jpg'
  },
  { 
    id: 13, 
    category: 'plates', 
    nameAr: 'بتنجان مقلي', 
    nameEn: 'Fried Eggplant',
    descriptionAr: 'شرائح بتنجان مقلية مقرمشة',
    descriptionEn: 'Crispy fried eggplant slices',
    price: 20.00,
    icon: 'fa-solid fa-pepper-hot',
    image: 'images/علب واصناف/باذنجان-مقلي.jpg'
  },
  { 
    id: 14, 
    category: 'plates', 
    nameAr: 'بطاطس مهروسة', 
    nameEn: 'Mashed Potatoes',
    descriptionAr: 'بطاطس مهروسة بالزبدة والحليب',
    descriptionEn: 'Potatoes mashed with butter and milk',
    price: 18.00,
    icon: 'fa-solid fa-utensils',
    image: 'images/علب واصناف/بطاطس مهروسه .jpg'
  },
  
  // أصناف جانبية
  { 
    id: 20, 
    category: 'sides', 
    nameAr: 'جبنة طماطم', 
    nameEn: 'Cheese with Tomatoes',
    descriptionAr: 'جبنة بيضاء مع طماطم وزيت زيتون',
    descriptionEn: 'White cheese with tomatoes and olive oil',
    price: 18.00,
    icon: 'fa-solid fa-cheese',
    image: 'images/اصناف جانبيه/جبنه بالطماطم.jpg'
  },
  { 
    id: 15, 
    category: 'sides', 
    nameAr: 'مش', 
    nameEn: 'Mesh Cheese',
    descriptionAr: 'جبنة مش مصرية تقليدية مع زيت وفلفل حار',
    descriptionEn: 'Traditional Egyptian aged cheese with oil and hot pepper',
    price: 16.00,
    icon: 'fa-solid fa-cheese',
    image: 'images/اصناف جانبيه/مش.jpg'
  },
  { 
    id: 16, 
    category: 'sides', 
    nameAr: 'بطاطس بانيه', 
    nameEn: 'Potato Pané',
    descriptionAr: 'شرائح بطاطس مغطاة بالبقسماط المقرمش',
    descriptionEn: 'Potato slices coated with crispy breadcrumbs',
    price: 20.00,
    icon: 'fa-solid fa-utensils',
    image: 'images/اصناف جانبيه/بطاطس بانيه.jpg'
  },
  { 
    id: 17, 
    category: 'sides', 
    nameAr: 'سلطة', 
    nameEn: 'Salad',
    descriptionAr: 'سلطة خضار طازجة موسمية',
    descriptionEn: 'Fresh seasonal vegetable salad',
    price: 15.00,
    icon: 'fa-solid fa-leaf',
    image: 'images/اصناف جانبيه/سلطه.jpeg'
  },
  { 
    id: 18, 
    category: 'sides', 
    nameAr: 'بصارة', 
    nameEn: 'Bessara',
    descriptionAr: 'بصارة مصرية تقليدية من الفول المدشوش',
    descriptionEn: 'Traditional Egyptian bessara from mashed fava beans',
    price: 14.00,
    icon: 'fa-solid fa-bowl-rice',
    image: 'images/اصناف جانبيه/بساره.jpeg'
  },
  { 
    id: 19, 
    category: 'sides', 
    nameAr: 'بيض بسطرمة', 
    nameEn: 'Eggs with Pastrami',
    descriptionAr: 'بيض مقلي مع شرائح بسطرمة',
    descriptionEn: 'Fried eggs with pastrami slices',
    price: 22.00,
    icon: 'fa-solid fa-egg',
    image: 'images/اصناف جانبيه/بيض بسطرمه.jpg'
  },
  { 
    id: 21, 
    category: 'sides', 
    nameAr: 'بيض سجق', 
    nameEn: 'Eggs with Sausage  ',
    descriptionAr: 'بيض مقلي مع شرائح سجق',
    descriptionEn: 'Fried eggs with Sausage slices',
    price: 22.00,
    icon: 'fa-solid fa-egg',
    image: 'images/اصناف جانبيه/بيض سجقpng'
  },
  { 
    id: 22, 
    category: 'sides', 
    nameAr: 'بيض مقلي', 
    nameEn: 'Fried Eggs ',
    descriptionAr: 'بيض مقلي   ',
    descriptionEn: 'Fried eggs ',
    price: 22.00,
    icon: 'fa-solid fa-egg',
    image: 'images/اصناف جانبيه/بيض مقلي .png'
  },
  
  
  // سندوتشات
  { 
    id: 30, 
    category: 'sandwiches', 
    nameAr: 'سندوتش فول', 
    nameEn: 'Foul Sandwich',
    descriptionAr: 'فول مدمس مع زيت وليمون في عيش بلدي',
    descriptionEn: 'Cooked beans with oil and lemon in Egyptian bread',
    price: 10.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/فول.png'
  },
  { 
    id: 31, 
    category: 'sandwiches', 
    nameAr: 'سندوتش طعمية', 
    nameEn: 'Falafel Sandwich',
    descriptionAr: 'طعمية مقرمشة مع سلطة وطحينة',
    descriptionEn: 'Crispy falafel with salad and tahini',
    price: 12.00,
    icon: 'fa-solid fa-burger',
    image: 'images/سندوتشات/طعميه.jpg'
  },
  { 
    id: 32, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بطاطس صوابع', 
    nameEn: 'French Fries Sandwich',
    descriptionAr: 'بطاطس مقلية مقرمشة في عيش بلدي',
    descriptionEn: 'Crispy fried potatoes in Egyptian bread',
    price: 14.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/بطاطس صوابع.jpeg'
  },
  { 
    id: 33, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بطاطس كاتشب', 
    nameEn: 'Potato with Ketchup Sandwich',
    descriptionAr: 'بطاطس مقلية مع كاتشب',
    descriptionEn: 'Fried potatoes with ketchup',
    price: 14.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/بطاطس كاتشب .jpeg'
  },
  { 
    id: 34, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بطاطس كاتشب ومايونيز', 
    nameEn: 'Potato with Ketchup & Mayo Sandwich',
    descriptionAr: 'بطاطس مقلية مع كاتشب ومايونيز',
    descriptionEn: 'Fried potatoes with ketchup and mayonnaise',
    price: 16.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/بطاطس كاتشب ومايونيز.webp'
  },
  { 
    id: 35, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بطاطس بانيه', 
    nameEn: 'Potato Pané Sandwich',
    descriptionAr: 'شرائح بطاطس بانيه مقرمشة',
    descriptionEn: 'Crispy potato pané slices sandwich',
    price: 18.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/بطاطس بانيه.jpeg'
  },
  { 
    id: 36, 
    category: 'sandwiches', 
    nameAr: 'سندوتش مسقعه', 
    nameEn: 'Moussaka Sandwich',
    descriptionAr: 'مسقعة باذنجان مع صلصة الطماطم في عيش بلدي',
    descriptionEn: 'Eggplant moussaka with tomato sauce in Egyptian bread',
    price: 20.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/مسقعه.png'
  },
  { 
    id: 37, 
    category: 'sandwiches', 
    nameAr: 'سندوتش شكشوكه', 
    nameEn: 'Shakshuka Sandwich',
    descriptionAr: 'شكشوكة شهية محضرة بالطماطم والفلفل والبيض في عيش بلدي',
    descriptionEn: 'Delicious shakshuka with tomatoes, peppers and eggs in Egyptian bread',
    price: 18.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/شكشوكه.jpeg'
  },
  { 
    id: 38, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بطاطس مهروسه', 
    nameEn: 'Mashed Potato Sandwich',
    descriptionAr: 'بطاطس مهروسة بالزبدة والحليب في عيش بلدي',
    descriptionEn: 'Potatoes mashed with butter and milk in Egyptian bread',
    price: 16.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/مهروسه.jpg'
  },
  { 
    id: 39, 
    category: 'sandwiches', 
    nameAr: 'سندوتش جبنه مقليه', 
    nameEn: 'Fried Cheese Sandwich',
    descriptionAr: 'جبنة مقلية مقرمشة في عيش بلدي',
    descriptionEn: 'Crispy fried cheese in Egyptian bread',
    price: 22.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/جبنه مقليه.jpg'
  },
  { 
    id: 40, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بيض سجق', 
    nameEn: 'Eggs with Sausage Sandwich',
    descriptionAr: 'بيض مقلي مع شرائح سجق في عيش بلدي',
    descriptionEn: 'Fried eggs with sausage slices in Egyptian bread',
    price: 24.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/بيض سجق.png'
  },
  { 
    id: 41, 
    category: 'sandwiches', 
    nameAr: 'سندوتش بيض بسطرمه', 
    nameEn: 'Eggs with Pastrami Sandwich',
    descriptionAr: 'بيض مقلي مع شرائح بسطرمة في عيش بلدي',
    descriptionEn: 'Fried eggs with pastrami slices in Egyptian bread',
    price: 24.00,
    icon: 'fa-solid fa-bread-slice',
    image: 'images/سندوتشات/بيض بسطرمه.jpeg'
  }
];

// Function to get icon color based on category
function getIconColor(category) {
  switch(category) {
    case 'plates': return '#FFD700'; // Gold
    case 'sides': return '#7CFC00'; // Green
    case 'sandwiches': return '#F5DEB3'; // Wheat
    default: return '#FFFFFF'; // White
  }
}

// Function to get category label in Arabic
function getCategoryLabel(category) {
  switch(category) {
    case 'plates': return 'الأطباق';
    case 'sides': return 'الجانبية';
    case 'sandwiches': return 'السندوتشات';
    default: return '';
  }
}

// Function to render menu items
function renderMenuItems(category = 'plates') {
  const menuContainer = document.getElementById('menu-container');
  
  // Add gentle fade-out animation before clearing
  menuContainer.style.opacity = '0';
  menuContainer.style.transform = 'translateY(10px)';
  menuContainer.style.transition = 'opacity 0.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1)';
  
  // Clear after short delay to allow animation (reduced for better responsiveness)
  setTimeout(() => {
    menuContainer.innerHTML = '';
    
    // Only show the selected category
    let categories = [category];
    
    // Create sections for each category
    categories.forEach(cat => {
      const filteredItems = menuItems.filter(item => item.category === cat);
      
      if (filteredItems.length === 0) return;
      
      const sectionTitle = document.createElement('h2');
      sectionTitle.className = 'section-title';
      sectionTitle.textContent = getCategoryLabel(cat);
      
      const menuGrid = document.createElement('div');
      menuGrid.className = 'menu-grid';
      
      filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
          <div class="menu-item-content">
            <div class="menu-item-icon" style="${item.image ? '' : `color: ${getIconColor(item.category)}`}">
              ${item.image ? `<img src="${item.image}" alt="${item.nameAr}" class="food-image">` : `<i class="${item.icon}"></i>`}
            </div>
            <div class="menu-item-details">
              <div class="menu-item-title">${item.nameAr}</div>
              <div class="menu-item-subtitle">${item.nameEn}</div>
              ${item.descriptionAr ? `<div class="menu-item-description">${item.descriptionAr}</div>` : ''}
              <div class="menu-item-price">${item.price.toFixed(2)} <span>ج.م</span></div>
            </div>
          </div>
        `;
        menuGrid.appendChild(menuItem);
      });
      
      const menuSection = document.createElement('div');
      menuSection.className = 'menu-section';
      menuSection.appendChild(sectionTitle);
      menuSection.appendChild(menuGrid);
      
      menuContainer.appendChild(menuSection);
    });
    
    // Fade in the new content
    setTimeout(() => {
      menuContainer.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
      menuContainer.style.opacity = '1';
      menuContainer.style.transform = 'translateY(0)';
      
      // Add staggered animation to menu items with improved timing
      const menuItems = document.querySelectorAll('.menu-item');
      menuItems.forEach((item, index) => {
        // Reduce delay between items for smoother appearance
        item.style.animationDelay = `${0.05 + (index * 0.03)}s`;
      });
    }, 100);
  }, 250);
}

// Initialize menu
document.addEventListener('DOMContentLoaded', () => {
  // Header remains the same size on scroll - removed scroll event listener
  
  // Add initial styles to container for animations
  const menuContainer = document.getElementById('menu-container');
  menuContainer.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  
  // Initial render with plates category
  renderMenuItems('plates');
  
  // Ensure category tabs are visible on mobile
  const categoryTabs = document.querySelector('.category-tabs');
  if (categoryTabs) {
    // Add horizontal scroll indicator for mobile
    const tabsContainer = categoryTabs.parentElement;
    if (categoryTabs.scrollWidth > categoryTabs.clientWidth) {
      categoryTabs.classList.add('scrollable');
    }
  }
  
  // Add click event listeners to category tabs
  document.querySelectorAll('.category-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      // Remove active class from all tabs
      document.querySelectorAll('.category-tab').forEach(t => {
        t.classList.remove('active');
        t.style.transition = 'all 0.3s ease';
      });
      
      // Add active class to clicked tab
      tab.classList.add('active');
      
      // Scroll tab into view (center)
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      
      // Render menu items for selected category
      const category = tab.getAttribute('data-category');
      renderMenuItems(category);
    });
  });
  
  // Add advanced animation when navigating between categories
  const menuSections = document.querySelectorAll('.menu-section');
  menuSections.forEach(section => {
    section.addEventListener('click', () => {
      const category = section.querySelector('h2').textContent;
      const activeTab = document.querySelector(`.category-tab[data-category="${category}"]`);
      activeTab.click();
    });
  });
});
