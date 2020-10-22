var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["1deab677-06c0-424c-b440-db8899655e4a","f0ddcfec-a67c-47a0-9f9c-0e8cac12babd","bcb855d8-0c7c-44a3-9c3a-2c13efd5925a","e6aea8fc-b348-4740-ad04-fbb053a8b9b6","bfcd3b80-1eb2-45e2-be51-8c9f5039f197","d7ba88a9-cd53-42a5-a6ec-5eb9c1329aa1","4b338416-43ed-4c9f-a9f1-64750e212810","15670974-492d-42b4-8dc0-e51a3e7787f4"],"propsByKey":{"1deab677-06c0-424c-b440-db8899655e4a":{"name":"d37rnsq-df4660bd-cef0-4f05-b9e2-c0b23b2135f4.jpg_1","sourceUrl":null,"frameSize":{"x":702,"y":226},"frameCount":1,"looping":true,"frameDelay":12,"version":"LaW9bVxKwBgkrlk5Rk4fAPKwM2sUqDxp","loadedFromSource":true,"saved":true,"sourceSize":{"x":702,"y":226},"rootRelativePath":"assets/1deab677-06c0-424c-b440-db8899655e4a.png"},"f0ddcfec-a67c-47a0-9f9c-0e8cac12babd":{"name":"flying-bullet-fiery-trace-isolated-260nw-1173943900.jpg_1","sourceUrl":null,"frameSize":{"x":359,"y":280},"frameCount":1,"looping":true,"frameDelay":12,"version":"C6o4.x3XoXOftFVp8lpkT8qHgT0QcKO0","loadedFromSource":true,"saved":true,"sourceSize":{"x":359,"y":280},"rootRelativePath":"assets/f0ddcfec-a67c-47a0-9f9c-0e8cac12babd.png"},"bcb855d8-0c7c-44a3-9c3a-2c13efd5925a":{"name":"unnamed.jpg_1","sourceUrl":null,"frameSize":{"x":942,"y":350},"frameCount":1,"looping":true,"frameDelay":12,"version":"mmK8PpnN35Q0GPCZOcQtMdvLR_JhrwZb","loadedFromSource":true,"saved":true,"sourceSize":{"x":942,"y":350},"rootRelativePath":"assets/bcb855d8-0c7c-44a3-9c3a-2c13efd5925a.png"},"e6aea8fc-b348-4740-ad04-fbb053a8b9b6":{"name":"maxresdefault.jpg_1","sourceUrl":null,"frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":12,"version":"TMjvFCWJN3FgFvkQOId9FoSkSWhHYmXU","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/e6aea8fc-b348-4740-ad04-fbb053a8b9b6.png"},"bfcd3b80-1eb2-45e2-be51-8c9f5039f197":{"name":"maxresdefault.jpg_2","sourceUrl":null,"frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":12,"version":"0ab_nFgNBPOArJg6CchXArQsgRCcH_7v","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/bfcd3b80-1eb2-45e2-be51-8c9f5039f197.png"},"d7ba88a9-cd53-42a5-a6ec-5eb9c1329aa1":{"name":"hand-drawn-coronavirus-virus-cartoon-doodle-illustration-coronavirus-virus-cartoon-doodle-illustration-170845946.jpg_1","sourceUrl":null,"frameSize":{"x":800,"y":687},"frameCount":1,"looping":true,"frameDelay":12,"version":"XC5g9bsi4a42swBz7YDrorlVGPsQpDf_","loadedFromSource":true,"saved":true,"sourceSize":{"x":800,"y":687},"rootRelativePath":"assets/d7ba88a9-cd53-42a5-a6ec-5eb9c1329aa1.png"},"4b338416-43ed-4c9f-a9f1-64750e212810":{"name":"cave_1","sourceUrl":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/noi6SU.ST7VfqHGoH6ijJX1cNwdcFcZM/category_backgrounds/background_cave.png"},"15670974-492d-42b4-8dc0-e51a3e7787f4":{"name":"Screen Shot 2020-10-22 at 6.56.55 PM.png_1","sourceUrl":"assets/v3/animations/DTx0lexl76J2thF7B_MQP-V5laF75bor1dZDFysoMTA/15670974-492d-42b4-8dc0-e51a3e7787f4.png","frameSize":{"x":256,"y":254},"frameCount":1,"looping":true,"frameDelay":4,"version":"TlOBbxSuC3gpP8ZZA7lqJ.kmgWHquwV1","loadedFromSource":true,"saved":true,"sourceSize":{"x":256,"y":254},"rootRelativePath":"assets/v3/animations/DTx0lexl76J2thF7B_MQP-V5laF75bor1dZDFysoMTA/15670974-492d-42b4-8dc0-e51a3e7787f4.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var gamestate = "serve";
var count = 0;
var sprite = createSprite(200, 200);
sprite.setAnimation("cave_1");

var gun = createSprite(70, 200);
gun.setAnimation("d37rnsq-df4660bd-cef0-4f05-b9e2-c0b23b2135f4.jpg_1");
gun.scale = 0.21;

var box = createSprite(240, 220, 180, 70);
box.setAnimation("maxresdefault.jpg_1");
box.scale = 0.2;

var CoronaGroup = createGroup();
var BulletGroup = createGroup();

var india = createSprite(200, 200);
india.setAnimation("Screen Shot 2020-10-22 at 6.56.55 PM.png_1");
india.scale = 1.65;

function draw() {
  background("white");
  india.visible = false;
  gun.visible = false;
  if (mousePressedOver(box) && gamestate==="serve") {
      box.visible = false;
      var box1 = createSprite(240, 165, 180, 70);
      box1.setAnimation("maxresdefault.jpg_2");
      box1.scale = 0.2;
      box1.destroy();
      gamestate = "play";
    }
  if(gamestate==="play"){
        gun.y = World.mouseY;
        gun.visible = true;
        
        
    if (mouseWentDown("leftButton")) {
        var bullet = createSprite(130, 20);
        playSound("MARIO-JUMP-SOUND-EFFECT-(FREE-DOWNLOAD).mp3", false);
        bullet.setAnimation("flying-bullet-fiery-trace-isolated-260nw-1173943900.jpg_1");
        bullet.scale = 0.2;
        bullet.y = gun.y;
        bullet.velocityX = 30;
        BulletGroup.add(bullet);
            }
    
    
        if (CoronaGroup.isTouching(BulletGroup)) {
          CoronaGroup.destroyEach();
          BulletGroup.destroyEach();
          count = count + 2;
          playSound("assets/category_explosion/vibrant_game_arcade_game_negative_hit_6_pop_bubble.mp3", false);
        }
        
        if (count > 20) {
          gamestate = "end";
        }
        
    
        corona();
        
  } else if ((gamestate==="end")) {
    BulletGroup.destroyEach();
    CoronaGroup.destroyEach();
    gun.destroy();
    india.visible = true;
    playSound("assets/My-Movie-3.mp3");
  }
  drawSprites();
  textSize(25);
  textFont("Comic Sans ms");
  text("Score: "+count, 250, 40);
}
function corona() {
  if (World.frameCount%60===0) {
    var virus = createSprite(500, 200);
    virus.y = randomNumber(30, 360);
    virus.velocityX = -8;
    virus.setAnimation("hand-drawn-coronavirus-virus-cartoon-doodle-illustration-coronavirus-virus-cartoon-doodle-illustration-170845946.jpg_1");
    virus.scale = 0.1;
    CoronaGroup.add(virus);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
