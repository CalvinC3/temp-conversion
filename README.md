# How to run
I listed the run scripts below that should help in running the app wether in development or actual production buld

## `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Implementation


## Libraries used
The two main libraries used are:
### ReactJS
For this, I used ReactJS to complement with the requirment of it being a client side application. This utilize create-react-app script

### Styled Components
Styled Components is used for the styling and theme-ing implementation - I utilized the ThemeProvider for this

### Solving the problem
I used the conversion formula below for the temperature
°C to °F	Multiply by 9, then divide by 5, then add 32
°F to °C	Deduct 32, then multiply by 5, then divide by 9

I setup two inputs one each for celcius and farenheit respectively.  The values inputted on these fields are stored on a react state that was defined on the container.js.
There are three event triggers I used on the form:
1. onChange - triggers the setting of the state for each field
2. onBlur - triggers the actual conversion method
3. onKeyPress - triggers the actual conversion method but this time when "Enter" was pressed

What happens inside the conversion methdod are:
 a. Data input sanitation - this is to make sure that we remove all characters from the inputs, we only allow numeric, decimal, and negative sign
 b. Actual conversion - using the conversion formula, then setting the new Farenheight or Celcius state value (also save the new cleaned value after the sanitation)

 Since the values are stored in the state, it will trigger a re-render of the component which results to automatically changing the input field values on the UI.

 Aside from that, I added a graphical representation of some sort for the temperature value in Celcius,  It will show an emoji with corresponding text message depedning on the temperature levels inputted.  This is happening as an effect using React's useEffect()
 The short explanation of how I worked it out is that useEffect listens to any changes on the celcius state that we set. The message and icon will change based on the values of the state.  The icon and message is also stored on a state called `graphics` which also cause a re-render everytime it updates making the icon seamlessly update as well.

 Lastly, the `theme`.  As I mentioned above, I used Styled Components to handle the theme.  But to be exact it's the combination of both react states and styled components.  The implementation process is as follows:
 1. App.js holds the theme colors/configuration on an object and
 2. We created a state to handle the theme and setting of theme and passed in as a prop on our main component and our ThemeProvider
 3. The themeProvider here is actually a higher ordered component which wraps our main component.  The theme provider allows us to use the theme object as a props inside our styled components and we can access it to dynamically set styling values
 4. I created a button that acts as a toggle between the two modes (light and dark) - this toggle switches the state value of the theme
 5. If the value of the theme changed, the object our theme provider also changes - the object contains our styling configuration
 6. I also added a transition animation to make the switching more pleasant to the eyes

### Project Setup
`public` contains the static file pre-built using create-react-app
Source code is inside the `src` folder and the inside is structured as such:
- `pages` - contain the main page folder `MainPage`
- `index` - is the main JS file
- `Assets` - contains the images I used on this application.
- `App.js` - is the react App file loaded.
- `App.css` - is the main css file

Inside the `MainPage` are
- `container` - is where the main logic of the component happens
- `index` - is the JSX file and where the html elements are formed
- `styles` - is our styled components

### Difficulties Encountered
During the development, these are the difificulties I encountered
1. UI/UX idea - The app is simple, but to acutally design the UI/UX requires creativity.  I'm trying to not overthink it and focus on simplicity and usability. I just added the fancy stuff at the end.
2. Recurrsion problem - I first used onChange as the trigger of the conversion method but it creates an endless recurrsion problem since both fields use the same onchange method I created, when one field changed and the converted value is updated on the other field it will also trigger the same onchange handler, thus the recurrsion - the solution I was able to think of is to put the actual conversion on a the onBlur and keypress (enter) event handler

### Not considered
Mobile responsiveness is not considered on this project