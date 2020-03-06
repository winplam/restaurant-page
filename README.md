# Project: Restaurant Page
The goal of this project is to use JavaScript DOM manipulation to generate web page entirely from JavaScript code.
The index.html contains almost nothing inside the body tag except for an empty DIV tag JavaScript uses as a container to hook onto.
The methods for generating the HTML is stored in the rendPage.js file and the parameters for supplying the data attributes were stored in index.js.
Webpak dev server was used to compile to source code into a main.js file in the dist folder.

### [View in Browser](https://winplam.github.io/restaurant-page/)

The funniest part of this exercise was making a 3D rotating cube to transition better the different pages.
Essentially this cube was originally designed to be a rotating menu with only 3 sides.
I've made the face significantly larger and added a 4th side to complete a cube. CSS transfer and rotation tags were used to perform the 3D animation making it smooth and seamless.

## Screenshots
![RestaurantPage](./screenshots/homepage.png)
## 3D Rotation
![Rotating](./screenshots/rotating.png)

## Technologies Used
This page was created with JavaScript ES6, HTML 5, and SCSS and the help of Wedpak to bundle the code into a single file.
For SCSS usage, I used any many of the SASS features as application to keep the code DRY.
SCSS variables, nesting, @import, @mixin, @extend, calc function were all employed to keep the SCSS structure organized, manageable and easily maintainable.    