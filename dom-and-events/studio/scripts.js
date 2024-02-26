window.addEventListener("load", function () {
	let takeOffBtn = document.getElementsById("takeoff");
	takeOffBtn.addEventListener("click", function () {
		window.confirm("Confirm that the shuttle is ready for takeoff.");
	});
});

/*
1.  window.addEventListener("load", function () { });

2.  if “Take off” button clicked:
        if shuttle ready for liftoff, add parts: B, C, D
            flight status = “Shuttle in flight.”;
            #shuttleBackground { background color: blue; }
            shuttle height += 10,000;


if moving shuttle:
    use position: absolute; --> to position object based on its location in its parent object
    for example, the parent object of #shuttleBackground div is flight simulator

    position: relative; --> positions object relative to its fellow child objects
    can use position: relative; --> if planet objects are within #shuttleBackground div

    set object's position with “px” --> position: “10px” --> 10 pixels
    to add pixels to position, use parseInt to convert current position to a number


3.  if “Land” button clicked:
        window.alert(“The shuttle is landing. Landing gear engaged.”);
        flight status = “The shuttle has landed.”;
        #shuttleBackground { background color: green; }
        shuttle height = 0;

4.  if “Abort Mission” button clicked:
        window.confirm(“Confirm that you want to abort the mission.”);

        if user wants to abort mission, add parts: B, C, D
                flight status = “Mission aborted.”;
                #shuttleBackground { background color: green; }
                shuttle height = 0;

5.  if “Up”, “Down”, “Right”, or “Left” buttons clicked:
        move rocket image 10 px towards clicked button

        if “Up” or “Down” buttons clicked:
            shuttle height += or -= 10,000 miles


BONUS:  1.  keep rocket on background
        2.  if rocket landed or mission aborted, return it to original background position

*/
