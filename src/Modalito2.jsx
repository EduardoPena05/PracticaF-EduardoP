import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modalito2(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Mi vecino Totoro
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Mi vecino Totoro</ModalHeader>
        <ModalBody>
          Una familia japonesa se traslada al campo. Las dos hijas se encuentran con un espíritu llamado Totoro, que habita en el bosque. Junto a él, comparten mágicas aventuras.
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

export default Modalito2;