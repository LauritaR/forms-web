
    
                const careerStatusSelect = document.getElementById("career");
                const studentFieldset = document.getElementById("student");
                const unemployedFieldset = document.getElementById("unemployed");
                const employedFieldset = document.getElementById("employed");
                const parentalFieldset = document.getElementById("parental");
                
                studentFieldset.style.display="none";
                unemployedFieldset.style.display="none";    
                employedFieldset.style.display="none";
                parentalFieldset.style.display="none";

                careerStatusSelect.addEventListener("change", function() {
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
                    } else if (careerStatusSelect.value === "maternity" || careerStatusSelect.value === "paternity") {
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


              
                const genderSelect = document.getElementById("lytis");
                const maritalStatusSelect = document.getElementById("marital-status");
                const spouseFieldset = document.getElementById("spouse");

                maritalStatusSelect.addEventListener("change", function() {
                    if (maritalStatusSelect.value === "marriedM" || maritalStatusSelect.value === "marriedF") {
                        spouseFieldset.style.display = "block";
                    } else {
                        spouseFieldset.style.display = "none";
                    }
                });

                genderSelect.addEventListener("change", function() {
                 const selectedGender = genderSelect.value;
                 const maritalStatusOptions = maritalStatusSelect.options;
                 const careerStatusOptions = careerStatusSelect.options;
                 for(let i=0;i<maritalStatusOptions.length;i++)
                 {
                    const option=maritalStatusOptions[i];
                    if(selectedGender==="male"&& option.value.endsWith("M"))
                    {
                        option.style.display="block";
                    }
                    else if(selectedGender==="female" && option.value.endsWith("F"))
                    {
                        option.style.display="block";
                    }
                    else
                    {
                        option.style.display="none";
                    }
                 }
                 for(let i=0;i<careerStatusOptions.length;i++)
                 {
                  const option=careerStatusOptions[i];
                  if(selectedGender==="male"&& option.value==="maternity")
                  {
                    option.style.display="none";
                  }  
                  else if(selectedGender==="female" && option.value==="paternity")
                  {
                    option.style.display="none";
                  }
                  else
                  {
                    option.style.display="block";
                  }
                 }
                });
                
        const selectElement = document.getElementById('countryCode');

        // Function to populate the select element with country codes
        function populateCountryCodes() {
            // Array of country codes
            const countryCodes = [
                { code: '+33', country: 'Prancūzija' },
                { code: '+49', country: 'Vokietija' },
                { code: '+81', country: 'Japonija' },
                { code: '+86', country: 'Kinija' },
                { code: '+91', country: 'Indija' },
                { code: '+355', country: 'Albanija' },
                { code: '+376', country: 'Andora' },
                { code: '+374', country: 'Armėnija' },
                { code: '+43', country: 'Austrija' },
                { code: '+994', country: 'Azerbaidžanas' },
                { code: '+375', country: 'Baltarusija' },
                { code: '+32', country: 'Belgija' },
                { code: '+387', country: 'Bosnija ir Hercegovina' },
                { code: '+359', country: 'Bulgarija' },
                { code: '+385', country: 'Kroatija' },
                { code: '+357', country: 'Kipras' },
                { code: '+420', country: 'Čekijos Respublika' },
                { code: '+45', country: 'Danija' },
                { code: '+372', country: 'Estija' },
                { code: '+298', country: 'Farerų salos' },
                { code: '+358', country: 'Suomija' },
                { code: '+33', country: 'Prancūzija' },
                { code: '+995', country: 'Gruzija' },
                { code: '+49', country: 'Vokietija' },
                { code: '+30', country: 'Graikija' },
                { code: '+36', country: 'Vengrija' },
                { code: '+354', country: 'Islandija' },
                { code: '+353', country: 'Airija' },
                { code: '+39', country: 'Italija' },
                { code: '+371', country: 'Latvija' },
                { code: '+423', country: 'Lichtenšteinas' },
                { code: '+370', country: 'Lietuva' },
                { code: '+352', country: 'Liuksemburgas' },
                { code: '+389', country: 'Šiaurės Makedonija' },
                { code: '+356', country: 'Malta' },
                { code: '+373', country: 'Moldova' },
                { code: '+377', country: 'Monakas' },
                { code: '+382', country: 'Juodkalnija' },
                { code: '+31', country: 'Nyderlandai' },
                { code: '+47', country: 'Norvegija' },
                { code: '+48', country: 'Lenkija' },
                { code: '+351', country: 'Portugalija' },
                { code: '+40', country: 'Rumunija' },
                { code: '+7', country: 'Rusija' },
                { code: '+378', country: 'San Marinas' },
                { code: '+381', country: 'Serbija' },
                { code: '+421', country: 'Slovakija' },
                { code: '+386', country: 'Slovėnija' },
                { code: '+34', country: 'Ispanija' },
                { code: '+46', country: 'Švedija' },
                { code: '+41', country: 'Šveicarija' },
                { code: '+380', country: 'Ukraina' },
                { code: '+44', country: 'Jungtinė Karalystė' },
                { code: '+379', country: 'Vatikanas' },

            ];

            // Loop through the country codes array
            countryCodes.forEach((country) => {
                // Create an option element
                const optionElement = document.createElement('option');
                optionElement.value = country.code;
                optionElement.textContent = `${country.country} (${country.code})`;

                // Append the option element to the select element
                selectElement.appendChild(optionElement);
            });
        }
        // Call the function to populate the select element
        populateCountryCodes();
