import { useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [hours, setHours] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    Axios.post("http://localhost:6000/NotionAPIPost", {
      WorkedHours: hours,
      Note: note,
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <>
      <Button onClick={handleShow}>Rapportera tid</Button>

      <Modal
        show={show}
        onHide={handleClose}
        onSubmit={handleSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title>Rapportera tid</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label>Arbetade timmar</Form.Label>
              <Form.Control
                type="number"
                min="1"
                step="1"
                autoFocus
                onChange={(e) => setHours(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Kommentar</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
          >
            Stäng
          </Button>
          <Button
            type="submit"
            onClick={handleClose}
          >
            Spara
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
