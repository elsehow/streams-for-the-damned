# Streams for the damned

There are many ways of thinking about how asynchronous programs fit together. Streams are one way of composing asynchronous programs. 

The best way to understand a stream is to compare it with a variable. Variables represent a single value at any given time. Over time, their value varies. Imagine each value a given variable takes throughout the course of a program. We can place these values on a timeline, with an x representing each time the value changed: 

--x--x-----xx---x-x-

If values of a variables are _events_ on a timeline (x's), then a stream is the timeline itself.  

Streams tie events together - they create a temporal relationship between events.

Streams are like a TV channel. TV channels are not the images that come over them; however, the _idea_ of a channel is a powerful tool for thinking about these images. 


## running

in this directory, ``npm install``

for examples 1-3, ``browserify [file] -o bundle.js`` and open index.html in your browser.

for example 4, `cd 4\ spire` and ``browserify app/index.js -o bundle.js``
