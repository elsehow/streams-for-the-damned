# Streams for the damned

`stream conceptual`

## 1 keystream 

first, `npm install` [kefir]()

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
