---
title: LaSpruca Web
description: My Website
summary: A portfolio website for my self
subLinks:
    - href: https://github.com/laspruca/laspruca-web
      text: GitHub Repo
    - href: https://laspruca.nz
      text: Website 
date: 2020-10-03 
---
# Framework
At the moment, I am currently using sapper, with svelte. Originally I had been using React and Create React App
to make the website. I had quite enjoyed using React and Create React App, until I wanted to have a page for
each project. While I could have created a different page for each project, I didn't want to do this, instead
I wanted to use something simple like markdown files. To achieve this, the easiest option would be to use SSR,
I could have used a React framework, like Next.js or Gatsby, but I wanted to try something new, and I liked the
look of svelte, so I landed on Sapper. This has increased the performance of my website, and allowed me to do
fun things with Server Side Rendering, like custom meta tags for each page etc, and achieved my original goal 
of allowing me to use markdown files as a medium for writing project files.

# Stylesheets
I have decided to go with SCSS as my stylesheet. Originally I went with vinillia css as my stylesheet, but after
talking to a friend of mine, I decided to go with SCSS because of features like variables and nested selectors.
