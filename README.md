# **MyBookshelves**

This web app was created to serve as a demonstration of my front-end development skills with React and Redux. [Youtube Video](https://www.youtube.com/watch?v=A-TJavocvts).

In this project, **React** and **Redux** were used to develop **MyBookshelves** bookstore. The web app is made up of a single main page that illustrates a list of books with details such as book's *price*, *title*, *description*, *category*, and *photo*. Also, each book has a ***delete button*** that appears beside the *title* while hovering over the rendered book. In addition to the ***delete button***, the user can click on the book's *title* to edit any of the book's details; upon modification, the book details are updated automatically in the main page. 

The app has a ***navigation bar*** that displays three ***navigation links*** of the first three available book *categories*. If any of the ***links*** were to be clicked, the user will scroll to the first book in the chosen *category*. Also, the ***navigation bar*** has an ***add button*** that allows the user to add new books to the list. If the user tries to add or edit a book, a ***modal box*** will pop up for assisting with user input. The ***modal box*** can be closed either by clicking on the ***cancel button*** or anywhere outside the ***modal box***, otherwise the ***submit button*** should be clicked to successfully send user's input.

### **Extra functionality**
Users can input an image link when adding or editing a book through the ***modal box form***. If the ***input media field*** is left empty the ***application*** automatically sets a default image. 

The ***application*** has a slight room for modification when it comes to the bookstore's book *categories* and the max number of ***navigation links*** in the ***navigation bar***. At the top level of the ***application*** (index.js), the modification can be applied like this:
```jsx
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        selectable={["coding", "economics", "finance", "self-help"]} // Sets the selectable categories
        max={3} // Sets the max number of navigation links
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

## **Project Dependences**

This project uses **Redux** for state management. For debugging the web app's state changes use **Redux DevTools Extension**.

## **React Scripts**

This Website was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you first need to install npm packages with ***`npm install`***, then you can run any of the following **React** scripts:

- ***`npm start`***: Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

- ***`npm test`***: Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- ***`npm run build`***: Builds the app for production to the **build** folder. It correctly bundles **React** in production mode and optimizes the build for the best performance. The build is minified, and the filenames include the hashes. Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information on how to deploy React web apps.
