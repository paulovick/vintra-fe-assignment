# Vintra FE techincal test

(Pau Torrents)

## Summary

First of all, let me say that this was quite a challenge in 4 hours. Nevertheless, I had a good
time to try to reach as much as I could.

Said that, I took some of the decisions being pragmatic, in means of time. Building a whole FE
with authentication in 4 hours made me have to take some decisions that I would have done in
a different way with a little bit more of time.

Even so, I am pretty content with the final result, because I tried to encapsulate and structure things
in a way that it is mantainable in the future, and that is easy to understant.

Regarding comments, the code should be autoexplanatory, this is one of the most important principles
for me in coding. Also, having more tests would also document the code a bit more.

Also, regarding UX, styles is something that normally takes a bit more if you are a little bit perfectionist.
So for this, I used Material UI library. Everything is pretty standard, I tried to organize things on
screen in the best way, and choose the correct components for each situation, to improve usability.

Finally, I added Redux to the application, but only for the auth part. Redux is good at sharing context
between some components, but adds a lot of overehead if it is used for everything.

The features that are fully implemented in the platform are:
- Login page
- Sensor list fetching and rendering
- Create a sensor

## Setting up the environment

The only needed thing is to install the dependencies.

I used yarn, so the command would be:

```yarn install```

If you prefer, you can also use npm:

```npm install```

## Running the unit tests

To run the unit tests, you need to run:

```yarn test```

If you prefer to run them non-interactively (running them without getting anything prompt):

```yarn test --watchAll=false```

(Same applies to npm)

Make sure that you ran through the *Setting the environment* part before

## Running the application

To run the application, simply run:

```yarn start```

Or:

```npm start```

Make sure that you ran through the *Setting the environment* part before

## Pending things

Here are some things that I would have liked to do, but I didn't have time in 4 hours:

- Error handling, now if something fails you would need to check the console. Of course, I would have
set up an alert system that would pop the error if some ocurred.
- More tests. At the end I just did tests for one component, to give an example on how I would do it
for the rest.
- Custom styling. As said before, I would dedicate a little bit more time styling the whole application,
in terms of colors, and refining components' look and feel.
- There are no translations (Every text is hardcoded). I would use a localisation library (i18n, for
example).
- There is no linter in the application, but I would add ESLint in a real project for sure. That helps
to keep the code clean and homogeneus all over the application. I would even add Prettier to it. It is
a little bit annoying because it prompts with a lot of picky recommendations, but also helps keeping a
good codebase, which translates to less complexity and better understanding of the code, and faster
improvements later on.
- You will realise that if you refresh the page, you will have to login again. Of course, I
didn't have time to implement all the logic that would be needed to avoid it. It is normally a pretty
complex logic (not complex to understand, but complex to take every scenario into account), so I decided
to keep it out of scope for it.
- And of course, finishing all the functionalities. I tried to pioritise the authentication, then the
visualization of the sensors and the creation. Next would have been the deletion, then the editing.
I also made a decision on not having a Sensor detail page, because there was enough little information
of each sensor to show it in a table, making it look pretty good and simple and still being able to see
all the information.

## Conclusions

Thanks for getting in contact with me at first place. Even if my journey happens to end here, I enjoyed
this challenge, and I am pretty happy with it :) 