javascript:(function(){
   var iframeSrc = document.querySelector('iframe[id="GuesserWindow"]').src;
   var query = iframeSrc.split('=')[1].split('&')[0];
   window.open(`https://www.google.com/maps?q=${query}`, '_blank');
})();
