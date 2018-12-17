# KeyVal
=================================================
### Author: Ryan Milton

### Setup
* Fork this repo
* run `npm install`

### Modules
#### Parent
* The "Parent" component is an class that renders the Header component and KeyValue components (based the entries in the store).
  * The "Parent" renders an h1 tag that simply read "this is the parent component".
  * The "Parent" renders a button that when clicked will log out in the console the key value pairs as entered in the forms.
#### Header
* The "Header" component renders a header tag and a button.
  * The header tag simply reads "this is your header".
  * When the button is clicked is triggers a function to create a new key value pair object in the store which is then seen by the parent component and renders out another KeyValue pair component.
#### KeyValue
* The "KeyValue" component renders a form with two input fields and a button.
  * When the user types in the input fields, with every keystroke the entered text is stored in the "store" to be displayed when the "Submit" button in the "Parent" component is clicked.
  * The first input field is for entering the "key".
  * The second input field is for entering the "value".
  * The button is used to delete that individual form.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode as givevn by webpack.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) or see [Jest](https://jestjs.io/docs/en/getting-started) for more information.

### Further Development
* This is an open source repository, feel free to make contributions and submit them. If seen as productive to the project I will approve the submissions.
* If there are any issues with installing, running, or testing this project please contact me and I will do my best to resolve these issues.
