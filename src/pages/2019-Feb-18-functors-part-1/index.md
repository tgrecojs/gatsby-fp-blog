---
path: "/functors-part-1"
date: "2019-09-18"
title: "Functors Round 1: Functor Law Abiding Citizen"
tags: ["functors", "functional programming", "javascript"]
excerpt: "It's only fitting that the inaugural post on functor.xyz covers the topics of functors! Anything else would be just criminal. That being said, this post will help readers demystify what a functor really is by learning about the functor laws. (spoiler: you've already been using them). To cap this off we will learn how to create our own home-made functor."
---

# Functors Rd. 1 - A gentle intro.
Greetings! It's Thomas Greco here - sending a friendly hello to any and all checking out this post. Rather than rambling on about nonsense though let's break into it! 

The topic for today's post is **functors**. The term functor, like the majority of terms used in functional programming, sounds overly confusing and can even a bit intimidating. Before we if you're new to functional programming feel like it's too complex,

5 minutes from now you'll certainly agree.
It's important to keep in mind tha

Now that i've done my warm up let's dive in by taking a look at what it means for something to be considered **functor data type**.

## "You can't put me in a box"

The essence of a **functor data type** is that it is `mappable`. This simply means that it provides a container (or box) that we can `map` through in order to read or transform values. Hmmm.... A container that we can map through. 🤔 Sounds kinda familiar, right? 

```js
const myFunctor = [1,2,3,4,5]
```

Above we see the `myFunctor` variable being set to an array, or a container, with values inside of it. You know what this means? It means you've been mastering functors all along 😎. 

### Prove it
Hopefully by now you're beginning to cozy up to the complex terminology used in FP. Bef

The goal for this article, and every article in this series, is essentially the same: to remove the confusion that stems from FPs terminology. 


in this series will be to demystify these confusing words used  that comes with using
as well my series of articles is to  
these posts we will
JavaScript's `Array []` type is a functor.

```				map(a→b)
[Box of `a`s] ------> [Box of `b`s]
```

##### Testing `map`

Below we see the the functor `a` which is a single element array `[10]`. Our second functor `b` is then created using JavaScript's built-in `Array.prototype.map` method.

```javascript
const doubleIt = x => x * 2;

const functor = [10];
const x = functor.map(doubleIt);
const y = functor.map(x => x * 2);
// testing equality
console.log(x.toString() === y.toString()); // true
```

It's really that simple. If you're a skeptic like me, then you might be having a hard time buying this. Just sit tight though it will all make sense soon.

### Category Theory

Functional Programming is deeply rooted in category theory - here are its basics:

1. **Category**: A collection of objects and arrows between objects.
   - Objects can be anything. \* ex. `[{name: 'Tom', age: 26}]`, `[10,30]`, `['$']`
2. **morphisms**
   - Arrays
   - Example above | ex. `A −f→ B`

#### Functor Laws:

There two functor laws are:

1. **Identity**:
   - id function must always `map` a functor back to the **same value**,
   - `const id = x => x;`
   - `[1,2,3].map(id); // returns [1,2,3]`
2. **Composition**:
   - Functors of the same type can be computed in any order and it will not effect their value.
   - _Given `g: x => y, f: y => z` where `x,y,z` are collection objects..._ **there must be a composition that directly `X → Z`**.

> This composition law was the same that I was forced to learn in algebra class. It' **associative** meaning that the order in which it is computer does not matter. Realizing this was a big "a-ha" moment when studying functional programming.

> **Ex.:** (f ◦ g) ◦ h = f ◦ g ◦ h = f ◦ (g ◦ h)

Now that we know the functor laws lets apply them to another array. Below we have the following:

1. `f` takes an `x` and divides by `.5`
2. `g` takes an `x` and multiplies by `16`
3. `data` is a functor containing 4 values.

```js
const f = x => x / 0.5;
const g = x => x * 16;
const data = [25];

// identity law
console.log(data.toString() === data.map(x => x).toString()); // 25 === 25

// composition law
console.log(
  functor
    .map(g)
    .map(f)
    .toString() === functor.map(x => f(g(x))).toString()
);
```

##### Who f\*ckin cares dude

> Why the FUCK do I care about these stupid fucking functor laws man.... Shit is sooo FUCKING stupid.
>
> - Majority of people reading this posts

Maybe you're not impressed with our `data` array and the one value that it includes. functor's satisfy the `Identity` and `composition` law. Well, that's too bad but don't give up just yet.

#### Creating the `Box` functor

We've seen functors in action and we've learned the rules that they must abide by. Now let's create one for ourselves.

The `Box` functor (often referred to as the `Identity` functor) will take a value as it's input. From there, it will return an object `{}` with a `map` method inside of it. When this `map` executes, it will apply it's input `fn` to the value inside and return it's result wrapped inside of. What's that you said? This `map` implementation sure sounds awfully familiar to JavaScript's``Array.prototype.map`. Well, friend, _that's because it is_ !

Taking a look at the code snippet below we see how our `Box` function's `map` method is implemented. Cool, right?

```javascript
const Box = value => ({
  map: fn => Identity(fn(value))
});

const OurFirstFunctor = Box(20);
```

![boring]('../../../imgs/boring.gif)

Alright, I get it. Let's extend this a little bit by adding some more methods, `fold` and `inspectValue`.

```javascript
const Box = value => ({
  map: f => Box(f(value)),
  fold: (f, g) => f(value),
  inspectValue: () => `Box${value}`
});
```

```js
// identity law
const id = x => x;

const result = Box(20);

const x1 = result;
const x2 = result.map(id);

x2.map(trace); // value:: 1
x1.map(trace); // value:: 1

// composition law f(x) * g(x) = f(g(x))
```

### Wrap up

And thus conclude this intro post on functors. Hopefully you've learned something that you didn't prior to reading this.

Need Improvemen? Give me a call!
