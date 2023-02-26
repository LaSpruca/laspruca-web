---
layout: ../../layouts/MarkdownLayout.astro
title: "The Big Send"
description: "A bulk SMS messenger"
gitRepo: "https://github.com/laspruca/thebigsend"
date: "2021-01-04"
---

This was my science fair entry for 2020 Central Northland Science Fair, a science fair for high school students in
New Zealand. I got the idea after an employee of the Northland DHB asked for an application of this type, the other
alternatives were either really expensive or posed security flaws. To solve this, I worked on making, originally, an
Android app, currently working on flutter re-write, that could send out many text messages quickly.

# How it works

The app allows the user to choose a .csv file from their phone to use as a list. This can include optional merge data,
and is saved locally on the phone, but can be deleted. A message then could be specified and sent to all the people in
this list.

# Current Status

The current working version is the original android version, the flutter version is still in development. The current
working version does not support merges, while the flutter one does not even load lists at the moment.
