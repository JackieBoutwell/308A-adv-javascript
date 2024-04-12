// Using AJAX involves creating a new XHR object to begin your request:

// const request = new XMLHttpRequest();

// The first parameter of open is the HTTP request method supported by the server you're
// communicating with.There are many possible request methods, but the most commonly used
//  are GET, POST, PUT, and DELETE.
//  As per the HTTP standard, request methods should be entirelycapitalized.
// The second parameter of open is the URL that the request will be sent to.
//  It is important to note that requests cannot be made to third - party domains by default ;
//  in order to do so, you need the proper Cross - Origin Resource Sharing(CORS)
//   headers included in the request.More on this later.
// The third parameter of open is optional, and defines whether the request is asynchronous
//     (default true).Asynchronous requests allow the code on your webpage to continue
//     executing even while waiting for the response from the server
//     (which could take an unknown amount of time).
// The send method takes a single parameter containing the data(if any)
// that you want to send to the server as part of a POST request.

// request.open("GET", "http://www.example.com/myFile.json", true);
// request.send();

// If you want to POST data, you may have to set the MIME type of the data being sent.
// To do so, use the setRequestHeader method of the XHR object before your send call.

// request.setRequestHeader(
//     "Content-Type",
//     "my-MIME-type-here"
// );

// The XHR object comes with an event listener called onreadystatechange,
//     which we can assign a function to handle the response as appropriate.

// This event will fire each time the readyState value of the request object changes.
// The value of readyState also allows us to include specific logic within
// our event handler function cooresponding to the current state of the request, as follows:

// 0(uninitialized) or(request not initialized).Client has been created.open()
//  not called yet.
// 1 (loading) or (server connection established). open() has been called.
// 2(loaded) or(request received).send() has been called, and headers and status
// are available.
// 3 (interactive) or (processing request). Downloading; responseText holds partial data.
// 4 (complete) or (request finished and response is ready). The operation is complete.

// Each of these values also cooresponds to a static property of the
// XMLHttpRequest object, which can be used to make our code more readable:

// 0: XMLHttpRequest.UNSENT
// 1: XMLHttpRequest.OPENED
// 2: XMLHttpRequest.HEADERS_RECEIVED
// 3: XMLHttpRequest.LOADING
// 4: XMLHttpRequest.DONE

// function handleResponse() {
//     if (request.readyState === XMLHttpRequest.DONE) {
//         // request is complete; do tasks.
//     } else {
//         // request is not complete.
//     }
// }

// request.onreadystatechange = handleResponse;
// The two options for accessing the response data are request.responseText,
//     which contains the response as a string of text, and request.responseXML,
//     which contains the response as an XMLDocument object that can be traversed
// with JavaScript DOM functions.

// Here, we'll discuss a simple example that demonstrates what we've discussed so far.Feel
// free to follow along by creating two files within the same directory, as described below.

// Example is in index.html and test.js

// Here, we create a button that calls testRequest when clicked, which creates a request handled
//  by alertResponse.If the reponse returns a status of 200(which means OK), we send an alert
// with the text contents of the response.

//     We've added the extra step of checking the response status in this example,
//     which is good practice.See this reference for a list of potential response statuses.
//     Note that because we are accessing the response status, an exception may be thrown in the
//      event that there is a communication error(like the server being unavailable).
// You can mitigate this by wrapping your logic in a try...catch statement.



// Working with XML option 1:

// The previous example shows how to easily display contents as text,
//  but most data is more complex.If we converted test.html into a proper XML file and
//   named it test.xml, we could handle the response with request.responseXML
// and make use of familiar JavaScript DOM methods.

// test.xml

// <?xml version="1.0"?>
// <root>XML data test!</root>

// index1.html
// see page

//Let's modify the example we've been working with to send data from a form.
// First, add the following simple text input field:

// <label>
//     Input:
//     <input type="text" id="myInput"  />
// </label>

// We also need to ensure this data gets sent in our request, so we need to modify
// both the open and send method calls.For this example, we'll be using a free fake API
// located at "https://jsonplaceholder.typicode.com/todos."
// You can click on this link to see how the data we receive will be structured.



//request.open("POST", "https://jsonplaceholder.typicode.com/todos");
// request.setRequestHeader(
//     "Content-Type",We also need to ensure this data gets sent in our request, so we need to modify both the open and send method calls. For this example, we'll be using a free fake API located at "https://jsonplaceholder.typicode.com/todos." You can click on this link to see how the data we receive will be structured.
//     "application/x-www-form-urlencoded"
// );

// let inputVal = document.getElementById("myInput").value;
// let encodedVal = encodeURIComponent(inputVal);
// request.send(`data=${encodedVal}`);

// Since this is a POST request, the status we get back also might be different.
//  If we test our code now, we'll see that receive a status of 201 Created.
//  This is still a successful response, so we'll want to modify the way our code checks status.
//  While we're at it, we'll also change the way we read the response to.responseText.

// if (request.status === 200 || request.status === 201) {
    // alert(request.responseText);
    // omitted other code

    // Another test would reveal that we're getting a response
// that contains a JSON object that looks like this:
    
// {
//     "data": "Testing",
//     "id": 201
// }

// Our POST request has created a new object on the server with a data value of whatever
// we entered into our text field and an unique id field.Since this is a fake API, these
// changes won't actually occur in the external database, but in the case of a real API we
// would then be able to GET our newly created resource, or modify it and existing resources
// with PUT, PATCH, DELETE, and so on

// If we needed to parse this new object, how might we go about doing so?

// No matter what language or technology is being used by a server, the client has the tools
//  to handle requests and responses.It is important that you research any APIs you may a
//  ccess during your projects, as the only thing that is guaranteed is that no two APIs are
// identical.Formatting, data types, response times... everything can vary.

// There are some tools and interfaces that can make these processes simpler and more intuitive,
//     including the Fetch API and Axios, which we will discuss in this lesson.

// The Fetch API option 2:

// The Fetch API is a more powerful and flexible replacement for the XMLHttpRequest object.
// These two options for communication are not the only ones,
//     and you will likely run into many other tools, interfaces,
//     and libraries that accomplish similar goals as you continue learning.
//         The fundamentals, however, remain the same.

// The fetch() method, which is a global method available in both the Window and Worker contexts
//     (available to use almost anywhere), takes a single argument in its simplest form:

// async function logJSONData() {
//     const response = await fetch("http://www.example.com/something.json");
//     const jsonData = await response.json();
//     console.log(jsonData);
// }

// fetch() does not directly return the JSON response body,
// but instead a Promise that resolves with a Response object
// The Response object is a representation of the entire HTTP response,
//     so the json() method is used to extract the JSON body content from the Response
//         (which returns a second Promise that resolves with the parsed JSON data).

// The Response object has other instances methods that you should reference when needed:

// Response.arrayBuffer()

// Returns a promise that resolves with an ArrayBuffer representation of the response body.
// Response.blob()

// Returns a promise that resolves with a Blob representation of the response body.
// Response.clone()

// Creates a clone of a Response object.
// Response.formData()

// Returns a promise that resolves with a FormData representation of the response body.
// Response.json()

// Returns a promise that resolves with the result of parsing the response body text as JSON.
// Response.text()

// Returns a promise that resolves with a text representation of the response body.

//  a post request sends data

// JSON.stringify(obj)

// turns the obj into a stringify
// '{"data":""}'

// and parse to change back into an obj.
// JSON.parse

// Caniuse.com to see if fetch is compatiable with the brower you are using.

// Axios option 3:

// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

// The simplest syntax for making an Axios request is axios(url),
//     but there are many configuration options that can be used to change the
//     behavior of a request.These configuration options can be passing into an\
// axios() call through an object containing one or more properties,
//     as described below
//     (taken from the Axios documentation).The only mandatory property is the url.
//axios.post(url)
//axios.get(type in the url here)
//  you just need this method.

// often you don't need method post or stringify we just ask request body.
//requestBody, {}

// and inculde url with any configuration you need.

// axios.request(config)
// axios.get(url[, config])
// axios.delete(url[, config])
// axios.head(url[, config])
// axios.options(url[, config])
// axios.post(url[, data[, config]])
// axios.put(url[, data[, config]])
// axios.patch(url[, data[, config]])
// axios.postForm(url[, data[, config]])
// axios.putForm(url[, data[, config]])
// axios.patchForm(url[, data[, config]])
// Note that the url, method, and data properties
// do not need to be specified within the config object when
// using an alias that includes them elsewhere.

// Axios vs. Fetch
// The basic syntax of each is
// very similar, with mostly small differences.
// Axios automatically serializes data when sending
// JavaScript objects to the server using POST; fetch does not.
// Axios makes the response available as JSON by default,
// whereas with fetch you much use the.json() method to acquire th
//  body of the response.
// Axios will automatically reject a promise if it receives
// an HTTP status code outside of the range of success(200 - 299)
//  allowing us to handle HTTP errors in catch () blocks.
//  Fetch will still resolve unsuccessful responses, which means that HTTP
//   errors need to be handled separately.

// Intercepting Requests and Responses

// Interceptors allow us to create global behavior for all requests and responses.
// Interceptors fire between actions.A request interceptor can modify a request
//  before it is actually sent, and a response interceptor can modify the response
//  before it is handled by a then() or catch () statement.

// This is best described with examples.First, let's look at how to build a simple
//  interceptor that logs a message to the console every time a request is sent:


// // axios.interceptor.request.use(request => {
//   console.log('Request sent.');
//   return request;
// });


// If we wanted to log messages for our server responses,
//     we could do something similar using the .response property:


// axios.interceptor.response.use(
//   (response) => {
//     // Success: status 200 - 299
//     console.log('Successful response!');
//     return response;
//   },
//   (error) => {
//     // Failure: anything outside of status 2XX
//     console.log('Unsuccessful response...');
//     throw error;
//   }

// If you need to dynamically create and remove interceptors within your application, you can.The method for removing an interceptor,
//  .eject, requires that interceptor to be assigned to a variable:


// const requestInterceptor = axios.interceptor.request.use(request => {
//   console.log('Request sent.');
//   return request;
// });

// axios.interceptor.request.eject(requestInterceptor);


// Let's discuss some more practical use cases.
//  What if we wanted to time every request we made ?
//     We could create request and response
//  interceptors to incorporate that data into our request and response objects:

// axios.interceptors.request.use(request => {
//     request.metadata = request.metadata || {};
//     request.metadata.startTime = new Date().getTime();
//     return request;
// });

// axios.interceptors.response.use(
//     (response) => {
//         response.config.metadata.endTime = new Date().getTime();
//         response.config.metadata.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;

//         console.log(`Request took ${response.config.metadata.durationInMS} milliseconds.`)
//         return response;
//     },
//     (error) => {
//         error.config.metadata.endTime = new Date().getTime();
//         error.config.metadata.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;

//         console.log(`Request took ${error.config.metadata.durationInMS} milliseconds.`)
//         throw error;
// });


// We'll take a moment here to note that while we're using request and response to make it very clear what we're dealing with, you will often see the variables req and res to coorespond to these two items in a true development environment.

// If we wanted this information to be immediately available to our handler
// functions, we could place it directly within our response object instead
// of in a metadata field.
// We could then access it easily through object destructuring:

// axios.interceptors.request.use(request => {
//     request.metadata = request.metadata || {};
//     request.metadata.startTime = new Date().getTime();
//     return request;
// });

// axios.interceptors.response.use(
//     (response) => {
//         response.config.metadata.endTime = new Date().getTime();
//         response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
//         return response;
//     },
//     (error) => {
//         error.config.metadata.endTime = new Date().getTime();
//         error.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;
//         throw error;
// });

// (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';

//     const { data, durationInMS } = await axios(url);
//     console.log(`Request took ${durationInMS} milliseconds.`);
//     console.log(data);
// })();

// Some other common usages for Axios interceptors include server authentication
// handling, especially when authentication tokens need to be periodically refreshed
//  without having the user re - authenticate every time; and retrying failed 
//  requests a specified number of times.Like most common tasks in programming,
//     the latter has already been packaged into multiple plugins: axios - retry
//      and retry - axios.

//     It's important to note that you can do anything with fetch() that you can with 
// Axios.Axios does not create new possibilities,
//     it simply gives you access to pre - made, streamlined solutions to common problems.
//     If you wanted to, you could implement the entirety of Axios's functionality using 
//     the fetch API, but it would be more difficult and time - consuming to do so