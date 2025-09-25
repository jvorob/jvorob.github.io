---
title: Some Projects
permalink: /projects
---

### [SUBLEQ Toolchain](https://github.com/jvorob/subleq-bootstrap)

This is a project to implement a software toolchain from scratch for a toy CPU architecture.
I start by writing raw machine code in hex, use that to write a series of increasingly-usable assemblers,
and finally implement a high-level language (FORTH) with REPL, debugger, stack introspection, and disassembler.

### [Voronoi](/projects/voronoi)

This is an implementation of a doubly-connected edge-list data structure. It constructs a voronoi diagram on points you specify,
and lets you inspect the data structure used to represent the resulting planar graph.

### [Energy-Scavenging Sensor](https://github.com/jvorob/cpm-firmware)

This is an energy-scavenging wireless sensor I designed and built for an embedded-systems design course,
intended to monitor and power itself from the corrosion of anodes in
[cathodic protection systems](https://en.wikipedia.org/wiki/Cathodic_protection).

<!--
I accomplished this by integrating an energy-harvesting IC with the low-power apollo3 microcontroller, and  power-gating ICs.

I also designed in isolated ground planes to measure the current draw of individual components, and
and [project writeup](https://raw.githubusercontent.com/jvorob/cpm-firmware/main/project_writeup.pdf)
~~~ WIP: I used ambi+this, power gating, ground planes, detailed current measuremtns. it ultimately wasn't deployable for other reasons, but the electronics/firmware worked gr9 ~~~

-->

### [Tron Automaton](/projects/tron)

This is a block cellular automaton which makes neat, digital-looking patterns


### [Morse Keyer](/projects/morse)

This is morse code keyer. It just beeps when you press a key. (this was surprisingly difficult to find on the internet)

{% comment %}
<br><br><br>
(alas I have not yet written up any others)
{% endcomment %}
