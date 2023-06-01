import React from 'react';
import useTitle from '../../Layout/useTitle';

const Blog = () => {

    useTitle('Blog')

    return (
        <div className='my-20'>
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 mb-4 text-center">Blog</h1>

            <div className='grid md:grid-cols-2 grid-cols-1 md:w-[70%] mt-10 mx-auto gap-10' >

                <div className='p-5 bg-slate-100 rounded-md space-y-5' >
                    <h1 className='text-2xl font-semibold' >
                        1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </h1>
                    <p>
                        Access Token and Refresh Token are commonly used for authentication and authorization.
                    </p>
                    <p className='' >
                        <b>Access Token:</b> It is a short-lived token with an expiration time and is used to access protected resources on the server. Access token is a credential that is obtained after a user successfully authenticates with a server. It is sent along with each request to the server's protected APIs to prove the user's authorization.
                        <br /><br />

                        <b>Refresh Token:</b> When an access token expires, the client can use the refresh token to request a new access token without requiring the user to reauthenticate. A refresh token is a long-lived token that is also obtained during the authentication process.
                    </p>

                    <p>
                        Local storage is a common choice for storing access tokens, but it's important to consider security implications. Access tokens should be stored on the client-side, typically in memory or local storage, as they are needed for each API request to the server. When the access token expires, the client can send the refresh token to the server to obtain a new access token.

                    </p>

                </div>

                <div className='p-5 bg-slate-100 rounded-md' >
                    <h1 className='text-2xl font-semibold' >
                        2. Compare SQL and NoSQL databases?
                    </h1>
                    <p className='mt-5' >
                        <b>SQL:</b> It's databases are based on a structured data model with predefined schemas, where data is organized into tables with rows and columns, it's databases use SQL as the standard query language, providing a powerful and standardized way to retrieve and manipulate data.  SQL databases require schema definitions to be established before storing data. Modifying the schema often involves altering the database structure.

                        <br /><br />

                        <b>NoSQL:</b> NoSQL databases allow for dynamic and flexible schema design, allowing data to be stored without predefined structures. They are often schema-less or schema-flexible. It's databases support various data models, such as key-value, document, columnar, and graph databases, allowing better optimization for specific use cases. It's databases often sacrifice some ACID properties for improved performance and scalability. They focus on eventual consistency rather than immediate consistency.
                    </p>

                </div>

                <div className='p-5 bg-slate-100 rounded-md' >
                    <h1 className='text-2xl font-semibold' >
                        3. What is express js? What is Nest JS?
                    </h1>
                    <p className='mt-5' >
                        Express.js is a web application framework that runs on top of Node.js. It provides a set of features for building web applications, such as routing, middleware, and templating, that simplifies the process of building web applications with Node.js. Express.js is often used as a back-end framework for building RESTful APIs or web applications that use a database.

                        <br /> <br />
                        NestJS is a progressive Node.js framework for building efficient, scalable, and maintainable server-side applications. It leverages TypeScript and follows modern JavaScript principles to provide a structured and modular architecture. NestJS incorporates features like decorators, modules, controllers, providers, and middleware, making it a powerful tool for developing APIs, microservices, and full-stack applications. It promotes the use of industry-standard design patterns, supports dependency injection.
                    </p>

                </div>

                <div className='p-5 bg-slate-100 rounded-md space-y-5' >
                    <h1 className='text-2xl font-semibold' >
                        4. What is MongoDB aggregate and how does it work?
                    </h1>
                    <p className='' >
                    MongoDB aggregate operation is used to perform advanced data processing and analysis on collections of documents. It allows you to perform complex data transformations, filtering, grouping, and aggregations within the database. The aggregate operation works by defining a pipeline of stages, each representing a specific data processing step. These stages are executed in sequence, with the output of one stage becoming the input for the next. Like - <b>$match</b>, <b>$group</b>, <b>$sort</b>, <b>$limit</b>, <b>$skip</b> etc.
                    </p>
                    <p>
                    The result of the aggregate operation is a cursor that iterates over the output documents produced by the pipeline stages. You can then access the aggregated data programmatically or use it for further analysis or processing.
                    </p>

                </div>


            </div>

        </div>
    );
};

export default Blog;