import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='container mt-3 border rounded p-3'>
                <h4>Differnce between javascript and nodejs</h4>
                <p className='text-left'>
                    Javascript is a lightweight, object-oriented scripting language that is used to build dynamic HTML pages with interactive effects on a webpage. JavaScript is also commonly used in game development and mobile app development. It is an interpreted scripting language, and the code can only be executed and run in a web browser. We can use Node.js to execute and run the code outside of the browser. It's also known as a browser's language, and it can be used for both client-side and server-side development. Brendan Eich of Netscape created it, and it was first published in 1995. The language was originally known as LiveScript before being renamed JavaScript. JavaScript's syntax is heavily influenced by the programming language C. The extension of JavaScript filename is .js
                </p>
                <p>
                    Node.js is a cross-platform, open-source JavaScript runtime environment that enables JavaScript to be run on the server. Node.js enables JavaScript code to run outside of the browser. Node.js comes with a large number of modules and is mostly used in web creation. It may run on various platforms including, Windows, Linux, Mac OS, etc. It provides a cross-platform runtime environment with event-driven, non-blocking (asynchronous) I/O for creating highly scalable server-side JavaScript applications.

                    Node.js was developed and introduced by Ryan Dahl in 2009. Node.js can be used to create a variety of applications, including web apps, real-time chat apps, command-line apps, and REST API servers, among others. However, it is mainly used to build network programs such as web servers. The standard filename extension of Node.js is .js
                </p>
            </div>
            <div className='container border rounded p-3 mt-1'>
                <h4>When should you use nodejs and when should mongodb?</h4>
                <p>
                    I believe Node.js is best suited for real-time applications: online games, collaboration tools, chat rooms, or anything where what one user (or robot? or sensor?) does with the application needs to be seen by other users immediately, without a page refresh.
                    I should also mention that Socket.IO in combination with Node.js will reduce your real-time latency even further than what is possible with long polling. Socket.IO will fall back to long polling as a worst case scenario, and instead use web sockets or even Flash if they are available.
                    But I should also mention that just about any situation where the code might block due to threads can be better addressed with Node.js. Or any situation where you need the application to be event-driven.
                    Also, Ryan Dahl said in a talk that I once attended that the Node.js benchmarks closely rival Nginx for regular old HTTP requests. So if we build with Node.js, we can serve our normal resources quite effectively, and when we need the event-driven stuff, it's ready to handle it.
                </p>
                <p>
                    MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas. As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents.
                </p>
            </div>
            <div className='container mt-1 p-3 border rounded'>
                <h4>Differnce between sql and nosql</h4>
                <p>
                    What is SQL?
                    Structured Query Language or SQL is a table-based relational database. By applying the SQL programming language, users can now search, insert, modify and delete data from the database records. This in no way limits the use of SQL. The services it supports are also not limited to the optimization or administration of the database
                </p>
                <p>
                    What is NoSQL?
                    NoSQL is a non-relational database or DMS without any fixed schema, while it is easy to scale. Distributed data stores that require a large quantity of data storage needs have a call for NoSQL. Big Data and real-time web apps make use of NoSQL
                </p>
            </div>
            <div className='mt-1 p-3 container rounded border'>
                <h4>What is the purpose of JWT and how does it work?</h4>
                <p>
                    JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.
                </p>
                <p>
                    An important part of token-based authentication is the expiration of JWTs. The security of this pattern relies heavily on JWTs being short-lived. Remember that access tokens are credentials. If I have an access token that says I am you, as far as the server is concerned I am you. To reduce the threat of an intercepted access token, JWT access tokens are usually set to expire quickly after being issued. Five minutes is a common lifetime for an access token. For that reason, a second token is often issued to an authorized user: the refresh token. This token has a longer life, and must be stored by the authorizing server. When a client’s access token expires, they must either request a new access token using the refresh token, or re-authorize. Using this pattern, the life of the refresh token is effectively the length of time a user can access the application without needing to sign back in.
                </p>
            </div>
        </div>
    );
};

export default Blogs;