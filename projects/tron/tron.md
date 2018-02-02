---

layout: page
---


Test tron page

<canvas width="600px" height="400px" id="widgetCanvas"> </canvas>

<script src='/projects/tron/jquery-1.12.1.js' type="text/javascript"></script>
<script src='/projects/tron/vector.js' type="text/javascript"></script>
<script src='/projects/tron/tron.js' type="text/javascript"></script>

<script src='/projects/tron/script_fragment.js' type="text/javascript"></script>
<script type="text/javascript">

console.log("hello");

makeTronWidget(document.querySelector("canvas"),{
  steps_to_run: 120
})
</script>
