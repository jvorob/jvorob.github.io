---
layout: page
title: Voronoi Diagrams
category: project
---

<canvas height="700px" width="700px" id="canvas"></canvas>

<div id="textbox" style="border: 1px solid black; font-size: 1.5rem;">
</div>

<br>

<p>
Try clicking inside the square. Each click adds a site and updates the Voronoi diagram
to reflect that. A Voronoi diagram partitions space according to which "site" is the
closest.

</p>
<p>
The data structure used is a doubly-connected edge list, which represents each edge
as to connected half-edges, which is what the arrows on the edges are. Each half-edge
is linked to a next and previous edge, as well as its twin half-edge. 
Half-edges always go clockwise around their edge, so they will wrap CCW around
the insides of polygons, and clockwise around the outermost square. 
Vertices and faces are also linked to the appropriate edges.
</p>

<p>
You can mouse over each half-edge, and its next, previous, and twin edges will be
highlighted. You can also look at the connections between vertices, faces, and edges.
The textbox below the diagram gives a representation of the currently selected element,
showing its id, coordinates (for faces and vertices), and connections to other elements.
</p>

[View on Github][github-link]

This is built from v0.1 of the project.

<script type="text/javascript" src="./bundle.js">
</script>
<script type="text/javascript">
init("voronoi")
</script>

[github-link]: https://github.com/jvorob/compgeo
