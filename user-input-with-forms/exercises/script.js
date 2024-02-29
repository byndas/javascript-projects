// Handle submit event: an empty input prevents form submission
let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
	let testName = document.querySelector("input[name=testName]");
	let testDate = document.querySelector("input[name=testDate]");
	let rocketName = document.querySelector("input[name=rocketName]");
	let rocketBooster = document.querySelector("input[name=rocketBooster]");
	let windRating = document.querySelector("input[name=windRating]");
	let proServers = document.querySelector("input[name=proServers]");

	if (
		testName.value === "" ||
		testDate.value === "" ||
		rocketName.value === "" ||
		rocketBooster.value === "" ||
		windRating.value === "" ||
		proServers.value === ""
	) {
		alert("All fields required!");
		// prevent form submission
		event.preventDefault();
	}
});
