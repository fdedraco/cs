var bpm  = 60


let app = new PIXI.Application({width: 256, height: 256});
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
let w = 5;
let h = window.innerHeight - 100;

let r = new PIXI.Graphics();
r.beginFill(0x66CCFF);
r.lineStyle(1, 0xFF3300, 1);
r.drawRect(-w/2, 0, w, h);
r.endFill();
r.x = (window.innerWidth) / 2;
r.y = 20;

let s = new PIXI.Graphics();
s.beginFill(0xFFFFFF);
s.lineStyle(1, 0xFFFFFF, 1);
s.drawRect(-w/4, 0, w/2, h/10);
s.endFill();
s.x = (window.innerWidth) / 2;
s.y = (window.innerHeight - 100) ;

let text = new PIXI.Text(bpm,{fontFamily : 'Arial', fontSize: 24, fill : 0xff1010, align : 'center'});

text.x = (window.innerWidth + 20) /2;
text.y = window.innerHeight - 100;



// time per beat (MS) = (60 * 1000) / bpm
// degree per ms => x/360 = dt/time
//
function up() {
  bpm += 1
  console.log("hello");
}
function down() {
  bpm += -1
  console.log("click");
}

let bpmup = new PIXI.Graphics()
bpmup.beginFill(0xFFFF00);
bpmup.lineStyle(1, 0xFFFF00, 1);
bpmup.drawRect(0, 0, 100, 100);
bpmup.endFill();
bpmup.buttonMode = true
bpmup.interactive = true
bpmup.tap = up
bpmup.click = up

let bpmdown = new PIXI.Graphics()
bpmdown.beginFill(0xFFFF00);
bpmdown.lineStyle(1, 0xFFFF00, 1);
bpmdown.drawRect(0, 0, 100, 100);
bpmdown.endFill();
bpmdown.buttonMode = true
bpmdown.interactive = bpmdown
bpmdown.tap = down
bpmdown.click = down

bpmup.x = 10
bpmup.y = 10
bpmdown.x = 10
bpmdown.y = 130
app.stage.addChild(bpmup);
app.stage.addChild(bpmdown);
app.stage.addChild(s);
app.stage.addChild(r);
app.stage.addChild(text);

let phase = 0

app.ticker.add(function(delta) {
diff = (60*1000)/bpm
phase = (phase + app.ticker.elapsedMS)
// r.rotation = Math.sin(Math.PI*(phase/diff))/maxdegree
r.rotation = Math.sin(Math.PI*(phase/diff))/2
text.text = "bpm : " + bpm
// console.log(phase+ "sin" + rectangle.rotation);
});
