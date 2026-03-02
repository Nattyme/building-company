const addAccordion = (type, selector) => {
  // e.preventDefault();
  const accordionWrapper = document.querySelector(selector);
  if(!accordionWrapper) return;

  const accordionBtns = accordionWrapper.querySelectorAll('.accordion__btn');
  const accordionItems = document.querySelectorAll('.accordion__item');
  const accordionContents = document.querySelectorAll('.accordion__content');
  if(!accordionBtns || !accordionItems || !accordionContents) return;

  // Чистый старт - сброс всех состояний 
  accordionContents.forEach(content => {
    content.style.maxHeight = 0;
    content.parentElement.classList.remove('active');
    content.parentElement.querySelector('.expand-icon')?.classList.remove('active');
  });


  const findContentAndItem = (btn) => {
    const currentItem = btn.closest('.accordion__item');
    const currentContent = currentItem.querySelector('.accordion__content');
    return {currentItem, currentContent}
  }

  const showContent = (e, btn) => {
    e.preventDefault();
    
    const {currentItem, currentContent} = findContentAndItem(btn);
    if(!currentContent || !currentItem) return;
    
    if (e.target.closest('a') && e.target.closest('a').dataset) {
      const linkData = e.target.closest('a').dataset;
      if(linkData.btn === 'edit' || linkData.btn === 'remove') return linkData.btn;
    };
      
    
    if (currentItem.classList.contains('active')) {    
      currentItem.classList.remove('active');
      currentContent.style.maxHeight = 0;
      currentItem.querySelector('.expand-icon')?.classList.remove('active');
    } else {
      currentItem.classList.add('active');
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      currentItem.querySelector('.expand-icon')?.classList.add('active');
    }
  

  }

  const showOnlyContent = (e, btn) => {
    e.preventDefault();

    const {currentItem, currentContent} = findContentAndItem(btn);

    if (currentItem.classList.contains('active')) {
      currentItem.classList.remove('active');
      currentContent.style.maxHeight = 0;
      currentItem.querySelector('.expand-icon')?.classList.remove('active');
    }

    else {
  
      accordionItems.forEach(item => {
          item.classList.remove('active');
          item.querySelector('.expand-icon')?.classList.remove('active');
      });
      
      accordionContents.forEach(content => content.style.maxHeight = 0);

      currentItem.classList.add('active');
      currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
      currentItem.querySelector('.expand-icon')?.classList.add('active');
    }    

  };

  const startAccordionByType = (e, btn) => {
    switch (type) {
      case 'only' :
        showOnlyContent(e, btn);
        break;

      case 'many' :
        showContent(e, btn);
        break;
    }

  }

  // Слушаем клик по кнопкам 
  accordionBtns.forEach(btn => btn.addEventListener ('click',  (e) => startAccordionByType(e, btn)));
}

export default addAccordion;

