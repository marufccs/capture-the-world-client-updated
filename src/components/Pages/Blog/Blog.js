import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <div className='text-justify'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-12 mt-12 mb-6
             text-justify">
  <div className="collapse-title text-xl font-medium ">
  The difference between SQL and NoSQL
  </div>
  <div className="collapse-content"> 
    <p>When choosing a modern database, one of the biggest decisions is picking a relational (SQL) or non-relational (NoSQL) data structure. While both are viable options, there are key differences between the two that users must keep in mind when making a decision. <br />
Here, we break down the most important distinctions and discuss the best SQL and NoSQL database systems available. <br />
The five critical differences between SQL vs NoSQL are: <br />
<ul>
    <li>1. SQL databases are relational, NoSQL databases are non-relational.</li>
    <li>2. SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.</li>
    <li>3. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
    <li>4. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
    <li>5. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>
    </ul>
    </p>
  </div>
</div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-12 mt-12 mb-6">
  <div className="collapse-title text-xl font-medium text-justify">
  What is JWT, and how does it work?
  </div>
  <div className="collapse-content"> 
    <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA. <br />
    Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
  </div>
</div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-12 mt-12 mb-6">
  <div className="collapse-title text-xl font-medium text-justify">
  What is the difference between javascript and NodeJS?
  </div>
  <div className="collapse-content"> 
    <p><ul>
        <li>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.</li>
        <li>2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</li>
        <li>3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.</li>
        <li>4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.</li>
        <li>5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.</li></ul></p>
  </div>
</div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box mx-12 mt-12 mb-24">
  <div className="collapse-title text-xl font-medium ">
  How does NodeJS handle multiple requests at the same time?
  </div>
  <div className="collapse-content"> 
    <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
  </div>
</div>
</div>
        </div>
    );
};

export default Blog;