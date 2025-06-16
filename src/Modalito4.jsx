import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modalito4(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Una voz silenciosa
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Una voz silenciosa</ModalHeader>
        <ModalBody>
          Shôko Nishimiya, una estudiante de primaria sorda, empieza a sentir el bullying de sus nuevos compañeros cuando se cambia de colegio. El peor de todos es Ishida Shôya, quien termina por forzar que Nishimiya se cambie de escuela. Años después, Ishida buscará la redención de sus malas acciones.
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

export default Modalito4;