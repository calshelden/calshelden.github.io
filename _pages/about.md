---
permalink: /
title: "" # putting title will make tab name go "title - name"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---




About Me
--------
I am a PhD candidate and NSF GRFP Fellow in the Electrical and Computer Engineering Department at the University of California, Davis. Advised by [Jeremy N. Munday](https://mundaylab.com/), I predominantly use atomic force microscopy and computational techniques to study the quantum Casimir force acting between microscopic surfaces. I previously received my B.S. in Physics from the California State University, Long Beach in 2019. Advised by [Hadi Tavassol](https://home.csulb.edu/~htavasso/index.html), I used electrochemical and optical techniques to study the chemomechanical effects of the hydrogen evolution reaction and alloying on metal surfaces.


<h2>News</h2>
<div id='news'>
  {% for item in site.data.news.main %}
  <p><strong><font class="new">{{ item.date | markdownify | remove: '<p>' | remove: '</p>'}} </font></strong>{{ item.info | markdownify | remove: '<p>' | remove: '</p>'}}</p>
  {% endfor %}
  <a href="#" onclick="hideBlock('news'); showBlock('allnews'); return false;" class="btn btn--inverse">More</a>
</div>

<div id='allnews' style="display: none;">
  <!-- First show main news -->
  {% for item in site.data.news.main %}
    <p><strong><font class="new">{{ item.date | markdownify | remove: '<p>' | remove: '</p>'}} </font></strong>{{ item.info | markdownify | remove: '<p>' | remove: '</p>'}}</p>
  {% endfor %}

  <!-- Then show all news -->
  {% for item in site.data.news.all %}
    <p><strong><font class="new">{{ item.date | markdownify | remove: '<p>' | remove: '</p>'}} </font></strong>{{ item.info | markdownify | remove: '<p>' | remove: '</p>'}}</p>
  {% endfor %}

  <a href="#" onclick="hideBlock('allnews'); showBlock('news'); return false;" class="btn btn--inverse">Less</a>
</div>