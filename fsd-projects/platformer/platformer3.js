$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(100, 500, 200, 20, "white");  //Start
    createPlatform(400, 450, 100, 20, "yellow"); //middle jump
    createPlatform(250, 350, 150, 20, "orange"); //back and left
    createPlatform(50, 250, 250, 20, "blue");   //wide platform in the middle
    createPlatform(500, 150, 100, 20, "green");  //top right last leap

    // TODO 3 - Create Collectables
    createCollectable("diamond", 300, 170, 0.5, 0.7);      //diamond floats away and gently bounces
    createCollectable("grace", 450, 120, 0.2, 0.9);       //grace falls and bounces a lot
    createCollectable("max", 100, 500, 0, 0);            //max doesn't fall or bounce
    createCollectable("database", 200, 300, 0.7, 0.3);  //database falls and bounces
    createCollectable("steve", 600, 100, 0.4, 0.6);    //steve added for balance :)
    
    // TODO 4 - Create Cannons

    createCannon("top", 650, 1000);
    createCannon("bottom", 450, 2000);
    createCannon("left", 500, 3000);
    createCannon("right", 400, 3000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
