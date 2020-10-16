/*jshint esversion: 10 */

function createRipple(event) {
	const a = event.currentTarget;

	const circle = document.createElement("span");
	const diameter = Math.max(a.clientWidth, a.clientHeight);
	const radius = diameter / 2;

	circle.style.width = circle.style.height = `${diameter}px`;
	circle.style.left = `${event.clientX - a.offsetLeft - radius}px`;
	circle.style.top = `${event.clientY - a.offsetTop - radius}px`;
	circle.classList.add("ripple");

	const ripple = a.getElementsByClassName("ripple")[0];

	ripple ? ripple.remove() : "";
  a.appendChild(circle);
}

const buttons = document.getElementsByTagName("a");
for (const button of buttons) {
	button.addEventListener("click", createRipple);
}
