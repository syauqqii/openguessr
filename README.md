# openguessr
copy this code, make new bookmark, paste to url bookmark
```javascript
javascript:(function(){
   var iframeSrc = document.querySelector('iframe[id="GuesserWindow"]').src;
   var query = iframeSrc.split('=')[1].split('&')[0];
   window.open(`https://www.google.com/maps?q=${query}`, '_blank');
})();
```
every playing game, click the bookmark
