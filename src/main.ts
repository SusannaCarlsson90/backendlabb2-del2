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

  //Hämtar min div från index.html
  const experienceList =  document.getElementById("experience-list");
  if (experienceList) {
    experienceList.innerHTML = ""; //Rensa gammal text
    //Gå igenom varje arbetserfarenhet
    data.forEach((work: any) => {
      //Lägg till HTML för varje jobb i diven
      experienceList.innerHTML += `
        <div class="work-card" style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
          <h3>${work.companyname}</h3>
          <p><strong>${work.jobtitle}</strong> - ${work.location}</p>
          <p><em>${work.startdate} till ${work.enddate}</em></p>
          <p>${work.description}</p>
        </div>
      `;
    });
  }
}

getData();





