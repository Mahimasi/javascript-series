const coding = ["js", "ruby", "java","python","cpp"]

// (method) Array<string>.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void
// // FIRST WAY :
// coding.forEach(function (item) {  // using Unnamed fn
//     console.log(item);
// })
// output:
// js
// ruby
// java
// python
// cpp


// // SECOND WAY :  using Arrow fn
// coding.forEach( (item) => {   
//     console.log(item);
// })
// output:
// js
// ruby
// java
// python
// cpp


// // THIRD WAY 
// function printMe (item){
//     console.log(item);
// }
// coding.forEach(printMe)

// // Another way: // arg can be item, index no. and arr
// coding.forEach( (item, index, arr ) => {
//     console.log( item, index, arr );
// })

// output:
// js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
// cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]



// format:  const arr = [{}, {}, {}]
const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
]


// Applying forEach loop on array:

myCoding.forEach((item) => { // since myCoding is an array of objs and we called objs as items in value section 
    //  console.log(item);   //  so ,we can access obj as item with dot operator

    // output:
    // { langName: 'javascript', langFileName: 'js' }
    // { langName: 'java', langFileName: 'java' }
    // { langName: 'python', langFileName: 'py' }


    // console.log(item.langFileName);  // print value of keys
    // output:
    // js
    // java
    // py


    console.log(item.langName);   // print keys of obj
    // output:
    // javascript
    // java 
    // python
    
    
})



