import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modalidad(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Hombres de negro
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Hombres de negro</ModalHeader>
        <ModalBody>
          Durante muchos años los extraterrestres han vivido en la Tierra, mezclados con los seres humanos, sin que nadie lo supiese. Los Hombres de Negro son agentes especiales que forman parte de una unidad altamente secreta del gobierno; su misión consiste en controlar a los alienígenas. Dos de estos agentes (uno veterano y otro recién incorporado), cuya misión consiste en vigilar a los alienígenas que viven en Nueva York, descubren a un terrorista galáctico que pretende acabar con la Humanidad.
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

export default Modalidad;