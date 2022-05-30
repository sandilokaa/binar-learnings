import { Navbar, Nav, Container, Form, Button, Row, Col, Card, Accordion } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import { selectUser } from '../slices/userSlice';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import './App.css';

function Home() {

  const userRedux = useSelector(selectUser);
  const [user, setUser] = useState(userRedux.creds);

  return (
    <div className="App">

      {/* Navbar Class */}
            
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="nav-brand" href="#home"></Navbar.Brand>
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
              <Link to="/register">
                <Button variant="success" className="text-white">Register</Button>
              </Link>
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
              <Link to="/car-list">
                <Button variant="success" className="text-white">Mulai Sewa Mobil</Button>
              </Link>
            </Col>
            <Col xs={12} md={6} className="col__image">
              <img src="../images/img_car.png" alt="Img__1"/>
            </Col>
          </Row>
        </Container>
      </div>

      {/* End First Content Class */}


      {/* Second Content Class */}
      
      <div className="second__content">
        <Container>
          <Row>
            <Col xs={12} md={6} className="image__second__content">
              <img src="../images/img_service.png" alt="Img__1"/>
            </Col>
            <Col xs={12} md={6} className="check__second__content">
              <h3>Best Car Rental for any kind of trip in Semarang!</h3>
              <p>Sewa mobil di Semarang bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
              <p><i className="bi bi-check text-primary me-3"></i> Sewa Mobil Dengan Supir di Bali 12 Jam </p>
              <p><i className="bi bi-check text-primary me-3"></i> Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              <p><i className="bi bi-check text-primary me-3"></i> Sewa Mobil Jangka Panjang Bulanan</p>
              <p><i className="bi bi-check text-primary me-3"></i> Gratis Antar - Jemput Mobil di Bandara</p>
              <p><i className="bi bi-check text-primary me-3"></i> Layanan Airport Transfer / Drop In Out</p>
            </Col>
          </Row>
        </Container>
      </div>

      {/* End Second Content Class */}
    

      {/* Third Content Class */}
    
      <div className="third__content">
        <Container>
          <h1 className="h1__tc">Why Us?</h1>
          <p className="p__tc">Mengapa harus pilih Binar Car Rental?</p>

          <Row>
            <Col md={3}>
              <Card>
                <Card.Body className="card-body">
                  <i className="bi bi-hand-thumbs-up text-white"></i>
                  <h5 className="card-title">Mobil Lengkap</h5>
                  <p className="card-text">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body className="card-body">
                  <i className="bi bi-tag text-white"></i>
                  <h5 className="card-title">Harga Murah</h5>
                  <p className="card-text">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body className="card-body">
                  <i className="bi bi-clock text-white"></i>
                  <h5 className="card-title">Layanan 24 Jam</h5>
                  <p className="card-text">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card>
                <Card.Body className="card-body">
                  <i className="bi bi-award text-white"></i>
                  <h5 className="card-title">Sopir Profesional</h5>
                  <p className="card-text">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        
        </Container>
      </div>

      {/* End Third Content Class */}


      {/* Fourth Content Class */}

      <div className="testimonial">
        <h1 className="h1__testimonial"> Testimonial </h1>
        <p className="p__testimonial">Berbagai review positif dari para pelanggan kami</p>
        <OwlCarousel items={2} className='owl-theme' loop center margin={10} nav>
          <div className="single-box">
            <div className="img-area">
              <img src="../images/user_profile.png" alt="user1"/>
            </div>
            <div className="text-img">
              <div className="icon">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur ea inventore eligendi iusto, quis autem placeat"</p>
              <h2> John Dee 32, Bromo </h2>
            </div>
          </div>

          <div className="single-box">
            <div className="img-area">
              <img src="../images/user_profile.png" alt="user2"/>
            </div>
            <div className="text-img">
              <div className="icon">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur ea inventore eligendi iusto, quis autem placeat"</p>
              <h2> John Dee 32, Bromo </h2>
            </div>
          </div>

          <div className="single-box">
            <div className="img-area">
              <img src="../images/user_profile.png" alt="user3"/>
            </div>
            <div className="text-img">
              <div className="icon">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique pariatur ea inventore eligendi iusto, quis autem placeat"</p>
              <h2> John Dee 32, Bromo </h2>
            </div>
          </div>
        </OwlCarousel>;
      </div>

      {/* End Fourth Content Class */}

      {/* Fifth Content Class */}

      <div className="rent_car">
        <Container>
          <div className="jumbotron">
            <h1 className="h1__sewa">Sewa Mobil di Semarang Sekarang</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua. </p>
            <a className="btn btn-success btn-lg" href="#" role="button">Mulai Sewa Mobil</a>
          </div>
        </Container>
      </div>

      {/* End Fifth Content Class */}

      {/* Sixth Content Class */}

      <div className="faq__section">
        <Container>
          <Row>
            <Col md={5} className="col__faq">
              <h1>Frequently Asked Question</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </Col>
            <Col md={7} className="col__accordion">
              <Accordion>

                <Accordion.Item eventKey="0">
                  <Accordion.Header>Apa saja syarat yang dibutuhkan?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Apakah Ada biaya antar-jemput?</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
                
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Bagaimana jika terjadi kecelakaan</Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>

      {/* End Sixth Content Class */}

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
  );
}

export default Home;
