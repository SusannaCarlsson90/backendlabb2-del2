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
          <button onclick="deleteExperience(${work.ID})">
        Radera
      </button>
        </div>
      `;
    });
  }
}

getData();

(window as any).deleteExperience = async (id: number) => {
  //Dubbelkolla om användaren vill radera?
  if (confirm("Är du säker på att du vill radera denna erfarenhet?")) {
      
      try {
          //Skicka DELETE-anropet till servern
          const res = await fetch(`http://localhost:5001/workexperience/${id}`, {
              method: "DELETE"
          });

          if (res.ok) {
              //Om det gick bra, ladda om listan så att den raderade posten försvinner
              getData(); 
          } else {
              alert("Gick inte att radera från servern.");
          }
          
      } catch (error) {
        console.error("DETTA ÄR FELET:", error.message); // Lägg till denna rad!
        res.status(500).json({ message: error.message });
      }
  }
};



