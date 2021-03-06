# Simple translation Line Bot

## Overview
A simple translation bot made by Google apps script and LINE messaging API.
![sample_screenshot](https://user-images.githubusercontent.com/32945913/107312645-37666300-6ad4-11eb-8c50-0c384daf2f4a.png)

This bot translates the message into Japanese if the user message contains alphabets, otherwise English.

## Feature
The Translation function is impremented by [LanguageApp](https://developers.google.com/apps-script/reference/language/language-app)  
```
translate(text, sourceLanguage, targetLanguage)
```  
> the language code in which text is written. If it is set to the empty string, the source language code will be auto-detected

## Requirement
- Google account
- LINE account

## Reference
[GASでLINEbotを作る](https://qiita.com/ttexan/items/749bed9a60313e51b4c8)  
[Google翻訳APIを無料で作る方法](https://qiita.com/satto_sann/items/be4177360a0bc3691fdf)

## Author
[Linkedin](https://www.linkedin.com/in/sawa-naga-ba2a88201/)

## License
[MIT](https://en.wikipedia.org/wiki/MIT_License).

