$(document).ready(function () {
  customScroll();
  // optionsToggle();
  showHide();
  tooltip();
  apiKey();
  Tab();
});



// // OptionBer Tigger
// jQuery(function(){
//   // jQuery('#showall').click(function(){
//   //   jQuery('.targetDiv').show();
//   // });
//   jQuery('.showSingle').click(function(){
//     jQuery('.targetDiv').hide();
//     jQuery('#div'+$(this).attr('target')).show();
//   });
//   jQuery('.closeTarget').click(function(){
//     jQuery('.targetDiv').hide();
//   });
// });


// mCustom Scroll
function customScroll() {
  $('.options-ber ul.option,  .tabContent, .middle ul, .effectsdiv, .add-background ul, .get-option').mCustomScrollbar({
    autoHideScrollbar:true,
    scrollbarPosition:"outside"
  });
  $(' .tabOptions, .custom-frame .modal-body ul').mCustomScrollbar({
    autoHideScrollbar:true,
    axis: "x",
    // scrollbarPosition:"outside"
  });
}


// Show Hide Div
// function optionsToggle() {
//   $('#optionsToggle').on('click', function () {
//     $('#optionsToggle').toggleClass('trigger');
//     if ($('.options-ber').hasClass('collapseOptions')) {
//       $('.options-ber').removeClass('collapseOptions');
//       $('.editer-main-area').removeClass('expendEditer');
//     }
//     else {
//       $('.options-ber').addClass('collapseOptions');
//       $('.editer-main-area').addClass('expendEditer');
//     }
//   });
// }



// Show Hide Div
function showHide() {
  $('.btnToggle').on('click', function () {
    $('.btnToggle').toggleClass('clicked');
    if ($('.bottomBer .togglediv').hasClass('show')) {
      $('.bottomBer .togglediv').removeClass('show');
    }
    else {
      $('.bottomBer .togglediv').addClass('show');
    }
  });
}


// PopUp
function apiKey() {
  $('#mask').fadeIn(500, function () {
    $('#popup').show();
  });

  $(".close").on('click', function () {
    $('#popup').hide();
    $('#mask').fadeOut(500);
  });
}


// Tooltip
function tooltip() {
  $('[data-toggle="tooltip"]').tooltip({
    trigger: 'hover'
  });
}


$(".dragablePopup").draggable({
  handle: ".modal-header"
});


function Tab() {
  $("#tabs").tabs();
}