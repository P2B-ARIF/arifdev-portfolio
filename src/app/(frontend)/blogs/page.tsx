import React from "react";
import demo from "@/assets/images/image1.jpg";
import thumb from "@/assets/images/image1.jpg";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Mail, Tag } from "lucide-react";
import Image from "next/image";
import BlogCard from "@/components/blogs/BlogCard";
import HorizontalBlogCard from "@/components/blogs/HorizantalBlogCard";
import { format } from "date-fns";

import blog1 from "@/assets/blog/blog1.png";
import blog2 from "@/assets/blog/blog2.png";
import blog3 from "@/assets/blog/blog3.webp";
import blog4 from "@/assets/blog/blog4.png";
import blog5 from "@/assets/blog/blog5.gif";

const allTags = [
	"react",
	"nextjs",
	"typescript",
	"javascript",
	"css",
	"tailwind",
	"shadcn",
	"zod",
	"validation",
	"architecture",
	"best-practices",
	"obs",
	"recording",
	"productivity",
	"web-development",
];

const blogPosts = [
	{
		id: 1,
		featured: true,
		title: "Hacky Way to Customize Shadcn's Tooltip Arrows",
		slug: "/blogs/hacky-way-to-customize-shadcns-tooltip-arrows",
		date: "December 15, 2024",
		readTime: "5 min read",
		excerpt:
			"A workaround for displaying a custom SVG arrow in shadcn's tooltip.",
		tags: ["react", "css"],
		thumbnail: "thumb",
	},
	{
		id: 2,
		featured: false,
		title: "Setting Dynamic Default Values with Zod Schema",
		slug: "/blogs/setting-dynamic-default-values-with-zod-schema",
		date: "December 12, 2024",
		readTime: "3 min read",
		excerpt:
			"Leverage Zod's powerful features to set dynamic default values and enhance data validation with flexibility and ease.",
		tags: ["zod", "typescript"],
		thumbnail: "thumb",
	},
	{
		id: 3,
		featured: false,
		title: "Level Up OBS Recordings with Zoom-to-Mouse",
		slug: "/blogs/level-up-obs-recordings-with-zoom-to-mouse",
		date: "January 3, 2025",
		readTime: "4 min read",
		excerpt:
			"Enhance your recordings and presentations with dynamic zoom effects.",
		tags: ["other"],
		thumbnail: "thumb",
	},
	{
		id: 4,
		featured: true,
		title: "Making Headless UI Popovers Smarter with React State",
		slug: "/blogs/smarter-headless-ui-popovers-react-state",
		date: "January 10, 2025",
		readTime: "6 min read",
		excerpt:
			"Combine Headless UI and state management to create intelligent, responsive popovers for modern interfaces.",
		tags: ["react", "headlessui", "ux"],
		thumbnail: "thumb",
	},
];

export const newBlogPosts = [
	{
		id: 1,
		img: blog1.src,
		slug: "demystifying-asynchronous-javascript-callbacks-promises-async-await",
		keywords: [
			"Asynchronous JavaScript",
			"Callbacks",
			"Promises",
			"Async/Await",
			"Event Loop",
			"Callback Hell",
			"Promise Chaining",
			"Error Handling",
			"JavaScript Best Practices",
			"Web Development",
			"ES6+ Features",
		],
		createdAt: "2024-11-15",
		updatedAt: "2024-11-20",
		readTime: "6 minutes",
		title:
			"Demystifying Asynchronous JavaScript: Callbacks, Promises, and Async/Await",
		metaDescription:
			"Unlock the complexities of Asynchronous JavaScript. This guide breaks down Callbacks, Promises, and Async/Await with clear examples, making your JavaScript code more efficient and readable.",
		sections: [
			{
				heading: "Introduction: Why Asynchronous JavaScript Matters",
				content:
					"Ever wonder why your JavaScript code sometimes seems to 'freeze' or run out of order, especially when dealing with data fetching or time-consuming tasks? This is where asynchronous JavaScript comes into play. Unlike synchronous code which executes line by line, blocking further execution until a task is complete, asynchronous code allows tasks to run in the background without halting the main thread. This non-blocking behavior is crucial for building responsive and user-friendly web applications, especially when performing operations like fetching data from APIs, handling user input, or executing long computations.\n\nHistorically, JavaScript relied on 'callbacks' to manage asynchronous operations. While functional, they often led to complex and unreadable code. The introduction of 'Promises' brought much-needed structure and elegance. Finally, 'Async/Await' emerged as the modern, most readable solution, making asynchronous code look and behave more like synchronous code. In this comprehensive guide, we'll demystify these three core patterns, helping you write cleaner, more efficient, and more maintainable asynchronous JavaScript.",
			},
			{
				heading: "Understanding Asynchronous JavaScript: The Core Concepts",
				content:
					"Before diving into the patterns, it's essential to grasp how JavaScript handles asynchronous operations despite being single-threaded. This magic happens primarily through the JavaScript Event Loop.\n\n* **The JavaScript Event Loop:** JavaScript runs on a single thread, meaning it can only execute one task at a time. However, it offloads time-consuming tasks (like network requests, `setTimeout`, or DOM events) to Web APIs (in browsers) or C++ APIs (in Node.js). Once these tasks complete, their callback functions are placed in a 'Callback Queue' (or Message Queue). The Event Loop constantly checks if the 'Call Stack' (where JavaScript code is executed) is empty. If it is, the Event Loop pushes tasks from the Callback Queue onto the Call Stack for execution. This mechanism ensures your UI remains responsive and your application doesn't freeze.\n\n* **Why Asynchronicity? The Problem It Solves:** Imagine trying to fetch data from a server. If this was a synchronous operation, your entire application would freeze until the data arrived, which could take seconds or even minutes on a slow network. Asynchronous operations allow your program to continue executing other tasks (like rendering UI updates) while it waits for the data. This prevents blocking, provides a smoother user experience, and makes your applications feel much more responsive.",
			},
			{
				heading: "Callbacks: The Traditional Approach",
				content:
					"Callbacks are the oldest and most fundamental way to handle asynchronous operations in JavaScript. While powerful, they come with significant drawbacks in complex scenarios.\n\n* **How Callbacks Work:** A callback is simply a function that is passed as an argument to another function. The outer function then 'calls back' (executes) this inner function at a later time, usually after an asynchronous operation has completed.\n\n    ```javascript\n    function fetchData(callback) {\n        console.log('Fetching data...');\n        setTimeout(() => {\n            const data = { message: 'Data fetched successfully!' };\n            callback(data); // Execute the callback with the fetched data\n        }, 2000); // Simulate network delay of 2 seconds\n    }\n\n    function displayData(data) {\n        console.log('Received:', data.message);\n    }\n\n    fetchData(displayData); // Pass displayData as the callback\n    console.log('Request initiated...');\n    // Output will be: \n    // Request initiated...\n    // Fetching data...\n    // (after 2 seconds) Received: Data fetched successfully!\n    ```\n\n* **The Problem: Callback Hell (or Pyramid of Doom):** While simple callbacks are fine, complex asynchronous workflows often require chaining multiple callbacks. This leads to deeply nested, unreadable code that becomes extremely difficult to manage, debug, and maintain. This infamous pattern is known as 'Callback Hell'.\n\n    ```javascript\n    // Example of Callback Hell\n    getUser(function(user) {\n        getOrders(user.id, function(orders) {\n            getProducts(orders[0].id, function(products) {\n                console.log('User:', user.name);\n                console.log('First Order Products:', products);\n                // And so on...\n            }, function(err) { /* handle error */ });\n        }, function(err) { /* handle error */ });\n    }, function(err) { /* handle error */ });\n    ```\n\n    Callback Hell leads to issues with readability, difficult error handling (as errors need to be passed down manually), and poor code organization.",
			},
			{
				heading: "Promises: Bringing Order to Chaos",
				content:
					"Promises were introduced to provide a more structured and manageable way to handle asynchronous operations, especially when dealing with multiple sequential tasks. They represent a value that might be available now, or in the future, or never.\n\n* **Promise States:** A Promise can be in one of three states:\n    * **Pending:** Initial state, neither fulfilled nor rejected.\n    * **Fulfilled (Resolved):** Meaning the operation completed successfully.\n    * **Rejected:** Meaning the operation failed.\n\n* **Creating a Promise:** You create a Promise using the `Promise` constructor, which takes a single argument: an 'executor' function with `resolve` and `reject` arguments.\n\n    ```javascript\n    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\n    const asyncOperation = new Promise((resolve, reject) => {\n        console.log('Async operation started...');\n        setTimeout(() => {\n            const success = true; // Simulate success or failure\n            if (success) {\n                resolve('Data successfully processed!'); // Operation succeeded\n            } else {\n                reject('Error: Operation failed!'); // Operation failed\n            }\n        }, 1500);\n    });\n    ```\n\n* **Consuming a Promise: `.then()`, `.catch()`, `.finally()`:**\n    * `.then()`: Used to handle the fulfilled state of a Promise. It can be chained for sequential operations, elegantly solving callback hell.\n    * `.catch()`: Used to handle the rejected state (errors).\n    * `.finally()`: A block of code that executes regardless of whether the Promise was fulfilled or rejected.\n\n    ```javascript\n    asyncOperation\n        .then(result => {\n            console.log('Success:', result);\n            return delay(1000); // Chain another async operation\n        })\n        .then(() => {\n            console.log('Another step completed after 1 second!');\n        })\n        .catch(error => {\n            console.error('Error:', error);\n        })\n        .finally(() => {\n            console.log('Promise sequence finished.');\n        });\n    ```\n\n* **Promise.all() and Promise.race():**\n    * `Promise.all([p1, p2, p3])`: Waits for all promises to resolve, or rejects if any one promise rejects.\n    * `Promise.race([p1, p2, p3])`: Resolves or rejects as soon as one of the promises resolves or rejects.",
			},
			{
				heading: "Async/Await: Synchronous-Looking Asynchronous Code",
				content:
					"Async/Await is the most modern and preferred way to work with Promises. Introduced in ES2017, it allows you to write asynchronous code that looks and feels like synchronous code, making it incredibly readable and easier to debug.\n\n* **`async` Keyword:** An `async` function is a function that always returns a Promise. If the function returns a non-Promise value, JavaScript automatically wraps it in a resolved Promise. It also enables the use of the `await` keyword inside its body.\n\n* **`await` Keyword:** The `await` keyword can only be used inside an `async` function. It pauses the execution of the `async` function until the Promise it's waiting for settles (either resolves or rejects). Once the Promise settles, the `await` expression returns its resolved value or throws its rejected value.\n\n    ```javascript\n    async function fetchUserData() {\n        console.log('Fetching user data...');\n        try {\n            const response = await fetch('[https://api.example.com/users/1](https://api.example.com/users/1)'); // await pauses here\n            if (!response.ok) {\n                throw new Error(`HTTP error! Status: ${response.status}`);\n            }\n            const user = await response.json(); // await pauses here again\n            console.log('User data:', user);\n            return user;\n        } catch (error) {\n            console.error('Failed to fetch user data:', error.message);\n            // Handle error (e.g., show error message to user)\n        }\n    }\n\n    fetchUserData();\n    console.log('Request initiated (non-blocking)...');\n    // Output will be:\n    // Request initiated (non-blocking)...\n    // Fetching user data...\n    // (after API call completes) User data: { ... }\n    ```\n\n* **Error Handling with `try...catch`:** One of the biggest advantages of Async/Await is the ability to use standard `try...catch` blocks for error handling, just like synchronous code. This makes error management significantly cleaner and more intuitive compared to nested callbacks or chains of `.catch()`.",
			},
			{
				heading: "Choosing the Right Tool for the Job",
				content:
					"While Async/Await is generally the preferred choice for modern asynchronous JavaScript, understanding callbacks and Promises is still crucial, as they form the foundation.\n\n* **Callbacks:** Still useful for simple, independent asynchronous operations, or when integrating with older libraries that rely on them. Avoid for complex, sequential operations to prevent callback hell.\n* **Promises:** Essential for handling sequential asynchronous operations in a cleaner, more readable manner than callbacks. Async/Await is built on Promises, so a good understanding of Promises is fundamental.\n* **Async/Await:** The go-to for almost all modern asynchronous JavaScript development. It offers the best readability, maintainability, and error handling for complex asynchronous flows, making your code look cleaner and more synchronous while remaining non-blocking.",
			},
			{
				heading: "Conclusion",
				content:
					"Mastering asynchronous JavaScript is a cornerstone for any proficient developer, especially in the modern web landscape. We've journeyed from the foundational (and sometimes messy) callbacks, through the structured elegance of Promises, and finally arrived at the clean, synchronous-looking simplicity of Async/Await.\n\nBy embracing these patterns, you empower your applications to remain responsive, fetch data seamlessly, and provide a superior user experience. Next time you encounter an asynchronous task, remember the tools at your disposal – each designed to help you write more efficient, readable, and maintainable JavaScript. Dive in, practice, and watch your JavaScript code truly come alive!",
			},
		],
	},
	{
		id: 2,
		img: blog2.src,
		slug: "understanding-restful-apis-developer-guide",
		keywords: [
			"RESTful APIs",
			"HTTP Methods",
			"CRUD Operations",
			"API Design",
			"Web Development",
			"Backend Development",
			"API Best Practices",
			"HTTP Status Codes",
			"Stateless Architecture",
			"Resource Naming Conventions",
		],
		createdAt: "2024-11-15",
		updatedAt: "2024-11-20",
		readTime: "6 minutes",
		title: "Understanding RESTful APIs: A Developer's Guide",
		metaDescription:
			"Unlock the core concepts of RESTful APIs. This comprehensive guide covers REST principles, HTTP methods, statelessness, and best practices for building robust web services. Essential for every developer.",
		sections: [
			{
				heading: "Introduction: The Backbone of Modern Web Applications",
				content:
					"In today's interconnected digital world, web applications rarely exist in isolation. They constantly need to communicate with other services, exchange data, and integrate functionalities. This is where Application Programming Interfaces (APIs) come into play, acting as the fundamental language that allows different software components to talk to each other.\n\nAmong the various types of APIs, **RESTful APIs** (Representational State Transfer) have emerged as the dominant standard for building scalable, flexible, and robust web services. Whether you're a frontend developer consuming data, a backend developer building services, or a full-stack engineer orchestrating the entire system, a solid understanding of REST is indispensable.\n\nThis guide will demystify RESTful APIs, exploring their core principles, the HTTP methods that power them, and best practices for designing and interacting with them. By the end, you'll have a clear roadmap to navigate the world of web service communication.",
			},
			{
				heading: "What is REST? Understanding the Core Principles",
				content:
					"REST is not a protocol or a standard in the traditional sense; rather, it's an architectural style for designing networked applications. It relies on a set of constraints that, when applied, yield a system with desirable properties like scalability, simplicity, and performance.\n\n* **Client-Server Architecture:** This principle dictates a clear separation of concerns between the client (e.g., your web browser, mobile app) and the server (where the data and logic reside). Each can evolve independently, improving flexibility.\n    * **[IMAGE/DIAGRAM Suggestion]:** A simple diagram showing a client (browser/mobile) on one side and a server on the other, with an arrow representing API requests/responses in between.\n\n* **Statelessness:** Each request from client to server must contain all the information necessary to understand the request. The server should not store any client context between requests. This means every request is independent, making the system more scalable and reliable.\n    * **[DIAGRAM Suggestion]:** A diagram illustrating two requests from the same client. In a stateless system, each request is self-contained. In a stateful (non-REST) system, the second request might rely on information from the first, stored on the server.\n\n* **Cacheability:** Clients can cache responses to improve performance. Responses must explicitly or implicitly define themselves as cacheable or non-cacheable.\n\n* **Uniform Interface:** This is a crucial constraint that simplifies the overall system architecture. It ensures a consistent way of interacting with resources regardless of their underlying implementation. It consists of four sub-constraints:\n    * **Identification of Resources:** Resources (e.g., a 'user', a 'product') are identified by unique URLs (URIs). For example, `/users/123` identifies a specific user.\n    * **Manipulation of Resources Through Representations:** Clients manipulate resources by sending representations (e.g., JSON, XML) of those resources. When you request `/users/123`, the server sends a JSON representation of user 123.\n    * **Self-Descriptive Messages:** Each message sent between client and server should contain enough information to describe how to process the message. This includes HTTP headers, media types, etc.\n    * **Hypermedia as the Engine of Application State (HATEOAS):** This means that responses should include links to other relevant resources, guiding the client on what actions it can take next. (Often considered an advanced REST principle, not strictly enforced in many 'RESTful' APIs, but good to mention).",
			},
			{
				heading: "The Power of HTTP Methods: Performing Actions on Resources",
				content:
					"RESTful APIs leverage standard HTTP methods (also known as verbs) to perform CRUD (Create, Read, Update, Delete) operations on resources. Each method has a specific meaning and expected behavior.\n\n* **GET: Retrieve a Resource**\n    * Purpose: Fetches data from the server. It's safe (doesn't change server state) and idempotent (multiple identical requests have the same effect as a single one).\n    * Example: `GET /api/products` (Get all products), `GET /api/products/123` (Get product with ID 123).\n    * **[CODE EDITOR Suggestion]:** Show a curl command or JavaScript `fetch` example.\n        ```bash\n        curl -X GET '[https://api.example.com/products/123](https://api.example.com/products/123)'\n        ```\n        ```javascript\n        fetch('/api/products/123')\n            .then(response => response.json())\n            .then(data => console.log(data));\n        ```\n\n* **POST: Create a New Resource**\n    * Purpose: Submits data to the server to create a new resource.\n    * Example: `POST /api/products` (Create a new product with data in the request body).\n    * **[CODE EDITOR Suggestion]:** Show a curl command or JavaScript `fetch` example with a JSON body.\n        ```bash\n        curl -X POST -H 'Content-Type: application/json' \\\n             -d '{\"name\": \"New Widget\", \"price\": 29.99}' \\\n             '[https://api.example.com/products](https://api.example.com/products)'\n        ```\n        ```javascript\n        fetch('/api/products', {\n            method: 'POST',\n            headers: { 'Content-Type': 'application/json' },\n            body: JSON.stringify({ name: 'New Widget', price: 29.99 })\n        })\n        .then(response => response.json())\n        .then(data => console.log('Created:', data));\n        ```\n\n* **PUT: Update/Replace an Existing Resource**\n    * Purpose: Updates an existing resource, or creates it if it doesn't exist. It's idempotent (sending the same PUT request multiple times will have the same effect).\n    * Example: `PUT /api/products/123` (Replace product with ID 123 with data in the request body).\n    * **[CODE EDITOR Suggestion]:** Show a curl command or JavaScript `fetch` example with a JSON body.\n        ```bash\n        curl -X PUT -H 'Content-Type: application/json' \\\n             -d '{\"name\": \"Updated Widget\", \"price\": 35.00}' \\\n             '[https://api.example.com/products/123](https://api.example.com/products/123)'\n        ```\n\n* **PATCH: Partially Update an Existing Resource**\n    * Purpose: Applies partial modifications to a resource. Not necessarily idempotent.\n    * Example: `PATCH /api/products/123` (Update only the price of product 123).\n    * **[CODE EDITOR Suggestion]:** Show a curl command or JavaScript `fetch` example with a partial JSON body.\n        ```bash\n        curl -X PATCH -H 'Content-Type: application/json' \\\n              -d '{\"price\": 30.00}' \\\n              '[https://api.example.com/products/123](https://api.example.com/products/123)'\n        ```\n\n* **DELETE: Remove a Resource**\n    * Purpose: Deletes a specified resource from the server.\n    * Example: `DELETE /api/products/123` (Delete product with ID 123).\n    * **[CODE EDITOR Suggestion]:** Show a curl command or JavaScript `fetch` example.\n        ```bash\n        curl -X DELETE '[https://api.example.com/products/123](https://api.example.com/products/123)'\n        ```",
			},
			{
				heading: "Resource Naming and URI Design: Best Practices",
				content:
					"Designing intuitive and consistent URIs is crucial for a user-friendly RESTful API. Here are some key best practices:\n\n* **Use Nouns, Not Verbs:** URIs should represent resources (nouns), not actions (verbs). Actions are handled by HTTP methods.\n    * Good: `/products`, `/users/123`\n    * Bad: `/getAllProducts`, `/deleteUser/123`\n\n* **Use Plural Nouns:** For collections of resources.\n    * Good: `/products`, `/users`\n    * Bad: `/product`, `/user`\n\n* **Use Nested Resources for Relationships:** To show relationships between resources.\n    * Example: `/users/123/orders` (Orders for user 123), `/products/456/reviews` (Reviews for product 456).\n\n* **Filtering, Sorting, Pagination:** Use query parameters for these operations.\n    * Example: `/products?category=electronics&limit=10&sort=price_asc`\n\n* **Versioning:** For evolving APIs, include versioning in the URI or headers.\n    * Example: `/v1/products`, `/v2/users`",
			},
			{
				heading: "Understanding HTTP Status Codes: The API's Language",
				content:
					"HTTP status codes are returned by the server in every API response, indicating the success or failure of the request. Understanding them is vital for effective API interaction and debugging.\n\n* **2xx Success:**\n    * `200 OK`: General success.\n    * `201 Created`: Resource successfully created (e.g., after a POST).\n    * `204 No Content`: Request processed, but no content to return (e.g., after a DELETE).\n\n* **3xx Redirection:**\n    * `301 Moved Permanently`: Resource moved permanently.\n\n* **4xx Client Error:**\n    * `400 Bad Request`: Client sent an invalid request (e.g., malformed JSON).\n    * `401 Unauthorized`: Authentication required or failed.\n    * `403 Forbidden`: Client authenticated but doesn't have permission.\n    * `404 Not Found`: Resource not found.\n    * `405 Method Not Allowed`: HTTP method used is not supported for the resource.\n\n* **5xx Server Error:**\n    * `500 Internal Server Error`: Generic server-side error.\n    * `503 Service Unavailable`: Server is temporarily unable to handle the request.",
			},
			{
				heading: "Conclusion: Building Interconnected Web Applications",
				content:
					"RESTful APIs are the cornerstone of modern web development, enabling seamless communication and data exchange between diverse systems. By adhering to its core principles – client-server separation, statelessness, cacheability, and a uniform interface – developers can build robust, scalable, and maintainable web services.\n\nUnderstanding the appropriate use of HTTP methods (GET, POST, PUT, PATCH, DELETE), designing clean URIs, and interpreting HTTP status codes are fundamental skills for any developer interacting with or building APIs. As you continue your journey in web development, mastering RESTful API design will open up a world of possibilities for creating interconnected and powerful applications.\n\n**Ready to build your own RESTful API or integrate with existing ones?** Explore my portfolio projects where I've implemented RESTful principles, or feel free to reach out to discuss your next API development challenge!",
			},
		],
	},
	{
		id: 3,
		img: blog3.src,
		slug: "optimizing-database-performance-mongodb-postgresql",
		keywords: [
			"database",
			"performance",
			"mongodb",
			"postgresql",
			"optimization",
		],

		createdAt: "2024-11-15",
		updatedAt: "2024-11-20",
		readTime: "6 minutes",
		title: "Optimizing Database Performance: Tips for [MongoDB/PostgreSQL]",
		metaDescription:
			"Boost your application's speed and efficiency. This guide offers essential tips for optimizing MongoDB and PostgreSQL database performance, covering indexing, query tuning, data modeling, and more.",
		sections: [
			{
				heading: "Introduction: The Heartbeat of Your Application",
				content:
					"A responsive and robust application relies heavily on an efficient database. As the central repository for your application's data, a slow database can quickly become a bottleneck, leading to frustrating user experiences and decreased scalability. Whether you're working with the flexible NoSQL architecture of MongoDB or the powerful relational capabilities of PostgreSQL, optimizing your database is a crucial skill for any full-stack developer.\n\nThis guide will dive into practical strategies and best practices to supercharge your database performance. We'll cover common pitfalls and solutions applicable to both MongoDB and PostgreSQL, along with specific tips for each, ensuring your data operations are as fast and efficient as possible. Let's make your database sing!",
				keywords: [
					"database optimization",
					"MongoDB",
					"PostgreSQL",
					"performance tuning",
				],
			},
			{
				heading: "1. Strategic Indexing: The Key to Faster Queries",
				content:
					"Indexes are arguably the most fundamental tool for database performance optimization. They work much like the index of a book, allowing the database to quickly locate data without scanning every single record. Using indexes wisely can drastically reduce query execution times.\n\n* **How Indexes Work:** An index creates a sorted data structure (like a B-tree) that stores a small portion of the table's data along with pointers to the full rows. When you query on an indexed column, the database can use this sorted structure to quickly find the relevant rows, avoiding a 'full table scan'.\n\n* **When to Use Indexes:**\n    * On columns frequently used in `WHERE` clauses (for filtering).\n    * On columns used in `JOIN` conditions (PostgreSQL).\n    * On columns used for `ORDER BY` (sorting) or `GROUP BY` clauses.\n    * On columns with high cardinality (many unique values).\n\n* **Common Pitfalls:**\n    * **Over-indexing:** Too many indexes can slow down write operations.\n    * **Indexing low-cardinality columns:** Might not provide significant benefits.\n\n* **[PostgreSQL Specific]:** PostgreSQL supports various index types (B-tree, Hash, GIN, GiST, BRIN).\n    ```sql\n    CREATE INDEX idx_users_email ON users (email);\n    ```\n\n* **[MongoDB Specific]:** MongoDB uses B-tree indexes by default.\n    ```javascript\n    db.users.createIndex({ email: 1 });\n    ```",
				keywords: [
					"database indexing",
					"B-tree index",
					"composite index",
					"query performance",
					"full table scan",
				],
				codeExamples: [
					{
						language: "sql",
						content: "CREATE INDEX idx_users_email ON users (email);",
					},
					{
						language: "javascript",
						content: "db.users.createIndex({ email: 1 });",
					},
				],
			},
			{
				heading: "2. Query Optimization: Writing Efficient Data Requests",
				content:
					"Even with perfect indexing, inefficient queries can cripple database performance. Optimizing your queries means asking the database for exactly what you need, nothing more.\n\n* **Avoid `SELECT *`:** Always specify the exact columns you need.\n    ```sql\n    SELECT order_id, order_date FROM orders WHERE customer_id = 123;\n    ```\n\n* **Limit and Paginate Results:** For large result sets, always use `LIMIT` and `OFFSET`.\n    ```javascript\n    db.posts.find().sort({ createdAt: -1 }).limit(10);\n    ```\n\n* **Optimize `WHERE` Clauses:** Ensure conditions can utilize indexes.\n\n* **[MongoDB Aggregation]:**\n    ```javascript\n    db.orders.aggregate([\n      { $match: { status: 'completed' } }\n    ]);\n    ```",
				keywords: [
					"query tuning",
					"SELECT *",
					"pagination",
					"WHERE clause",
					"aggregation pipeline",
				],
				codeExamples: [
					{
						language: "sql",
						content:
							"SELECT order_id, order_date FROM orders WHERE customer_id = 123;",
					},
					{
						language: "javascript",
						content: "db.posts.find().sort({ createdAt: -1 }).limit(10);",
					},
				],
			},
			{
				heading: "3. Data Modeling: Foundation for Performance",
				content:
					'The way you structure your data has a profound impact on database performance.\n\n* **[PostgreSQL]:**\n    - **Normalization:** Reduces redundancy but may require more joins\n    - **Denormalization:** Improves read performance at cost of consistency\n\n* **[MongoDB]:**\n    - **Embedding:** Ideal for one-to-one/few relationships\n    ```json\n    {\n      "_id": ObjectId(...),\n      "name": "Alice",\n      "address": {\n        "street": "123 Main St"\n      }\n    }\n    ```\n    - **Referencing:** Better for one-to-many relationships',
				keywords: [
					"data modeling",
					"normalization",
					"denormalization",
					"embedding",
					"document references",
				],
				codeExamples: [
					{
						language: "json",
						content:
							'{\n  "_id": ObjectId(...),\n  "name": "Alice",\n  "address": {\n    "street": "123 Main St"\n  }\n}',
					},
				],
			},
			{
				heading: "4. Connection Pooling: Efficient Resource Management",
				content:
					"Opening and closing database connections for every request is resource-intensive. Connection pooling solves this by maintaining a pool of ready-to-use connections.\n\n* **Benefits:**\n    - Reduced connection overhead\n    - Better resource utilization\n    - Improved scalability",
				keywords: [
					"connection pooling",
					"database connections",
					"resource management",
					"scalability",
				],
			},
			{
				heading: "5. Monitoring & Analysis: The Ongoing Optimization Process",
				content:
					"Database optimization is not a one-time task.\n\n* **Explain Plans:**\n    ```sql\n    EXPLAIN ANALYZE SELECT * FROM users;\n    ```\n    ```javascript\n    db.products.find().explain('executionStats');\n    ```\n\n* **Key Metrics:**\n    - CPU/Memory usage\n    - Slow query logs\n    - Cache hit ratios",
				keywords: [
					"database monitoring",
					"EXPLAIN ANALYZE",
					"query analysis",
					"performance metrics",
				],
				codeExamples: [
					{
						language: "sql",
						content: "EXPLAIN ANALYZE SELECT * FROM users;",
					},
					{
						language: "javascript",
						content: "db.products.find().explain('executionStats');",
					},
				],
			},
			{
				heading: "Conclusion: Building High-Performance Data Systems",
				content:
					"Optimizing database performance is a continuous journey that significantly impacts your application's speed and scalability. By applying these indexing strategies, query optimizations, and data modeling techniques, you'll create systems that deliver exceptional performance.\n\nRemember: A fast database is a happy application!",
				keywords: [
					"database best practices",
					"performance tuning",
					"optimization strategies",
				],
			},
		],
	},
	{
		id: 4,
		img: blog4.src,
		slug: "building-first-mern-stack-application-guide",
		keywords: [
			"MERN Stack",
			"MongoDB",
			"Express.js",
			"React.js",
			"Node.js",
			"Full-stack JavaScript",
			"MERN tutorial",
			"Build MERN app",
			"React with Node.js",
			"MongoDB CRUD",
			"Express API",
			"React frontend",
			"JavaScript fullstack",
			"MERN project",
			"Beginner MERN guide",
			"MERN architecture",
		],
		createdAt: "2024-11-15",
		updatedAt: "2024-11-20",
		readTime: "6 minutes",
		title: "Building Your First MERN Stack Application: A Step-by-Step Guide",
		metaDescription:
			"Learn to build your first MERN Stack application from scratch. This comprehensive guide covers MongoDB, Express.js, React.js, and Node.js with code examples and architectural insights.",
		sections: [
			{
				heading: "Introduction: What is the MERN Stack and Why Use It?",
				content:
					"The world of web development is constantly evolving, and choosing the right technology stack is crucial for building robust and scalable applications. Among the various options, the **MERN Stack** has gained immense popularity for its full-stack JavaScript capabilities, offering a seamless development experience from frontend to backend.\n\nMERN stands for:\n* **M**ongoDB: A NoSQL document database.\n* **E**xpress.js: A flexible Node.js web application framework.\n* **R**eact.js: A JavaScript library for building user interfaces.\n* **N**ode.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.\n\nThis stack allows developers to build entire applications using a single language (JavaScript/TypeScript), streamlining development, improving collaboration, and leveraging a vast ecosystem of tools and libraries. In this guide, we'll walk you through building your very first MERN stack application, covering each component step-by-step.\n\n* **[DIAGRAM Suggestion]:** A simple diagram illustrating the MERN stack architecture. Show the browser (React) communicating with the Node.js/Express server, which then interacts with MongoDB. Arrows should show the flow of data.\n    * **Image Alt Text:** MERN Stack Architecture Diagram",
			},
			{
				heading: "Prerequisites and Setup: Getting Started",
				content:
					"Before we dive into coding, let's ensure you have the necessary tools installed.\n\n* **Node.js & npm/yarn:** Download and install Node.js (which includes npm, the Node Package Manager). You might also consider yarn (`npm install -g yarn`).\n* **MongoDB:** Install MongoDB Community Edition. For local development, you can use MongoDB Compass (a GUI tool) or simply run `mongod` from your terminal.\n* **Code Editor:** Visual Studio Code (VS Code) is highly recommended for its excellent JavaScript/React support.\n\nOnce installed, verify them in your terminal:\n\n    ```bash\n    node -v\n    npm -v\n    mongo --version # or mongod --version\n    ```\n\nNow, let's set up our project structure. We'll create two main folders: `client` for our React frontend and `server` for our Node.js/Express backend.\n\n    ```bash\n    mkdir mern-todo-app # Or any project name\n    cd mern-todo-app\n    mkdir client server\n    cd client\n    npx create-react-app .\n    cd ../server\n    npm init -y\n    ```\n\n* **[IMAGE Suggestion]:** Screenshot of your project directory structure in VS Code, showing `client` and `server` folders after initial setup. This provides a clear visual reference.",
			},
			{
				heading:
					"Step 1: Building the Backend (Node.js & Express.js with MongoDB)",
				content:
					"Our backend will be responsible for handling API requests, interacting with the MongoDB database, and serving our data. We'll create a simple 'Todo' API.\n\nNavigate to your `server` directory and install Express.js, Mongoose (for MongoDB object modeling), and `dotenv` (for environment variables).\n\n    ```bash\n    cd ../server\n    npm install express mongoose dotenv cors\n    ```\n\n* **[CODE EDITOR Type Code]: `server/server.js` (Main server file)**\n    ```javascript\n    // server/server.js\n    require('dotenv').config();\n    const express = require('express');\n    const mongoose = require('mongoose');\n    const cors = require('cors'); // To allow cross-origin requests from React app\n\n    const app = express();\n    const PORT = process.env.PORT || 5000;\n\n    // Middleware\n    app.use(cors());\n    app.use(express.json()); // Body parser for JSON data\n\n    // MongoDB Connection\n    mongoose.connect(process.env.MONGO_URI, {\n        useNewUrlParser: true,\n        useUnifiedTopology: true\n    })\n    .then(() => console.log('MongoDB connected...'))\n    .catch(err => console.error(err));\n\n    // Define a simple Todo Schema and Model\n    const todoSchema = new mongoose.Schema({\n        title: { type: String, required: true },\n        description: String,\n        completed: { type: Boolean, default: false }\n    });\n    const Todo = mongoose.model('Todo', todoSchema);\n\n    // API Routes\n    // Get all todos\n    app.get('/api/todos', async (req, res) => {\n        try {\n            const todos = await Todo.find();\n            res.json(todos);\n        } catch (err) {\n            res.status(500).json({ message: err.message });\n        }\n    });\n\n    // Create a new todo\n    app.post('/api/todos', async (req, res) => {\n        const todo = new Todo({\n            title: req.body.title,\n            description: req.body.description\n        });\n        try {\n            const newTodo = await todo.save();\n            res.status(201).json(newTodo);\n        } catch (err) {\n            res.status(400).json({ message: err.message });\n        }\n    });\n\n    // Basic Root Route\n    app.get('/', (req, res) => {\n        res.send('API is running...');\n    });\n\n    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));\n    ```\n\n* **[CODE EDITOR Type Code]: `server/.env` (Environment variables)**\n    ```\n    PORT=5000\n    MONGO_URI=mongodb://localhost:27017/mern_todo_db # Replace with your MongoDB connection string\n    ```\n\nRun your backend:\n\n    ```bash\n    node server.js\n    ```\n\n* **[IMAGE Suggestion]:** Screenshot of the terminal showing 'MongoDB connected...' and 'Server running on port 5000'.\n\n* **[DIAGRAM Suggestion]:** A diagram showing the backend's internal flow: Client -> Express Routes -> Mongoose Schema/Model -> MongoDB.",
			},
			{
				heading: "Step 2: Developing the Frontend (React.js)",
				content:
					"Now, let's build the user interface using React to interact with our backend API. Navigate to your `client` directory.\n\nWe'll need `axios` for making HTTP requests.\n\n    ```bash\n    cd ../client\n    npm install axios\n    ```\n\n* **[CODE EDITOR Type Code]: `client/src/App.js` (Main React Component)**\n    ```javascript\n    // client/src/App.js\n    import React, { useState, useEffect } from 'react';\n    import axios from 'axios';\n    import './App.css'; // Assuming you have some basic CSS\n\n    const API_URL = 'http://localhost:5000/api/todos';\n\n    function App() {\n        const [todos, setTodos] = useState([]);\n        const [newTodoTitle, setNewTodoTitle] = useState('');\n        const [newTodoDescription, setNewTodoDescription] = useState('');\n\n        useEffect(() => {\n            fetchTodos();\n        }, []);\n\n        const fetchTodos = async () => {\n            try {\n                const response = await axios.get(API_URL);\n                setTodos(response.data);\n            } catch (error) {\n                console.error('Error fetching todos:', error);\n            }\n        };\n\n        const addTodo = async (e) => {\n            e.preventDefault();\n            try {\n                const response = await axios.post(API_URL, {\n                    title: newTodoTitle,\n                    description: newTodoDescription\n                });\n                setTodos([...todos, response.data]);\n                setNewTodoTitle('');\n                setNewTodoDescription('');\n            } catch (error) {\n                console.error('Error adding todo:', error);\n            }\n        };\n\n        return (\n            <div className=\"App\">\n                <h1>MERN Todo App</h1>\n                <form onSubmit={addTodo}>\n                    <input\n                        type=\"text\"\n                        placeholder=\"Todo Title\"\n                        value={newTodoTitle}\n                        onChange={(e) => setNewTodoTitle(e.target.value)}\n                        required\n                    />\n                    <input\n                        type=\"text\"\n                        placeholder=\"Todo Description (Optional)\"\n                        value={newTodoDescription}\n                        onChange={(e) => setNewTodoDescription(e.target.value)}\n                    />\n                    <button type=\"submit\">Add Todo</button>\n                </form>\n                <div className=\"todo-list\">\n                    {todos.map(todo => (\n                        <div key={todo._id} className=\"todo-item\">\n                            <h3>{todo.title}</h3>\n                            <p>{todo.description}</p>\n                            <span>{todo.completed ? 'Completed' : 'Pending'}</span>\n                        </div>\n                    ))}\n                </div>\n            </div>\n        );\n    }\n\n    export default App;\n    ```\n\n* **[IMAGE Suggestion]:** Screenshot of your React application running in the browser, showing the input fields and a list of todos. Potentially showing one or two added todos.\n\n* **[CODE EDITOR Type Code]: `client/src/App.css` (Basic CSS for styling)**\n    ```css\n    /* client/src/App.css */\n    .App {\n        font-family: sans-serif;\n        text-align: center;\n        padding: 20px;\n    }\n    form {\n        margin-bottom: 20px;\n    }\n    input {\n        padding: 8px;\n        margin: 5px;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n    }\n    button {\n        padding: 8px 15px;\n        background-color: #007bff;\n        color: white;\n        border: none;\n        border-radius: 4px;\n        cursor: pointer;\n    }\n    .todo-list {\n        margin-top: 20px;\n    }\n    .todo-item {\n        background-color: #f4f4f4;\n        border: 1px solid #ddd;\n        padding: 10px;\n        margin-bottom: 10px;\n        border-radius: 5px;\n    }\n    ```\n\nRun your frontend:\n\n    ```bash\n    npm start\n    ```",
			},
			{
				heading: "Step 3: Connecting Frontend and Backend",
				content:
					"With both parts of our MERN stack application ready, the final step is to ensure they communicate effectively. Our React app (frontend) will send HTTP requests to our Node.js/Express API (backend).\n\n* **CORS (Cross-Origin Resource Sharing):** You might encounter CORS errors because your React app (e.g., `http://localhost:3000`) and your Node.js API (e.g., `http://localhost:5000`) are running on different ports. We've already installed and used the `cors` middleware in our `server/server.js` to handle this. This middleware allows the browser to make cross-origin requests to your API.\n\n* **Running Both Together:**\n    1.  Open two separate terminal windows.\n    2.  In the first terminal, navigate to your `server` directory and run: `node server.js`\n    3.  In the second terminal, navigate to your `client` directory and run: `npm start`\n\n    Now, when you open your browser to `http://localhost:3000`, your React app should load, make API calls to your backend, and display/add todos from your MongoDB database.\n\n* **[IMAGE Suggestion]:** A full screenshot of the running MERN Todo App in the browser, showing data successfully fetched/added, confirming frontend and backend are communicating. This is the 'hero' image for the successful app.",
			},
			{
				heading: "Conclusion: Your First Full-Stack MERN Application",
				content:
					"Congratulations! You've successfully built your first MERN Stack application. This journey has given you hands-on experience with each core component:\n\n* **MongoDB:** For flexible, document-based data storage.\n* **Express.js:** For building a robust and scalable backend API.\n* **React.js:** For crafting dynamic and interactive user interfaces.\n* **Node.js:** For enabling server-side JavaScript execution.\n\nThis simple Todo app serves as a foundational project. From here, you can expand it by adding features like updating/deleting todos, user authentication, more complex data models, and deployment to cloud platforms like Vercel (for frontend) and Render/Heroku (for backend).\n\nThe MERN stack is a powerful combination that allows you to leverage your JavaScript skills across the entire development spectrum. Keep building, keep learning, and keep exploring the vast possibilities of full-stack JavaScript development!\n\n**Ready to take your MERN skills to the next level?** Explore more complex MERN projects in my portfolio, or connect with me to discuss how the MERN stack can power your next great idea!",
			},
		],
	},
	{
		id: 5,
		img: blog5.src,
		slug: "modern-server-deployment-strategies-guide",
		keywords: [
			"Server Deployment",
			"CI/CD",
			"Docker Deployment",
			"Kubernetes",
			"Cloud Deployment",
			"AWS",
			"Azure",
			"Google Cloud",
			"Serverless",
			"Blue-Green Deployment",
			"Canary Releases",
			"Infrastructure as Code",
			"Zero Downtime Deployment",
			"Load Balancing",
			"Auto Scaling",
			"Deployment Pipelines",
		],
		createdAt: "2024-11-15",
		updatedAt: "2024-11-20",
		readTime: "6 minutes",
		title: "Modern Server Deployment Strategies: A Comprehensive Guide",
		metaDescription:
			"Master server deployment with this in-depth guide covering CI/CD pipelines, containerization, cloud strategies, and zero-downtime techniques for seamless application delivery.",
		sections: [
			{
				heading: "Introduction: The Evolution of Server Deployment",
				content:
					"In today's fast-paced digital landscape, how you deploy your server applications can be just as crucial as the code itself. Gone are the days of manual FTP uploads and midnight server maintenance windows. Modern deployment strategies enable teams to deliver updates faster, more reliably, and with zero downtime.\n\nThis guide explores the cutting-edge techniques used by tech giants and startups alike to deploy server applications efficiently. We'll cover everything from containerization and orchestration to advanced traffic routing patterns and infrastructure automation.\n\n* **[DIAGRAM Suggestion]:** Timeline showing evolution from manual deployments to modern CI/CD pipelines with containers and cloud orchestration.",
				keywords: [
					"deployment evolution",
					"modern deployment",
					"CI/CD history",
				],
			},
			{
				heading: "1. Foundational Deployment Strategies",
				content:
					'Before diving into advanced techniques, let\'s establish the fundamental deployment approaches that form the building blocks of modern workflows.\n\n* **Traditional Deployment:**\n  - Manual file transfers (FTP/SFTP)\n  - Requires maintenance windows\n  - High risk of human error\n\n* **Basic Automated Deployment:**\n  - Scripted deployments (Bash, PowerShell)\n  - Scheduled execution\n  - Limited rollback capabilities\n\n* **Code Example - Simple Deployment Script:**\n```bash\n#!/bin/bash\n# Basic deployment script\nrsync -avz --delete ./dist/ user@production-server:/var/www/app/\nssh user@production-server "systemctl restart myapp"\n```\n\n* **Comparison Table:**\n| Strategy | Speed | Reliability | Downtime | Complexity |\n|----------|-------|-------------|----------|------------|\n| Manual | Slow | Low | High | Low |\n| Scripted | Medium | Medium | Medium | Medium |\n| Modern CI/CD | Fast | High | None | High |',
				keywords: ["basic deployment", "deployment scripts", "FTP deployment"],
				codeExamples: [
					{
						language: "bash",
						content:
							'#!/bin/bash\nrsync -avz --delete ./dist/ user@server:/var/www/app/\nssh user@server "systemctl restart myapp"',
					},
				],
			},
			{
				heading: "2. Containerization with Docker",
				content:
					"Containerization has revolutionized server deployments by packaging applications with all their dependencies into standardized units.\n\n* **Key Benefits:**\n  - Consistent environments across development, testing, and production\n  - Isolation from host system\n  - Efficient resource utilization\n  - Simplified scaling\n\n* **Deployment Workflow:**\n  1. Build Docker image from application code\n  2. Push image to container registry\n  3. Pull image on production servers\n  4. Run container with proper configuration\n\n* **Code Example - Docker Deployment Commands:**\n```bash\n# Build image\ndocker build -t myapp:1.0 .\n\n# Push to registry\ndocker tag myapp:1.0 myregistry.com/myapp:1.0\ndocker push myregistry.com/myapp:1.0\n\n# Production deployment\ndocker pull myregistry.com/myapp:1.0\ndocker stop myapp && docker rm myapp\ndocker run -d --name myapp -p 80:3000 myregistry.com/myapp:1.0\n```\n\n* **[DIAGRAM Suggestion]:** Docker architecture showing build, registry, and deployment flow.",
				keywords: ["Docker deployment", "containerization", "Docker workflow"],
				codeExamples: [
					{
						language: "bash",
						content:
							"docker build -t myapp:1.0 .\ndocker push myregistry.com/myapp:1.0\ndocker run -d -p 80:3000 myapp:1.0",
					},
				],
			},
			{
				heading: "3. Orchestration with Kubernetes",
				content:
					"For complex applications requiring scalability and high availability, Kubernetes provides powerful orchestration capabilities.\n\n* **Core Concepts:**\n  - Pods: Smallest deployable units\n  - Deployments: Declarative updates for Pods\n  - Services: Network access to Pods\n  - Ingress: External access management\n\n* **Deployment Strategies:**\n  - Rolling updates (default)\n  - Blue-green deployments\n  - Canary releases\n\n* **Code Example - Kubernetes Deployment YAML:**\n```yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 3\n  strategy:\n    type: RollingUpdate\n    rollingUpdate:\n      maxSurge: 1\n      maxUnavailable: 0\n  selector:\n    matchLabels:\n      app: myapp\n  template:\n    metadata:\n      labels:\n        app: myapp\n    spec:\n      containers:\n      - name: myapp\n        image: myregistry.com/myapp:1.1\n        ports:\n        - containerPort: 3000\n```\n\n* **[IMAGE Suggestion]:** Kubernetes cluster architecture diagram showing nodes, pods, and deployments.",
				keywords: ["Kubernetes", "container orchestration", "k8s deployment"],
				codeExamples: [
					{
						language: "yaml",
						content:
							"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: myapp\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n      - name: myapp\n        image: myregistry.com/myapp:1.1",
					},
				],
			},
			{
				heading: "4. Cloud-Native Deployment Strategies",
				content:
					'Modern cloud platforms offer specialized services for sophisticated deployment patterns.\n\n* **Blue-Green Deployment:**\n  - Two identical production environments\n  - Switch traffic at load balancer\n  - Instant rollback capability\n\n* **Canary Releases:**\n  - Gradually roll out to subset of users\n  - Monitor metrics before full rollout\n  - Risk mitigation\n\n* **Serverless Deployments:**\n  - Function-as-a-Service (AWS Lambda, Azure Functions)\n  - Automatic scaling\n  - Pay-per-execution model\n\n* **Code Example - AWS CodeDeploy Configuration:**\n```json\n{\n  "applicationName": "MyApp",\n  "deploymentGroupName": "Production",\n  "deploymentConfigName": "CodeDeployDefault.AllAtOnce",\n  "revision": {\n    "revisionType": "S3",\n    "s3Location": {\n      "bucket": "my-deployment-bucket",\n      "key": "app-1.2.zip",\n      "bundleType": "zip"\n    }\n  }\n}\n```\n\n* **[DIAGRAM Suggestion]:** Blue-green deployment workflow showing two environments and traffic switching.',
				keywords: [
					"blue-green",
					"canary release",
					"serverless",
					"AWS deployment",
				],
				codeExamples: [
					{
						language: "json",
						content:
							'{\n  "applicationName": "MyApp",\n  "deploymentGroupName": "Production",\n  "revision": {\n    "s3Location": {\n      "bucket": "my-bucket",\n      "key": "app-1.2.zip"\n    }\n  }\n}',
					},
				],
			},
			{
				heading: "5. CI/CD Pipelines for Automated Deployments",
				content:
					"Continuous Integration and Continuous Deployment (CI/CD) pipelines automate the entire process from code commit to production.\n\n* **Key Components:**\n  - Source control integration (Git)\n  - Automated testing\n  - Build automation\n  - Deployment orchestration\n  - Rollback mechanisms\n\n* **Popular Tools:**\n  - GitHub Actions\n  - GitLab CI/CD\n  - Jenkins\n  - CircleCI\n  - AWS CodePipeline\n\n* **Code Example - GitHub Actions Workflow:**\n```yaml\nname: Production Deployment\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    \n    - name: Install dependencies\n      run: npm ci\n      \n    - name: Run tests\n      run: npm test\n      \n    - name: Build application\n      run: npm run build\n      \n    - name: Deploy to production\n      uses: appleboy/ssh-action@master\n      with:\n        host: ${{ secrets.PRODUCTION_HOST }}\n        username: ${{ secrets.PRODUCTION_USER }}\n        key: ${{ secrets.SSH_KEY }}\n        script: |\n          cd /var/www/app\n          git pull origin main\n          npm ci --production\n          pm2 restart all\n```\n\n* **[IMAGE Suggestion]:** CI/CD pipeline diagram showing code commit to deployment stages.",
				keywords: [
					"CI/CD",
					"GitHub Actions",
					"deployment pipeline",
					"automated deployment",
				],
				codeExamples: [
					{
						language: "yaml",
						content:
							"name: Deployment\non: [push]\njobs:\n  deploy:\n    steps:\n    - uses: actions/checkout@v2\n    - run: npm ci && npm test && npm run build",
					},
				],
			},
			{
				heading: "Conclusion: Choosing Your Deployment Strategy",
				content:
					"Selecting the right deployment approach depends on your application's requirements, team size, and infrastructure:\n\n* **Small projects:** Simple scripted deployments or managed platforms\n* **Medium complexity:** Docker with CI/CD pipelines\n* **Large-scale systems:** Kubernetes with blue-green/canary deployments\n* **Event-driven workloads:** Serverless architectures\n\nRemember these key principles:\n1. **Automate everything** - Reduce human error and increase efficiency\n2. **Monitor rigorously** - Track deployment health and performance\n3. **Plan for failure** - Implement rollback strategies\n4. **Document thoroughly** - Maintain clear deployment procedures\n\nAs deployment technologies continue to evolve, staying current with best practices will ensure your applications deploy smoothly, scale effortlessly, and remain highly available.\n\n**Ready to optimize your deployment workflow?** Explore my case studies on implementing zero-downtime deployments or contact me for a deployment strategy consultation!",
				keywords: [
					"deployment best practices",
					"strategy selection",
					"deployment automation",
				],
			},
		],
	},
];

const page = () => {
	// const featuredPosts = blogPosts2.filter(post => post.featured);
	// const regularPosts = blogPosts.filter(post => !post.featured);

	return (
		<section className='min-h-screen pt-32'>
			<div className='container mx-auto'>
				<div className='grid grid-cols-12 gap-5 relative'>
					{/* 1st column */}

					<div className='col-span-7 grid grid-rows-12 gap-5'>
						{newBlogPosts?.slice(0, 1)?.map((post, idx) => {
							return (
								<div
									key={idx}
									style={{
										backgroundImage: `url(${post?.img})`,
										backgroundSize: "cover",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "center",
									}}
									className='row-span-8 rounded-lg overflow-hidden flex items-end p-5 bg-gradient-to-t from-primary/30 to-transparent relative  border border-gray-600'
								>
									<div className='bg-gradient-to-t from-primary/50 to-transparent bg-primary/20 absolute bottom-0 left-0  w-full h-full from-20%'></div>
									<div className='relative space-y-1 md:w-3/4'>
										<h1 className='md:text-lg'>{post.title}</h1>
										<p className='text-xs md:text-sm'>
											{post?.metaDescription}
										</p>
										<Link href={`/blogs/${post?.slug}`}>Read More</Link>
									</div>
								</div>
							);
						})}
						{newBlogPosts?.slice(1, 2)?.map((post, idx) => {
							return (
								<div
									key={idx}
									className='row-span-4 rounded-lg overflow-hidden  grid grid-cols-3 border border-gray-600'
								>
									<div>
										<img src={post?.img} alt='' className='w-full h-full' />
									</div>
									<div className='col-span-2 p-3'>
										<div className='flex items-center text-gray-400 text-xs'>
											<span>
												{format(new Date(post.createdAt), "MMMM dd, yyyy")}
											</span>
											{/* <span>December 15, 2024</span> */}
											<span className='mx-2'>•</span>
											<span>{post.readTime} read</span>
										</div>
										<h3 className='font-medium'>
											<Link
												href='/blogs/hacky-way-to-customize-shadcns-tooltip-arrows'
												className='hover:text-gray-300 transition-colors'
											>
												{post.title}
											</Link>
										</h3>
										<p className='text-gray-400 mb-1 text-sm'>
											{post?.metaDescription?.length > 150
												? post?.metaDescription?.slice(0, 150) + "..."
												: post?.metaDescription}
										</p>
										<div className='flex items-center justify-between'>
											<Link
												href={`/blogs/${post?.slug}`}
												className='inline-flex items-center text-blue-400 hover:text-blue-500 text-sm transition-colors'
											>
												Read more
												<ArrowRight className='ml-2 h-4 w-4' />
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>

					<div className='col-span-5 grid grid-cols-1 gap-5'>
						{newBlogPosts?.slice(2, 5).map((post, idx) => (
							<div
								key={idx}
								className='col-span-1 border-gray-600 border rounded-lg overflow-hidden'
							>
								<div className='flex flex-col md:flex-row '>
									{/* Image Section */}
									<div className='md:w-1/3 lg:w-1/4'>
										<div className='relative md:h-full'>
											<Image
												src={post?.img}
												alt={"item.title"}
												fill
												className='object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full'
											/>
										</div>
									</div>
									<div className='md:w-2/3 lg:w-3/4 p-3'>
										<div className='flex items-center text-gray-400 text-xs'>
											<span>
												{format(new Date(post.createdAt), "MMMM dd, yyyy")}
											</span>
											{/* <span>December 15, 2024</span> */}
											<span className='mx-2'>•</span>
											<span>{post.readTime} read</span>
										</div>
										<h3 className='font-medium'>
											<Link
												href={`/blogs/${post?.slug}`}
												className='hover:text-gray-300 transition-colors'
											>
												{post.title}
											</Link>
										</h3>
										<p className='text-gray-400 mb-1 text-sm'>
											{post?.metaDescription?.length > 100
												? post?.metaDescription?.slice(0, 100) + "..."
												: post?.metaDescription}
										</p>
										<div className='flex items-center justify-between'>
											<Link
												href={`/blogs/${post?.slug}`}
												className='inline-flex items-center text-blue-400 hover:text-blue-500 text-sm transition-colors'
											>
												Read more
												<ArrowRight className='ml-2 h-4 w-4' />
											</Link>
										</div>
									</div>
								</div>
							</div>
						))}
						{/* <div className='col-span-1 bg-gray-800 border'>2</div>
						<div className='col-span-1 bg-gray-300 border'>3</div>
						<div className='col-span-1 bg-gray-300 border'>4</div> */}
					</div>
					{/* 2nd column */}
				</div>

				<div className='mt-20'>
					<div className='inline-flex items-center px-4 py-2 rounded-full bg-gray-800/50 border border-gray-700 text-gray-300'>
						<Tag className='w-4 h-4 mr-2' />
						<span className='text-sm font-medium'>Blog & Articles</span>
					</div>

					<p className='text-lg my-5 mb-10 max-w-lg text-gray-400 leading-relaxed'>
						Thoughts, tutorials, and insights about web development, design, and
						technology. Stay updated with the latest trends and best practices.
					</p>

					{/* <div className='flex items-center gap-3'>
						{[...Array(5)].map((_, index) => (
							<div
								key={index}
								className='inline-flex items-center px-4 py-1 rounded-full bg-emerald-900 text-emerald-400 mb-6'
							>
								<span className='text-sm font-medium'>Blog</span>
							</div>
						))}
					</div> */}

					<div className='grid grid-cols-7 gap-10'>
						{/* Blog Posts */}
						{/* <HorizontalBlogCard post={blogPosts[0]} thumb={thumb}  /> */}

						<div className='col-span-5 grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 2xl:gap-5 gap-8'>
							{newBlogPosts.map((post, idx) => (
								<BlogCard key={idx} post={post} />
							))}
						</div>

						{/* side bar */}
						<div className='col-span-2 space-y-5'>
							{/* Tags */}
							<div className='bg-gray-900/50 border border-gray-700 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Popular Tags
								</h3>
								<div className='flex flex-wrap gap-2'>
									{allTags.map(tag => (
										<span
											key={tag}
											className='bg-gray-800 text-gray-300 hover:bg-gray-700 text-xs px-2 py-1  transition-colors cursor-pointer rounded-md'
										>
											{tag}
										</span>
									))}
								</div>
							</div>

							{/* Stats */}
							<div className='bg-gray-900/50 border border-gray-700 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Blog Stats
								</h3>
								<div className='space-y-3'>
									<div className='flex justify-between items-center'>
										<span className='text-gray-400 text-sm'>
											Total Articles
										</span>
										<span className='text-white font-semibold'>
											{blogPosts.length}
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-gray-400 text-sm'>Categories</span>
										<span className='text-white font-semibold'>
											{allTags.length}
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-gray-400 text-sm'>Featured</span>
										<span className='text-white font-semibold'>{10}</span>
									</div>
								</div>
							</div>

							{/* Newsletter */}
							<div className='bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-700/50 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-2 text-white'>
									Stay Updated
								</h3>
								<p className='text-gray-400 text-sm mb-4'>
									Get notified when I publish new articles and tutorials.
								</p>
								<div className='space-y-3'>
									<input
										type='email'
										placeholder='Enter your email'
										className='w-full px-3 py-2 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none text-white placeholder:text-gray-500'
									/>
									<button className='w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center'>
										<Mail className='w-4 h-4 mr-2' />
										Subscribe
									</button>
								</div>
							</div>

							{/* Recent Posts */}
							<div className='bg-gray-900/50 border border-gray-700 rounded-lg p-6'>
								<h3 className='text-lg font-semibold mb-4 text-white'>
									Recent Posts
								</h3>
								<div className='space-y-4'>
									{blogPosts.slice(0, 3).map(post => (
										<div key={post.id} className='group'>
											<Link href={post.slug} className='block'>
												<h4 className='text-sm font-medium text-gray-300 group-hover:text-white transition-colors line-clamp-2 mb-1'>
													{post.title}
												</h4>
												<p className='text-xs text-gray-500'>{post.date}</p>
											</Link>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default page;
