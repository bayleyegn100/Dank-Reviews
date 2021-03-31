module.exports = {
    get_emoji: () => {
        let adult = "🧑";
        return `<span for="img" arial-lable="adult">${adult}</span>`;

    },

    format_date: (date) => {
        return date.toLocaleDateString();
    }
}