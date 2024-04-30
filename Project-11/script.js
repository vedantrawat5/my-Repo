let DobStatus =false;
let dateOfBirth;

const settingWheelEl = document.getElementById("settingIcon");
const settingContentEl = document.getElementById("settingContent");
const initialTextEl =document.getElementById("initialText");
const afterDOBBtnTxtEl =document.getElementById("afterDOBBtnTxt");
const dobButtonEl =document.getElementById("dobButton");


const toggleDateOfBirthSelector = () =>{
    if(DobStatus){
        settingContentEl.classList.add('hide');
    }
    else{
        settingContentEl.classList.remove('hide');
    }
    DobStatus =!DobStatus;

    console.log('Toggle',DobStatus);
};

const setDOBHandler = () => {
    dateOfBirth = dobButtonEl.value;
    console.log('date of birth', dateOfBirth);  
};

settingWheelEl.addEventListener('click', toggleDateOfBirthSelector);
dobButtonEl.addEventListener('click', toggleDateOfBirthSelector);