import React from 'react';

const Blogs = () => {
    return (
        <div className='pt-20 pb-96'>
            <div tabIndex={0} className="collapse my-5 collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p> useState.
                        useReducer.
                        useMemo & useCallback.
                        useEffect.
                        useRef.
                        Context and Custom Hooks.
                        React Query & React Location.
                        Zustand.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>Simply put, prototypical inheritance refers to the ability to access object properties from another object. We use a JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse my-5 collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process. If done correctly, unit tests can detect early flaws in code which may be more difficult to find in later testing stages.</p>
                </div>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-200">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>Angular is also more difficult to learn compared to React, largely because React is a library, and not a complete solution. In comparison, Vue is easier to learn, ahead of React and Angular, with React offering an easier learning curve compared to React</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;