# Task Details : 
Create a client-side quiz application where a user can attempt and can see the result with correct answers.

For designing an application, you need to:

a)    Create a page with the following given user interfaces using necessary Bootstrap.

       1. Create a UI for displaying questions with its options
       2. Create a UI for displaying the final result of a quiz with correct/wrong answers
b)    Import data from the questions.json file and use the data. (You can also copy given data and paste it in your js file) 

Note: Questions for a quiz are provided in the questions.json file.

c)     Dynamically generate HTML in JavaScript for both interfaces.

        1. For a question, the interface fetch the first question by default from a list on page load.
        2. On the next/previous button click, the next/previous question should be rendered.
        3. Set a timer for 30 seconds to change questions automatically, also show the time on the top right of the quiz interface.
        4. Once a user attempted all the questions then the result should be rendered on a Quiz Result Interface.
        
# Extend the current application with following functionalities

1). Add Teacher Component. Teacher should be able 
     i). Add Quiz, with time, questions, as well all options 
         and the correct option.
         (Same as provided in questions.js file)
     Note All questions have equal time like if a Quiz has 1 hour
     and 4 questions, then each question has to be of 15 minutes.  
    
2). Add a login page, and identify if the user is student or 
    teacher, in case of student, direct him/her to same page as you
    are doing now, but if he/she is teacher, then direct him/her
    to newPage(which you will implement now)
    
# Extend the task with some more features,

i) Once, the teacher logins, There should be a dashboard menu,
   where teacher can see the students who have attempted the
   quiz.
    a). List of students should be render in descending wise
        i-e, student with highest marks will be shown, on top
    b) Clicking  on any student in list, more details will be
       shown like, marks of students, time taken for attempting
       quiz.

# UI :
![screencapture-localhost-3000-2022-08-17-12_06_27](https://user-images.githubusercontent.com/107143531/185057380-eb0d4ef9-4f34-41b1-9668-3a29c2194005.png)
![screencapture-localhost-3000-2022-08-17-12_06_44](https://user-images.githubusercontent.com/107143531/185057398-d6d596d0-cdca-4776-b6b8-1e784e7b44a4.png)
![screencapture-localhost-3000-2022-08-17-12_06_57](https://user-images.githubusercontent.com/107143531/185057405-1472d6cd-b277-44c9-8bd9-2f4f92e3c124.png)
![screencapture-localhost-3000-2022-08-17-12_07_19](https://user-images.githubusercontent.com/107143531/185057416-6fac0aff-daa6-4184-9ba0-d336172d9c78.png)


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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
