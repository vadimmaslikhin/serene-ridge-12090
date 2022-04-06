const TelegramBot = require('node-telegram-bot-api');
const { messageTypes } = require('node-telegram-bot-api/src/telegram');
const token = '5222148538:AAFnkCRXBM5FbhR5sUhbNPxDMlUClUCLQA8';

const bot = new TelegramBot(token, {polling: true});

var i = 0;


function arrayRandElement(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand];
}

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  if ((msg.from.id == 193604176) || (msg.from.id == 848693308)) {
    i++;
    console.log(i)
    if (i == 20) {
      bot.sendMessage(chatId, '@vadim_maslikhin')
      i = 0
    }
  }
})
// Все про Диму

var rhymes = ['Димас - Сосать готов всегда на раз','Димас - Не хочет защищать Донбас','Димас - Готовый продать мать за алмаз',
'Димас -  гейский говнолаз','Димас - Любитель тухлых колбас','Димас - Старый дырявый пидарас','Димас - Порваный анальный глаз',
'Димас - Лопоухий дикообраз','Димас - Просто пукнул себе в глаз','Димас - Моим хуем раздроблен таз','Димас - Полупокер жополаз',
'Димас - Ебале не ставлю класс','Димас - Твой батя мне на праздник даст'];

var rhymes_dima = ['Дима - не Кодзима','Дима - сосал у мима','Дима - в очке как Хиросима','Дима - всегда мимо','Дима - ебаная свинина','Дима - ебать скотина']

var rhymes_dimon = ['Димон - штопаный гондон','Димон - по глубоким минетам чемпион','Димон - пидоров барон','Димон - яйцесос и гегемон',
'Димон - у всех геев есть твой телефон',
'Димон - в жопу влезет слон','Димон - сосать сосать ебать ты клоун','Димон - педофил усатый гном']

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if ((msg.text.indexOf('Димас') !== -1) || (msg.text.indexOf('димас') !== -1)) {
      bot.sendMessage(chatId, arrayRandElement(rhymes))
    }
    else {
      console.log('-')
    }
  })

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if ((msg.text.indexOf('Димас') === -1) && ((msg.text.indexOf('димас')) === -1)) {
    if (((msg.text.indexOf('Дима') !== -1) || (msg.text.indexOf('дима') !== -1))) {
     
        bot.sendMessage(chatId, arrayRandElement(rhymes_dima))
       // console.log(msg.text, msg.text.indexOf('Димас'))
    }}
    else {
      console.log('-')
    }
  })


  bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if ((msg.text.indexOf('Димон') !== -1) || (msg.text.indexOf('димон') !== -1)) {
      bot.sendMessage(chatId, arrayRandElement(rhymes_dimon))
    }
    else {
      console.log('-')
    }
  })

  // Все про Никиту

var nikita_rhymes = ['Никита - Говна корыто','Никита - Жопа пробита','Никита - Твоя мать кончей залита','Никита - Хуй меньше чем носик москита',
  'Никита - Очко небрито','Никита - В тюрьме готова для твоей жопы бита',
  'Никита - Желаю простатита','Никита - Пососи у своего бати, директора магнита']

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if ((msg.text.indexOf('Никита') !== -1) || (msg.text.indexOf('никита') !== -1)) {
      bot.sendMessage(chatId, arrayRandElement(nikita_rhymes))
    }
    else {
      console.log('-')
    }
  })




// Все остальное

bot.on('message', (msg) => {
    const chatId = msg.chat.id
    if ((msg.text == 'Пуш') || (msg.text == 'пуш')) {
      if (msg.from.id == 193604176) {
        bot.sendMessage(chatId, '@vadim_maslikhin @BNTpro')
        bot.sendMessage(chatId, 'Зови - не зови, нахуй ты никому не сдался')
      }
      else if (msg.from.id == 114196784) {
        bot.sendMessage(chatId, '@BNTpro @monarchy_r')
      }
      else if (msg.from.id == 848693308) {
        bot.sendMessage(chatId, '@vadim_maslikhin @monarchy_r')
      }
    }
  })





//bot.on('message', (msg) => {
  //const chatId = msg.chat.id
 // if (msg.from.id == 5157663594) {
  //  bot.sendMessage(chatId, '')
  //}
//})


// заткуть Никиту

var first = ['Никит','Ну бля','Так','Ну Никит','Ебать Никита','Ебать']
var second = ['Остановись','Хорош','Хватит','Прекрати','Плиз','Я прошу тебя перестань','Сколько можно']
var third = ['Пиздец','Я в ахуях','Че ты доебался то??','ок?','Проехали']

var l = 0;

bot.on('message', (msg) => {
 const chatID = msg.chat.id
    if (msg.from.id == 193604176) {
      l++;
      if (l == 5) {
        bot.sendMessage(chatID, arrayRandElement(first));
        bot.sendMessage(chatID, arrayRandElement(second));
        bot.sendMessage(chatID, arrayRandElement(third));
        l = 0
      }
   }
 })

// bot.on('message', (msg) => {
//  const chatID = msg.chat.id
//     if (msg.from.id == 114196784) {
//      console.log(msg)
//    }
//  })


  
//bot.on('message', (msg) => {
//  const chatID = msg.chat.id
//  if (msg.forward_from.id == 114196784) {
//    posting = dondon(msg.text)
//    bot.sendMessage(chatID, posting)
//}
//})

function dondon(todon) {
  let str = todon;
  let newstr = str.replace(/ /gi, ' ДОН ')
  return newstr
}

bot.on("polling_error", (msg) => console.log(msg));