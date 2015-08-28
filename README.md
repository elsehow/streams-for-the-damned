# Streams for the damned

There are many ways of thinking about how asynchronous programs fit together. Streams are one way of composing asynchronous programs. 

Varibales in a program change over time. Imagine each value a given variable takes throughout the course of a program. We can place these values on a timeline, with an x representing each time the value changed: 

--x--x-----xx---x-x-

If values of a variables are _events_ on a timeline (x's), then a stream is the timeline itself.  

Streams tie events together - they create a temporal relationship between events. We can turn events into actions by transforming the events as they travel through the stream (e.g., from a click into a POST request; from a POST request into an element on the HTML page).

If you think about it, the state of a software interface is a function of the events (users' mashing buttons, data coming in from server) that happen over time. By describing **streams** of these events, where we transform these events into outcomes ("side-effects"), we can write interfaces in a more declarative style, where everything our interface _does_ has a clear, causal relationship to something that _happened_ during the application lifecycle.

(Still confused? Ok. Streams are like a TV channel. In some sense, TV channels _are_ just the images that come over them; however, the _idea_ of a channel can be a useful tool for reasoning about the images).

## This tutorial

First, cd into this directory and `npm install`. (You'll need node and npm. you'll also need to `npm install -g browserify`).

Go through each file in numberical order, 1, 2, 3, 4. For each file, `browserify [file] -o bundle.js` and open index.html in your browser.

For example 4, `cd 4\ spire` and ``browserify app/index.js -o bundle.js``
