function toggleNavbarLinks() {
   var navbarLinks = document.querySelectorAll('.navbar a:not(:first-child):not(.toggle-button)');
    
   for (var i = 0; i < navbarLinks.length; i++) {
      if (navbarLinks[i].style.display === 'none') {
        navbarLinks[i].style.display = 'block';
      } else {
        navbarLinks[i].style.display = 'none';
      }
   }
  }