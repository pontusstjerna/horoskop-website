export default () => {
	const nightSky = document.querySelector("#night-sky");
	const numberOfStars = 2000;

	// Create some stars
	for (var i = 0; i < numberOfStars; i++) {
		const aStar = star(randomInt(1, 10));
		aStar.style.left = `${randomInt(0, 3000)}px`;
		aStar.style.top = `${randomInt(0, 3000)}px`;
		nightSky.append(aStar);
	}
};

const star = size => {
	const el = document.createElement("div");
	const blurriness = randomInt(3, 10);

	el.classList.add("star");
	el.style.width = `${size}px`;
	el.style.height = `${size}px`;
	el.style.borderRadius = "50%";
	el.style["filter"] = `blur(${blurriness}px)`;
	
	return el;
};

const randomInt = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};
