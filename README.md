# Stemlink SEP

Welcome! This is a small practice website based on the Tesla Model 3 page. You can use it to learn how HTML, CSS, Tailwind CSS, and JavaScript work together. The page is designed for desktop screens.

**See the finished page:** [Website preview](https://dhanushkagunawardhana.github.io/tesla-web-poc/)

## Set up the project

You need a web browser, an internet connection, and [Visual Studio Code (VS Code)](https://code.visualstudio.com/download). The internet connection loads Tailwind CSS; the car images are already in this project.

1. **Get the files.** On the [project's GitHub page](https://github.com/dhanushkagunawardhana/tesla-web-poc), select **Code → Download ZIP**, then unzip the download. If you already use Git, you can clone it instead:

   ```bash
   git clone https://github.com/dhanushkagunawardhana/tesla-web-poc.git
   ```

2. **Open the folder.** In VS Code, choose **File → Open Folder** and select the `tesla-web-poc` folder. You should see `index.html` in the file list on the left.
3. **Run the page.** Right-click `index.html` and choose **Open in Integrated Browser**. You can also open `index.html` in your usual web browser. No installation of project packages or build step is needed.
4. **Try a change.** In `index.html`, change a heading, save the file, and look at the page again. If it does not update right away, refresh the browser tab.

## Project architecture (how the files are organized)

```text
tesla-web-poc/
├── index.html          Page content and section layout
├── css/
│   └── styles.css      A few extra styles, such as the hero image shade
├── js/
│   └── main.js         Click behavior for slides and tabs
├── assets/
│   └── images/         Images used on the page
└── README.md           This guide
```

Start with `index.html`: its comments mark the header, main sections, and footer. The `class` names on HTML elements control most of the appearance through Tailwind CSS. Look in `css/styles.css` for the few styles written by hand. Then open `js/main.js` to see how clicking a dot or tab changes the page.

## Design overview

The page begins with a large **hero** image and a row of dots for choosing a car image. Below that are sections for **Meet Model 3**, **Explore Models**, **Features**, **Charging**, and **Specs**. A final link and the footer close the page.

The design uses large photos, simple two-column layouts, generous spacing, and dark text on light backgrounds. The charging and specs sections use a dark background to stand out. This is a desktop-only exercise, so the layout does not switch to a mobile design.

## What to try next

- Change a heading in `index.html`.
- Change a color or spacing class in `index.html` and see what moves.
- Change the hero image or trim text in `js/main.js`.
- Add another hero slide or feature tab by following the existing examples.

## Learn more

One beginner-friendly starting point for each topic:

- **GitHub:** [GitHub Hello World](https://docs.github.com/en/get-started/using-github/hello-world) — learn about repositories and changes.
- **HTML:** [Basic HTML syntax](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax) — learn how page content is arranged.
- **CSS:** [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started) — learn how to style a page.
- **Tailwind CSS:** [Styling with utility classes](https://tailwindcss.com/docs/styling-with-utility-classes) — understand the classes used in this page.
- **JavaScript:** [What is JavaScript?](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript) — learn how clicks can change a page.

This is a classroom recreation, not an official Tesla website. The images were downloaded from Tesla's Model 3 page on November 6, 2026 and remain Tesla's assets. Vehicle figures and offers can change.
