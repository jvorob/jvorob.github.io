---
layout: default
---

#Page for various debug activities

{% comment %}

Number of static-files?
{{ site.static_files | size }} 
{{ site.static_files | jsonify }} 
 
#all files 

{% for file in site.static_files %}
 {{ file.path }}   
{% endfor %}

{% endcomment %}

