import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, faBowlFood, faBowlRice, faEgg, faBreadSlice, 
  faPepperHot, faBurger, faDrumstickBite, faPizzaSlice, 
  faFish, faCheese, faCookie, faLeaf, faCarrot, faBacon, 
  faAppleWhole, faUtensils
} from '@fortawesome/free-solid-svg-icons';

const getFoodIcon = (nameEn, category) => {
  const name = nameEn.toLowerCase();
  
  if (name.includes('foul') || name.includes('beans')) {
    return faBowlFood;
  } else if (name.includes('shakshuka')) {
    return faEgg;
  } else if (name.includes('moussaka') || name.includes('eggplant')) {
    return faPepperHot;
  } else if (name.includes('baba ghanoush')) {
    return faBowlRice;
  } else if (name.includes('cauliflower') || name.includes('vegetable')) {
    return faCarrot;
  } else if (name.includes('fries') || name.includes('potato')) {
    return faUtensils;
  } else if (name.includes('cheese')) {
    return faCheese;
  } else if (name.includes('sandwich') || name.includes('bread')) {
    return faBreadSlice;
  } else if (name.includes('eggs')) {
    return faEgg;
  } else if (name.includes('salad')) {
    return faLeaf;
  } else if (name.includes('bessara')) {
    return faBowlRice;
  } else if (name.includes('pastrami') || name.includes('sausage')) {
    return faBacon;
  } else if (name.includes('falafel')) {
    return faBurger;
  }
  
  switch(category) {
    case 'plates':
      return faBowlFood;
    case 'sides':
      return faUtensils;
    case 'sandwiches':
      return faBreadSlice;
    default:
      return faUtensils;
  }
};

const getFoodIconColor = (nameEn, category) => {
  const name = nameEn.toLowerCase();
  
  if (name.includes('foul') || name.includes('beans')) {
    return '#8B4513';
  } else if (name.includes('shakshuka') || name.includes('tomato')) {
    return '#FF6347';
  } else if (name.includes('eggplant')) {
    return '#614051';
  } else if (name.includes('potato') || name.includes('fries')) {
    return '#FFD700';
  } else if (name.includes('cheese')) {
    return '#FFF8DC';
  } else if (name.includes('eggs')) {
    return '#FFFACD';
  } else if (name.includes('salad') || name.includes('vegetable')) {
    return '#7CFC00';
  } else if (name.includes('pastrami') || name.includes('sausage')) {
    return '#CD5C5C';
  }
  
  switch(category) {
    case 'plates':
      return '#FFD700';
    case 'sides':
      return '#7CFC00';
    case 'sandwiches':
      return '#F5DEB3';
    default:
      return '#FFFFFF';
  }
};

export default function ProductCard({ product, categoryLabel, isArabic }) {
  const foodIcon = getFoodIcon(product.nameEn, product.category);
  const iconColor = getFoodIconColor(product.nameEn, product.category);
  
  return (
    <div className="bg-black border border-gray-800 rounded-lg overflow-hidden flex min-h-[120px] md:min-h-[180px] relative">
      <div
        className={`absolute top-2 md:top-3 ${isArabic ? 'right-2 md:right-3' : 'left-2 md:left-3'} flex items-center z-10`}
      >
        <div className="flex items-center bg-yellow-400 rounded-full px-2 md:px-3 py-0.5 md:py-1 shadow-lg">
          <span className="font-bold text-[10px] md:text-xs text-black mr-1 ml-1">{categoryLabel}</span>
          <span className="bg-yellow-500 rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center ml-1">
            <FontAwesomeIcon icon={faPlus} color="black" className="text-xs md:text-base" />
          </span>
        </div>
      </div>
      <div className="w-1/3 flex items-center justify-center bg-gray-900">
        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-2 border-yellow-500 flex items-center justify-center bg-black">
          <FontAwesomeIcon 
            icon={foodIcon} 
            style={{ color: iconColor }} 
            className="text-3xl md:text-5xl" 
          />
        </div>
      </div>
      <div className="flex-1 p-2 md:p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-yellow-400 font-bold text-sm md:text-lg mb-0.5 md:mb-1">{isArabic ? product.nameAr : product.nameEn}</h3>
          <p className="text-gray-400 text-xs md:text-sm mb-1 md:mb-2">{isArabic ? product.descriptionAr : product.descriptionEn}</p>
        </div>
        <div className="mt-1 md:mt-2">
          <span className="text-gray-400 text-[10px] md:text-xs mb-0.5 md:mb-1 block">{isArabic ? 'السعر' : 'Price'}</span>
          <span className="text-white font-bold text-sm md:text-lg">{product.price.toFixed(2)} {isArabic ? 'ج.م' : 'EGP'}</span>
        </div>
      </div>
    </div>
  );
} 