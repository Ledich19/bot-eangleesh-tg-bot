import { getAudio, getWorldLearn } from '../services/meriam.service';
import { Command } from './command.class';
import TelegramBot from 'node-telegram-bot-api';

export class StartCommand extends Command {
  constructor(bot: TelegramBot) {
    super(bot);
  }
  handle(): void {
    this.bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      console.log('-----------', chatId);
      this.bot.sendMessage(-638435626, 'Received your message');
    });
    this.bot.onText(/\/start/, (msg) => {
      const chatId = msg.chat.id;
      this.bot.sendMessage(chatId, 'Do you like this bot?', {
        reply_markup: {
          inline_keyboard: [
            [
              { text: '👍', callback_data: 'course_like' },
              { text: '👎', callback_data: 'course_dislike' },
            ],
          ],
        },
      });
    });
    this.bot.on('callback_query', (query) => {
      if (query.data === 'course_like') {
        this.bot.answerCallbackQuery(query.id, { text: '🥳' });
        const myFunction = async () => {
          const worldData = await getWorldLearn('could');
          //const worldAudio = await getAudio('world');
          const message = `
word: ${worldData[0].meta.id}
parts of speech: ${worldData[0].fl}
transcription : [${worldData[0].hwi.prs[0].ipa}]
grammar : ${worldData[0].gram}
shortdef:
  ${worldData[0].shortdef[0]}
          `;
          this.bot.sendMessage(-638435626, message);
          // worldData[0].hwi.prs[0].sound.audio
          this.bot.sendAudio(
            -638435626,
            'https://media.merriam-webster.com/audio/prons/en/us/mp3/c/can_1_02.mp3'
          );
        };
        myFunction();
        setInterval(myFunction, 3 * 60 * 60 * 1000);
      } else if (query.data === 'course_dislike') {
        this.bot.answerCallbackQuery(query.id, { text: '☹️' });
      }
    });
  }
}
