// @flow

import {
    homePage,
    helloPage,
    helloAsyncPage,
    helloEndpoint,
} from './controller'

import {
    HOME_PAGE_ROUTE,
    HELLO_PAGE_ROUTE,
    HELLO_ASYNC_PAGE_ROUTE,
    helloEndpointRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
    app.get(HOME_PAGE_ROUTE, (request, response) => {
        response.send(renderApp(request.url, homePage()))
    })
    .get(HELLO_PAGE_ROUTE, (request, response) => {
        response.send(renderApp(request.url, helloPage()))
    })
    .get(HELLO_ASYNC_PAGE_ROUTE, (request, response) => {
        response.send(renderApp(request.url, helloAsyncPage()))
    })
    .get(helloEndpointRoute(), (request, response) => {
        response.json(helloEndpoint(request.params.num))
    })
    .get('/500', () => {
        throw Error('Fake Internal Server Error')
    })
    .get('*', (request, response) => {
        response.status(404).send(renderApp(request.url))
    })

    // eslint-disable-next-line no-unused-vars
    app.use((err, request, response, next) => {
        // eslint-disable-next-line no-console
        console.error(err.stack)
        response.status(500).send('Something went wrong!')
    })
}

