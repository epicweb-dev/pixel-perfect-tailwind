# [Pixel Perfect Figma to Tailwind](https://www.epicweb.dev/workshops)

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
    href="https://epicweb-dev-pixel-perfect-figma-to-tailwind.fly.dev/"
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
git clone --depth 1 https://github.com/epicweb-dev/pixel-perfect-figma-to-tailwind.git
cd pixel-perfect-figma-to-tailwind
npm run setup
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/pixel-perfect-figma-to-tailwind/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/pixel-perfect-figma-to-tailwind/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/pixel-perfect-figma-to-tailwind/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/pixel-perfect-figma-to-tailwind/issues/new
<!-- prettier-ignore-end -->
