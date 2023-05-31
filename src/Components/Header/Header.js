import React, { } from 'react'
import { Navbar, Nav, Container,Button,Form} from "react-bootstrap";
import { useHistory,Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { authAction } from '../../ReduxStore/Auth';
import { themeAction } from '../../ReduxStore/Theme';
  
const Header = () => {
  const dispatch = useDispatch();
  const loginStatus = useSelector(state => state.authentication.isAuthenticated);
  const history = useHistory();
  const theme = useSelector((state) => state.theme.currTheme);
  const logOutHandler = () => {
    dispatch(authAction.isLogin());
    history.replace('/login')
    // localStorage.removeItem('token');
    // localStorage.removeItem('email');
    localStorage.clear();
  }

  const switchToDarkTheme = () => { 
    // console.log("dark theme")
    dispatch(themeAction.switchTheme());
    if (localStorage.getItem("theme") === "darkTheme")
      localStorage.setItem("theme", "ligthTheme");
     else
      localStorage.setItem("theme", "darkTheme");
      
  }


  return (
    <Navbar bg="dark" variant="dark" expand="md">
      <Container>
        <Navbar.Brand>
          <Link to="/home" style={{ color: "cyan", textDecoration: "none" }}>
            Expense-Tracker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            {loginStatus && (
              <Button
                type="button"
                variant="light"
                onClick={logOutHandler}
                size="sm"
              >
                LogOut
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        label="Theme"
        onClick={switchToDarkTheme}
        defaultChecked={theme === "darkTheme"}
      />
    </Navbar>
  );
}

export default Header
