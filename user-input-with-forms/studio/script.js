/*
SEARCH ENGINE OPTIONS:
----------------------------------
Label	    Value	    Search-URL
-----------------------------------------------------
Google	    google	    https://www.google.com/search
DuckDuckGo	duckDuckGo	https://duckduckgo.com/
Bing	    bing	    https://www.bing.com/search
Ask	        ask	        https://www.ask.com/web
...............................................
within <form>:
1.  create text input with name="q"  --->  <input type="text" name="q" />

2.  create radio group with radio button for each search engine
        -- use same value for each radio button's "engine" attribute
 		-- include label element for each radio button

3.  create submit form button with value="Go!"
.................................................................
4.  access action-URL via actions["keyName"] & chosenEngine.value
        -- set form's action via setAttribute
---------------------------------------------
Bonus Missions:
    1. submit handler validates that user:
        A.  selects a search engine
        B.  enters a non-empty search term

    2. add some CSS
*/

window.addEventListener("load", function () {
	// registers event submit handler
	function setSearchEngine(event) {
		let form = document.querySelector("form");
		let searchTerm = document.querySelector('input[name="q"]').value;
		let selectedEngine = document.querySelector(
			"input[name=engine]:checked"
		);
		let actionsObj = {
			google: "https://www.google.com/",
			duckDuckGo: "https://duckduckgo.com/",
			bing: "https://www.bing.com/search",
			ask: "https://www.ask.com/web",
		};
		let engine = selectedEngine ? selectedEngine.value : null;
		//..............................
		if (!engine) {
			event.preventDefault(); // prevents form submission
			return alert("Please select a search engine.");
		}
		if (!searchTerm) {
			event.preventDefault(); // prevents form submission
			return alert("Please enter a search term.");
		}
		let actionURL = actionsObj[engine];
		/*
		if (selectedEngine === "google") {
			actionURL = "https://www.google.com/";
		} else if (selectedEngine === "duckDuckGo") {
			actionURL = "https://duckduckgo.com/";
		} else if (selectedEngine === "bing") {
			actionURL = "https://www.bing.com/search";
		} else if (selectedEngine === "ask") {
			actionURL = "https://www.ask.com/web";
		} else {
			alert("Must select a search engine!");
			event.preventDefault(); // prevents form submission
		}	*/
		// --------------------------------------------------------------
		// set <form> action attribute as user’s selected search engine URL
		form.setAttribute("action", actionURL);
	}
	form.addEventListener("submit", setSearchEngine);
});
