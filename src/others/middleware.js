// Middleware: Verify request, next send response.
// app.use((req, res, next) => {})
// req: request --> headers needed (ex: api-key)
// res: response stream
// next: Determines if the request is OK and you're to process it. If isn't
// called, the request process stops. Good practice: Tell why that happened.

/* Request pipeline
 * If you have routes that could benefit from having 
 * middleware run pre or post a request, set it up so that:

 ** Middleware that needs to run before the request 
 ** (pre request) is defined before the actual request.
 
 ** Middleware that needs to run after the request 
 ** (post request) is defined after the actual request. */

// Pre-request example:
app.use((req, res, next) => {
    // pre request
})
app.get('/protected-resource', () => {
    // handling the actual request
})

// post-request example
app.use((req, res, next) => {
    // post request
})
app.get('/login', () => {})

// You can also run pre request middleware code as 
// an argument to the request handling:
  app.get(
    '/<some route>',
   () => {
     // pre request middleware
   }, () => {
     // handling the actual request
   })