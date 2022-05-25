import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2> What is a unit test? Why should write unit tests?</h2>
            <p>Unit testing is a type of software testing where individual units or software components are tested. Its purpose is to validate that each unit of code performs as expected. A unit can be anything you want it to be — a line of code, a method, or a class. <br />
                Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                It simplifies the debugging process.
            </p>
            <h2>
                How will you improve the performance of a React Application?
            </h2>
            <p> Avoid inline style attributes</p>
            <p>Avoid extra tags by using React fragments</p>
            <p> Avoid inline function in the render method</p>
            <p> Avoid bundling all of the front end code in a single file:</p>
            <h2>What are the different ways to manage a state in a React application?</h2>
            <p>Four ways in different to manage a state in a react application:
                1.Local state
                2.Global state
                3.Server state
                4.URL state</p>
                <h2>How does prototypical inheritance work?</h2>

            <p>Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.

                Instances may be composed from many different source objects, allowing for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. In other words, class taxonomies are not an automatic side-effect of prototypal OO: a critical distinction.

                Instances are typically instantiated via factory functions, object literals, or `Object.create()`.

                “A prototype is a working object instance. Objects inherit directly from other objects.”

                Why Does this Matter?</p>

                <h2> Why you do not set the state directly in React</h2>
                <p>One should never update the state directly because of the following reasons:

If you update it directly, calling the setState() afterward may just replace the update you made.
When you directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value.
You will lose control of the state across all components.</p>
        </div>
    );
};

export default Blog;