import { useState } from "react";
import Axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import '../css/ModalPopUp.css';

function ModalPopUp({ data }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [hours, setHours] = useState("");
    const [note, setNote] = useState("");
    const [date, setDate] = useState("");

    const storedUserID = JSON.parse(localStorage.getItem("userID"));

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            console.log("Skapar timereport");
            const response = await Axios.post("http://localhost:4003/NotionAPIPost", {
                Hours: hours,
                Note: note,
                Date: date,
                UserID: storedUserID,
                ProjectId: data.id,
            });
        } catch (error) {
            console.log(error);
        }
        
    };

    return (
        <>
            <Button onClick={handleShow}>Rapportera tid</Button>

            <Modal
                show={show}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Rapportera tid</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Datum</Form.Label>
                            <Form.Control
                                type="date"
                                autoFocus
                                onChange={(e) => setDate(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Arbetade timmar</Form.Label>
                            <Form.Control
                                type="number"
                                min="1"
                                step="1"
                                autoFocus
                                onChange={(e) => setHours(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
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
                    <Button className="btnclose" variant="secondary" onClick={handleClose}>
                        Stäng
                    </Button>
                    <Button className="btnsubmit" type="submit"
                        onClick={(e) => { handleSubmit(e); handleClose(); }}>
                        Spara
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalPopUp;
