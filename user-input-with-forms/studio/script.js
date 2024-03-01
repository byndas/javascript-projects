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
        A.  selects a search engine --> DONE
        B.  enters a non-empty search term

    2. add some CSS
*/

window.addEventListener("load", function () {
	// register event submit handler
	function setSearchEngine(event) {
		let actionURL;
		let form = document.querySelector("form");
		let chosenEngine = document.querySelector("input[name=engine]:checked");
		let actionsObj = {
			google: "https://www.google.com/",
			duckDuckGo: "https://duckduckgo.com/",
			bing: "https://www.bing.com/search",
			ask: "https://www.ask.com/web",
		};
		//..............................
		if (chosenEngine === "google") {
			actionURL = "https://www.google.com/";
		} else if (chosenEngine === "duckDuckGo") {
			actionURL = "https://duckduckgo.com/";
		} else if (chosenEngine === "bing") {
			actionURL = "https://www.bing.com/search";
		} else if (chosenEngine === "ask") {
			actionURL = "https://www.ask.com/web";
		} else {
			alert("Must select a search engine!");
			event.preventDefault(); // prevents form submission
		}
		// .................................................................
		// 4.  access action-URL via actions["keyName"] & chosenEngine.value
		// -- set form's action via setAttribute
		// -------------------------------------

		// set <form> action attribute as user’s chosen search engine URL
		form.setAttribute("action", actionURL);
	}
});
