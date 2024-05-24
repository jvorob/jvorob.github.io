---
layout: page
title: About me
permalink: /about/
---

<h4>
PhD Student, Computer Science, UC San Diego
</h4>

jvorobyeva@ucsd.edu \| [dblp](https://dblp.org/pid/296/1722.html)

I'm currently a first-year PhD student at UC San Diego, co-advised by 
[Dean Tullsen](https://cseweb.ucsd.edu/~tullsen/) 
and 
[Pat Pannuto](https://patpannuto.com/).
My areas of research include microarchitectural security, embedded systems, and low-power sensors.


Before this I've worked at [Grist](https://www.getgrist.com/), an open-source spreadsheet company.
I spent a couple years doing research at Sandia National Labs,
where I worked on write-optimized data structures for high-throughput data indexing as 
well as on virtual memory systems for a cpu architecture simulator.
I've also spent some time teaching computer science at Stuyvesant High School in NYC.


My CS interests cover a lot of disparate areas: I've done work involving computer architecture, high-performance data structures, scripting and automation, web development, programming languages, and graphical/geometric computation. A particular hobby of mine is tinkering with esolangs, embedded systems, and retrocomputing.


<h3> Publications </h3>
{% assign publications = site.publications | sort: "year" | reverse  %}
{% for pub in publications %}
<div class="pubitem">
  <div class = "pubtitle"><a href="/papers/{{ pub.slug }}.pdf">{{ pub.title }}</a></div>
  <div class = "pubauthors">{{ pub.authors }}</div>
  <div class = "pubinfo">{{ pub.shortpub }}, {{ pub.year }}</div>
  <div class = "publinks">
    <a href="/papers/{{ pub.slug }}.pdf">[pdf]</a>
    <a href="{{ pub.doi }}">[doi]</a>
  </div>
</div>
{% endfor %}

<!--
I'm currently working for the HPC department at Stony Brook, performing Linux system administration and general problem-fixing.
This past summer, I worked at Grist Labs, a startup in NYC working on making spreadsheets more organized and more capable. Before that, I interned at a few other places. mostly doing internal scripting/automation.

I study computer science and electrical engineering at Stony Brook University. When not at school, I live in NYC.
-->
