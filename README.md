<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Markup Starter" />

  &#xa0;
</div>

<h1 align="center">Image Slider Project</h1>

## 🎯 About 
This project is a simple image slider with two branches: a basic slider implementation (main branch) and an enhanced version with sliding animations (animation branch).

## ✨ Features:
**Main Branch:** Basic slider functionality with clickable navigation. </br>
**Animation Branch:** Smooth, animated slider effect using CSS transitions.

## Branches
**<u>Main Branch (main)</u>** </br>
The main branch provides a straightforward image slider that cycles through images with "Next" and "Previous" buttons. The images in the slider are displayed one at a time without animation.</br>
**JavaScript Functionality:** </br>
- The slider moves forward by appending the first image element to the end when clicking "Next."
- The "Previous" button prepends the last image element to the start of the slider.
- Implements a simple cycle without animations. </br>

**SCSS Styles:**
- Basic styling for the slider container, buttons, and images.
- Simple hover effect on buttons
  
**<u>Animation Branch (animation)</u>** </br>
The animation branch provides a smoother and more visually engaging slider with a sliding animation for each transition.

**JavaScript Functionality:**
- Uses the transform property with translateX to create a sliding animation.
- updateSliderPosition() adjusts the translateX value based on the currentIndex, creating a smooth transition effect.
- Adds transitionend events to reset the slider's order for an infinite loop effect. 
  
**SCSS Styles:**
- Flexbox setup for smooth transitions between images.
- .slider-wrapper with overflow hidden to show only one image at a time.
- Adjusts button styling for better visual presentation during animations.



## 🏁 Starting
```
# Clone this project
$ git clone https://github.com/mmazitov/simple-slider-js

# Access
$ cd simple-slider-js

# Install the dependencies using Yarn or npm:
$ $ yarn install or $ npm install

# Run the project
$ $ yarn start or $ npm start

# The server will initialize in the <http://localhost:3000>

# Usage

# For the main branch
git checkout main

# For the animation branch
git checkout animation
```

## 🤝 Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you encounter any bugs or have feature requests.
