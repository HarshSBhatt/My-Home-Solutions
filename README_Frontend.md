# CSCI5709 Assignment 3

## MY HOME - Group 2

The goal of the My Home web application is to make finding and locating houses/rooms to rent simple, reliable, painless, and convenient. To accomplish this, it gives the tools necessary for house admins to generate thorough house and room profiles, which individual users may then browse through to identify rooms that meet their requirements. The site seeks to make the search process easier for interested students and working professionals, reducing the stress of relocating for school or work.

My Home also attempts to foster a feeling of community by offering a discussion area where students and working professionals may discuss their needs, current housing concerns, roommate finding, and other topics. My Home makes it simple to advertise, maintain, and read about available houses and rooms, communicate with other users, and rent a new room or spot on the online store.

- _Date Created_: 27 03 2022
- _Last Modification Date_: 27 03 2022

## Author

- [Harsh Samirbhai Bhatt](mailto:harsh.bhatt@dal.ca)
- [Namit Dadlani](mailto:nm856602@dal.ca)
- [Arunkumar Gauda](mailto:arung@dal.ca)
- [Utsava Verma](mailto:ut752143@dal.ca)
- [Sai Vaishnavi Jupudi](mailto:sv984706@dal.ca)

## GitLab Frontend Group Repository

Frontend Group Repository: [https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend)

## Group Frontend App Deployment URL:

- URL: [https://web-group13.herokuapp.com/](https://web-group13.herokuapp.com/)

## GitLab Backend Group Repository

Backend Group Repository: [https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-backend](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-backend)

## Group Backend App Deployment URL:

- URL: [https://api-meantwork.herokuapp.com/](https://api-meantwork.herokuapp.com/)

## My Home Tech Stack

- [React](https://reactjs.org/) - Frontend framework
- [Node](https://nodejs.org/) - Backend JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/)
- [Express](https://expressjs.com/) - Web framework for [Node](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) - NoSQL database used for data persistence

## Feature: User Management - My Home

I implemented the User Management feature – My Home. This feature provides the user with a user (Admin/Room Seeker/Room Owner) profile page where the user will be able to see their details and manage them. My feature includes the following tasks:

- Register a new user **(Room Owner and Room Seeker)** and make a member of My Home.
- Sign in **(Super Admin, Room Owner, Room Seeker)** by existing users and sign out.
- Forgot password with email password reset.
- View user profile page.
- Update user details.
- Change existing password.
- Email notifications.

## Frontend files created by me

Below is the list of all the frontend files created by me for the feature User Management - My Home

- Folder - **/src**
  - Folder - [/app](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app)
    - Folder - [/components](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app)
      - [DesktopMenu.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app/components/DesktopMenu.js) - Menu for desktop.
      - [Header.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app/components/Header.js) - App Header for My Home
      - [MobileMenu.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app/components/MobileMenu.js) - Menu for mobile.
    - [App.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app/App.js) - This file contains the logic to render the private routes.
    - [ContentRoutes.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/app/ContentRoutes.js) - All the private routes reside here.
  - Folder - [/common](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common)
    - [actionTypes.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/actionTypes.js) - This file contains the constants for global state management.
    - [api.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/api.js) - This file contains the standalone axios object for entire app.
    - [constants.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/constants.js) - This file contains the constants used in My Home app.
    - [Error.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/Error.js) - This file contains the logic to render the error page in case of error.
    - [PageHeading.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/PageHeading.js) - This file contains page heading logic.
    - [theme.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/theme.js) - This file contains the logic to generate the theme for My Home app.
    - [utils.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/utils.js) - This file contains all the utility functions.
    - [validationSchema.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/common/validationSchema.js) - This file contains the logic to sanitize the input of different forms.
  - Folder - [/components](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/components)
    - [Loading.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/components/Loading.js) - This file contains the logic to render loader.
  - Folder - [/modules](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules)
    - Folder - [/auth](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth)
      - Folder - [/components](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/components)
        - [AccountActivation.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/components/AccountActivation.js) - This file contains the logic to render Account Activation page.
        - [ForgotPassword.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/components/ForgotPassword.js) - This file contains the logic to render Forgot Password page.
        - [Logout.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/components/Logout.js) - This file contains the logic to render Logout page.
        - [ResetPassword.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/components/ResetPassword.js) - This file contains the logic to render Reset Password page.
      - Folder - [/login](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/login)
        - [index.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/login/index.js) - This file contains the logic to render login page.
      - Folder - [/signup](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/signup)
        - [index.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/auth/signup/index.js) - This file contains the logic to render signup page.
    - Folder - [/profile](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/profile)
      - Folder - [/components](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/profile/components)
        - [ListUserData.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/profile/components/ListUserData.js) - This file contains the logic to render user data.
      - [index.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/profile/index.js) - This file contains the logic to render profile page.
    - Folder - [/settings](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/settings)
      - Folder - [/components](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/settings/components)
        - [ChangePassword.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/settings/components/ChangePassword.js) - This file contains the logic to render change password page.
        - [EditProfile.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/settings/components/EditProfile.js) - This file contains the logic to render edit profile page.
      - [index.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/modules/settings/index.js) - This file contains the logic to render profile page.
  - Folder - [/routes](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/routes)
    - [index.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/routes/index.js) - All the public routes reside here.
  - [AppContext.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/AppContext.js) - This file contains the logic to handle global state management.
  - [PrivateRoute.js](https://git.cs.dal.ca/hbhatt/group2-csci5709-webmaster-frontend/-/tree/main/src/PrivateRoute.js) - This file contains the logic to handle private routing logic.

### References

- [React](https://reactjs.org/) - Frontend framework
- [Node](https://nodejs.org/) - Backend JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/)
- [Express](https://expressjs.com/) - Web framework for [Node](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) - NoSQL database used for data persistence
- [NPM](https://www.npmjs.com/) - The package manager for [Node](https://nodejs.org/)
- [Heroku](https://dashboard.heroku.com/) - The cloud platform used for application deployment
- [GitHub](https://github.com/) - The version control tool for Frontend
- [Gitlab](https://git.cs.dal.ca/) - The version control tool for Backend
- [Visual Studio Code](https://code.visualstudio.com/download) - The source code editor used
- [Brave](https://brave.com/) - Browser used to see the changes
- [Postman](https://www.postman.com/) - The Platform for API development and testing
- [Material-UI](https://mui.com/) - The styling tool used for using the Autocomplete and Search tags
