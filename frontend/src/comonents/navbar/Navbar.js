import { useState } from "react";
import {
  Navbar,
  Text,
  Avatar,
  Dropdown,
  Input,
  Button,
  Link,
  Card,
} from "@nextui-org/react";
import { SearchIcon } from "./Searchicon.js";

export default function App(props) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSignInCard, setShowSignInCard] = useState(false);
  const [showSignUpCard, setShowSignUpCard] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    setShowSignInCard(true);
  }

  function handleSignIn() {
    // Here you can add your own code to verify the user's credentials
    // For the sake of this example, we'll just set isAuthenticated to true
    setIsAuthenticated(true);
    setShowSignInCard(false);
  }

  function handleLogout() {
    setIsAuthenticated(false);
  }

  function handleSignUp() {
    setShowSignUpCard(true);
  }

  function handleCloseSignIn() {
    setShowSignInCard(false);
    setShowSignUpCard(false);
  }

  return (
    <>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand css={{ mr: "$4" }}>
          <Text b color="inherit" className="brandName">
            <a className="brandName" href={props.brnadlink}>
              {props.brand}
            </a>
          </Text>
          <Navbar.Content variant="highlight" className="navContent">
            <Navbar.Link href="#">All</Navbar.Link>
            <Navbar.Link href="#">Categories</Navbar.Link>
            {isAuthenticated ? <Navbar.Link href="#">Cart</Navbar.Link> : null}
          </Navbar.Content>
        </Navbar.Brand>
        <Navbar.Content
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          <Navbar.Item
            css={{
              "@xsMax": {
                w: "100%",
                jc: "center",
              },
            }}
          >
            <Input
              className="search"
              clearable
              contentLeft={
                <SearchIcon fill="var(--nextui-colors-accents6)" size={16} />
              }
              contentLeftStyling={false}
              css={{
                w: "100%",
                "@xsMax": {
                  mw: "300px",
                },
                "& .nextui-input-content--left": {
                  h: "100%",
                  ml: "$4",
                  dflex: "center",
                },
              }}
              placeholder="Search..."
            />
          </Navbar.Item>
          {isAuthenticated ? (
            <Dropdown placement="bottom-right">
              <Navbar.Item>
                <Dropdown.Trigger>
                  <Avatar
                    bordered
                    as="button"
                    size="md"
                    src={props.profilePic}
                  />
                </Dropdown.Trigger>
              </Navbar.Item>
              <Dropdown.Menu
                aria-label="User menu actions"
                color="secondary"
                onAction={(actionKey) => console.log({ actionKey })}
              >
                <Dropdown.Item color={props.dropdownColor} key="profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item color={props.dropdownColor} key="orders">
                  Orders
                </Dropdown.Item>
                <Dropdown.Item
                  key="logout"
                  withDivider
                  color="error"
                  onClick={handleLogout}
                >
                  Log Out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Navbar.Content>
              <Navbar.Link
                color={props.loginColor}
                href="#"
                onClick={handleLogin}
              >
                Login
              </Navbar.Link>
              <Navbar.Item>
                <Button
                  auto
                  flat
                  as={Link}
                  href="#"
                  color={props.signupColor}
                  onClick={handleSignUp}
                >
                  Sign Up
                </Button>
              </Navbar.Item>
            </Navbar.Content>
          )}
        </Navbar.Content>
      </Navbar>
      {showSignInCard && !showSignUpCard && (
        <Card className="signinCard">
          <Button
            auto
            text
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              color: "black",
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            onClick={handleCloseSignIn}
          >
            Ｘ
          </Button>
          <Card.Header className="signinCardHead">Sign In</Card.Header>
          <Card.Body>
            <Input
              className="signinInput"
              clearable
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input.Password
              className="signinInput"
              clearable
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={handleSignIn}
              auto
              color={props.buttonColor}
              style={{ marginTop: "1rem" }}
            >
              Sign In
            </Button>
            <Link className="link" color="text" href="#" onClick={handleSignUp}>
              Don't have an account? Sign Up
            </Link>
          </Card.Body>
        </Card>
      )}
      {showSignUpCard && (
        <Card className="signinCard">
          <Button
            auto
            text
            style={{
              position: "absolute",
              top: "0.5rem",
              right: "0.5rem",
              color: "black",
              border: "none",
              cursor: "pointer",
              backgroundColor: "transparent",
            }}
            onClick={handleCloseSignIn}
          >
            Ｘ
          </Button>
          <Card.Header className="signinCardHead">Sign Up</Card.Header>
          <Card.Body>
            <Input
              className="signinInput"
              clearable
              placeholder="User / Shop Owner"
            />

            <Input
              className="signinInput"
              clearable
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Input className="signinInput" clearable placeholder="Email" />

            <Input.Password
              className="signinInput"
              clearable
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              onClick={handleSignIn}
              auto
              color={props.buttonColor}
              style={{ marginTop: "1rem" }}
            >
              Sign Up
            </Button>
            <Link
              className="link"
              color="text"
              href="#"
              onClick={() => setShowSignUpCard(false)}
            >
              Already have an account? Sign In
            </Link>
          </Card.Body>
        </Card>
      )}
    </>
  );
}
