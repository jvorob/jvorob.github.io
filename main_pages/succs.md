---
layout: page
title: Succulents!
permalink: /succ/
---


Succulents are the cutest of plants. 
They are chubby and smooth, but without the sharpness
of cactuses.

Here's some pictures of succulents that I found on the internet.


{% for image in site.static_files %}
{% if image.path contains 'images/succulents' %}
![Image of a succulent]({{image.path}})
{% endif %}
{% endfor %}
