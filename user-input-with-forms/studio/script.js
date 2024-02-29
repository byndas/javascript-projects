/*
SEARCH ENGINE OPTIONS:
----------------------------------
Label	    Value	    Search-URL
-----------------------------------------------------
Google	    google	    https://www.google.com/search
DuckDuckGo	duckDuckGo	https://duckduckgo.com/
Bing	    bing	    https://www.bing.com/search
Ask	        ask	        https://www.ask.com/web
-----------------------------------------------
within form:
1.  create text input with name = "q"
2.  create radio group with a radio button for each search engine
        use same value for each radio button's "engine" attribute
3.  create label element for each radio button
4.  add submit button to form with value = "Go!"
5.  get action URL via actions["keyName"] & chosenEngine.value
        set form's action via setAttribute

Bonus Missions:
    1. validate submit handler so that user has:
        A.  selected a search engine --> DONE
        B.  entered a non-empty search term
    2. add some CSS
*/
window.addEventListener("load", function () {
	// register event submit handler
	function setSearchEngine(event) {
		// set form's action as user’s chosen search engine
		let chosenEngine = document.querySelector("input[name=engine]:checked");

		let actionsObj = {
			google: "https://www.google.com/",
			duckDuckGo: "https://duckduckgo.com/",
			bing: "https://www.bing.com/search",
			ask: "https://www.ask.com/web",
		};
		// REFACTOR: for-in loop over actionsObj
		if (chosenEngine === "google") {
			actionURL = "https://www.google.com/";
		} else if (chosenEngine === "duckDuckGo") {
			actionURL = "https://duckduckgo.com/";
		} else if (chosenEngine === "bing") {
			actionURL = "https://www.bing.com/search";
		} else if (chosenEngine === "ask") {
			actionURL = "https://www.ask.com/web";
		} else {
			alert("");
			// prevent form submission
			event.preventDefault();
		}
	}
});
