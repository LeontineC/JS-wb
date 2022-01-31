//prevent default

const frog = document.querySelector('.linkOtherWebsite');

frog.addEventListener('click', (e) => {
 const changePageWarning = confirm(
     'This website can take up your time explaining flexbox. Do you wish to proceed?'
 );
 if(!changePageWarning) {
     e.preventDefault();
 } 
});
                               //attribute selector
const signupForm = document.querySelector('[name="signup-cat"]');

signupForm.addEventListener('submit', (e)=>{
   
   console.log(e.currentTarget.nameOfCat.value);
   console.log(e.currentTarget.typeOfCat.value);
   console.log(e.currentTarget.accord.checked);

   const catName = e.currentTarget.typeOfCat.value;
   if(catName.includes('dog')) {
       alert('sorry no dogs');
       e.preventDefault();
   }
});

logEvent = (e) => {
    console.log(e.type);
}

signupForm.nameOfCat.addEventListener('blur', logEvent);

//keyup keydown focus blur