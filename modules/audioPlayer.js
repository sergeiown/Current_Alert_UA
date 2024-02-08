/* Copyright (c) 2024 Serhii I. Myshko
https://github.com/sergeiown/Alert_Server/blob/main/LICENSE */

const { exec } = require('child_process');
const path = require('path');
const { logEvent } = require('./logger');
const messages = require('../messages.json');

const playAlertSound = () => {
    // Викликаємо powershell для відтворення звуку без відображення програвача
    exec(
        `powershell -c (New-Object System.Media.SoundPlayer '${path.join(
            __dirname,
            '../resources/audio/alert.wav'
        )}').PlaySync()`,
        (err) => {
            if (err) {
                logEvent(atob(messages.msg_06));
            }
        }
    );
};

const playAlertCancellationSound = () => {
    exec(
        `powershell -c (New-Object System.Media.SoundPlayer '${path.join(
            __dirname,
            '../resources/audio/alert_cancellation.wav'
        )}').PlaySync()`,
        (err) => {
            if (err) {
                logEvent(atob(messages.msg_06));
            }
        }
    );
};

module.exports = { playAlertSound, playAlertCancellationSound };
