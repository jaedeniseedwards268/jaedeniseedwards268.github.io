<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Simple Ladder Movement</title>
  <style>
    canvas {
      background: #222;
      display: block;
      margin: 0 auto;
      border: 3px solid white;
    }
  </style>
</head>
<body>
  <canvas id="gameCanvas" width="800" height="750"></canvas>
  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    // --- Player Object ---
    const player = {
      x: 100,
      y: 660,
      width: 30,
      height: 40,
      color: "cyan",
      vy: 0,
      gravity: 0.5,
      speed: 3,
      climbing: false
    };

    // --- Ladder List (use x, y, width, height same as platforms) ---
    const ladders = [
      { x: 120, y: 620, width: 20, height: 100 },
      { x: 620, y: 600, width: 20, height: 100 },
      { x: 180, y: 520, width: 20, height: 80 },
      { x: 500, y: 520, width: 20, height: 80 }
    ];

    // --- Input Tracking ---
    const keys = {};
    document.addEventListener("keydown", e => keys[e.key] = true);
    document.addEventListener("keyup", e => keys[e.key] = false);

    function drawPlayer() {
      ctx.fillStyle = player.color;
      ctx.fillRect(player.x, player.y, player.width, player.height);
    }

    function drawLadders() {
      ctx.fillStyle = "gray";
      for (let l of ladders) {
        ctx.fillRect(l.x, l.y, l.width, l.height);
      }
    }

    function isTouchingLadder() {
      return ladders.some(l =>
        player.x + player.width > l.x &&
        player.x < l.x + l.width &&
        player.y + player.height > l.y &&
        player.y < l.y + l.height
      );
    }

    function update() {
      // Check ladder collision
      if (isTouchingLadder() && (keys["ArrowUp"] || keys["ArrowDown"])) {
        player.climbing = true;
        player.vy = 0; // stop gravity
      } else if (!isTouchingLadder()) {
        player.climbing = false;
      }

      // Apply movement
      if (player.climbing) {
        if (keys["ArrowUp"]) player.y -= player.speed;
        if (keys["ArrowDown"]) player.y += player.speed;
      } else {
        // normal gravity
        player.vy += player.gravity;
        player.y += player.vy;
        if (player.y + player.height > canvas.height - 40) { // ground stop
          player.y = canvas.height - 40 - player.height;
          player.vy = 0;
        }
      }

      // Horizontal movement
      if (keys["ArrowLeft"]) player.x -= player.speed;
      if (keys["ArrowRight"]) player.x += player.speed;
    }

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawLadders();
      drawPlayer();
      update();
      requestAnimationFrame(loop);
    }

    loop();
  </script>
</body>
</html>
