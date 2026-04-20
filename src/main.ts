import './style.css'

//Hamburgermeny: 
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
}

async function getData() {
  const res = await fetch("http://localhost:5001/workexperience");
  const data = await res.json();

  console.table(data);
}

getData();

async function createExperience() {
  //Skapar objekt
  let experience = { 
      companyname: "Mittuniversitetet", 
      jobtitle: "Student",
      location: "Sundsvall",
      startdate: "2023-01-01",
      enddate: "2024-01-01",
      description: "Läser webbutveckling."
  };

  //Skicka till port 5001 och rätt route
  const res = await fetch("http://localhost:5001/workexperience", {
      method: "POST",
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(experience)
  });

  const data = await res.json();
  console.log(data);
}

// Kör funktionen för att skicka datan
createExperience();