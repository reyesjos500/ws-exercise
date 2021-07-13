# ws-exercise
Hands-on exercise to test API

# System requirements
OS: Mac or Linux\
Runtime environment: Node.js

# Install

## 1. git clone repo
### 2. In terminal type: 
## npm i

# Run tests: 
Execute the following command
## npm run test:cli

# Create Report HTML
Execute the following command:
## npm run create:html:report
report location:  /TestReport

# Test Suites

## 1. Currencies
Test Case 1: Assert Status 200\
Test Case 2: Assert Content Json\
Test Case 3; Assert Body is not null\
Test Case 4: Assert expected list of currencies (/data/currencies_latest.json) are listed in API call 

## 2. Currency List with EUR as base currency
Test Case 1: Assert Status 200\
Test Case 2: Assert Content Json\
Test Case 3; Assert Body is not null\
Test Case 4: Assert expected list of currencies (/data/currencies_eur_latest.json) are listed in API call 

## 3. Currency Values
Test Case 1: Assert Status 200 for Positive Tests\
Test Case 2: Assert Status 403 for Negative Tests\
Test Case 3: Assert Body is not null for Positive Tests 
