// callback

// const posts=[
//     {title:"Soorarai potru",Hero:"Surya"},
//     {title:"Mersal",Hero:"Vijay"}
// ]
// let output=[];

// getPost=()=>{
//     setTimeout(()=>{
//         posts.forEach(post => {
//             output+=post.title;
//             console.log(output)
//         },1000);
//     })
// }

// createPost=(post,callback)=>{
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     },5000)
// }

// let post1={title:"Thunivu",Hero:"Ajith"};
// createPost(post1,getPost);



// Promises
// const posts=[
//     {title:"Soorarai potru",Hero:"Surya"},
//     {title:"Mersal",Hero:"Vijay"}
// ]
// let output=[]
// getPost=()=>{
//     setTimeout(()=>{
//         posts.forEach(post => {
//             output+=post.title;
//             console.log(output)
//         },1000);
//     })
// }

// createPost=(post)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             posts.push(post);
//             const check=true;
//             if(!check){
//                 resolve();
//             }
//             else{
//                 reject("Error occured");
//             }
//         },1000)
//     })
// }
// let post1={title:"Thunivu",Hero:"Ajith"};
// createPost(post1).then(getPost).catch(err=>console.log(err));

//Promise.all

//fecth api
let output="";
const promise1=fetch('https://api.adviceslip.com/advice').then(res=>{
    return res.json();
}).then(slip=>{
    output=slip.slip;
    console.log(output);
    document.getElementById("advice_id").innerHTML="A D V I C E "+"&nbsp&nbsp# "+output.id;
    document.getElementById("advice").innerHTML='"'+output.advice+'"';
})
// Promise.all([promise1]).then(values=>{
//     console.log(values)
// })

//Functions
//arrays
//Objects
//Events//DOM node