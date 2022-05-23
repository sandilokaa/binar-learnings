import { useRef, useState } from "react";
import { Form, Container, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {

    const navigate = useNavigate();

    const titleField = useRef("");
    const descriptionField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onCreate = async (e) => {
        e.preventDefault();

        try{
            const token = localStorage.getItem("token");
            
            const userToCreatePayload = {
                title: titleField.current.value,
                description: descriptionField.current.value,
            };

            const createRequest = await axios.post(
                "http://localhost:2000/post/create",
                userToCreatePayload,{
                    headers:{
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const createResponse = createRequest.data;

            if(createResponse.status) {
                navigate("/");
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    return (
        <Container className="my-5">
            <h1 className="mb-3">Create Post</h1>
            <Form onSubmit={onCreate}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        ref={titleField}
                        placeholder="Masukkan Title"
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        ref={descriptionField}
                        placeholder="Masukkan Description"
                    />
                </Form.Group>

                {errorResponse.isError && (
                    <Alert variant="danger">{errorResponse.message}</Alert>
                )}

                <Button className="w-100" type="submit">
                    Buat
                </Button>
            </Form>
        </Container>
    );
}