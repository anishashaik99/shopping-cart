## :warning: Please read these instructions carefully and entirely first
* Clone this repository to your local machine:
  ```sh
  git clone <your-repository-url>
  cd <your-repository-folder>
  ```
* Use your IDE of choice to complete the assignment.
* Use JavaScript or preferably TypeScript to complete the assignment. Other languages will not be considered.
* Install dependencies:
  ```sh
  npm install
  ```
* Start the Price API by running the following command:
  ```sh
  npm run serve-products
  ```
  - Base URL: `http://localhost:3001/`
  - View Product: `GET /products/{product}`
* Once you complete the assignment:
  - Push your code to a public repository.
  - Send the repository link via email.
  - Ensure all code is pushed before replying to the email.
* There is no time limit for this task, but it typically takes around 3-4 hours.

# Begin the task

Write some code that provides the following basic shopping cart capabilities:

1. Add a product to the cart
   1. Specify the product name and quantity
   2. Retrieve the product price by issuing a request to the [Price API](#price-api) specified below
   3. Maintain cart state (totals, etc.)

2. Calculate the state:
   1. Cart subtotal (sum of price for all items)
   2. Tax payable (charged at 12.5% on the subtotal)
   3. Total payable (subtotal + tax)
   4. Totals should be rounded up where required

## Price API

The Price API is an HTTP service that returns the price details for a product identified by its name. The shopping cart should integrate with the Price API to retrieve product prices.

### Price API Service Details

- Start the Price API: `npm run serve-products`
- Base URL: `http://localhost:3001/`
- Get Product Details: `GET /products/{product}`

#### List of Available Products:
* `cheerios`
* `cornflakes`
* `frosties`
* `shreddies`
* `weetabix`

## Example
The following example illustrates correct values for validation:

### Inputs
* Add 1 × cornflakes @ $2.52 each
* Add another 1 x cornflakes @ $2.52 each
* Add 1 × weetabix @ $9.98 each
  
### Results  
* Cart contains 2 x cornflakes
* Cart contains 1 x weetabix
* Subtotal = $15.02
* Tax = $1.88
* Total = $16.90

## Tips on What We’re Looking For

* Simplicity is an architectural virtue and a development best practice. Solutions should reflect the difficulty of the assigned task without unnecessary complexity.
* We prefer simple, well-tested solutions over overly clever ones.
* Descriptive and unambiguous names for variables and concepts are appreciated.
* Atomic commits with descriptive messages will earn extra points.

### DO

* ✅ Include unit tests.
* ✅ Test both client and logic.
* ✅ Update the README.md with relevant information, assumptions, and/or tradeoffs.
* ✅ Provide instructions on how to test your solution.

### DO NOT

* ❌ Submit any form of application, such as web APIs, browser, desktop, or command-line applications.
* ❌ Add unnecessary layers of abstraction.
* ❌ Introduce patterns/architectural features that aren’t required, such as persistent storage.
