import React, { useState } from 'react';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

export default function ZaeemRestaurant() {
  const [currentCategory, setCurrentCategory] = useState('plates');
  const [isArabic, setIsArabic] = useState(true);
  
  // قائمة الفئات
  const categories = [
    { id: 'plates', labelAr: 'علب وأصناف', labelEn: 'Plates' },
    { id: 'sides', labelAr: 'أصناف جانبية', labelEn: 'Side Dishes' },
    { id: 'sandwiches', labelAr: 'سندوتشات', labelEn: 'Sandwiches' },
  ];
  
  // قائمة المنتجات
  const products = [
    // علب وأصناف
    { 
      id: 1, 
      category: 'plates', 
      nameAr: 'فول', 
      nameEn: 'Foul',
      descriptionAr: 'فول مصري مطهو على الطريقة التقليدية',
      descriptionEn: 'Egyptian beans cooked in traditional way',
      price: 15.00 
    },
    { 
      id: 2, 
      category: 'plates', 
      nameAr: 'فول زيت حار', 
      nameEn: 'Foul with Hot Oil',
      descriptionAr: 'فول مدمس مع زيت حار وتوابل خاصة',
      descriptionEn: 'Cooked beans with hot oil and special spices',
      price: 18.00 
    },
    { 
      id: 3, 
      category: 'plates', 
      nameAr: 'فول زيت زيتون', 
      nameEn: 'Foul with Olive Oil',
      descriptionAr: 'فول مدمس مع زيت زيتون بلدي وليمون طازج',
      descriptionEn: 'Cooked beans with olive oil and fresh lemon',
      price: 20.00 
    },
    { 
      id: 4, 
      category: 'plates', 
      nameAr: 'فول اسكندراني', 
      nameEn: 'Alexandrian Foul',
      descriptionAr: 'فول على الطريقة الاسكندرانية مع الثوم والليمون',
      descriptionEn: 'Beans cooked Alexandria style with garlic and lemon',
      price: 22.00 
    },
    { 
      id: 5, 
      category: 'plates', 
      nameAr: 'فول دمياطي', 
      nameEn: 'Damietta Foul',
      descriptionAr: 'فول على الطريقة الدمياطية مع البصل والكمون',
      descriptionEn: 'Beans cooked Damietta style with onions and cumin',
      price: 22.00 
    },
    { 
      id: 6, 
      category: 'plates', 
      nameAr: 'شكشوكة', 
      nameEn: 'Shakshuka',
      descriptionAr: 'طبق شكشوكة شهي محضر بالطماطم والفلفل والبيض',
      descriptionEn: 'Delicious Shakshuka with tomatoes, peppers and eggs',
      price: 25.00 
    },
    { 
      id: 7, 
      category: 'plates', 
      nameAr: 'مسقعة', 
      nameEn: 'Moussaka',
      descriptionAr: 'مسقعة باذنجان مع صلصة الطماطم',
      descriptionEn: 'Eggplant moussaka with tomato sauce',
      price: 25.00 
    },
    { 
      id: 8, 
      category: 'plates', 
      nameAr: 'بابا غنوج', 
      nameEn: 'Baba Ghanoush',
      descriptionAr: 'سلطة باذنجان مشوي مع طحينة وثوم وليمون',
      descriptionEn: 'Roasted eggplant salad with tahini, garlic and lemon',
      price: 20.00 
    },
    { 
      id: 9, 
      category: 'plates', 
      nameAr: 'قرنبيط', 
      nameEn: 'Cauliflower',
      descriptionAr: 'قرنبيط مقلي مقرمش',
      descriptionEn: 'Crispy fried cauliflower',
      price: 18.00 
    },
    { 
      id: 10, 
      category: 'plates', 
      nameAr: 'بطاطس صوابع', 
      nameEn: 'French Fries',
      descriptionAr: 'بطاطس مقلية مقرمشة',
      descriptionEn: 'Crispy fried potatoes',
      price: 15.00 
    },
    { 
      id: 11, 
      category: 'plates', 
      nameAr: 'بطاطس مهروسة', 
      nameEn: 'Mashed Potatoes',
      descriptionAr: 'بطاطس مهروسة بالزبدة والحليب',
      descriptionEn: 'Mashed potatoes with butter and milk',
      price: 16.00 
    },
    { 
      id: 12, 
      category: 'plates', 
      nameAr: 'بتنجان مخلل', 
      nameEn: 'Pickled Eggplant',
      descriptionAr: 'بتنجان مخلل بالخل والثوم',
      descriptionEn: 'Eggplant pickled with vinegar and garlic',
      price: 15.00 
    },
    { 
      id: 13, 
      category: 'plates', 
      nameAr: 'بتنجان مقلي', 
      nameEn: 'Fried Eggplant',
      descriptionAr: 'شرائح بتنجان مقلية مقرمشة',
      descriptionEn: 'Crispy fried eggplant slices',
      price: 16.00 
    },
    
    // أصناف جانبية
    { 
      id: 14, 
      category: 'sides', 
      nameAr: 'جبنة طماطم', 
      nameEn: 'Cheese with Tomatoes',
      descriptionAr: 'جبنة بيضاء مع طماطم وزيت زيتون',
      descriptionEn: 'White cheese with tomatoes and olive oil',
      price: 18.00 
    },
    { 
      id: 15, 
      category: 'sides', 
      nameAr: 'مش', 
      nameEn: 'Mesh Cheese',
      descriptionAr: 'جبنة مش مصرية تقليدية مع زيت وفلفل حار',
      descriptionEn: 'Traditional Egyptian aged cheese with oil and hot pepper',
      price: 16.00 
    },
    { 
      id: 16, 
      category: 'sides', 
      nameAr: 'بطاطس بانيه', 
      nameEn: 'Potato Pané',
      descriptionAr: 'شرائح بطاطس مغطاة بالبقسماط المقرمش',
      descriptionEn: 'Potato slices coated with crispy breadcrumbs',
      price: 20.00 
    },
    { 
      id: 17, 
      category: 'sides', 
      nameAr: 'سلطة', 
      nameEn: 'Salad',
      descriptionAr: 'سلطة خضار طازجة موسمية',
      descriptionEn: 'Fresh seasonal vegetable salad',
      price: 15.00 
    },
    { 
      id: 18, 
      category: 'sides', 
      nameAr: 'بصارة', 
      nameEn: 'Bessara',
      descriptionAr: 'بصارة مصرية تقليدية من الفول المدشوش',
      descriptionEn: 'Traditional Egyptian bessara from mashed fava beans',
      price: 14.00 
    },
    { 
      id: 19, 
      category: 'sides', 
      nameAr: 'بيض بسطرمة', 
      nameEn: 'Eggs with Pastrami',
      descriptionAr: 'بيض مقلي مع شرائح بسطرمة',
      descriptionEn: 'Fried eggs with pastrami slices',
      price: 22.00 
    },
    { 
      id: 20, 
      category: 'sides', 
      nameAr: 'بيض سجق', 
      nameEn: 'Eggs with Sausage',
      descriptionAr: 'بيض مقلي مع سجق حار',
      descriptionEn: 'Fried eggs with spicy sausage',
      price: 22.00 
    },
    { 
      id: 21, 
      category: 'sides', 
      nameAr: 'بيض مقلي', 
      nameEn: 'Fried Eggs',
      descriptionAr: 'بيض مقلي على الطريقة المصرية',
      descriptionEn: 'Fried eggs the Egyptian way',
      price: 15.00 
    },
    
    // سندوتشات
    { 
      id: 22, 
      category: 'sandwiches', 
      nameAr: 'سندوتش فول', 
      nameEn: 'Foul Sandwich',
      descriptionAr: 'فول مدمس مع زيت وليمون في عيش بلدي',
      descriptionEn: 'Cooked beans with oil and lemon in Egyptian bread',
      price: 10.00 
    },
    { 
      id: 23, 
      category: 'sandwiches', 
      nameAr: 'سندوتش طعمية', 
      nameEn: 'Falafel Sandwich',
      descriptionAr: 'طعمية مقرمشة مع سلطة وطحينة',
      descriptionEn: 'Crispy falafel with salad and tahini',
      price: 12.00 
    },
    { 
      id: 24, 
      category: 'sandwiches', 
      nameAr: 'سندوتش بطاطس صوابع', 
      nameEn: 'French Fries Sandwich',
      descriptionAr: 'بطاطس مقلية مقرمشة في عيش بلدي',
      descriptionEn: 'Crispy fried potatoes in Egyptian bread',
      price: 14.00 
    },
    { 
      id: 25, 
      category: 'sandwiches', 
      nameAr: 'سندوتش بطاطس كاتشب', 
      nameEn: 'Potato with Ketchup Sandwich',
      descriptionAr: 'بطاطس مقلية مع كاتشب',
      descriptionEn: 'Fried potatoes with ketchup',
      price: 14.00 
    },
    { 
      id: 26, 
      category: 'sandwiches', 
      nameAr: 'سندوتش بطاطس كاتشب ومايونيز', 
      nameEn: 'Potato with Ketchup & Mayo Sandwich',
      descriptionAr: 'بطاطس مقلية مع كاتشب ومايونيز',
      descriptionEn: 'Fried potatoes with ketchup and mayonnaise',
      price: 16.00 
    },
    { 
      id: 27, 
      category: 'sandwiches', 
      nameAr: 'سندوتش بطاطس بانيه', 
      nameEn: 'Potato Pané Sandwich',
      descriptionAr: 'شرائح بطاطس بانيه مقرمشة',
      descriptionEn: 'Crispy potato pané slices sandwich',
      price: 18.00 
    },
    { 
      id: 28, 
      category: 'sandwiches', 
      nameAr: 'سندوتش مسقعة', 
      nameEn: 'Moussaka Sandwich',
      descriptionAr: 'مسقعة باذنجان مع صلصة الطماطم',
      descriptionEn: 'Eggplant moussaka with tomato sauce sandwich',
      price: 16.00 
    },
    { 
      id: 29, 
      category: 'sandwiches', 
      nameAr: 'سندوتش شكشوكة', 
      nameEn: 'Shakshuka Sandwich',
      descriptionAr: 'شكشوكة بالطماطم والفلفل',
      descriptionEn: 'Shakshuka with tomatoes and peppers sandwich',
      price: 16.00 
    },
    { 
      id: 30, 
      category: 'sandwiches', 
      nameAr: 'سندوتش مهروسة', 
      nameEn: 'Mashed Potato Sandwich',
      descriptionAr: 'بطاطس مهروسة بالتوابل',
      descriptionEn: 'Mashed potatoes with spices sandwich',
      price: 14.00 
    },
    { 
      id: 31, 
      category: 'sandwiches', 
      nameAr: 'سندوتش جبنة مقلية', 
      nameEn: 'Fried Cheese Sandwich',
      descriptionAr: 'جبنة مقلية مقرمشة',
      descriptionEn: 'Crispy fried cheese sandwich',
      price: 18.00 
    },
    { 
      id: 32, 
      category: 'sandwiches', 
      nameAr: 'سندوتش بيض سجق', 
      nameEn: 'Eggs with Sausage Sandwich',
      descriptionAr: 'بيض مقلي مع سجق حار',
      descriptionEn: 'Fried eggs with spicy sausage sandwich',
      price: 20.00 
    },
    { 
      id: 33, 
      category: 'sandwiches', 
      nameAr: 'سندوتش بيض بسطرمة', 
      nameEn: 'Eggs with Pastrami Sandwich',
      descriptionAr: 'بيض مقلي مع شرائح بسطرمة',
      descriptionEn: 'Fried eggs with pastrami slices sandwich',
      price: 20.00 
    }
  ];
  
  // المنتجات الخاصة بالفئة الحالية
  const filteredProducts = products.filter(product => product.category === currentCategory);

  return (
    <div dir={isArabic ? "rtl" : "ltr"} className="bg-black text-white min-h-screen w-full" style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}>
      {/* Header */}
      <Header isArabic={isArabic} setIsArabic={setIsArabic} />
      {/* Breadcrumb */}
      <div className="bg-black py-2 w-full px-0">
        <div className="text-yellow-500/70 px-8">
          <span>{isArabic ? 'الرئيسية' : 'Home'}</span> / <span className="text-gray-400">{isArabic ? 'القائمة' : 'Menu'}</span>
        </div>
      </div>
      {/* Page Title */}
      <div className="bg-black py-4 w-full px-8 flex items-center">
        <div className="w-8 h-8 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500">
          {/* أيقونة */}
        </div>
        <h2 className={`text-3xl font-bold ml-3 ${isArabic ? 'mr-3 ml-0' : ''}`}>{isArabic ? 'القائمة' : 'Menu'}</h2>
      </div>
      {/* Branch Selector */}
      <div className="bg-black py-4 w-full px-8 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full border border-yellow-500 flex items-center justify-center text-yellow-500">
            {/* أيقونة */}
          </div>
          <span className={`ml-2 ${isArabic ? 'mr-2 ml-0' : ''}`}>{isArabic ? 'الفرع الحالي: الزعيم' : 'Current branch: Al-Zaeem'}</span>
        </div>
        <button className="px-4 py-1 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition">
          {isArabic ? 'تغيير' : 'Change'}
        </button>
      </div>
      {/* Menu Categories */}
      <div className="bg-black py-2 overflow-x-auto w-full px-8">
        <div className="flex space-x-2">
          {categories.map(category => (
            <button 
              key={category.id} 
              className={`px-4 py-2 rounded ${
                currentCategory === category.id ? 'bg-yellow-500 text-black' : 'bg-gray-800 text-white'
              } whitespace-nowrap`}
              onClick={() => setCurrentCategory(category.id)}
            >
              {isArabic ? category.labelAr : category.labelEn}
            </button>
          ))}
        </div>
      </div>
      {/* Menu Items (شكل البطاقة مع الأيقونة والفئة) */}
      <div className="bg-black py-8 w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => {
            // تحديد اسم الفئة لهذا المنتج
            const categoryObj = categories.find(cat => cat.id === product.category);
            const categoryLabel = isArabic ? categoryObj?.labelAr : categoryObj?.labelEn;
            return (
              <ProductCard
                key={product.id}
                product={product}
                categoryLabel={categoryLabel}
                isArabic={isArabic}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
