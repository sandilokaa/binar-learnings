import { Button, Alert, Container, Card, Row, Col, Modal} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from "../slices/userSlice";


function Home() {

  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);
  const [isRefresh, setIsRefresh] = useState(false);


  // Modal 
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Response 
  const [successResponse, setSuccessResponse] = useState({
    isSuccess: false,
    message: "",
  });

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try{
        // Check status user login
        // 1. Get token from localStorage
        const token = localStorage.getItem("token");

        // 2. Check token validity from API
        const currentUserRequest = await axios.get(
          "http://localhost:2000/auth/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const currentUserResponse = currentUserRequest.data;


        if(currentUserResponse.status) {
          // Set user data to redux state
          dispatch(
            addUser({
              user: currentUserResponse.data.user,
              token: token,
            })
          );

          setUser(currentUserResponse.data.user);
        }

      } catch (err) {
        setIsLoggedIn(false);
      }
    };

    fetchData();
    posts();
    setIsRefresh(false);
  }, [isRefresh]);

  const logout = () => {
    localStorage.removeItem("token");

    setIsLoggedIn(false);
    setUser({});
  }

  const posts = async () => {
    try{
      const getPostsData = await axios.get(
        'http://localhost:2000/posts'
      );

      const payloadData = await getPostsData.data.data.get_all_posts_data;

      setData(payloadData);
    } catch (err){
      console.log(err);
    }
  }

  const onDelete = async (e, data) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      
      const deletedPost = await axios.delete(
        `http://localhost:2000/post/delete/${data.id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
      );
      
      const successResponse = deletedPost.data.message;

      setSuccessResponse({
        isSuccess: true,
        message: successResponse,
      })

      setIsRefresh(true);
      setShow(true);

    } catch (err) {
      console.log(err);
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  }
  

  return isLoggedIn ? (
    <div className="p-3">

    <Container>
      <Button className="my-3" variant="danger" onClick={(e)=> logout(e)}>
        Logout
      </Button>

      <Alert> Selamat Datang {user.name}</Alert>
      
      {successResponse.isSuccess && (
        <Alert variant="success" onClose={() => setSuccessResponse(true)} dismissible>{successResponse.message}</Alert>
      )}

      {errorResponse.isError && (
        <Alert variant="danger" onClose={() => setErrorResponse(true)} dismissible>{errorResponse.message}</Alert>
      )}

      <Link to="/createdata">
        <Button className="my-3" variant="success"> Create Post</Button>
      </Link>

      <Link to="/about">
        <Button className="ms-2 my-3" variant="primary"> About </Button>
      </Link>
    
      <Row>  
        {data.map((data) => (
          <Col lg={4} key={data.id}>
            <Card className="mt-3">
              <Card.Body>
              <Card.Img variant="top" src={`http://localhost:2000/public/files/${data.picture}`} height="240"/>
                <Card.Title className="mt-3">{data.title}</Card.Title>
                <Card.Text>
                  {data.description}
                </Card.Text>
                <Link to={`/update/${data.id}`}>
                  <Button variant="primary">Edit Data</Button>
                </Link>
                  <Button className="ms-3" variant="danger" onClick={handleShow}>Delete Data</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>Yakin ga nih?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Link to={`/delete/${data.id}`} onClick={(e) => onDelete(e, data)} >
            <Button variant="danger">
              Delete
            </Button>
          </Link>
        </Modal.Footer>
      </Modal>

    </Container>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;
