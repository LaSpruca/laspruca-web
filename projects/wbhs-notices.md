---
title: WBHS Notices
description: Creating a way for notices to be displayed around the school where they would automatically update without any teacher input, i.e. printing them every morning
summary: A way to display notices on a kiosk around my school 
subLinks:
- href: https://github.com/laspruca/wbhs_notices
  text: GitHub Repo
date: 2021-01-27
---
# Why
A while ago I was asked by a teacher about making a way of displaying the school notices digital. The teacher who asked
me to make this had been printing out the notices daily and sticking them on the door. Creating this system would not
only make it easier for him, but reduce paper waste. This could also be implemented around the school, in places like
the student notices brad, and library.
# Development
My original attempt, was... somthing... My web design skills at the time were very poor, so the stlye did not turn our
so good, and I was not yet experienced enough to use API's properly. This eventaully lead to the project being abandoned,
until recently, I decided to pick it up again.
## The Problem
The biggest problem for me was that the KAMAR api, only seemed to accept HTTP requests from a specific user agent,
unfortunatly, I was unable to do this becauses the browser does not allow the User-Agent header to be set, leading to
the request failing. This ment that I had to do it server side, yay. My tool of choice for SSR is sapper, so that was
framework I decided to go with.
## Making it
As mentioned I use sapper to build the main application.