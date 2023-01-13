var checked = true;


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

const buttons = document.getElementById("buttons");

const subscription = document.getElementById("subscription");

const nextStepBtn = document.getElementById("nextStepBtn");

const submitStep1 = document.getElementById("form1"); 

// const submitStep2 = document.getElementById("submitStep2");
// const submitStep3 = document.getElementById("submitStep3");
// const submitStep4 = document.getElementById("submitStep4");


// const returnToStep1 = document.getElementById("returnToStep1");
// const returnToStep2 = document.getElementById("returnToStep2");
// const returnToStep3 = document.getElementById("returnToStep3");
// const returnToStep4 = document.getElementById("returnToStep4");


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



const followToStep2 = (event) => {
    event.preventDefault();
    step1.style.display="none";
    step2.style.display="block";
    buttons.style.display="block";
}
submitStep1.addEventListener("submit",followToStep2); /// separate function here cause step 1 is a <form> tag in thml, adding event listener "submit"

let stepsArr = [step2, step3, step4, step5];

const followToNextStep = () => {
    var currentStepDisplayed ;
    var currentIndex;
    stepsArr.map((step,i) => {
       if (step.style.display !== "none") {
        currentStepDisplayed = step;
        currentIndex=i;
       }
       currentStepDisplayed.style.display="none";
       return currentIndex;
    });
    console.log(currentIndex);
}
stepsArr[currentIndex+1].style.display="block";
nextStepBtn.addEventListener("click",followToNextStep);

const returnToStep1Func = ()=>{
    step2.style.display="none";
    step1.style.display="block";
};

const followToStep3 = (event) => {
    event.preventDefault();
    step2.style.display="none";
    step3.style.display="block";
};

///function whicj makes toggle button 
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

