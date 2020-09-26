## TITLE 
Surreal Estate

## SCREENSHOTS
Find below the app's mobile and desktop views

![](https://github.com/56aint/surreal-estate/blob/master/screenshots/desktop-view.png)
![](https://github.com/56aint/surreal-estate/blob/master/screenshots/mobile-view.png)
![](https://github.com/56aint/surreal-estate/blob/master/screenshots/mobile.view1.png)
![](https://github.com/56aint/surreal-estate/blob/master/screenshots/tablet-view.png)
![](https://github.com/56aint/surreal-estate/blob/master/screenshots/tablet1-view.png)


## DESCRIPTION
 This is a react project to create a property search engine that will have multiple pages:
  * A listing page where you can search for different properties and sort/filter the results.
  * An add property page where you will add new properties
  * A property page
Properties will come from an API that we have created

## Concept
 We are going to implement the project using the following concepts;
  * Single Page Application (SPA)
  * Client-side Routing
  * Controlled Inputs
  * HTTP Requests
  * API Interaction
  * OAut

## Interracting with the project
  To just interact with this app, please .....


  Or you can just code along with me:
## Getting Started
``` run npx-create-react-app surreal estate ```

## After running npx-create-react-app surreal estate
* got to the public folder
 * delete all the files except html file
   * in html file, delete, all the comments, favicon link and manifest
   * change the title to surreal-estate

* goto src folder
  **remove the serviceWorker.js and SVG file - app will crash at this point
  * *open *index.js* which is our app entry point
    * delete comments, serviceWorker import and serviceWorker.unregister(); 
  * open *App.js* and replace everything within the div with 'Surreal Estate' in h2 tag

## /src file structure
In src, create 3 folders: *components*, *tests* & *styles*
 * move *App.js*, *App.test.js* & *App.css* into them respectively
 * /src now contains index.js, index.css and the configuration file that powers our test suite- setupTests.js
 * now update import paths by following the failed to compile errors in the browser, delete useless import paths too (remember logo.svg? delete the import path, its the reason 'Surreal Estate' in h2 tag has not been rendered before we started changing src file structure)
 * delete all the styles in App.css
 * run ```npm test```
   * change import path for *App* & 'learn react' to 'surreal estate'
   ** test should pass now 
   
## Initialise a git repo
Stage, commit and push

## Add a Google font
In the main or first loading CSS file, in our own case, the *index.css* at the very top of the page, just do: 
* ``` @import url('https://fonts.googleapis.com/css?family=Nunito:400,700'); ```

* in the body, do:
```
body {
  margin: 0;
  padding: 0;
  font-family: 'Nunito', cursive;
};
```
* Import this into *index.js* :
``` import './index.css'; ```

## Eslint & Airbnb style guide
In any other project we would start by installing eslint as one of of dev dependencies however, since we are using create-react-app this dependency is already included. We do need to install a few other though: 
``` "eslint-config-airbnb": "^18.2.0",
    "eslint-plugin-import": "^2.22.0",
    "eslint-plugin-jsx-a11y": "^6.3.1",
    "eslint-plugin-react": "^7.20.3",
    "eslint-plugin-react-hooks": "^4.0.5"
```
We can do this by writing on the command line:
``` npm i -D  eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks ```
This will install a set of eslint plugins that support Airbnb Style Guide but, will result in compilation error in the browser;
**Failed to compile**
*./node_modules/scheduler/index.js*
*Error: ENOENT: no such file or directory, open '/node_modules/scheduler/index.js'*
So we need to add a configuration file *.eslintrc.json* to the root of our project with the following content:
``` {
  "env": {
      "browser": true,
      "es6": true,
      "jest":true
  },
  "extends": [
      "plugin:react/recommended",
      "airbnb"
  ],
  "globals": {
      "Atomics": "readonly",
      "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "plugins": [
      "react"
  ],
  "rules": {
} 
```

The configuration sbove is the standard Airbnb dev team. But we also need to enforce the strict use of .jsx files for JSX (instead of being able to use either *.jsx* or *.js*. 
So we change the *rules* thus;

``` "rules": {
    "no-underscore-dangle": [0],
    "react/jsx-props-no-spreading": [0],
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", ".jsx"]
      }
    ]
  }
} 
```
And so that our linter knows how to handle jest global variables like describe, test, etc: change rules in *.eslintrc.json* *.env* to:

``` "env": {
    "browser": true,
    "es2020": true,
    "jest": true
  }
  ```
## Install Prettier
Because i already use Prettier with VSCode, i just installed a few dependencies with ```npm i -D prettier eslint-config-prettier eslint-plugin-prettier``` and then update the extends in the .**eslintrc** file with:
``` "extends": [ "airbnb", "plugin:prettier/recommended" ] ```

## Navigation Bar
* Create:
 * a ```<NavBar />``` component which renders a ```<div>```, and import it into your ```<App />```
 * a ```NavBar.css``` file in ```/styles```
 * add logo image inside the <div>
 * add an unordered list inside the <div> with two list elements to  your <ul>. Each list item will be a hyperlink, one with the text "View Properties" and the other with "Add a Property"

**At this point, our app will crash, because hyperlink comes with some import and installations for the browser**.

run ```npm install --save react-router-dom ```
In NavBar.js: ```import { Link } from "react-router-dom";```
In index.js: ``` import { BrowserRouter } from "react-router-dom";```. And wrap App inside ```<BrowserRouter />``` 
So that our App is rendered in *index.js* thus;
``` ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
``` 
We will create two components ```<Properties /> (Homepage) & <Addproperties /> (another page)```

In App.js: ```import { Route, Switch } from "react-router-dom"; ```. And wrap * our ```<Route />``` paths components in ```<Switch />``` component. So that *App.js* looks like so;
```
function App() {
  return (
    <div className="App">
      <h2>Surreal Estate</h2>

      <NavBar />
      <Switch>
        <Route exact path="/" component={Prpoperties} />
        <Route path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
```
Warapping *Route* in *Switch* make sure that only the page displayed in our browser is the specific page for the *Route path we intend to be*  
```<Switch>``` will render a route exclusively, if there are two componets with the same path, it renders the the first matching one. In contrast to using ```<Route>``` on its own which renders all the matching route inclusively.

Next, we transform ```AddProperty component ``` into a *form, with input field and button* (as controlled components). The form has an initialState of ```key:value pair``` (fields: title: "", .....) So that when the user is typing & before the button is clicked, ```handleFieldChange() function``` is called and updates what happens in that form based on user input. And when the *submit button* is clicked, ``` handleProperty() function``` is called and controls what has happened in that form on subsequent user input.

We created ```AddProperty component```  using ```useState()``` react hook to keep track of the changes in our ```AddProperty component function & form```

Fill out your form and click the "Add" button. If everything is done correctly then you should see an object logged out to the console which has key/value pairs matching your ```<input>/<select>``` names and values:

```
{title: "4 bed house, type: "semi-detached,...}```
 4 bed house
 Semi-Detached
 bathrooms: "2"
 bedrooms: "4"
 city: "Manchester"
 price: "700000"
 email: "myemail@email.com"
 ```

Next, API:
We are going to be making use of an already made API.


clone down the repo:


```git clone git@github.com:MCRcodes/surreal-estate-api.git your project folder name```, ```cd project folder name``` & 
```npm install```


If you dont already have **Docker Engine** on your computer. Install Docker with: 
```sudo apt install docker.io``` 
Check if docker is installed:
 ```docker --version```


Run this command to download the current stable release of Docker Compose: 


```sudo curl -L "https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose```


Apply executable permissions to the binary:
```sudo chmod +x /usr/local/bin/docker-compose```


Test if Docker Compose is installed:
```Run: docker-compose --version```
```docker-compose version 1.26.2, build 1110ad01```


* As we will be runnning a pre-configured version of the API app and the required database with docker-compose.
    * Alternately, you can run the app in detached mode by runninng 'docker-compose up -d' from the root of this project
    You will not see any output from the containers in detached mode. You can check their logs with ```docker-compose logs SERVICE_NAME```
* Once docker-comopse is installed, you can start the app and database by running ```docker-compose up``` from the root of this project. **In a new terminal tab, change directory into the API folder and run *docker-compose up*. This process fires up a local express server connected to a remote MongoDB database, so you'll need to keep this process running (don't close the tab).**

* You can stop the containers with ```docker-compose stop``` in the root of this project
* You can start them again with ```docker-compose start```
* You can tear down all the containers with ```docker-compose down```, or 
```ctrl c in ther terminal window, if not running in detached mode```

* if you get the following error:

```
ERROR: for surreal-estate-api_express-app_1  Cannot start service express-app: driver failed programming external
connectivity on endpoint surreal-estate-api_express-app_1 (6c4ab9630051beb9ad4e9c3dfa5091a70fd82e151b019a64723eb438f0f0ee1c): 
Bind for 0.0.0.0:4000 failed: port is already allocated
```
It means something else is using that port. To solve this problem open docker-compose.yaml (in surreal-estate-api directory) and change 4000 to other port, then run docker-compose up again.


To check in which port your API is running, run this at the terminal:
``` express-app_1  | Surreal Estate API is running on :<PORT NUMBER> ```


```
 Visit *http://localhost:4000/api-docs*
 ```

At this point, we can test our form submission with *POSTMAN*, doing CRUD (CREATE/POST, READ/GET, UPDATE/PUT/PATCH & DELETE) requests.



REQUESTS WITH AXIOS:

Now lets use axios to make the bove requests. 
* good shout if we can proceed from now on with TDD

We're going to create an ```<Alert />```component:
* It will take 2 props:
     * message a string of the text to display,
     * success a boolean, alert will be green if true by default, but red if false (which means there was an error).

Alert will let the user know the form submission was successful or unsuccessfull

Importing and validating with ```prop-types``` and  Our ```<Alert />``` will look like so;


```
const Alert = ({ message, success }) => {
  if (!message) return null;

  return (
    <>
      <div className={`Alert alert-${success ? "success" : "error"}`}>
        {message}
      </div>
    </>
  );
};

Alert.propTypes = {
  message: Proptypes.string.isRequired,
  success: Proptypes.bool,
};
Alert.defaultProps = {
  success: false,
};
export default Alert;
```


**Make some GET requests*



NEXT...

We are going to create a ```<PropertyCard />```, and use ```useEffect() hook``` to GET(request) *property listings* from the ```<Properties />```(component we created earlier)from the API & render ```<PropertyCard />``` for each property.

We will also pass ```<PropertyCard />``` some dummy values for its props(title, type, bathrooms, bedrooms, price, city, & email), so we can view and style what we expect from our GET request from the API.

## Installations for <PropertyCard />
``` npm i -S prop-types as project dependency```
*import PropTypes from "prop-types"*
```
npm i --save @fortawesome/fontawesome-svg-core
npm i --save @fortawesome/free-solid-svg-icons 
npm i --save @fortawesome/react-fontawesome
```
*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";*
*import { faBath, faBed, faEnvelope } from "@fortawesome/free-solid-svg-icons";*
*import "../styles/PropertyCard.css";*

Now to the ```<Properties />``` component. We are going to do something similar to what we did with ```<AddProperties />```, using Axios, alert, but this time we will be making our Axios GET request inside ```useEffect() hook```

We use ```useEffect() hook``` when we are expecting something else to happen after the rendering of a component. In this usecase, we are using ```useEffect()``` to make an ```https call``` (as the 1st parameter of useEffect), and once that is rendered, the second parameter would be triggered
```useEffect(() => {
  1st param
  }, [2nd param])
  ```
***NOTE*** useEffect() can be customised with ```if statement```. This will be used to ```setLoading``` for our page later.

And we are going to map over the ```properties``` state, and pass each *key/value pair* from each *property listing* to the ```<PropertyCard />``` component as props and and render it inside our ```<Properties />``` return fragment. 
```
return (
    <>
      <div>
        <Alert message={alert.message} success={alert.isSuccess} />
        {properties.map((property) => (
          <PropertyCard key={property._id} {...property} />
        ))}
      </div>
    </>
  );
  ```
  **Without spread operator:**
  ```
 <PropertyCard 
    key={property._id} 
    title={property.title} 
    bathrooms={property.bathrooms} 
    bedrooms={property.bedrooms} 
    type={property.type}
    email={property.email}
    city={property.city}
 />
```
You can test the ```<Alert />``` by killing your API process(```ctrl c``` in ther terminal window of the API container )

## Filtering by City

We need to filter our properties by city, so we create a ```<SideBard /> component``` containing the city ```links```. SideBar component is rendered by **properties path in App.js** 

When any of these ```city link``` is clicked, the address bar is updated. We want to hook into this update with the ```<Properties /> component``` to make a new request to the API. We start this by destructuring ```{ search } from useLocation()``` and assigning ```search``` to ```useEffect()``` as the second argument.
  * A React component re-renders every time props or state change and upon each re-render this hook will check if this re-render was caused by search changing. If yes, it will run any code inside the inline function, otherwise it will do nothing.

## Sorting by price

We want to be able to ```sort (price asc & decs)```   with the ```sort``` query parameter, and combined it with ```filtering-by-city``` we have done using the ```query``` query parameter.

*This is done with ```?sort={"<field_to_sort_by>":1} (1 is sort ascending, -1 is sort descending).```*
**There's one small spanner in the works for this one...if you link to ```?sort={"price":1}``` then you can't link to a ```city```. We therefore need to find a way to combine the query parameters so we have a query string like: ```?query={"city":"Exeter"}&sort={"price": 1}```**

```Install:
npm i qs
Into <Sidebar />: import qs from "qs";
```

## Search by Title

Now lets give our ```SearchBar``` component a search capability.  We have previously been able to filter with query parameter as thus: 

```?query={"city":"Exeter"}``` 

Our search form will be able search like so: 

```?query={"title":{"$regex":"<search_query_here>"}}```
So with ```$regex``` being the key, if we pass a an ```object as the value: e.g *bungalow*```, our regex search will match *bungalow* against part of the field's value.
So if we did: ```?query={"title":{"$regex":"bungalow"}}```
Then we'd get back all properties with the word *bungalow* in the title. 

This search functionality is not an advanced one like **Elastic Search**.

```
  *Note: import { useHistory } from "react-router-dom";*
  *useHistory() will change the URL to our new query string returned from the buildQueryString() function.*
```
## Single sign-on
We're going to use Facebook's JavaScript API to implement SSO into our application.

``` Run: npm install react-facebook-login 
         import FacebookLogin from 'react-facebook-login';
         npm install react react-dom react-facebook-login --save --force
```
This step needs registration for a *fb dev account* to get an ``appId``
We will modify our ```<FacebookLogin /> component``` to look like this; 

If the ```userID``` prop has a truthy value, then show a ```sign out button``` with the text **"Sign Out"**, otherwise show the ```<FacebookLogin /> component```.
```
<form className="fb-sign-in-form">
            {userID ? (
              <button type="submit" onClick={onLogout}>
                <FaSignOutAlt />
                Sign Out
              </button>
            ) : (
              <FacebookLogin
                appId="2769895153231866"
                autoLoad={false}
                fields="name,email,picture"
                callback={onLogin}
                cssClass="facebook-login-class"
              />
            )}
 </form>
```
Rendering the login component in ```<App > componet```, we have;

```
function App() {
  const [userID, setUserID] = useState("");

  const handleLogin = (response) => {
    setUserID(response.id);
  };

  const handleLogout = () => {
    window.FB.logout(() => setUserID(""));
  };

  return (
    <div className="App">
      <NavBar onLogin={handleLogin} userID={userID} onLogout={handleLogout} />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/properties" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
      </Switch>
    </div>
  );
}
```
***Note: I have moved ```<SideBar /> component``` to be rendered under ```<Properties /> component``` where it belongs.*** 

## Saving Properties(Favourites component)
We will be changing our component-based approach to routing. From:
```
<Route path='/' component={} />
```
To:
```
<Route
  path='/'
  render={(props) => (
    <Properties {...props} userID={userID} />
  )}
/>
```
Here we are passing our ```userID state``` to be rendered via ```<Properties /> component route```

This is possible because with react ```<Router />```, you can pass a prop to a component being rendered by React Router, so, to do this, instead of using ```Routes component prop```, **we use**, ```render prop```. 
The ```render prop``` takes a function which gets passed the *React Router props* as an argument, and returns a ```rendered component```. Here we render the ```<Properties /> component```, pass in the default React Router props (i.e. history, location etc.) and a ```userID prop``` set to our ***```userID state```***.

With render, you’re in charge of creating the element and can pass the component any props you’d like.
```render``` accepts a *functional component* and that function won’t get ***unnecessarily remounted*** like with component(*that results in the existing component unmounting and the new component mounting instead of just updating the existing component.*). That function will also receive all the same props that component would receive so you can pass those through to the rendered component.

* In the ```<Properties />``` component, pass the   
  userID prop down to the ```<PropertyCard />``` component as a prop.
* Add a "Save" button to your ```<PropertyCard />```  
  component. It should only show if userID is truthy.
* In your ```<Properties />``` component, create a 
  function on the class called handleSaveProperty(). It should have a parameter of propertyId.
* Inside the handleSaveProperty() function, make 
  a ```HTTP request``` to create a new Favourite
* Pass the handleSaveProperty() function to ```<PropertyCard  >``` as a prop called onSaveProperty.
* In the <PropertyCard /> component, call the onSaveProperty() 
  method when the "Save" button is clicked, passing in the _id of the property as an argument.
```<button
          href="#"
          className="save-button"
          type="button"
          onClick={() => onSaveProperty(_id)}
        >
   </button>
```

* Using *POSTMAN*, try out the "Save" button to make sure our  
  POST request to ```<Favourite />``` is succesful.
  ```localhost:4000/api/v1/Favourite?populate=propertyListing```

## Favourite Component
Lets create our ```<Favourites.js />``` & ```route``` it so that when we click on ```<Favourite /> Link``` will, we will be making a ```GET request``` to see our *Favourite Properties*
* ```... .get(
        `http://localhost:4000/api/v1/Favourite?query={"fbUserId":"${userID}"}&populate=propertyListing  `
      )...
      ```
* And a delete function, to remove from *Favourite Properties*:
  ```const handleDeleteFavourite = (favouriteId) => {
    axios
      .delete(`http://localhost:4000/api/v1/Favourite/${favouriteId}`)
  ```


Finally, we need to create ```<FavouriteCard.js />``` on which our *Favourite Properties* will arive, with the *Remove* button.


## TESTING
Just to briefly discus a few selected advance testing. Testing some components such as the ```<FacebookLogin /> being rendered under <NavBar /> component```, is not as straight forward. This is because we need to account for the error message in ```FacebookLogin```. In doing so, by using ```<ErrorBoundary />``` - wrapping it around ```<FacebookLogin />```, we are making sure the rendering of ***Error*** message is part of the snapshot collected by ```asFragment``` component snapshot.































Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
