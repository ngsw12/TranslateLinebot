// LINE developersのメッセージ送受信設定のアクセストークン
var CHANNEL_ACCESS_TOKEN = PropertiesService.getScriptProperties().getProperty("CHANNEL_ACCESS_TOKEN"); // '<Your Access Token>';

function doPost(e) {
  var event = JSON.parse(e.postData.contents).events[0];
  var replyToken= event.replyToken;
  
  // エラー処理
  if (typeof replyToken === 'undefined') {
    return; 
  }
  var userId = event.source.userId;
  var nickname = getUserProfile(userId);

  if(event.type == 'message') {
    var userMessage = event.message.text;

    // 送られたメッセージの言語、未入力の場合は自動で判定
    var sourceLanguage = ''
    // 変換後の言語
    var targetLanguage = 'en';
    
    var replyMessage = LanguageApp.translate(userMessage, '', targetLanguage);

    var url = 'https://api.line.me/v2/bot/message/reply';

    UrlFetchApp.fetch(url, {
      'headers': {
        'Content-Type': 'application/json; charset=UTF-8',
        'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
      },
      'method': 'post',
      'payload': JSON.stringify({
        'replyToken': replyToken,
        'messages': [{
          'type': 'text',
          'text': replyMessage,
        }],
      }),
    });
    return ContentService.createTextOutput(
      JSON.stringify({'content': 'post ok'})
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

// profileを取得してくる関数
function getUserProfile(userId){ 
  var url = 'https://api.line.me/v2/bot/profile/' + userId;
  var userProfile = UrlFetchApp.fetch(url,{
    'headers': {
      'Authorization' :  'Bearer ' + CHANNEL_ACCESS_TOKEN,
    },
  })
  return JSON.parse(userProfile).displayName;
}