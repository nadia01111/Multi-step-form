var checked = true;

// const menu = {
//     sideBar: [
//       { id: "1", name: "step1" },
//       { id: "2", name: "step2" },
//       { id: "3", name: "step3" },
//       { id: "4", name: "step4" }
//     ],
//     steps: [
//         { id: "1", name: "step1" },
//         { id: "2", name: "step2" },
//         { id: "3", name: "step3" },
//         { id: "4", name: "step4" },
//         { id: "5", name: "step5" }
//       ]
// };

const sidebar = document.getElementById("sidebar");
const sideBarStep1 = document.getElementById("sideBarStep1");
const sideBarStep2 = document.getElementById("sideBarStep2");
const sideBarStep3 = document.getElementById("sideBarStep3");
const sideBarStep4 = document.getElementById("sideBarStep4");

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5 = document.getElementById("step5");

const subscription = document.getElementById("subscription");

const submitStep1 = document.getElementById("form1"); 
const submitStep2 = document.getElementById("submitStep2");
const submitStep3 = document.getElementById("submitStep3");
const submitStep4 = document.getElementById("submitStep4");

const returnToStep1 = document.getElementById("returnToStep1");
const returnToStep2 = document.getElementById("returnToStep2");
const returnToStep3 = document.getElementById("returnToStep3");
const returnToStep4 = document.getElementById("returnToStep4");


const toggle =document.getElementById("toggle");
const ball =document.getElementById("ball");
const monthly=document.getElementById("monthly");
const yearly =document.getElementById("yearly");
monthly.style.color = "hsl(213, 96%, 18%)";

step2.style.display="none";
step3.style.display="none";
step4.style.display="none";
step5.style.display="none";
subscription.style.display="none";


// const chooseStepFromSideBarFunc = (event) => {
//     menu.sideBar.forEach((step, index) =>{
//        if (step.name.includes(index+1) ) {

    
//        } 
//     })

// };



// const stepsArr = [step1, step2,step3,step4,step5,subscription];

// const testFunc = (event) => {
//     event.preventDefault();
//     stepsArr.forEach((element,index) => {
//         if (element === "step1") {
//             step1.style.display="none";
//             step2.style.display="block";
//         }
//         step1.style.display="none";
//         step2.style.display="block";
//     });
// }


const followToStep2 = (event) => {
    step1.style.display="none";
    step2.style.display="block";
    event.preventDefault();
}
submitStep1.addEventListener("submit",followToStep2);

const returnToStep1Func = ()=>{
    step2.style.display="none";
    step1.style.display="block";
};

const followToStep3 = (event) => {
    event.preventDefault();
    step2.style.display="none";
    step3.style.display="block";
};

submitStep2.addEventListener("click",followToStep3);
returnToStep1.addEventListener("click",returnToStep1Func);

const selectSubscriptionPeriod = ()=>{
    checked = !checked;
 
    if (checked) {
        ball.style.left = "0px";
        monthly.style.color = "hsl(213, 96%, 18%)";
        yearly.style.color ="hsl(231, 11%, 63%)"
    }
    else {
        ball.style.left = "20px";
        yearly.style.color ="hsl(213, 96%, 18%)";
        monthly.style.color ="hsl(231, 11%, 63%)"
    }

    
}
toggle.addEventListener("click", selectSubscriptionPeriod);

const followToStep4 = (event) => {
    event.preventDefault();
    step3.style.display="none";
    step4.style.display="block";
};
const returnToStep2Func = ()=>{
    step3.style.display="none";
    step2.style.display="block";
};
const returnToStep3Func = ()=>{
    step4.style.display="none";
    step3.style.display="block";
};

submitStep3.addEventListener("click",followToStep4);
returnToStep2.addEventListener("click",returnToStep2Func);

submitStep4.addEventListener("click",followToStep5);
returnToStep3.addEventListener("click",returnToStep3Func);