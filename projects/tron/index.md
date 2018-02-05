---
layout: page
title: Tron Automaton
category: project
---




This project is a cellular automaton that I implemented a while back. It's a special type
of automation called a [block automaton][block-automaton-wiki]; block automata function like normal cellular automata (Conway's game of life and co.), but the cell neighborhoods used for state transitions are determined by partitioning the grid into blocks at each timestep.

The 'tron' rule in particular yields interesting geometric shapes from very simple patterns. 
I've configured it to randomly pick one of several seeds, then run until 
the pattern is complex enough. 
To see these patterns develop from the start, 
[click here][sim-start-link]

[View on Github][github-link]

<canvas width="600px" height="400px" id="widgetCanvas"> </canvas>

<script src='/projects/tron/jquery-1.12.1.js' type="text/javascript"></script>
<script src='/projects/tron/vector.js' type="text/javascript"></script>
<script src='/projects/tron/tron.js' type="text/javascript"></script>

<script src='/projects/tron/script_fragment.js' type="text/javascript"></script>
<script type="text/javascript">


let cfg = {
 steps_to_run: 100
}

let params = window.location.search
let steps_match = params.match(/steps_to_run=([0-9]+)/)
if(steps_match != null) {
  cfg.steps_to_run = parseInt(steps_match[1])
}



makeTronWidget(document.querySelector("canvas"),cfg)
</script>




[block-automaton-wiki]: https://en.wikipedia.org/wiki/Block_cellular_automaton
[sim-start-link]: {{page.url | append: '?steps_to_run=1'}}
[github-link]: https://github.com/jvorob/tron
