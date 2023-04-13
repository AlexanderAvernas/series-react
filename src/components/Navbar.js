import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Search from '../pages/Search';


function BasicExample() {
  return (
    <>
    <Navbar className='navbar' bg="light" expand="lg">
      <Container className='navbar-container'>
        <Navbar.Brand  href="#home"><h1 className='navbar-name'>Series</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
                <Link to={"/"}>Home</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"/about"}>About</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to={"/search"}>Search</Link>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/search" element={<Search/>}></Route>
            </Routes>
    </>
  );
}

export default BasicExample;
