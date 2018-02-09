---
layout: page
title: Morse Code Keyer
---

I'm learning morse code with a friend, and wanted a simple program to beep when 
I pressed a button. That was surprisingly hard to find. So I wrote one.

<div id="keyer"></div>
<script type="text/javascript" src="morse.js"></script>
<script type="text/javascript">
  document.addEventListener("DOMContentLoaded",makeWidget(document.getElementById("keyer")))
</script>
