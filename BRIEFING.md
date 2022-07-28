# Week 3 Assessment

(This is a markdown .MD file, if you are reading this in vs-code, right click the file and select `Open Preview`)

#### Rules for this assessment

See RULES.md

#### Second opinion

- As per CRBKO rules you can request a second opinion from another teacher if you disagree with your evaluation. To request reevaluation send an email to: teachers@codaisseur.com

#### Start time:

START_TIME

#### Deadline:

DEADLINE

#### Passing grade:

45 / 60 points

#### How to make and submit your homework

- Use `npx create-react-app` to create new react app
- Add this briefing to your repo as `BRIEFING.md`
- `create-react-app` will initialize a git repository for you, so don't make one yourself
- Go to `github.com` and
  - create a new `private` repository
  - make sure **NOT** to initalize with a readme / .gitignore as it will give you errors when you will try to push
  - Add the evaluator to your repository as a `collaborator` (if you don't know who the evaluator will be: ask)
- Add your newly created git repository as a remote to your react app
- Push the initial version of your app created by `create-react-app`
- Start your react app with `npm run start`, as usual and start programming.
- You are allowed to leave `console.log`s and comments in your code, but please make your code reasonably indented/formatted, and remove unnecessary code. This will make your teachers happy :)
- Your teachers will also be happy if you make enough git commits. This way, we can see your progress. You get a point for committing at least once per section.

## Learning goals & some tips

For transparency and clarity, these are the learning goals we will be testing:

- Creating components
- Composing components and passing them data via props
- Using `event listeners` and `event handlers`
- Designing and managing component local state with `useState` hook
- Using the `useEffect` hook to fetch data
- Using `react-router-dom` to make static and dynamic routes
- Lifting state to a parent component, and passing callback props to children
- Making controlled forms
- Mapping, filtering, finding & sorting arrays of objects
- Making an express server that serves JSON
- Using npm to install packages, run scripts and write your own npm scripts (e.g. npm run dev)
- Basic git usage, making commits, adding remote & pushing to master

If this sounds like a large list, it is, and it's because you've learned a tremendous amount of things these past week! Don't let it scare or overwhelm you though, you have seen all these things. Don't hesitate to use the reader, Google (Stackoverlow), or the documentation links we provide below.

**TIP: Read the assignment carefully!** It is easy to accidentally deviate from an assignment, resulting in a frustrating homework experience. Taking the time to read the exercise can save you time and effort.

**TIP: Don't get stuck!** If you feel stuck, try taking a small walk, continuing on to a next step, or talking out loud about the problem you're facing (programmers call this "rubber-ducking"). Everybody can get stuck, but don't let it stop you.

## What are we building?

We are building a webapp with articles about programming called `new News()`. It has 4 main pages

- A homepage with the latest article
- A page where you can search articles
- A page where you can read an article and leave comments
- A page that lists articles from a specific category

In addition we build the JSON api using express so our articles / comments data can be requested from a server.

## Api

The data for this app is already available through an api. This way you can build your entire app without having to have a working api yourself.

Overview of the entire api

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/

Endpoints:

GET /articles

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles

GET /articles/:articleId

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/1

GET /articles/:articleId/comments

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/1/comments

GET /categories/:categorId/articles

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/devops/articles

A JSON with all the data:

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/db

## Wireframe

You will be provided with a wireframe that shows an overview of the app along with this README

## Features

### 1. As a reader I want to be able to navigate to different pages so I can find the information I am looking for

- The app should have a logo of the site on all pages which a user can click to go to the `Homepage`
- The homepage contains a button to go to the `Search Articles` page
- There is a `Category page` which has a dynamic route.
- There is an `Article detail page` which has a dynamic route.

| Criteria                                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| 2 Static Routes are implemented using react router                         | 1      |
| There is 1 dynamic route implemented with a route parameter for categoryId | 1      |
| There is 1 dynamic route implemented with a route parameter for articleId  | 1      |
| Each route renders a different component                                   | 1      |
| A new News() logo can be clicked on all pages to go to the `Homepage`      | 1      |
| The search Articles button, links to the `Search Articles` page            | 1      |
| Total                                                                      | 6      |

**Note:** If you are unable to implement routing in the app, you may put (render) the components for all the other features in App.js without using Routing at all.

**Note:** The new News() logo can be some text

### 2. As a reader I want to be able to read the latest article, so I can stay up to date

- The home page displays the latest article
- The data contains a `unixTimeStamp` which represent a date as a number of seconds since 1970
- Data is available from the api

GET /articles

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles

| Criteria                                                                            | Points |
| ----------------------------------------------------------------------------------- | ------ |
| An article is displayed with a title, author, image and categoryId                  | 1      |
| A seperate component is used to display the article                                 | 1      |
| The data is fetched from the api, not hardcoded                                     | 1      |
| The article displayed is always the most recent article from the api, not hardcoded | 2      |
| Clicking on the `Read this article button`, links to the `Article detail page`      | 1      |
| Clicking on the `categoryId`, links to the `Category page`                          | 1      |
| Total                                                                               | 7      |

### 3. As a reader I want to search articles, so I can find something I am interested in

- The search article page displays a list of articles
- Entering a searchterms filters the articles
- We want to display the articles if the searchterm matches something inside the title, catergoryId or author

GET /articles

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles

| Criteria                                                                                                  | Points |
| --------------------------------------------------------------------------------------------------------- | ------ |
| A list of articles is displayed with a title, author, image and categoryId                                | 1      |
| A component is reused to display the articles                                                             | 1      |
| The data is fetched from the api, not hardcoded                                                           | 1      |
| There is an input of type `search on the page`                                                            | 1      |
| The state of the input is controlled using React useState hook                                            | 1      |
| When a user enters a searchterm in the input field, the list of articles is filtered                      | 1      |
| A counter displays the number of matching articles for this searchterm                                    | 1      |
| Articles that contain the searchterm in the title are displayed                                           | 2      |
| Articles that contain the searchterm in the title or categoryId are displayed                             | 1      |
| Articles that contain the searchterm in the title or categoryId or author are displayed                   | 1      |
| The searchTerm is stored in the path as a querystring by using the `useHistory` hook and `history.push()` | 2      |
| If the page is refreshed, with a searchterm as part of the path, the same search results are displayed    | 2      |
| There is a warning in the console regarding "key" props                                                   | -1     |
| Total                                                                                                     | 15     |

### 4. As a customer I want to read an article and leave comments, so I can feel involved.

- There is an `Article details page` which displays a specific article
- The comments for the article are also displayed
- There is a form to leave your own comment

GET /articles/:articleId

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/1

GET /articles/:articleId/comments

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/articles/1/comments

| Criteria                                                                                                    | Points |
| ----------------------------------------------------------------------------------------------------------- | ------ |
| A the specific article is displayed with a title, author, image and content                                 | 1      |
| A list of comments is displayed for the article, with name and comment                                      | 1      |
| Id of the article the user wants to see is dynamic and determined using a route parameter                   | 1      |
| The data is fetched from the api, not hardcoded                                                             | 1      |
| There is a form on the page with inputs for name and comment and a button to submit                         | 0.5    |
| The state of the form is controlled using React useState hook(s)                                            | 0.5    |
| When the form is submitted, a new comment is displayed on the page                                          | 2      |
| The comment is displayed at the top of the list of comments                                                 | 1      |
| The comment form is seperate component and uses a callback prop to change the state of the parent component | 3      |
| Submitting the form refreshes the page                                                                      | -2     |
| There is a warning in the console regarding "key" props                                                     | -1     |
| Total                                                                                                       | 11     |

**Note**: Comments do not need to saved, only displayed on the page. It's ok if they are gone when the page is refreshed

### 5. As a customer I want to view articles from a specific category, so I can explore a topic further

- The category page displays articles with a specific categoryId
- The category displayed depends on which link a user has clicked

GET /categories/:categorId/articles

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/categories/devops/articles

| Criteria                                                                                                     | Points |
| ------------------------------------------------------------------------------------------------------------ | ------ |
| The categoryId the user wants to see is displayed on the page                                                | 1      |
| The category of the list of articles the user wants to see is dynamic and determined using a route parameter | 1      |
| A list of articles with that categoryId is displayed, each with a title, author, image and categoryId        | 1      |
| A component is reused to display the articles                                                                | 1      |
| There is a warning in the console regarding "key" props                                                      | -1     |
| Total                                                                                                        | 4      |

### 6. Express server

- So far we've been using the api which is already online. We can also create this api ourselves using express.
- Your React can make use of the api which is already online, your React app does not have to fetch data from your own api.
- Your own express api should return the same data as the one that is already online.
- All api endpoints should respond with JSON (not HTML)
- The entire set of data from the api is available from the following api endpoint:

https://my-json-server.typicode.com/Codaisseur/articles-comments-data/db

| Criteria                                                                                                                      | Points |
| ----------------------------------------------------------------------------------------------------------------------------- | ------ |
| There is a file called server.js, in the folder created by create-react-app                                                   | 0.5    |
| package.json contains a script called `server`, which runs the server.js file with node                                       | 0.5    |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon                                | 0.5    |
| running server.js starts an express server which listens on port 4000                                                         | 0.5    |
| Requests to http://localhost:4000/articles get a response of an array with 6 articles                                         | 1      |
| Requests to http://localhost:4000/articles/:articleId get a response of a specific article                                    | 2      |
| Requests to http://localhost:4000/articles/:articleId/comments get a response of an array of comments for a specific article  | 2      |
| Requests to http://localhost:4000/categories/:categoryId/articles get a response of an array of articles with that categoryId | 2      |
| More than 4 routes are used to implement this server                                                                          | -2     |
| Total                                                                                                                         | 9      |

### 7. Styling

- Apply some styling to this app using CSS to make it look better

| Criteria                                                               | Points |
| ---------------------------------------------------------------------- | ------ |
| Student has applied at least 5 style rules                             | 1      |
| Styles are split up across at least 2 css files created by the student | 1      |
| Total                                                                  | 2      |

### 8. Finishing up

- Self assess:
  - Make a file called `ASSESSMENT.md`
  - Copy the rubric below into it
  - Score your assessment in the column `Self`
  - Leave room for the evaluator to fill in the `Evaluator` column
- Write a reflection about this assessment & your learning process in `REFLECTION.md`:
  - What did you do well, process wise
  - What would you do differently next time to improve, process wise
- Commit your code and use messages when you commit, push it to your respository using `git push origin master`

| Criteria                                                                         | Points |
| -------------------------------------------------------------------------------- | ------ |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |
| Student has committed at least once per section                                  | 1      |
| Student has pushed their repository using git                                    | 1      |
| Total                                                                            | 6      |

### Self assessment

| Section                         | Max Points | Self | Evaluator |
| ------------------------------- | ---------- | ---- | --------- |
| 1 Navigation                    | 6          | 0/6  | 0/6       |
| 2 Home page most recent article | 7          | 0/7  | 0/7       |
| 3 Searching articles            | 15         | 0/15 | 0/15      |
| 4 Article details               | 11         | 0/11 | 0/11      |
| 5 Articles by category          | 4          | 0/4  | 0/4       |
| 6 Express server                | 9          | 0/9  | 0/9       |
| 7 Styling                       | 2          | 0/2  | 0/2       |
| 8 Finishing up                  | 6          | 0/6  | 0/6       |
| Total                           | 60         | 0/60 | 0/60      |

| 1. Navigation - Criteria                                                   | Points |
| -------------------------------------------------------------------------- | ------ |
| 2 Static Routes are implemented using react router                         | 1      |
| There is 1 dynamic route implemented with a route parameter for categoryId | 1      |
| There is 1 dynamic route implemented with a route parameter for articleId  | 1      |
| Each route renders a different component                                   | 1      |
| A new News() logo can be clicked on all pages to go to the `Homepage`      | 1      |
| The search Articles button, links to the `Search Articles` page            | 1      |
| Total                                                                      | 6      |

| 2. Latest Article - Criteria                                                        | Points |
| ----------------------------------------------------------------------------------- | ------ |
| An article is displayed with a title, author, image and categoryId                  | 1      |
| A seperate component is used to display the article                                 | 1      |
| The data is fetched from the api, not hardcoded                                     | 1      |
| The article displayed is always the most recent article from the api, not hardcoded | 2      |
| Clicking on the `Read this article button`, links to the `Article detail page`      | 1      |
| Clicking on the `categoryId`, links to the `Category page`                          | 1      |
| Total                                                                               | 7      |

| 3. Search Articles - Criteria                                                                             | Points |
| --------------------------------------------------------------------------------------------------------- | ------ |
| A list of articles is displayed with a title, author, image and categoryId                                | 1      |
| A component is reused to display the articles                                                             | 1      |
| The data is fetched from the api, not hardcoded                                                           | 1      |
| There is an input of type `search on the page`                                                            | 1      |
| The state of the input is controlled using React useState hook                                            | 1      |
| When a user enters a searchterm in the input field, the list of articles is filtered                      | 1      |
| A counter displays the number of matching articles for this searchterm                                    | 1      |
| Articles that contain the searchterm in the title are displayed                                           | 2      |
| Articles that contain the searchterm in the title or categoryId are displayed                             | 1      |
| Articles that contain the searchterm in the title or categoryId or author are displayed                   | 1      |
| The searchTerm is stored in the path as a querystring by using the `useHistory` hook and `history.push()` | 2      |
| If the page is refreshed, with a searchterm as part of the path, the same search results are displayed    | 2      |
| There is a warning in the console regarding "key" props                                                   | -1     |
| Total                                                                                                     | 15     |

| 4. Article details - Criteria                                                                               | Points |
| ----------------------------------------------------------------------------------------------------------- | ------ |
| A the specific article is displayed with a title, author, image and content                                 | 1      |
| A list of comments is displayed for the article, with name and comment                                      | 1      |
| Id of the article the user wants to see is dynamic and determined using a route parameter                   | 1      |
| The data is fetched from the api, not hardcoded                                                             | 1      |
| There is a form on the page with inputs for name and comment and a button to submit                         | 0.5    |
| The state of the form is controlled using React useState hook(s)                                            | 0.5    |
| When the form is submitted, a new comment is displayed on the page                                          | 2      |
| The comment is displayed at the top of the list of comments                                                 | 1      |
| The comment form is seperate component and uses a callback prop to change the state of the parent component | 3      |
| Submitting the form refreshes the page                                                                      | -2     |
| There is a warning in the console regarding "key" props                                                     | -1     |
| Total                                                                                                       | 11     |

| 5. Articles by category - Criteria                                                                           | Points |
| ------------------------------------------------------------------------------------------------------------ | ------ |
| The categoryId the user wants to see is displayed on the page                                                | 1      |
| The category of the list of articles the user wants to see is dynamic and determined using a route parameter | 1      |
| A list of articles with that categoryId is displayed, each with a title, author, image and categoryId        | 1      |
| A component is reused to display the articles                                                                | 1      |
| There is a warning in the console regarding "key" props                                                      | -1     |
| Total                                                                                                        | 4      |

| 6. Express server - Criteria                                                                                                  | Points |
| ----------------------------------------------------------------------------------------------------------------------------- | ------ |
| There is a file called server.js, in the folder created by create-react-app                                                   | 0.5    |
| package.json contains a script called `server`, which runs the server.js file with node                                       | 0.5    |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon                                | 0.5    |
| running server.js starts an express server which listens on port 4000                                                         | 0.5    |
| Requests to http://localhost:4000/articles get a response of an array with 6 articles                                         | 1      |
| Requests to http://localhost:4000/articles/:articleId get a response of a specific article                                    | 2      |
| Requests to http://localhost:4000/articles/:articleId/comments get a response of an array of comments for a specific article  | 2      |
| Requests to http://localhost:4000/categories/:categoryId/articles get a response of an array of articles with that categoryId | 2      |
| More than 4 routes are used to implement this server                                                                          | -2     |
| Total                                                                                                                         | 9      |

| 7. Styling - Criteria                                                  | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Student has applied at least 5 style rules                             | 1      |      |           |
| Styles are split up across at least 2 css files created by the student | 1      |      |           |
| Total                                                                  | 2      |      |           |

| 8. Finishing up - Criteria                                                       | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |      |           |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |      |           |
| Student has committed at least once per section                                  | 1      |      |           |
| Student has pushed their repository using git                                    | 1      |      |           |
| Total                                                                            | 6      |      |           |
