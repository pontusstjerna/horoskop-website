import "../styles/global.scss";
import fetchHoroscope from "./fetcher";
import nightSky from './night-sky'
import { format } from "date-fns";
import { sv } from "date-fns/locale";

const txtHoroscope = document.querySelector("#horoskop");

const generate = () => {
	txtHoroscope.innerHTML = "Laddar...";
	fetchHoroscope().then(horoscope => {
		txtHoroscope.innerHTML = horoscope;
	});
};

document.querySelector("#btn-generate").onclick = () => {
	generate();
};

const init = () => {
	nightSky();
	document.querySelector(".header").innerHTML = header();
};

const header = () =>
	capitalizeFirst(
		format(new Date(), "cccc", {
			locale: sv
		})
	) + "ens horoskop";

const capitalizeFirst = input =>
	input.charAt(0).toUpperCase() + input.substring(1);

window.onload = () => {
	init();
	generate();
};
