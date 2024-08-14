## OpenGuessr Bookmarklet
### 🤔 Description
OpenGuessr is a bookmarklet designed to help you view the location found in the OpenGuessr game on Google Maps. With this bookmarklet, you can quickly see the game location on Google Maps with just one click. 😱😹

### 😈 How to Use
1. **Install the Bookmarklet**
- Open your browser and go to the bookmarks menu or bookmark manager.
- Create a new bookmark.
- Name the bookmark as you prefer, for example, "OpenGuessr."
- Copy and paste the following JavaScript code into the bookmark URL field:
```javascript
javascript:(function(){
   var iframeSrc = document.querySelector('iframe[id="GuesserWindow"]').src;
   var query = iframeSrc.split('=')[1].split('&')[0];
   window.open(`https://www.google.com/maps?q=${query}`, '_blank');
})();
```
2. **Using the Bookmarklet**
- Navigate to the OpenGuessr game in your browser.
- Once you see the game map in the iframe, click the bookmarklet you just created.
- A new tab will open showing the same location on Google Maps.

### 😴 Notes
- This bookmarklet is designed for use with OpenGuessr and may not work correctly on other sites or if the OpenGuessr site structure changes. 😪😭
- This bookmarklet is provided for educational purposes only. The use of this tool to interact with or manipulate web applications in ways that violate terms of service or legal agreements may be illegal and unethical. Always ensure that you are complying with relevant laws and regulations. The author does not endorse or take responsibility for any misuse of this tool. 🏃‍♂️🏃‍♂️
