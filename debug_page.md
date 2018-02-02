---
layout: default
---

#Page for various debug activities


Number of static-files?
{{ site.static_files | size }} 
{{ site.static_files | jsonify }} 
 
#all files 

{% for file in site.static_files %}
 {{ file.path }}   
{% endfor %}


#just succs

{% assign succs = site.static_files | where_exp:"item","item.path contains 'succulents'" %}

{% for file in succs %}
  
 {{ file.path }}   
  ![picture of a succulent]({{file.path}})
{% endfor %}
