# Streams for the damned

There are many ways of thinking about how asynchronous programs fit together. Streams are one way of composing asynchronous programs. 

The best way to understand a stream is to compare it with a variable. Variables represent a single value at any given time. Over time, their value varies. Imagine each value a given variable takes throughout the course of a program. We can place these values on a timeline, with an x representing each time the value changed: 

--x--x-----xx---x-x-

If values of a variables are _events_ on a timeline (x's), then a stream is the timeline itself.  

Streams tie events together - they create a temporal relationship between events.

Streams are like a TV channel. TV channels are not the images that come over them; however, the _idea_ of a channel is a powerful tool for thinking about these images. 


## 1 keystream 

First, `npm install` [Kefir]() is a library that implements one notion of a stream. 

now let's make a stream of keypresses:

``

what makes this "a stream"?

well, we can map over it:

``

but that doesn't really get at the fact that this is a stream "through time"....

well, let's look at the scan function:

``

its like a reduce! but asynchronous!

## 2 left-right

"compose" 

compose 2 keypresses into a left-right direction

then into a slider position

## 3 cross-fader 

then, compose two track volumes from the slider position:

```
```

now, if we can move slider with our mouse as well,,,,HOW would we add this?

now, WHY is this easy to add?


finally, a stream of amplitudes from the microphone
