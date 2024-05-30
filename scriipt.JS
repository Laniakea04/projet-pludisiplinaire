document.addEventListener('DOMContentLoaded', () => {
    const navMenu = document.querySelector('.nav-menu');
    const navItems = document.querySelectorAll('.nav-menu li');
    const navLine = document.createElement('div');
    navLine.classList.add('nav-line');
    navMenu.appendChild(navLine);
  
    navItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        const itemRect = item.getBoundingClientRect();
        const navRect = navMenu.getBoundingClientRect();
        navLine.style.width = `${itemRect.width}px`;
        navLine.style.left = `${itemRect.left - navRect.left}px`;
      });
  
      item.addEventListener('mouseleave', () => {
        navLine.style.width = '0';
      });
    });
  });
  