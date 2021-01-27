console.log("Question 1:-")
//  1. ID- The easiest way to access a single element in the DOM is by its unique ID. We can grab an element by ID with the getElementById() method of the document object.In order to be accessed by ID, the HTML element must have an id attribute. We have a div element with an ID of demo.
//     <div id="demo">Access me by ID</div>
//  2. Class- The class attribute is used to access one or more specific elements in the DOM. We can get all the elements with a given class name with the getElementsByClassName() method.Now we want to access more than one element, and in our example we have two elements with a demo class.
//     <div class="demo">Access me by class (1)</div>
//     <div class="demo">Access me by class (2)</div>
//  3. HTML tag- A less specific way to access multiple elements on the page would be by its HTML tag name. We access an element by tag with the getElementsByTagName() method.For our tag example, we’re using article elements.
//     <article>Access me by tag (1)</article>
//     <article>Access me by tag (2)</article>
//  4. Selector(single)- To access a single element, we will use the querySelector() method. In our HTML file, we have a demo-query element
//     <div id="demo-query">Access me by query</div>
//  5. Selector(All)- We can use the querySelectorAll() method to collect all the elements that match a specific query. We have two elements with the demo-query-all class applied to them.
//     <div class="demo-query-all">Access me by query all (1)</div>
//     <div class="demo-query-all">Access me by query all (2)</div>  