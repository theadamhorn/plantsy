import React, { useState} from 'react'
import API from "../utils/API";
//import UserContext from "../utils/UserContext";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
//delayed until add set-up
function DeletePlantModal(props) {
  const [modal, setModal] = useState(false);

  const deletePlant = (event) =>{
    event.preventDefault();

    API.deleteOwnedPlants(event.target.value).then(res =>{
      setModal(false);
      props.getOwnedPlants();
    }).catch(err => { console.error(err) })
  }
  return (
    <>
    <Button size="md" onClick={()=>setModal(true)} style={{
           color: "#e4d7d0",
           fontFamily: "Kiwi Maru",
           fontSize: "1em",
           backgroundColor: "#0a4158",
           paddingLeft: "1em",
           paddingRight: "1em",
           paddingTop: "0.5em",
           paddingBottom: "0.5em",
           borderRadius: "10px",
           borderWidth: "0px"
          }}>Delete A Plant</Button>
    <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h5 className="modal-title" id="deletePlantLabel">Delete Plant(s)</h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.Owned_Plants.map(plant => {
         return( <div className="row">
            <h5>{plant.common_name ? plant.common_name : plant.genus +" " + plant.species}<button type="button" className="btn-close deletePlantBtn" id="deletePlantBtn{plant.id}" value={plant.id} aria-label="Close" onClick={event =>deletePlant(event)}></button></h5>
          </div>
         )
        })}
      </Modal.Body>
      <Modal.Footer>
      <Button style={{ 
                 color: "#e4d7d0",
                  fontFamily: "Kiwi Maru",
                  fontWeight: 700,
                  backgroundColor: "#0a4158",
                  paddingLeft: "1em",
                  paddingRight: "1em",
                  paddingTop: "0.5em",
                  paddingBottom: "0.5em",
                  borderRadius: "10px"}} onClick={()=>setModal(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default DeletePlantModal;