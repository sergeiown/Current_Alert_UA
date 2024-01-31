# Сервер оновлення тривог

Простий Node.js сервер, який із завданою періодичністю отримує дані про тривоги з [alerts.in.ua API](https://alerts.in.ua/) та зберігає їх у файл `current_alert.json`.

## Встановлення

Створіть файл token.json у корені проекту та додайте свій API токен:

```
{
  "token": "ваш-токен"
}
```

## Використання
Запустіть сервер, після чого сервер автоматично отримуватиме дані про тривоги кожну хвилину та зберігатиме їх у файлі current_alert.json.

## Внесок
Якщо у вас є пропозиції або бажання внести внесок до проекту, будь ласка, відкривайте Pull Request.

## Ліцензія
[Copyright (c) 2024 Serhii I. Myshko](https://github.com/sergeiown/Current_Alert/blob/main/LICENSE)
