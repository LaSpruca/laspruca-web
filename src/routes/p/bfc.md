---
title: "BFC"
description: "A Brainf**k compiler written in rust"
website: "https://crates.io/crates/bf-compile"
gitRepo: "https://github.com/laspruca/bfc"
date: "2021-05-21"
---
This was a small project that I decided to do for the hell of it. I have made many BF interperters, but never a BF
compiler, so I thought why not.
Originally I targeted C intermediate language, but after many bugs, I switch to C++ then finally Rust. The application
currently relies on `rustc`
to be installed to compile the intermediate.

## How it works

The application works by taking series of files as input. It then goes through each file and compiles it down to rust.
First it reduces the input source code
into an array of tokens and the number of times the appear immediately following each other. The next step is to convert
this syntax thing into rust source code.
The way that the operators is pretty self explanatory, although the inc. pointer and dec. point are a bit funky, using
some math to figure out what to set pointer
the pointer to after an overflow. After this, the resulting source code from each of the files in combined into one long
string and dumped into an intermediate rust
source file, where it is then compiled to a native binary.
