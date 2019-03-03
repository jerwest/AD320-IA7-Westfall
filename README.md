https://github.com/jerwest/AD320-IA7-Westfall/

This repository is for Individual Assignment #7 in AD 320 - Web App Development at North Seattle College.

Individual Assignment #7

For this exercise, you will create an Express app with the Express Generator that should have 2 routes, each with a different requirement.


With a templating engine:

express --view pug ad320-ia7-[lastname]
OR with plain HTML:

express --no-view ad320-ia7-[lastname]


The first route should be available as `route1`, ie localhost:3000/route1
This route should display a web page in the browser. The html returned by this route should also include an external CSS file & javascript file.
- The page should have only one div element that has a background color of red in the css file. It should also have an event listener that toggles the color on click.
- If the div is red, a click inside the div should make it turn blue.
- If it is blue, it should change back to red with a click inside the div.
(You are welcome to use plain html or a templating engine here for the view.)

The second route should be available as `route2` and accept a route parameter of "color-name", ie localhost:3000/route2/<color-name> . This route will ONLY return JSON, not html or a rendered view.
HINT: The  /routes/route2.js file should contain a method similar to this:

router.get("/:color-name", route2Callback)

This route should return the following json responses:
localhost:3000/route2/all - returns all information from the json sample below
localhost:3000/route2/black - returns only the object that includes the details about the color black:
{ "color": "black",
   "category": "hue",
   "type": "primary",
   "code": {
      "rgba": [255,255,255,1],
      "hex": "#000"
   }
}
All other colors in the json sample should be available at the /route2/<color-name> route. If a color is not included in the json, it should return a 404 error. (For example, localhost:3000/route2/grey since it is not included in the json, should return a 404 response.) Check out the Express documentation for a guide on "route parameters" to make this a very simple exercise.  

For route2, make sure that /route2/Black, /route2/black, and /route2/BLACK routes all return the same json.

When completed, push to a new GitHub repo named AD320-IA7-<LastName>, make sure to include a .gitignore file to exclude the node_modules folder, and submit the repo link on Canvas.


JSON Sample. Copy and paste the sample below into your project as colors.json. Note the structure, the value of the 'colors' key is an array of objects. Helpful json tools are documented here. https://www.codementor.io/codementorteam/how-to-use-json-files-in-node-js-85hndqt32 (Links to an external site.)Links to an external site.

{
  "colors": [
    {
      "color": "black",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,255,1],
        "hex": "#000"
      }
    },
    {
      "color": "white",
      "category": "value",
      "code": {
        "rgba": [0,0,0,1],
        "hex": "#FFF"
      }
    },
    {
      "color": "red",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,0,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "blue",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [0,0,255,1],
        "hex": "#00F"
      }
    },
    {
      "color": "yellow",
      "category": "hue",
      "type": "primary",
      "code": {
        "rgba": [255,255,0,1],
        "hex": "#FF0"
      }
    },
    {
      "color": "green",
      "category": "hue",
      "type": "secondary",
      "code": {
        "rgba": [0,255,0,1],
        "hex": "#0F0"
      }
    }
  ]
}
