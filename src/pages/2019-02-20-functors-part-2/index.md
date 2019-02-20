---
path: "/functors-rd-2"
date: "2019-09-20"
title: "Functors Round 2: "
tags: ["functors", "functional programming", "ADTs"]
excerpt: "In part 2 of the functor series we dive into ."
---

### Functors round 2 - 

In the first post we learned about the characteristics of **functor data type** and learned how to create our own version of the `Identity` functor. This post will pick up where we left off, so if you're brand new to the topic then I recommend taking a few minutes to check that out. Don't worry - the functor xPress never leaves the station until all passengers are fully informed. We'll be here when you get back, scout's honor.

##### Just when I thought I was out...

 something is a functor it's described as `mappable`. (ex. Arrays `[]`). In the FP world we really appreciate this characteristic. Holding our data held inside of a functor gives us the ability to transform it's value without having to leave the comforts of the container that it's held in.

#### Now entering ..... `Either`

The `Either` functor is similar to the `Box` functor from part one. After all, any given data type must abide by the **functor laws** for it to be deemed an actual functor but we're smart so we already knew this. As you dive deeper into functional programming, you'll find that there are a number of different types of functors. Either is a **bifunctor**. As the prefix `bi-` suggests, the `Either` functor actually encapsulates the functionality of two functors, `Left` and `Right`. We can think of `Either` as the parent of `Left` and `Right`.

**30 second quiz**: What's the difference between `Right` and `Left` in the code block below?

```javascript
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right:: ${Right}`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => g(x),
  inspect: () => `Right:: ${Right}`
});

const Either = { Right, Left };
```

**Answer**: If you said that `Left`'s `map` functor is simply for show and won't actually apply a functor to the it's bound value. Remember what we learned earlier? Yeah, `Left` is a shit-head, so this is pretty typical.

`Right` on the other hand

const Either =

It exists to do nothing but while `Right`

it's similar to **all** functors for that matter because i

```javascript
const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => f(x),
  inspect: () => `Right:: ${x}`
});

const Left = x => ({
  map: f => Left(f),
  fold: (f, g) => f(x),
  inspect: () => `Left:: ${x}`
});

const findColors = name => {
  const colors = { red: "#ff4444", blue: "#3b5998", yellow: "#fff68f" }[name];
  return colors ? Right(colors) : Left(null);
};

const result = findColors("red")
  .map(color => color.slice(1))
  .fold(e => "no color", color => color.toUpperCase());

trace("findColors: green ==>")(findColors("green"));

trace("findColors ==> red")(findColors("red"));
```
