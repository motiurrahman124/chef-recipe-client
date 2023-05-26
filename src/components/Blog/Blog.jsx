import React from 'react';
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [20,12]
};

const Blog = () => {
    return (
        <div>
            <div className='underline py-[50px] '>
                <h1 className='text-center font-extrabold text-[#1A1919] text-[32px]'>Blogs</h1>
            </div>
            <div className='flex justify-center'>
                <ReactToPdf targetRef={ref} filename="div-blue.pdf" options={options} >
                    {({toPdf}) => (
                        <button onClick={toPdf} className='md:px-7 px-5 md:py-3 py-3 bg-orange-400 rounded-full font-extrabold text-white hover:text-orange-400 hover:bg-white hover:border-orange-400 hover:border border'>Generate pdf</button>
                    )}
                </ReactToPdf>
            </div>

            <div className='py-10' ref={ref}>
                <div class="lg:w-[80%] md:w-[90%] w-[90%] mx-auto text-left">
                    <div class="mt-12 grid lg:grid-cols-2 gap-5">
                        <div class="rounded-lg py-12 border-2 border-orange-400 px-11 text-justify bg-yellow-50 bg-opacity-30 shadow-md">
                            <h2 class=" text-[#414141] font-bold text-2xl">1. Tell us the differences between uncontrolled and controlled components.</h2>
                            <p class="text-[#414141] text-base mt-[10px]">Controlled components are components where the value of the form element is controlled by React. This means that the value of the form element is stored in the component's state and is updated whenever the component's state changes.Uncontrolled components, on the other hand, allow the form element to manage its own state. The value of the form element is managed by the DOM instead of React.In a controlled component, you can access and update the value of the form element through the component's state. In an uncontrolled component, you can access the value of the form element using a ref and update the value using DOM methods.Controlled components provide more control over the form elements and their behavior. Uncontrolled components can be useful in situations where you need to access the value of the form element imperatively, such as when integrating with third-party libraries. However, they can be harder to debug and maintain, especially in larger applications.</p>
                        </div>
                        <div class="rounded-lg py-12 border-2 border-orange-400 px-11 text-justify bg-yellow-50 bg-opacity-30 shadow-md">
                            <h2 class=" text-[#414141] font-bold text-2xl">2. How to validate React props using PropTypes?</h2>
                            <p class="text-[#414141] text-base mt-[10px]">PropTypes is a built-in library in React that provides a way to validate the props passed to a component. It allows you to define the type, shape, and requiredness of the props, which can help catch bugs and make it easier to work with components.</p>
                            <p class="text-[#414141] text-base mt-[10px]">To use PropTypes, you can import the library from the <span className='font-bold'>'prop-types'</span> package and define the propTypes object on your component. The propTypes object should have keys that match the names of your props, and their values should be the appropriate PropTypes validators.</p>
                        </div>
                        <div class="rounded-lg py-12 border-2 border-orange-400 px-11 text-justify bg-yellow-50 bg-opacity-30 shadow-md">
                            <h2 class="text-[#414141] font-bold text-2xl">3. Tell us the difference between nodejs and express js.</h2>
                            <p class="text-[#414141] text-base mt-[10px]"><span className='font-bold'>Node.js</span> is a server-side runtime environment that allows developers to build server-side applications using JavaScript. It provides a way to run JavaScript code on the server and access the operating system's resources such as file systems, network sockets, and databases. Node.js comes with a set of built-in modules and APIs that allow developers to perform various server-side tasks.</p>
                            <p class="text-[#414141] text-base mt-[10px]"><span className='font-bold'>Express.js,</span> on the other hand, is a lightweight and flexible web framework for Node.js. It provides a set of features for building web applications and APIs such as routing, middleware support, and templates. Express.js is built on top of Node.js and provides a simpler and more intuitive API for building web applications.</p>
                            <p class="text-[#414141] text-base mt-[10px]"><span className='font-bold'>In short,</span> Node.js is a runtime environment for running JavaScript on the server, while Express.js is a web framework built on top of Node.js that provides a simpler and more intuitive API for building web applications.</p>
                        </div>
                        <div class="rounded-lg py-12 border-2 border-orange-400 px-11 text-justify bg-yellow-50 bg-opacity-30 shadow-md">
                            <h2 class="text-[#414141] font-bold text-2xl">4. What is a custom hook, and why will you create a custom hook?</h2>
                            <p class="text-[#414141] text-base mt-[10px]">A custom hook is a JavaScript function that starts with the <span className='font-bold'>'use'</span> keyword and follows the rules of Hooks in React. Custom hooks allow you to reuse stateful logic across multiple components without duplicating code or creating higher-order components. Custom hooks can encapsulate complex logic and provide a simple API for other components to use. You would create a custom hook when you need to reuse stateful logic across multiple components. For example, if you have several components that need to fetch data from an API and manage the loading and error states, you can create a custom hook that encapsulates this logic. Then, you can reuse this hook in all the components that need to fetch data, without duplicating code or creating a higher-order component.</p> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;