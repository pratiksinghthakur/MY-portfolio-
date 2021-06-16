import React, { useState } from "react";
import { Button, Modal } from 'react-bootstrap';

function RecommendationCard(props) {
  const { name, designation, company, message } = props.recommendation;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-12 col-md-4">

      <Button variant="" onClick={handleShow}>

        <div className="card shadow h-100">
          <div className="card-body">
            <h4 className="card-text">{message.slice(0, 10)}</h4>
            <p className="card-text text-secondary mb-0">{name}</p>
            <p className="card-text text-secondary">
              {designation} at {company}
            </p>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <h5>{message}</h5>
                {name}
                <br></br>
                {designation} at {company}
              </Modal.Body>
            </Modal>
          </div>
        </div>


      </Button>

    </div>
  );

}

export default RecommendationCard;
