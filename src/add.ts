import './style.css';

//Hämta formuläret från html
const form = document.getElementById("experience-form") as HTMLFormElement;

//Skapa en händelselyssnare som lyssnar på när någon trycker på spara
form.addEventListener("submit", async (e) => {
  e.preventDefault(); //Hindrar sidan från att laddas om
 const company = (document.getElementById("companyname") as HTMLInputElement).value;
 const title = (document.getElementById("jobtitle") as HTMLInputElement).value;
 const location = (document.getElementById("location") as HTMLInputElement).value;
 const startdate = (document.getElementById("startdate") as HTMLInputElement).value;
const enddate = (document.getElementById("enddate") as HTMLInputElement).value;
const description = (document.getElementById("description") as HTMLTextAreaElement).value;
 const errorMsg = document.getElementById("error-message") as HTMLDivElement;
//Kontroll av alla fält
//Skapar array för att samla alla fel
let errors: string[] = [];

if (company.trim().length < 3) {
  errors.push("Företagsnamn måste vara ifylld med minst tre tecken");
}
if (title.trim().length < 3) {
  errors.push("Jobbtitel måste vara ifyllt med minst tre tecken");
}

if (location.trim().length < 2) {
  errors.push("Plats måste anges");
}

if (errors.length > 0) {
  errorMsg.innerHTML = errors.join("<br>");
  return; 
}

const newExperience = {
  companyname: company,
  jobtitle: title,
  location: location,
  startdate: startdate,
  enddate: enddate,
  description: description


};

console.log("Nu är vi redo att skicka detta objekt", newExperience);

//Skicka data till servern med POST:

try {
  const res = await fetch("http://localhost:5001/workexperience", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newExperience) //Gör om objekt till text
  });

if (res.ok) {
  //Skicka användaren tillbaka till startsidan för att se resultatet
  window.location.href = "index.html";
} else {
  errorMsg.innerText = "Gick ej att spara, något blev fel";
}
} catch (error) {
  error.Msg.innerText = "Kunde ej ansluta till servern"
}
});