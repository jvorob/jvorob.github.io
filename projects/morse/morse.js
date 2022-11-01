
console.log("Morse keyer loaded")


let audioCtx = new (window.AudioContext || window.webkitAudioContext)();


function makeBeeper() {
  
  console.log(audioCtx);

  let osc = audioCtx.createOscillator();
  let gainNode = audioCtx.createGain();

  osc.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  //Morse frequency is 600-1000 Hz
  osc.frequency.setValueAtTime(800, audioCtx.currentTime)
  osc.start()
  
  //It doesn't like 0 gain
  gainNode.gain.setValueAtTime(0.0001, audioCtx.currentTime);


  let setSlowly = (v) => { 
    //Time constant of exponential decay, increase to soften beeps
    gainNode.gain.setTargetAtTime(v, audioCtx.currentTime, 0.01);

    ///////gainNode.gain.exponentialRampToValueAtTime(v, audioCtx.currentTime + 0.1);
  }

  let play = () => {setSlowly(1)}
  let mute = () => {setSlowly(0.0001)}

  return {
    play: play,
    mute: mute
  }
}


/*
 * @param target - Dom node to listen for keyEvents on
 * @param keyAcceptor - fn, takes keyEvent.code, returns true to beep or false to ignore
 *
 */
function makeKeyer(target, keyAcceptor) {
  let beeper = makeBeeper();
  let enabled = true;


  function setEnabled(en) {
    if(!en) 
      { beeper.mute(); }
    enabled = en;
  }

  function handleKey(isDown, e) {
    try {
      if(enabled && keyAcceptor(e.code)) {
        if(isDown)
          beeper.play();
        else
          beeper.mute();
      }
    } catch(e) {console.error("crash in handleKey", e) }
  }

  try {
    target.addEventListener("keydown", (e) => handleKey(true, e));
    target.addEventListener("keyup", (e) => handleKey(false, e));
  } catch(e) {
    console.error("failed to attach events", e);
    return null;
  }

  return {
    setEnabled: setEnabled
  }
}


function makeWidget(target) {
  let widget = document.createElement("input");
  try {

    //widget.style.width = "100px";
    //widget.style.height = "100px";
    widget.readOnly = true

    let keyer = makeKeyer(widget, () => true); //make widget a keyer, accepts everything
    keyer.setEnabled(false);


    widget.style["background-color"] = "#FFF";
    widget.style["caret-color"] = "transparent";
    widget.style["font-size"] = "xx-large";

    function setStatus(isFocused) {
      widget.value = isFocused ?  "Press any key" : "Click me" ;
      widget.style["background-color"] = isFocused ? "#AFA" : "#DDD";
    }

    setStatus(false);

    function focusChange(isFocused, e) {
      keyer.setEnabled(isFocused);
      if(isFocused) {audioCtx.resume(); }
      setStatus(isFocused);
    }

    widget.addEventListener("blur", (e) => focusChange(false, e));
    widget.addEventListener("focus", (e) => focusChange(true, e));




    console.log("appending widget");
    console.log(target)
    target.appendChild(widget);

  } catch(e) {
    console.error("Failed to make widget", e)
    return null;
  }
}


//let keyer = makeKeyer(document, (code) => ["KeyW", "Space"].includes(code));
//makeWidget(targetElement);
