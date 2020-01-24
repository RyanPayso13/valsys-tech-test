# Valsys Front End Tech Test

This test comes with a toy API that returns a sample of the type of data we use on the Valsys front end. The challenge is to build a lightweight application that pulls and diplsays some information that can then be filtered by the user.

You can use any technology you think is appropriate, but the application should be viewable in the latest builds of Chrome and Firefox. For reference, our technology stack is based on React and Redux and Palantir's Blueprint library. We use `prettier` for code formatting.

## Running the mock API

##### Prerequisities:

- Node.js 10.x (though older versions should work)
- `npm` or `yarn`

##### Steps:

1. Clone this repository
2. At a command prompt, navigate to the `server` directory.
3. Run `$ npm install` or `$ yarn`
4. Run `$ node index.js`

## The Task

The API has two routes, `/summary` and `/free-cash-flow`. We would like you to build an application that shows both sets of data in a tabular format. 

The Summary Table should only display only the most recent year for any given fact. It does not need to be searchable or filter-able.

The Free Cash Flow Table should display information for every year. Items occurring after the `startYear` should be visually differentiated. Users should be able to filter the table by item name.

##### Bonus

Build a chart module that displays a line graph of the currently selected free cash flow item.

## Submitting

When you're ready to submit, upload the repository to a code hosting service like Github or Bitbucket and share it with us!

## Improvements 

Given more time, what improvements (if any) would you make to your code? Please include this in your repository.


