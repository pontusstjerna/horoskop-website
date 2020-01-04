import fetch from "unfetch";
const URL = 'http://192.168.0.61:3000';
const wordCount = 100;

export default () => fetch(`${URL}?wordCount=${wordCount}`, {
    headers: {
        "Authorization": "Basic YXBpX2NvbnN1bWVyOjA5a3dlZmszMDlrZjA5b2tmOTBrZjM0Zms="
    },
}).then(result => {
    if (result.ok) {
        return result.text();
    }
    return "Något gick fel. :( - " + result.status + " " + result.statusText;
});
