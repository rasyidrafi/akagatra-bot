const fs = require('fs');
const commandDetail = [];
const commandList = fs.readdirSync('./commands');
commandList.forEach(filename => {
    const name = filename.replace(".js", "");
    commandDetail.push(require(`../commands/${name}`));
})

const renderCommand = () => {
    let commandText = "";
    commandDetail.forEach(command => {
        commandText += `/${command.name} - ${command.desc}\n`;
    });
    return commandText;
}

renderCommand()

module.exports = {
    start: "Selamat datang di official S4AC Telegram Bot,\n" +
    "bot ini merupakan sarana untuk memudahkan akses informasi\n" +
    "mengenai kegiatan Ambalan di SMK Negeri 2 Singosari",
    help: "Berikut daftar perintah yang dapat digunakan\n" +
    renderCommand()
}