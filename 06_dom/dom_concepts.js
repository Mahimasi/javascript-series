// Window Object:
// 1.  it represents an open window in a browser. it is browser's obj (not js's) & automatically created by browser.
// 2.  it is a global obj with lots of props and methods

// DOM (Document Object Model):
//  when a web page is loaded, browser creates a DOM of the page.

// HTML --> Object(document)  --> can be accesed by js
// HTML --> Object(subobj of window obj) --> can be accesed by js


// EXAMPLE:
// window.document  //  gives document of html
// console.log(window.document);   // to print 
// console.dir(window.document);   //  To print props and methods of special obj like document  or to print obj

    //             window  (node and obj)
    //               |
    //             document (node and obj)
    //               |
    //             html  (node and obj)
    //             /  \
    //         head    body
    //     /  \  \     \   \
    // meta title link  div script
    //                  |  | 
    //                img   h1        all tags are obj 

   
    
    // TO ACCESS HTML IN JS:
    // console.dir(document);     // output: entire document
    // console.dir(document.body);     // To access body obj
    // console.log(document.body);      // To access body tag 
    // console.log(document.body.childNodes[1]);      // To access first childnode of body tag 


    // TO APPLY STYLING ON DOCUMENT:
    // document.body.style.background = "green";   // will be green color 


    // +++++++++++++++++++++   DOM MANIPULATION   +++++++++++++++++++++++++++++:

    // Type-1:  Selecting  With ID :
    // syntax:    document.getElementById("myId")

    // eg:  let heading = document.getElementById("heading")  // h1
    //    console.log(heading);
    //    console.dir(heading);
       

    // Type-2:  Selecting  With CLASS :
    // syntax:    document.getElementsByClassName("myClass")

   //  eg:  let headings = document.getElementsByClassName("heading2")  // 
   //     console.log(headings);  // HTML COLLECTION WITH PROPS 
      //  console.dir(headings);  // html collection
       
    //NOTE:
    // WHEN AN ID ELEMENT DOES NOT EXIST OUTPUT WILL BE  PRINTED NULL 
    // WHEN AN CLASS  ELEMENT DOES NOT EXIST OUTPUT WILL BE  PRINTED EMPTY HTML COLLECTION 


    // Type-3: Selecting  With TAG :
    // syntax:    document.getElementsByTagName("p")

    // let  paras = document.getElementsByTagName("p")
    // console.log(paras);   // html collection of all paragraph 
    // console.dir(paras); 


    // ++++++++++++++++++++++++  QUERY SELECTOR ++++++++++++++++++++++++++++++

    // query selector:
   //  querySelector: 
   //   syntax:  document.querySelector("#myId / .myClass / tag")    // returns first element 

   //   querySelectorAll:
   //   syntax:  document.querySelectorAll("#myId / .myClass / tag")    // returns a NodeList


     // PROPERTIES:
    // 1.  tagName: returns tag for element nodes
    // 2.  innerText: returns text content  of the element and all its   children

    // code:
    //       <div><ul>
    //         <li>one</li>
    //         <li>two</li>
    //         <li>three</li>
    //       </ul></div>
          
    // eg: let div = document.querySelector("div");
    // console.dir(div);
    // div.innerText     // output: "one\ntwo\nthree"
    // div.innerText = "abcd"   // overwriting the text of div

    
    // 3.  innerHTML: returns the plain text or HTML contents in the element 
    
    // code: <h1> new heading</h1> 
    // eg: let heading = document.querySelector("h1");
    // console.dir(heading);
    // heading.innerText     // output: new heading
    // div.innerHTML = "<i>new heading <i/> "   // overwriting the text of div by using specific tag on text


    // 4.  textContent: returns textual content even for hidden  element
    
    // code: <h1 style = "visibility: hidden">old Heading </h1>
    // eg:  let heading = document.querySelector("h1")
    // console.dir(heading);
    // heading.textContent;  // it will show hidden element too ,output: old heading
    

    // firstChild:
    // lastChild:
    // textNodes:
    // commentsNode:
    // elementsNode:


    // +++++++++++++++++++   PRACTICE QUESTION   +++++++++++++++++++++++++++++
    // QUESTION 1 : Create a h2 element with text "Hello JS" append with "from mahi world" this text using javascript .

    // Code: <h2> Hello JS </h2>

    // Accessing The Text using tag:
    // let heading = document.querySelector("h2")
    // console.dir(heading.innerText);

    // // Concatinating : prev text  + new text :
    // heading.innerText = heading.innerText + "  from  mahi world "     // output: Hello JS from mahi world 


    // QUESTION 2: Create 3 divs with common class name - "box" . Access them and add some unique text to each of them

    // <body>
    //   <div class ="box">first div</div>
    //   <div class ="box"> Second div </div>
    //   <div class ="box"> Third div</div>
      
    // </body>
     
// ACCESSING :

// let divs = document.querySelectorAll(".box")
// console.log(divs);    // to print all divs 
// console.log(divs[0]);    // to print individual divs  (for first div)
// console.log(divs[1]);    // to print individual divs  (for Second div)
// console.log(divs[2]);    // to print individual divs  (for third div)


//  overwriting :
// divs[0].innerText = "new uniques value 1";
// divs[1].innerText = "new uniques value 2";
// divs[2].innerText = "new uniques value 3";


// Type-4 :  ATTRIBUTES:

// getAttribute(attr): used to get the attribute value
// Syntax :div.getAttribute("id")

// eg: <div id= "box" name = "JSDiv"> this is a div</div>
//  <p id = "para">This is a paragragh </p>

// // ACCESSING  div:
// let div = document.querySelector("div"); 
// console.log(div);                        // output: div
// let value= div.getAttribute("id")       // accessing id attribute , output: box
// let name= div.getAttribute("name")       // accessing name attribute , output: JSDiv

// // ACCESSING  p :
// let paras = document.querySelector("p");   // accessing p 
// console.log(paras.getAttribute("id"));      // para                 

// getAttribute:
// Syntax: setAttribute(attr, value): used to set the attribute value th
// eg:  <div>
        // <p class ="para">this is a paragragh</p>
        // <h2>"Hello Javascript</h2>
        // </div>

// let paras = document.querySelector("p");   // accessing p 
// console.log(paras.setAttribute("id", newId));      // updating p     
    
 // TO ACCESS STYLING OF THE ELEMENT :
 
//  let div = document.querySelector("div")
//  console.log(div.style);     // output: cssStyle obj

 // overwring style:
//  console.log(div.style.fontSize = "26px" );


// Type-5 : Insert Elements:
//  let el = document.createElement("div")
//  Node.append(el) : adds at the end of Node(inside)
//  Node.prepend(el) : adds at the start of Node(inside)
//  Node.before(el) : adds before the  Node(outside)
//  Node.after(el) : adds after the Node(outside)

//  eg: <div id="box" name = "JSDiv">this is a div
//   <ul>
//     <li>apple</li>
//     <li>mango</li>
//     <li>orange</li>
//   </ul>
//  </div>

// let newBtn = document.createElement("button") // creating a button
// console.log(newBtn);     // newBtn

// eg:
// let div = document.querySelector("div")
// console.log(div.append(newBtn)); // button will be after all the of div inside the div 

// eg:
// let div = document.querySelector("div")
// console.log(div.prepend(newBtn)); // button will be before all the text of div inside the div 

// eg:
// let div = document.querySelector("div")
// console.log(div.before(newBtn)); // button will be before the div  (outside)

// eg:
// let div = document.querySelector("div")
// console.log(div.after(newBtn)); // button will be after  the div (outside)

// +++++++++++   another way  ++++++++++++++++++++++ :

// let newHeading = document.createElement("h1");
// newHeading.innerText = <i>Hi, I am a girl! </i>;

// document.querySelector("body").pretend(newheading);


// Type-5 : Delete Element:
// Node.remove() :to remove the node

// let para = document.querySelector("p")
// para.remove;          // will be deleted

//  append child () :
//  remove child () :



 //   ++++++++++++++++++++++++++++++++ PRACTICE QUESTION   +++++++++++++++++++++++++++++++++++

//  Question 1: Create a new button element .Give it a text "click me", background color of red nd text color
//   of white.
//     insert the button as the first element inside the body.
        
 
//   Question 2 : Create a <p> tag in html ,give it a  class and some styling. Now create a new class
//    in CSS and try to apppend this class to the <p> 
//    Did you notice, how you overwrite the class name when you add a new one ? . 
//    Solve this problem using classList
 
 


