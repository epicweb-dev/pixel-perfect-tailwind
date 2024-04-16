# [Pixel Perfect Tailwind](https://www.epicweb.dev/workshops)

Become a better UI designer with Tailwind — intentionally or accidentally

You’re a developer tasked with converting visual designs to HTML and CSS.

You’re a confident developer already familiar with Tailwind CSS, but you don’t
necessarily perceive yourself as having a “good eye for design”.

You want to improve the quality and fidelity of your design implementations —
getting as close as possible to “pixel perfect” conversions.

If you see yourself in this description… this workshop is definitely for you!

---

<div align="center">
  <a
    alt="Epic Web logo with the words Deployed Version"
    href="https://epicweb-dev-pixel-perfect-tailwind.fly.dev/"
  >
    <img
      width="300px"
      src="https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/254000390-447a3559-e7b9-4918-947a-1b326d239771.png"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

### Some experience with Tailwind CSS

This workshop is intended for developers who are already familiar with Tailwind
CSS.

If you’re not, great free resources to quickly up-skill are the official
[Tailwind docs](https://tailwindcss/com) and
[YouTube channel](https://youtube.com/tailwindlabs). The
[From Zero to Production](https://www.youtube.com/playlist?list=PL5f_mz_zU5eXWYDXHUDOLBE0scnuJofO0)
video series in particular is a great introduction to Tailwind, even if designed
for Tailwind v2.

#### Some experience with JavaScript

Basic familiarity with
[JavaScript](https://kentcdodds.com/blog/javascript-to-know-for-react) and
[React](https://egghead.io/courses/the-beginner-s-guide-to-react) is also
beneficial, since we’ll be using a React + Vite app to build our UI.

Again, not critical as the workshops stays firmly focused on CSS.

## System Requirements

- [git][git] v2.18 or greater
- [NodeJS][node] v18 or greater
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## A Figma account

We'll be implementing a design from a Figma file, and it's critical to have the
ability to "inspect" the design in Figma.

[Link to the the Figma file](https://www.figma.com/file/P7JAJ2NX6SOw72iTa8eyjl/Pixel-Perfect-Tailwind?type=design&node-id=0%3A1&mode=design&t=WVR4uy4alsTwrVTc-1)

Without an account, you can only "see" the design, but not get any measurements
and info when hovering over layers.

Create a free account, and make sure you can see the side panel and click on
things to inspect them.

## Setup

This is a pretty large project (it's actually many apps in one) so it can take
several minutes to get everything set up the first time. Please have a strong
network connection before running the setup and grab a snack.

> **Warning**: This repo is _very_ large. Make sure you have a good internet
> connection before you start the setup process. The instructions below use
> `--depth` to limit the amount you download, but if you have a slow connection,
> or you pay for bandwidth, you may want to find a place with a better
> connection.

Follow these steps to get this set up:

```sh nonumber
git clone --depth 1 https://github.com/epicweb-dev/pixel-perfect-tailwind.git
cd pixel-perfect-tailwind
npm run setup
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## Exercises

You'll find all the exercises in the `exercises` directory. The structure of the
workshop apps is described below, but most of the time you should be able to
simply run the app and navigate around the different exercises using the
application (there are even buttons to open the right exercise file right in
your editor).

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

## Launching your editor

The application has several buttons which will launch your editor to the right
file. There are a lot of files in this workshop so you'll be using this feature
a lot to get to the right place at the right time.

This should just work™️ (it looks at your currently running processes and
chooses the editor based on that). If it doesn't guess correctly, create a
`.env` file in the root of this project and add an environment variable called
`EPICSHOP_EDITOR` with the value being set to the path to your editor's
executable. For example, if you're using VS Code on Windows, you'd add this to
your `.env` file:

```
EPICSHOP_EDITOR='"C:\Program Files\Microsoft VS Code\bin\code.cmd"'
```

Make certain that if the path includes spaces that you wrap the path in quotes
as above (note the use of single quotes wrapping the double quotes!).

The value of `EPICSHOP_EDITOR` should be the command that you would run in your
terminal to open your editor from the command line. This means, the first thing
should be the path to the executable for your editor (or the command if you have
one in your `PATH`). So you may be able to get away with doing something as
simple as this:

```
EPICSHOP_EDITOR=code
```

## Exercises

- `exercises/*.*/README.md`: Exercise background information
- `exercises/*.*/*.problem.*/README.*.md`: Problem Instructions
- `exercises/*.*/*.problem.*/*.tsx`: Exercise with Emoji helpers 👈 You spend
  most of your time here.
- `exercises/*.*/*.solution.*/*.tsx`: Solved version

The purpose of the exercise is **not** for you to work through all the material.
It's intended to get your brain thinking about the right questions to ask me as
_I_ walk through the material.

## Helpful Emoji 🐨 🦺 💰 📝 🦉 📜 💣 💪 🏁 👨‍💼 🚨 🧝‍♀️

Each exercise has comments in it to help you get through the exercise. These fun
emoji characters are here to help you.

- **Kody the Koala** 🐨 will tell you when there's something specific you should
  do
- **Lily the Life Jacket** 🦺 will help you with any TypeScript-specific parts
  of the exercises
- **Marty the Money Bag** 💰 will give you specific tips (and sometimes code)
  along the way
- **Nancy the Notepad** 📝 will encourage you to take notes on what you're
  learning
- **Olivia the Owl** 🦉 will give you useful tidbits/best practice notes
- **Dominic the Document** 📜 will give you links to useful documentation
- **Barry the Bomb** 💣 will be hanging around anywhere you need to blow stuff
  up (delete code)
- **Matthew the Muscle** 💪 will indicate that you're working with an exercise
- **Chuck the Checkered Flag** 🏁 will indicate that you're working with a final
- **Peter the Product Manager** 👨‍💼 helps us know what our users want
- **Alfred the Alert** 🚨 will occasionally show up in the test failures with
  potential explanations for why the tests are failing
- **Kellie the Co-worker** 🧝‍♀️ your co-worker who sometimes does work ahead of
  your exercises

## Workshop Feedback

Each exercise has an Elaboration and Feedback link. Please fill that out after
the exercise and instruction.

At the end of the workshop, please go to this URL to give overall feedback.
Thank you!

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/pixel-perfect-tailwind/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/pixel-perfect-tailwind/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/pixel-perfect-tailwind/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/pixel-perfect-tailwind/issues/new
<!-- prettier-ignore-end -->
