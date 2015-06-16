/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage;
var stats;
var assets;
var manifest = [
    { id: "plane", src: "assets/images/plane.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "cloud", src: "assets/images/cloud.png" }
];
// Game Variables
var plane;
var island;
var clouds = [];
//var cloud: objects.Cloud;
// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this);
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}
// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop);
    // calling main game function
    main();
}
// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';
    document.body.appendChild(stats.domElement);
}
// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring
    plane.update();
    island.update();
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud].update();
    }
    stage.update();
    stats.end(); // end measuring
}
// Callback function that allows me to respond to button click events
function pinkButtonClicked(event) {
    createjs.Sound.play("clicked");
}
// Callback functions that change the alpha transparency of the button
// Our Main Game Function
function main() {
    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);
    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);
    // add 3 cloud objects to stage
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        stage.addChild(clouds[cloud]);
    }
}
//# sourceMappingURL=game.js.map