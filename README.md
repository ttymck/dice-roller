# dice-roller

#### A react dice component

adapted from [Spin the Dice](https://codepen.io/SidM09/pen/OJRRRJZ) codepen.

I was planning to use this component in a project, so I went through the exercise of porting it from plain HTML/JS. 

However, my use case required controlling the die from the parent component: 

1. Click a button to roll multiple dice at once
2. Make an API call to fetch the roll results
3. Roll all dice while the HTTP request is executing
4. Update each die from the result of the API request
5. Disable the dice so that they can not be run a second time, as determined by the parent component

This required more effort than it was worth at the time, so I used simple divs instead. I hope to tackle this once I have more experience with React.