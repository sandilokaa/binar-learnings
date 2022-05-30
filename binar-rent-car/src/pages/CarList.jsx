import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState, useRef } from 'react'
import { addUser } from '../slices/userSlice';
import { useDispatch } from "react-redux";
import { Navbar, Nav, Container, Form, Button, Row, Col, Card } from "react-bootstrap";

import './App.css';

export default function CarList() {
    
    const dispatch = useDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [user, setUser] = useState({});
    const [data, setData] = useState([]);

    const capacityField = useRef();
    const isWithDriverField = useRef();
    const dateField = useRef();
    const timeField = useRef();


    useEffect(() => {

        const fetchData = async () => {
            try {
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

                if (currentUserResponse.status) {
                    dispatch(
                        addUser({
                            user: currentUserResponse.data.user,
                            token: token,
                        })
                    )
                    setUser(currentUserResponse.data.user);
                }
            } catch (err) {
                setIsLoggedIn(false);
            }
        };

        fetchData();
    }, []);

    // Fetch Data From URL Binar
    // const fetchCars = async () => {
    //     const response = await fetch(
    //         "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
    //     ).then((response) => response.json());

    //     const filteredCars = response.filter((c) => {
    //         if(c.capacity === capacityField) {
    //             return c;
    //         }
    //     });

    //     setData(filteredCars);
    // };

    const fetchCars = async(e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem("token");

            // const dateTime = new Date(
            //     `${dateField.current.value} ${timeField.current.value}`
            // );
            
            const tzoffset = (new Date(`${dateField.current.value} ${timeField.current.value}`)).getTimezoneOffset() * 60000; //offset in milliseconds
            const localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);

            console.log(localISOTime);

            const getCarsRequest = await axios.get(
                `http://localhost:2000/cars/available?isWithDriver=${isWithDriverField.current.value}
                &availableAt=${localISOTime}
                &capacity=${capacityField.current.value}`, 
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const getCarsPayload= await getCarsRequest.data.data.get_available_cars;

            console.log(getCarsRequest);

            setData(getCarsPayload);
        } catch (err) {
            console.log(err);
        }
    }

    const logout = () => {
        localStorage.removeItem("token");

        setIsLoggedIn(false);
        setUser({});
    };
    
    return isLoggedIn ? (
        <div className="App">

            {/* Navbar Class */}
                    
            <Navbar className="navbar" expand="lg">
                <Container>
                <Navbar.Brand className="nav-brand"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link className="nav-item text-dark" >Our Service</Nav.Link>
                    <Nav.Link className="nav-item text-dark" >Why Us</Nav.Link>
                    <Nav.Link className="nav-item text-dark" >Testimonial</Nav.Link>
                    <Nav.Link className="nav-item text-dark" >FAQ</Nav.Link>
                    <Nav.Link className="nav-item text-dark greetings" >Halo, {user.name}</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Button variant="danger" className="text-white" onClick={(e) => logout(e)}>Logout</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* End Navbar Class */}


            {/* First Content Class */}

            <div className="first__content">
                <Container>
                <Row>
                    <Col xs={12} md={6} className="col__first__content">
                        <h2>Sewa & Rental Mobil Terbaik di kawasan Semarang</h2>
                        <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    </Col>
                    <Col xs={12} md={6} className="col__image">
                        <img src="../images/img_car.png" alt="Img__1"/>
                    </Col>
                </Row>
                </Container>
            </div>

            {/* End First Content Class */}

            {/* Form */}

            <div className="form__section">
                <div className="container ct__form">
                    <Form onSubmit={(e) => fetchCars(e)}>
                        <div className="row row__button">
                            <div className="col-lg-11">
                                <div className="row">
                                    <div className="col-12 col-lg-3">
                                        <label htmlFor="driverType" className="form-label">Tipe Driver</label>
                                        <select className="form-select" id="driverType" ref={isWithDriverField}>
                                            <option hidden>Pilih Tipe Driver</option>
                                            <option value="true">Dengan Sopir</option>
                                            <option value="false">Tanpa Sopir (Lepas Kunci)</option>
                                        </select>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <label htmlFor="dateInput" className="form-label">Tanggal</label>
                                        <input type="date" className="form-control" id="dateInput" placeholder="Pilih Tanggal" ref={dateField}/>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <label htmlFor="timeInput" className="form-label">Waktu Jemput/Ambil</label>
                                        <input type="time" className="form-control" id="timeInput" placeholder="Pilih Waktu" ref={timeField}/>
                                    </div>
                                    <div className="col-12 col-lg-3">
                                        <label htmlFor="capacityInput" className="form-label">Jumlah Penumpang (optional)</label>
                                        <input type="text" className="form-control" id="capacityInput" placeholder="Penumpang" ref={capacityField} autoComplete="off"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 col-12 col-lg-1 d-flex justify-content-start">
                                <Button className="mt-1 btn btn-success" id="load-btn" type="submit">Cari</Button>
                            </div>
                        </div>
                    </Form>
                    {/*  End of Form  */}
                </div>
            </div>

            {/*  Get Data Car  */}
            <div className="cars__data">
                <Container>
                    <Row>  
                        {data && data.map((cars_data) => (
                        <Col lg={4} key={cars_data.id}>
                            <Card className="mt-3">
                            <img variant="top" src={cars_data.image}/>
                            <Card.Body>
                                <Card.Title>{cars_data.manufacture}</Card.Title>
                                <h5 className="price"><strong>Rp. {cars_data.rentPerDay} / Hari</strong></h5>
                                <p>{cars_data.description}</p>
                                <p><i className="bi bi-people"></i> {cars_data.capacity}</p>
                                <p><i className="bi bi-gear"></i> {cars_data.transmission}</p>
                                <p><i className="bi bi-calendar-date"></i> {cars_data.year}</p>
                                <Button variant="success" className="text-white w-100"> Pilih Mobil </Button>
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            {/*  End of Get Data Car  */}

            {/* Seventh Content Class */}

            <div className="footer">
                <Container>
                    <Row>
                        <Col md={3} className="col__address">
                            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p>binarcarrental@gmail.com</p>
                            <p>081-233-334-808</p>
                        </Col>
                        <Col md={3} className="col__nav2">
                            <p><a href="#Our__Service">Our Service</a></p>
                            <p><a href="#Why__Us">Why Us</a></p>  	
                            <p><a href="#">Testimonial</a></p> 
                            <p><a href="#FAQ__Section">FAQ</a></p> 
                        </Col>
                        <Col md={3} className="col__connect">
                            <p>Connect with us</p>
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-envelope"></i>
                            <i className="bi bi-twitch"></i>
                        </Col>
                        <Col md={3} className="col__cr">
                            <p>Copyright Binar 2022</p>
                            <div className="empty"></div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* End Seventh Content Class */}

        </div>
    ) : (
        <Navigate to="/login" replace />
    );
}