# Earthquake Tracker

## Overview

This web application allows a user to search for earthquake data for a specific location. The search displays a map showing the location of all returned earthquake events along with a card showing data for each event. All of this information is displayed on the page in an easy to read dashboard format. The styling of the page was done using bootstrap. Forecast information is based on 1:00pm local time for the present day at the resort. 

### Gallery

![Demo](client/public/assets/images/searchEarthquakes.gif "Earthquake Search")

![Demo](client/public/assets/images/responsive.gif "Earthquake Search")

## Tech and Features Used


| Feature       | Summary                                                                                                  | 
| ------------- | -------------------------------------------------------------------------------------------------------- |
| Materialize CSS Framework | Used Materialize to style and index.html and make it responsive.                              |
| Javascript    | Used Javascript to update main index.html with resort weather information, recent tweets and a google map. |
| JQuery        | Used JQuery to simplify working with DOM and perform ajax API calls.                             |
| Weather Unlocked API | Robust third party weather API that includes snow reports and forecasts for resorts. The subscription tier used meant that we needed to control what resorts users can search. This was done with a drop down that is tied to an array of searchable resorts. |
|Twitter Open API| Twitter open API allowed us to embed tweets from any twitter handle. We tied this to the array of resorts we created to allow us to display tweets from any resort in the future provided they have a twitter handle.|
|Google Maps API| Google maps API allowed us to embed a map that centers around and marks a designated location. This is also controlled by our resorts array. |


## How to use
* Ask yourself "Should I go skiing today?"
* Select ski resort from drop down list of available resorts
* Click "Should I Ski?"
* App presents dashboard info for a selected resort
* decide if you should go skiing today

## Known Bugs


## Hosted

This site is hosted courtesy of github pages.

To view the site please click [here](https://meta-byte.github.io/Ski_Resort_Weather_Report/).


## Contact Info

