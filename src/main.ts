import './style.css'

async function getData() {
  const res = await fetch("http://localhost:5001/workexperience");
  const data = await res.json();

  console.table(data);
}

getData();