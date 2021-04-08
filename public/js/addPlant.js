const addPlant = async (event) => {
 const plantID = event.target.value;

 const response = await fetch(`/api/plants/${plantID}`);
 const plantInfo = await response.json();
  if (response.ok) {
    const postResponse = await fetch(`/api/owned-plants/`, {
        method: 'POST',
        body: JSON.stringify({"genus": plantInfo.genus , "species": plantInfo.species , "variety": plantInfo.variety , "common_name": plantInfo.common_name , "watering": plantInfo.watering , "temperature": plantInfo.temperature , "humidity": plantInfo.humidity , "light": plantInfo.light , "description": plantInfo.description}),
        headers: {
          'Content-Type': 'application/json',
        },
        
      });
      if (postResponse.ok){
        alert('Plant added!');
      }else{
          alert('Failed to add plant');
      }
  }else{
    alert('Could not add plant.');
  }
}

var addPlantButton = document.getElementsByClassName("add-plant-button");
for(var i = 0; i < addPlantButton.length; i++){
    addPlantButton[i].addEventListener("click", addPlant);
}
