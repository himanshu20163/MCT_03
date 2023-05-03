# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

##Github Exploration App
This app allows you to explore Github users and their repositories using the Github API. The app has three main pages: Login, Home, and User Details.

##Login Page 
The Login page has a form where you can enter your email, password, Github username, and password. After you click the login button, the app will fetch data of your self username from the Github API and store it in Redux. The UI is inspired by the following image:

##Login page UI

After you log in, you will be redirected to the Home page.

Home Page On the Home page, the app will fetch data from the Github public API (https://api.github.com/users) and display it in all users. When you click on a any single profile , you will be redirected to the User Details page. The UI is based on my dark theme.

##The Home page also has a navigation bar with a search bar and a button to view your profile. When you search for a username, the app will fetch data for that user from the Github public API (https://api.github.com/users/) and display it on the User Details page. When you click the button to view your profile, you will be redirected to the User Details page to see your own details.

##User Details Page  On the User Details page, the app will display information about a Github user, including their avatar, username, bio, and number of followers/following. The app will also fetch repositories details from the Github public API (https://api.github.com/users//repos) and list the top five repositories in a list form.

If you are viewing your own profile, the page heading will be "My Github Profile". Otherwise, the heading will be the user's Github username.

Thank you for using the Github Exploration App!
