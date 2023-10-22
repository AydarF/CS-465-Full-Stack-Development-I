## CS-465 Full Stack Development I
Project Reflection

### Architecture

•	Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

A section of the website utilized Express, HTML, and JavaScript for rendering pages. Routes and controllers were established to manage browser requests sing Express and JavaScript. Express would either fetch a static HTML page or dynamically generate the requested page by populating Handlebars templates with database data. These tools cooperated to handle server requests and deliver results to the client-side frontend. In contrast, the Angular part of the project operated differently. Upon the initial page load, the entire single-page application (SPA) was transmitted to the client. All page rendering and code execution occurred on the client side in the browser. Backend calls were only necessary to retrieve data from the database. While Express involved numerous server calls each time a page was loaded or refreshed, a SPA took longer during the initial load to obtain all the code from the backend. However, after this initial load, no additional server calls were required when navigating between pages within the SPA.

•	Why did the backend use a NoSQL MongoDB database?

MongoDB exhibits strong scalability and efficient query performance. MongoDB can provide high-performance data retrieval and storage, especially for read-heavy operations. Its use of document-based storage is well-suited for certain types of applications.This database system excels in handling data in a format that closely mirrors JSON, making it a highly compatible choice for integration with frontend applications. MongoDB's JSON-like document format is familiar to developers and can ease the development process, as it aligns well with modern programming languages and frameworks. Its ability to seamlessly adapt to the structure of JSON data offers a significant advantage in streamlining interactions between the backend and frontend components of web applications.

### Functionality

•	How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON serves as a important link for data exchange between frontend and backend components in modern web apps. JSON and JavaScript are related but different in their nature and usage. JSON is a lightweight data format, distinct from the JavaScript programming language. It is primarily used for data representation and communication between systems. JSON has a strict and simple syntax, primarily consisting of key-value pairs, arrays, and data types like strings, numbers, and booleans. JSON is not a programming language; it's a data format. It is language-agnostic and can be used with a variety of programming languages, not limited to JavaScript. JavaScript, a programming language. It powers both frontend and backend development, enabling dynamic web behavior. It is used for building dynamic and interactive web applications, both on the frontend and backend. JavaScript has a more extensive and complex syntax compared to JSON, with support for functions, control structures, and object-oriented programming. JavaScript is used for creating the logic and behavior of web applications. It can manipulate JSON data and use it to create dynamic web pages. JSON is often used as a common format for data exchange between the frontend and backend of a web application. When a user interacts with a frontend interface (e.g., a web page), the frontend sends requests to the backend to fetch or submit data. This data is typically formatted as JSON. JavaScript on the frontend initiates requests and parses JSON responses for user interface updates. On the backend, server-side code processes these requests, often involving JSON data manipulation, facilitating data retrieval and updates.

•	Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components

An instance of enhancing functionality through refactoring included the substitution of static HTML pages with Handlebars templates. This alteration enabled the reusability of page structures, making it possible to modify displayed content. Another refactoring effort centered on relocating the data used to populate templates from static JSON files stored in the codebase to MongoDB. This transition empowers the addition or modification of content data without necessitating website deployment or code alterations.

### Testing

•	Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

HTTP methods represent various ways in which a client can interact with a server, allowing for different types of requests and actions. The most prevalent HTTP methods encompass GET, POST, PUT, and DELETE. These methods serve as the channels through which clients can communicate with the server, triggering specific actions or retrieving information from it. In the context of this full-stack application, security plays a pivotal role. It involves the process of user authentication and the issuance of a valid JSON Web Token (JWT). This JWT serves as a key to unlock access to certain API endpoints, ensuring that only authorized users can utilize these endpoints for various functionalities and data retrieval. This robust security mechanism safeguards sensitive operations and data within the application.

### Reflection

•	How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course has expanded my knowledge in full-stack development. I had some previous Node and Express experience before, but this course still provided me with invaluable insights, offering a holistic understanding of how the various components of a full-stack application seamlessly integrate. Furthermore, my proficiency in JavaScript has improved through the hands-on practice this course has provided. Notably, it granted me more opportunity to leverage JavaScript on the backend. Given that many job listings require expertise in Node, this knowledge in this sought-after skill is highly advantageous, enriching my skill set in response to industry demands.
