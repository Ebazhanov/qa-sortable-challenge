#
# Testing image
#
FROM  cypress/browsers
# dependencies will be installed only if the package files change
WORKDIR /code
COPY . ./

WORKDIR .
# by setting CI environment variable we switch the Cypress install messages
# to small "started / finished" and avoid 1000s of lines of progress messages
# https://github.com/cypress-io/cypress/issues/1243
ENV CI=1
RUN npm ci
# tests will rerun if the "cypress" folder, "cypress.json" file folder
# has any changes
# copy tests
RUN npx cypress verify
# copy what to test
COPY cypress .
COPY cypress.json .
