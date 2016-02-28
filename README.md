#Ghost i18n

Simple module to support multiple languages in your ghost blog (while they develop their own module, it's a temporary solution)

##Install
Clone this repo in your Ghost theme

##Usage
In [i18n.js](https://github.com/elenatorro/Ghosti18n/blob/master/lib/i18n.js) include the elements you want to be translated. Check out the [LookJS documentation](https://github.com/elenatorro/LookJS/blob/master/README.md) for the translation module.

Then, the translations have to be added in [languages.js](https://github.com/elenatorro/Ghosti18n/blob/master/lib/languages.js)

Include the scripts / compile them in the following order:
1. Look.js / Look.min.js
2. i18n.js
3. languages.js

You can see how it works in the following blog: [Skribado23](http://skribado23.com/)
