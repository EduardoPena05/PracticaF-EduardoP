import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modalito5(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Como entrenar a tu dragon
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Como entrenar a tu dragon</ModalHeader>
        <ModalBody>
          Hipo, un vikingo adolescente, comienza las clases de entrenamiento con dragones, y ve por fin una oportunidad para demostrar que es capaz de convertirse en guerrero, cuando hace amistad con un dragón herido.
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modalito5;