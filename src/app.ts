import 'dotenv/config';
import TelegramBot from 'node-telegram-bot-api';
import { Command } from './commands/command.class';
import { StartCommand } from './commands/command.sart';

class Bot {
  bot: TelegramBot;
  commands: Command[] = [];
  token: string;

  constructor(private readonly config: object) {
    this.token = process.env.BOT_TOCkEN || '';
    this.bot = new TelegramBot(this.token, this.config);
  }

  init() {
    this.commands = [new StartCommand(this.bot)];
    for (const command of this.commands) {
      command.handle();
    }
  }
}

export default Bot;
