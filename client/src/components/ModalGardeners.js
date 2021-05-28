import React, { useState} from 'react';
import AccordionUser from './AccordionUser';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { faSeedling } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function GardenersModal(props) {

    const [modal, setModal] = useState(false);
    return (
        <>
        <Button variant="primary" onClick={()=>setModal(true)}
                  >
            <p><FontAwesomeIcon icon={faSeedling} className="fa-2x" /></p>
            <p>Plant</p>
            <p>Profile</p>
        </Button>
        <Modal aria-labelledby="contained-modal-title-vcenter" centered show={modal} onHide={() => setModal(false)}>
            <Modal.Header closeButton>
                <h5 className="modal-title">{props.name}'s Garden </h5>
            </Modal.Header>
            <Modal.Body>
                <AccordionUser
                ownedPlants={props.OwnedPlants}/>
            </Modal.Body>
        </Modal>
        </>
    );
}

export default GardenersModal;