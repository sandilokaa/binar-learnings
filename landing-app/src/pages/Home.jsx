import { Button, Alert, Container, Card, Row, Col} from "react-bootstrap";
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
  }, []);

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
  

  return isLoggedIn ? (
    <div className="p-3">

    <Container>
      <Button className="my-3" variant="danger" onClick={(e)=> logout(e)}>
        Logout
      </Button>

      <Alert> Selamat Datang {user.name}</Alert>

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
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                  {data.description}
                </Card.Text>
                <Link to={`/update/${data.id}`}>
                  <Button variant="primary">Edit Data</Button>
                </Link>
                <Link to={`/delete/${data.id}`}>
                  <Button className="ms-3" variant="danger">Delete Data</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </Container>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

export default Home;
