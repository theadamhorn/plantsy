const newFormHandler = async (event) => {
    
  console.log(`Getting the sent info!!!~~~~~~~`)
    const genusInfo = document.querySelector('#genus').value.trim();
    const speciesInfo = document.querySelector('#species').value.trim();
    const varietyInfo = document.querySelector('#variety').value.trim();
    const common_nameInfo = document.querySelector('#common_name').value.trim();
    var wateringInfo =``;
    var temperatureInfo =``;
    var humidityInfo =``;
    var lightInfo =``;
    const descriptionInfo = document.querySelector('#description').value.trim();
    const careInfo = document.querySelector('#care').value.trim();
    const id = document.querySelector('#plantID').innerHTML.trim();
    const user_id = document.querySelector('#userID').innerHTML.trim();
    console.log(`heres the user_id!!!! wooohooo~~~!!!`+user_id)
// These are for getting the radio button values in the edit form
const waters = document.getElementsByName('waterNeeded');
  for (let i = 0, length = waters.length; i < length; i++) {
    if (waters[i].checked){
      wateringInfo = waters[i].value;
      break;
    }
  }
  const temps = document.getElementsByName('tempNeeded');
  for (let i = 0, length = temps.length; i < length; i++) {
    if (temps[i].checked){
      temperatureInfo = temps[i].value;
      break;
    }
  }
  const humiditys = document.getElementsByName('humidNeeded');
  for (let i = 0, length = humiditys.length; i < length; i++) {
    if (humiditys[i].checked){
      humidityInfo = humiditys[i].value;
      break;
    }
  }
  const lights = document.getElementsByName('lightNeeded');
  for (let i = 0, length = lights.length; i < length; i++) {
    if (lights[i].checked){
      lightInfo = lights[i].value;
      break;
    }
  }


  
console.log(JSON.stringify({ "user_id": user_id, "id": id,"genus": genusInfo, "species": speciesInfo, "variety": varietyInfo, "common_name": common_nameInfo, "watering": wateringInfo, "temperature": temperatureInfo, "humidity": humidityInfo, "light": lightInfo, "description": descriptionInfo, "care": careInfo }))
      const response = await fetch(`/api/owned-plants/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ "user_id": user_id, "id": id,"genus": genusInfo, "species": speciesInfo, "variety": varietyInfo, "common_name": common_nameInfo, "watering": wateringInfo, "temperature": temperatureInfo, "humidity": humidityInfo, "light": lightInfo, "description": descriptionInfo, "care": careInfo }),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
  
      if (response.ok) {
        document.location.replace('/users');
      } else {
        alert('Failed to update plant profile');
      }
    }

document.getElementById("saveEdit").addEventListener("click", newFormHandler)