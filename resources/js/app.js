import fetchHoroscope from "./fetcher";
const txtHoroscope = document.querySelector("#horoskop");

const generate = () => fetchHoroscope().then(horoscope => {
    txtHoroscope.innerHTML = horoscope;
});

window.onload = generate;
document.querySelector("#btn-generate").onclick = () => {
    txtHoroscope.innerHTML = "Laddar...";
    generate();
};
