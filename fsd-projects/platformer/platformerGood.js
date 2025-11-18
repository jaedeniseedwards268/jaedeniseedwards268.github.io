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
    toggleGrid();




    // TODO 2 - Create Platforms
    //moving platform
    createPlatform(400, 300, 200, 20, "blue", 300, 500, 1);
      //Level 1- Slight Slope left + right
    createPlatform(50, 600, 300, 20, "sienna");
    createPlatform(350, 580, 300, 20, "sienna");

    //Level 2 - Opposite slope
    createPlatform(100, 480, 300, 20, "firebrick");
    createPlatform(400, 500, 300, 20, "firebrick");
      
    //Level 3 - Smaller middle section
    createPlatform(200, 80, 300, 20, "darkred");
    
    //Level 4 - Alternating sides
    createPlatform(50, 280, 250, 20, "tomato");
    createPlatform(400, 260, 250, 20, "tomato");
    
    //Level 5  - Near top
    createPlatform(150, 150, 300, 20, "orange");
    
    //top platform
    createPlatform(250,80,200,20, "gold");
    
    


    // TODO 3 - Create Collectables
    createCollectable("grace", 400, 260, 0.9, 0.7);
    createCollectable("max", 250, 200, 0.2, 0.7);
    createCollectable("kennedi", 150, 600, 0.3, 0.7);
    //moving collectable
    createCollectable("database", 200, 100, 0, 1, 100, 300, 2);




   
    // TODO 4 - Create Cannons
    createCannon("right", 500, 2000);
    createCannon("left", 0, 3000);
    createCannon("bottom", 300, 2000);



   
   
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }


  registerSetup(setup);
});
