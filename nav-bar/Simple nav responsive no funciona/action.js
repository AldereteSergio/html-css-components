function abrirMenu(e) {
    $(this).siblings('.submenu').toggle()
    // Close one dropdown when selecting another
    console.log(3);
    $('.submenu').not($(this).siblings()).hide()
    console.log(2);
    e.stopPropagation()
}

function papafritas() { // DOM ready
  // If a link has a dropdown, add sub menu toggle.
  $('nav ul li > a:not(:only-child)').click(abrirMenu);
  // Clicking away from dropdown will remove the dropdown class
  $('html').click(function () {
    console.log(1);
    $('.submenu').hide();
  });
  // Toggle open and close nav styles on click
   $('#nav-toggle').click(function() {
   $('nav ul').slideToggle();
  });
  // Hamburger to X toggle
  $('#nav-toggle').on('click', function() {
    this.classList.toggle('active');
  });
}

function manco($) { // Begin jQuery
  $(papafritas); // end DOM ready
}

manco(jQuery); // end jQuery