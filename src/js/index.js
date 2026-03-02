// Галерея и лайтбоксы от Fancybox
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

// Мобильная навигация
import mobileNav from './modules/mobile-nav.js';
import addSwiper from './modules/swiper.js';
import addAccordion from './modules/addAccordion.js';
mobileNav();
addSwiper();
addAccordion('only', '#answers-accordion');
