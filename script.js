const careerStatusSelect = document.getElementById("career");
const studentFieldset = document.getElementById("student");
const unemployedFieldset = document.getElementById("unemployed");
const employedFieldset = document.getElementById("employed");
const parentalFieldset = document.getElementById("parental");
const genderSelect = document.getElementById("lytis");
const maritalStatusSelect = document.getElementById("marital-status");
const spouseFieldset = document.getElementById("spouse");
const spouseName= document.getElementById("spouse-name");
const spouseLastName= document.getElementById("spouse-lastname");
const firstname = document.getElementById("name");
const lastName = document.getElementById("lastname");
const dobInput = document.getElementById("dob");
const lastdigits = document.getElementById("lastDigits");
const education = document.getElementById("education");
const phoneN = document.getElementById("phone");
const country = document.getElementById("countryCode");
const email = document.getElementById("email");
const address = document.getElementById("address");
const experience= document.getElementById("experience");
const field= document.getElementById("field");
const age = calculateAge(dobInput.value);

function calculateAge(dateOfBirth) {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

studentFieldset.style.display = "none";
unemployedFieldset.style.display = "none";
employedFieldset.style.display = "none";
parentalFieldset.style.display = "none";

careerStatusSelect.addEventListener("change", function () {
    if (careerStatusSelect.value === "student") {
        studentFieldset.style.display = "block";
        unemployedFieldset.style.display = "none";
        employedFieldset.style.display = "none";
        parentalFieldset.style.display = "none";
    } else if (careerStatusSelect.value === "unemployed") {
        studentFieldset.style.display = "none";
        unemployedFieldset.style.display = "block";
        employedFieldset.style.display = "none";
        parentalFieldset.style.display = "none";
    } else if (careerStatusSelect.value === "employed") {
        studentFieldset.style.display = "none";
        unemployedFieldset.style.display = "none";
        employedFieldset.style.display = "block";
        parentalFieldset.style.display = "none";
    } else if (
        careerStatusSelect.value === "maternity" ||
        careerStatusSelect.value === "paternity"
    ) {
        studentFieldset.style.display = "none";
        unemployedFieldset.style.display = "none";
        employedFieldset.style.display = "none";
        parentalFieldset.style.display = "block";
    } else {
        studentFieldset.style.display = "none";
        unemployedFieldset.style.display = "none";
        employedFieldset.style.display = "none";
        parentalFieldset.style.display = "none";
    }
});


maritalStatusSelect.addEventListener("change", function () {
    if (
        maritalStatusSelect.value === "marriedM" ||
        maritalStatusSelect.value === "marriedF"
    ) {
        spouseFieldset.style.display = "block";
    } else {
        spouseFieldset.style.display = "none";
    }
});

genderSelect.addEventListener("change", function () {
    const selectedGender = genderSelect.value;
    const maritalStatusOptions = maritalStatusSelect.options;
    const careerStatusOptions = careerStatusSelect.options;
    for (let i = 0; i < maritalStatusOptions.length; i++) {
        const option = maritalStatusOptions[i];
        if (selectedGender === "male" && option.value.endsWith("M")) {
            option.style.display = "block";
        } else if (selectedGender === "female" && option.value.endsWith("F")) {
            option.style.display = "block";
        } else {
            option.style.display = "none";
        }
    }
    for (let i = 0; i < careerStatusOptions.length; i++) {
        const option = careerStatusOptions[i];
        if (selectedGender === "male" && option.value === "maternity") {
            option.style.display = "none";
        } else if (selectedGender === "female" && option.value === "paternity") {
            option.style.display = "none";
        } else {
            option.style.display = "block";
        }
    }
});

const selectElement = document.getElementById("countryCode");

function populateCountryCodes() {
    const countryCodes = [
        { code: "+370", country: "Lietuva" },
        { code: "+33", country: "Prancūzija" },
        { code: "+49", country: "Vokietija" },
        { code: "+81", country: "Japonija" },
        { code: "+86", country: "Kinija" },
        { code: "+91", country: "Indija" },
        { code: "+355", country: "Albanija" },
        { code: "+376", country: "Andora" },
        { code: "+374", country: "Armėnija" },
        { code: "+43", country: "Austrija" },
        { code: "+994", country: "Azerbaidžanas" },
        { code: "+375", country: "Baltarusija" },
        { code: "+32", country: "Belgija" },
        { code: "+387", country: "Bosnija ir Hercegovina" },
        { code: "+359", country: "Bulgarija" },
        { code: "+385", country: "Kroatija" },
        { code: "+357", country: "Kipras" },
        { code: "+420", country: "Čekijos Respublika" },
        { code: "+45", country: "Danija" },
        { code: "+372", country: "Estija" },
        { code: "+298", country: "Farerų salos" },
        { code: "+358", country: "Suomija" },
        { code: "+33", country: "Prancūzija" },
        { code: "+995", country: "Gruzija" },
        { code: "+49", country: "Vokietija" },
        { code: "+30", country: "Graikija" },
        { code: "+36", country: "Vengrija" },
        { code: "+354", country: "Islandija" },
        { code: "+353", country: "Airija" },
        { code: "+39", country: "Italija" },
        { code: "+371", country: "Latvija" },
        { code: "+423", country: "Lichtenšteinas" },
        { code: "+352", country: "Liuksemburgas" },
        { code: "+389", country: "Šiaurės Makedonija" },
        { code: "+356", country: "Malta" },
        { code: "+373", country: "Moldova" },
        { code: "+377", country: "Monakas" },
        { code: "+382", country: "Juodkalnija" },
        { code: "+31", country: "Nyderlandai" },
        { code: "+47", country: "Norvegija" },
        { code: "+48", country: "Lenkija" },
        { code: "+351", country: "Portugalija" },
        { code: "+40", country: "Rumunija" },
        { code: "+7", country: "Rusija" },
        { code: "+378", country: "San Marinas" },
        { code: "+381", country: "Serbija" },
        { code: "+421", country: "Slovakija" },
        { code: "+386", country: "Slovėnija" },
        { code: "+34", country: "Ispanija" },
        { code: "+46", country: "Švedija" },
        { code: "+41", country: "Šveicarija" },
        { code: "+380", country: "Ukraina" },
        { code: "+44", country: "Jungtinė Karalystė" },
        { code: "+379", country: "Vatikanas" },
    ];

    countryCodes.forEach((country) => {
        const optionElement = document.createElement("option");
        optionElement.value = country.code;
        optionElement.textContent = `${country.code}(${country.country})`;

        selectElement.appendChild(optionElement);
    });
}

populateCountryCodes();

document.addEventListener('DOMContentLoaded', function () {
    const dobInput = document.getElementById("dob");
    const genderSelect = document.getElementById("lytis");

    dobInput.addEventListener("input", updateAsmensKodas);
    genderSelect.addEventListener("change", updateAsmensKodas);
});


function updateAsmensKodas() {
    const dobInput = document.getElementById("dob");
    const dobValue = dobInput.value;

    const year = dobValue.substring(2, 4);
    const month = dobValue.substring(5, 7);
    const day = dobValue.substring(8, 10);
    let gender;
    const birthYear = parseInt(dobValue.substring(0, 4), 10);
    if (birthYear >= 1800 && birthYear <= 1899) {
        gender = genderSelect.value==="male" ? 1 : 2;
    } else if (birthYear >= 1900 && birthYear <= 1999) {
        gender =  genderSelect.value==="male"  ? 3 : 4;
    } else if (birthYear >= 2000 && birthYear <= 2099) {
        gender =  genderSelect.value==="male" ? 5 : 6;
    } else {
        console.error("Invalid birth year");
        return;
    }
    const asmensKodas = gender + year + month + day;
    const asmensKodasInput = document.getElementById("code");
    asmensKodasInput.value = asmensKodas;
}
dobInput.addEventListener("input", updateAsmensKodas);


function validateInput()
{
    if(genderSelect.value==="")
    {
      onError(genderSelect);
    }
    else{
        onSuccess(genderSelect);
    }
    if(firstname.value.trim()==="")
    {
        onError(firstname);
    }
    else
    {
        onSuccess(firstname);
    }
    if(lastName.value.trim()==="")
    {
        onError(lastName);
    }
    else
    {
        onSuccess(lastName);
    }
    if(dobInput.value.trim()==="")
    {
       onError(dobInput);
    }
    else
    {
        onSuccess(dobInput);

    }
    if(lastdigits.value.trim()==="")
    {
        onError(lastdigits);
    }
    else
    {
        onSuccess(lastdigits);
    }
    if(education.value.trim()==="")
    {
        onError(education);
    }
    else
    {
        onSuccess(education);
    }

   if(phoneN.value.trim()==="")
    {
        onError(phoneN);
    }
    else
    {
        onSuccess(phoneN);  
    }

    if(email.value.trim()==="")
    {
        onError(email);
    }
    else
    {
        onSuccess(email);
    }

    if(address.value.trim()==="")
    {
        onError(address);
    }
    else
    {
        onSuccess(address);
    }


    if(maritalStatusSelect.value==="")
    {
        onError(maritalStatusSelect); 
    }
    else
    {
        onSuccess(maritalStatusSelect);
    }

    if(careerStatusSelect.value==="")
    {
        onError(careerStatusSelect);
    }
    else
    {
        onSuccess(careerStatusSelect);
        
    }

    if (experience.value.trim()==="")
    {
        onError(experience);
    }
    else
    {
        onSuccess(experience);
    }

    if (field.value.trim()==="")
    {
        onError(field);
    }
    else
    {
        onSuccess(field);
    }
}

document.querySelector("button").addEventListener("click", (event)=> {
    event.preventDefault();
    validateInput();
});

function onSuccess(input)
{
    let parent=input.parentElement;
    let messageEl=parent.querySelector("small");
    messageEl.style.visibility="hidden";
    parent.classList.remove("error");
    parent.classList.add("success");
}

function onError(input)
{
    let parent=input.parentElement;
    let messageEl=parent.querySelector("small");
    messageEl.style.visibility="visible";
    parent.classList.remove("success");
    parent.classList.add("error");
}