/*
Requirements:

1.  Add window load event

2.  Make GET request via fetch to astronauts-API:
    <https://handlers.education.launchcode.org/static/astronauts.json>__

3.  Add each returned astronaut to web page

=== JSON example: use loop to access each object in JSON array
[
    {
        "id": 1,
        "active": false,
        "firstName": "Mae",
        "lastName": "Jemison",
        "skills": [
            "Physician", "Chemical Engineer"
        ],
        "hoursInSpace": 190,
        "picture": "mae-jemison.jpg"
    },
    {
        "id": 2,
        "active": false,
        "firstName": "Frederick",
        "lastName": "Gregory",
        "skills": [
            "Information Systems", "Shuttle Pilot", "Fighter Pilot", "Helicopter Pilot", "Colonel USAF"
        ],
        "hoursInSpace": 455,
        "picture": "frederick-gregory.jpg"
    },
    {
        "id": 3,
        "active": false,
        "firstName": "Ellen",
        "lastName": "Ochoa",
        "skills": [
            "Physics", "Electrical Engineer"
        ],
        "hoursInSpace": 979,
        "picture": "ellen-ochoa.jpg"
    },
    {
        "id": 4,
        "active": false,
        "firstName": "Guion",
        "lastName": "Bluford",
        "skills": [
            "Aerospace Engineer", "Philosophy", "Physics", "Colonel USAF",
            "Fighter Pilot"
        ],
        "hoursInSpace": 686,
        "picture": "guion-bluford.jpg"
    },
    {
        "id": 5,
        "active": false,
        "firstName": "Sally",
        "lastName": "Ride",
        "skills": [
            "Physicist", "Astrophysics"
        ],
        "hoursInSpace": 343,
        "picture": "sally-ride.jpg"
    },
    {
        "id": 6,
        "active": true,
        "firstName": "Kjell",
        "lastName": "Lindgren",
        "skills": [
            "Physician", "Surgeon", "Emergency Medicine"
        ],
        "hoursInSpace": 15,
        "picture": "kjell-lindgren.jpg"
    },
    {
        "id": 7,
        "active": true,
        "firstName": "Jeanette",
        "lastName": "Epps",
        "skills": [
            "Physicist", "Philosophy", "Aerospace Engineer"
        ],
        "hoursInSpace": 0,
        "picture": "jeanette-epps.jpg"
    }
]

4.  Use this HTML Template:
...........................
    <div class="astronaut">
        <div class="bio">
            <h3>Mae Jemison</h3>
            <ul>
            <li>Hours in space: 190</li>
            <li>Active: false</li>
            <li>Skills: Physician, Chemical Engineer</li>
            </ul>
        </div>
        <img class="avatar" src="images/mae-jemison.jpg">
    </div>
..........................................................
    -- create HTML in this exact format for each astronaut
    -- include data about each specific astronaut
    -- for example, the HTML above should be created for astronaut Mae Jemison
    -- all HTML created should be added to <div id="container">

    do NOT copy / paste this into your HTML file
    use as template to build HTML dynamically for each astronaut returned from API
..................................................................................
=== SEE STUDIO PAGE FOR EXPECTED RESULTS ===
--------------------------------------------
    Bonus Missions:
        display astronauts sorted from most to least time in space
        make “Active: true” text color: "green" for astronauts still active (active is true)
        add count of astronauts to page
*/
