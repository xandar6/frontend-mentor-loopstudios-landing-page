# Frontend Mentor - Loopstudios landing page solution

This is my solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). The goal was to build a responsive landing page that matches the provided mobile and desktop designs while keeping the markup semantic and the interactions accessible.

![Design preview for the Loopstudios landing page coding challenge](preview.jpg)

## Table of contents

- [Overview](#overview)
- [Links](#links)
- [Built with](#built-with)
- [What I learned](#what-i-learned)
- [Continued development](#continued-development)
- [Useful resources](#useful-resources)
- [AI collaboration](#ai-collaboration)
- [Author](#author)

## Overview

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover and focus states for interactive elements
- Open and close the mobile navigation menu
- Navigate the mobile menu with a keyboard

## Links

- Repository: [frontend-mentor-loopstudios-landing-page](https://github.com/xandar6/frontend-mentor-loopstudios-landing-page)
- Live site: Not deployed yet
- Challenge: [Frontend Mentor challenge page](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw)

## Built with

- Semantic HTML5
- Sass
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first responsive workflow
- Responsive images with the `picture` element
- Vanilla JavaScript for the mobile navigation
- BEM-style class naming

## What I learned

This project helped me practice building a page from a static design and thinking through the structure before styling. The layout uses a mix of Grid and Flexbox: Grid works well for the overlapping intro section and gallery, while Flexbox is useful for navigation and footer alignment.

I also learned more about accessible mobile navigation. The JavaScript does more than show and hide the menu visually: it updates ARIA state, prevents background scrolling while the menu is open, closes on `Escape`, and keeps keyboard focus inside the menu.

```js
function openMobileMenu() {
  mobileMenu.classList.add("is-open");
  mobileMenu.setAttribute("aria-hidden", "false");
  btnOpenMobileMenu.setAttribute("aria-expanded", "true");
  document.body.classList.add("has-open-menu");
}
```

Another useful part was using the `picture` element to serve different image crops for mobile and desktop layouts.

```html
<picture>
  <source
    media="(min-width: 43.750rem)"
    srcset="images/desktop/image-interactive.jpg"
  />
  <img
    src="images/mobile/image-interactive.jpg"
    alt="Man wearing a virtual reality headset"
  />
</picture>
```

## Continued development

Areas I want to keep improving in future projects:

- Planning responsive spacing more systematically before writing CSS
- Testing keyboard navigation earlier in the build
- Writing cleaner Sass partials as projects grow
- Refining accessible names, focus states, and menu behavior

## Useful resources

- [MDN - Responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) - Helped reinforce when to use `picture` and `srcset`.
- [MDN - ARIA: aria-expanded](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) - Useful for understanding how to communicate menu state.
- [CSS-Tricks - A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) - A helpful Grid reference while working through the layout.
- [CSS-Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) - A useful reminder for alignment patterns in navigation and footer sections.

## AI collaboration

I used Codex as a mentor and reviewer during the project. The most useful parts were getting feedback on accessibility, checking keyboard behavior, reviewing BEM naming, and identifying polish items after the page visually matched the design.

## Author

- GitHub - [@xandar6](https://github.com/xandar6)
