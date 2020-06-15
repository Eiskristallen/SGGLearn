window.onload = function () {
  //获取一个400X400的DIV作为游戏的边界
  var border = document.getElementById("game_Border");
  //获取蛇
  var snake = document.getElementById("snakeHead");
  //蛇的整体
  var snakeAll = document.getElementById("snake");
  var snakeParts = document.getElementsByClassName("snake");

  //获取计分板
  var scoreBoard = document.getElementById("scoreBoard");
  //变量用来存储方向按键
  var directionKey;
  //记录键盘对应按键是否被按下
  var isPress = false;
  //获取食物 div
  var food = document.getElementById("food");
  var foodLeftPostion;
  var foodTopPostion;
  //设置一个变量记录是否需要新的食物
  var newFood = true;
  //记录分数
  var score = 0;
  //记录游戏速度
  var gameSpeed;
  //给文档节点加入keydownEventListener
  document.addEventListener(
    "keydown",
    function (ev) {
      if (!isPress) {
        randomFoodGanerator();
      }
      //获取键盘输入的方向键
      directionKey = ev.key;
      //记录键盘是否被按下
      isPress = true;
    },
    false
  );
  //定时器用来控制蛇移动的速度和避免keypressdown的额间隔
  var intervalID_fir = setInterval(function () {
    if (isPress) {
      //设置在定时器里面定时检查是否吃到食物
      getFoodChecker(
        Math.abs(parseInt(foodTopPostion) - parseInt(snake.style.top)),
        Math.abs(parseInt(foodLeftPostion) - parseInt(snake.style.left))
      );

      switch (directionKey) {
        case "ArrowUp":
          //判断是否撞墙,撞墙直接结束游戏并且重置蛇的位置
          if (snake.offsetTop > 0 && snake.offsetTop < 400) {
            snake.style.top = snake.offsetTop - 10 + "px";
          } else {
            terminateGame();
          }
          break;
        case "ArrowDown":
          if (snake.offsetTop < 390) {
            snake.style.top = snake.offsetTop + 10 + "px";
          } else {
            terminateGame();
          }

          break;

        case "ArrowRight":
          if (snake.offsetLeft >= 0 && snake.offsetLeft < 390) {
            snake.style.left = snake.offsetLeft + 10 + "px";
          } else {
            terminateGame();
          }
          break;

        case "ArrowLeft":
          if (snake.offsetLeft >= 10 && snake.offsetLeft < 390) {
            snake.style.left = snake.offsetLeft - 10 + "px";
          } else {
            terminateGame();
          }
      }
    }
  }, gameSpeedController(score));
  function partPlus(parentDiv, top, left) {
    var part = document.createElement("div");
    part.className = "snake";
    part.style.top = top + "px";
    part.style.left = left + "px";
    parentDiv.appendChild(part);
  }
  //用来生成一个随机位置的食物
  function randomFoodGanerator() {
    //随机生成两个坐标赋值给food的左和上属性,随机值取值范围小于border10px防止
    //食物贴墙边生成
    if (newFood) {
      food.style.left = Math.round(380 * Math.random() + 10) + "px";
      food.style.top = Math.round(380 * Math.random() + 10) + "px";
      food.style.display = "block";
      foodLeftPostion = food.style.left;
      foodTopPostion = food.style.top;
    }

    newFood = false;
  }
  function getFoodChecker(positionT, positionL) {
    if (positionT <= 10 && positionL <= 10) {
      alert("吃到了");
      newFood = true;
      score += 10;
      //每次吃到食物更新分数版的分数
      scoreBoard.innerHTML = `Score:${score}`;
      //如果吃到了,就生成一个新的位置随机的食物
      randomFoodGanerator();
      //吃食物生成新的身体,未完成
      // partPlus(snakeAll, parseInt(snake.style.top), parseInt(snake.style.left));
    }
  }
  function gameSpeedController(score) {
    gameSpeed = 100;
    switch (score) {
      case "0":
        gameSpeed = 100;
        break;
      case "100":
        gameSpeed = 150;
        break;
      case "150":
        gameSpeed = 180;
        break;
      case "200":
        gameSpeed = 200;
        break;
      case "300":
        gameSpeed = 250;
        break;
    }
    return gameSpeed;
  }
  function terminateGame() {
    isPress = false;
    alert("Game Over,your point is " + score);
    snake.style.left = 0;
    snake.style.top = 0;
    food.style.display = "none";
    newFood = true;
    score = 0;
    //游戏结束时刷新分数
    scoreBoard.innerHTML = `Score:${score}`;
  }
};
