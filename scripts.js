var checked = true;

const sidebar = document.getElementById("sidebar");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");
const step5= document.getElementById("step5");

const subscription = document.getElementById("subscription");
const submitStep1 = document.getElementById("form1"); 
const returnToStep1 = document.getElementById("returnToStep1");
const submitStep2 = document.getElementById("submitStep2");

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