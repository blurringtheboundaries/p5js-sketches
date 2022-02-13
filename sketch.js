// Instrument sketch by Charles Matthews for an open source tutorial Define Your Journey / NaAC instruments 2021
// This was a quick test to see what could be done with P5 without Tone.js for tutorial purposes, and lacks some basic accessibility.
// Click on the bars to play.

let sound = new p5.MonoSynth();
let notes = ['C4', 'D4', 'Eb4', 'G4', 'A5', 'C5']
let c, playing = false, velocity = 0;

function setup() {
  c = createCanvas(400, 200);
  background(220);
}

function draw() {
  for (let division in notes){
    stroke(255);
    fill(division*velocity*255/notes.length, 0, 255 * velocity)
    let box={
      left:division*width/notes.length, 
      right:(division+1)*width/notes.length
    }
    rect(
      box.left, 
      0, 
      box.right, 
      height
    )
    if (mouseIsPressed && mouseX>=box.left && mouseX <= box.right){
      if (!playing[0] || playing[1]!=division) {
        velocity=1-mouseY/height;
        play(notes[division], velocity)
        playing=[true,division, velocity];
      }
      
    }
    
  }
  if (!mouseIsPressed){
    if (playing[0]){
      play(0);
      playing[0]=false;
     }
  }
 
}
  
function play(note, velocity){
  userStartAudio();
  velocity > 0 ? sound.triggerAttack(note, velocity) : sound.triggerRelease();
}
