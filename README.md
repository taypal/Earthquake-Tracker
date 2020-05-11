# Earthquake Tracker

## Overview

This web application allows a user to search for earthquake data for a specific location. The search displays a map showing the location of all returned earthquake events along with a card showing data for each event. All of this information is displayed on the page in an easy to read dashboard format. The styling of the page was done using bootstrap.

### Gallery

![Demo](client/public/assets/images/searchEarthquakes.gif "Earthquake Search")

![Demo](client/public/assets/images/responsive.gif "Earthquake Search")

## Tech and Features Used


| Feature       | Summary                                                                                                  | 
| ------------- | -------------------------------------------------------------------------------------------------------- |
| React JS | Built using react
| Bootstrap CSS Framework | Used Bootstrap to style                               |
| Javascript    | Used Javascript to update main index.html with resort weather information, recent tweets and a google map. |
| USGS Earthquake API | USGS API used to retrieve earthquake data that was rendered to display event data |

|Google Maps API| Google maps API allowed us to embed a map we used to display a marker for each earthquake event and the user input search location |


## How to use
* Click on "Sign In" and click on the "Sign Up" tab. 
* Enter an email address and password you would like to use. 
* You will be redirected to the Home page after signup. 
* Click on "Dashboard"
* Perform a search by entering the Latitude, Longitude, Magnitude and Search Radius. 
* Search will appear on the map and the cards will update with relevant earthquakes. 
* The blue target marker is the coordinates of your search. The surrounding orange markers are the coordinates of earthquakes. The 12 most recent earthquakes are shown. 

## Known Bugs
* Refreshing the "Dashboard" will cause a "404 not found" as the server attempts to handle the route and not the React Router.

## Hosted

This site is hosted courtesy of Heroku.

To view the site please click [here](https://epicenter-earthquake-tracker.herokuapp.com/).

