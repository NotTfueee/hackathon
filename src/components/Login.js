import React, { useState } from "react";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import {
  // MDBContainer,
  // MDBRow,
  // MDBCol,
  // MDBCard,
  // MDBCardBody,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  // MDBBtn,
  // MDBInput,
} from "mdb-react-ui-kit";
import "./Login.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Nav from "./Navbar";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [selectedCountry, setSelectedCountry] = useState('Type of User');

  const handleType = (type) => {
    setUpload({ ...upload, userType: type });
  };
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  const [upload, setUpload] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    // userType:""
  });

  async function handleSignUp() {
    try {
      console.log("Trying to register");

      const data = await axios.post("https://hwi-backend.onrender.com/signup", {
        lastName: upload.lastName,
        firstName: upload.firstName,
        password: upload.password,
        email: upload.email,
      });
      console.log(data);
      navigate("/");
      // sessionStorage.setItem('accessToken', data.data.accessToken);
      // sessionStorage.setItem('user_id', data.data.userDetails._id);
      // const retrievedValue = sessionStorage.getItem('accessToken');
      // console.log(retrievedValue);
      // navigate("/shop");
    } catch (error) {
      alert(error.response.data);
      console.log(error);
    }
  }

  async function handleSignIn() {
    try {
      console.log("Trying to register");
      const data = await axios.post("https://hwi-backend.onrender.com/signin", {
        password: upload.password,
        email: upload.email,
      });
      // console.log(data);
      navigate("/");
      // sessionStorage.setItem('accessToken', data.data.accessToken);
      // sessionStorage.setItem('user_id', data.data.userDetails._id);
      // const retrievedValue = sessionStorage.getItem('accessToken');
      // console.log(retrievedValue);
      // navigate("/shop");
    } catch (error) {
      alert(error.response.data);
      console.log(error);
    }
  }

  return (
    <>
      <MDBContainer fluid className="my-5">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                {user ? (
                  <>
                    <h2 className="fw-bold mb-5">Sign up now</h2>

                    <MDBRow>
                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="First name"
                          id="form1"
                          type="text"
                          value={upload.firstName}
                          onChange={(e) =>
                            setUpload({ ...upload, firstName: e.target.value })
                          }
                        />
                      </MDBCol>

                      <MDBCol col="6">
                        <MDBInput
                          wrapperClass="mb-4"
                          label="Last name"
                          id="form2"
                          type="text"
                          value={upload.lastName}
                          onChange={(e) =>
                            setUpload({ ...upload, lastName: e.target.value })
                          }
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      type="email"
                      value={upload.email}
                      onChange={(e) =>
                        setUpload({ ...upload, email: e.target.value })
                      }
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                      value={upload.password}
                      onChange={(e) =>
                        setUpload({ ...upload, password: e.target.value })
                      }
                    />

                    <MDBDropdown className="mb-4">
                      <MDBDropdownToggle color="primary">
                        {upload.userType || "Select User Type"}
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem
                          link
                          onClick={() => handleType("Personal Login")}
                        >
                          Personal Login
                        </MDBDropdownItem>
                        <MDBDropdownItem
                          link
                          onClick={() => handleType("Government Login")}
                        >
                          Government Login
                        </MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>

                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleSignUp}
                    >
                      sign up
                    </MDBBtn>
                  </>
                ) : (
                  <>
                    <h2 className="fw-bold mb-5">Sign in</h2>

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Email"
                      id="form3"
                      type="email"
                      value={upload.email}
                      onChange={(e) =>
                        setUpload({ ...upload, email: e.target.value })
                      }
                    />

                    <MDBInput
                      wrapperClass="mb-4"
                      label="Password"
                      id="form4"
                      type="password"
                      value={upload.password}
                      onChange={(e) =>
                        setUpload({ ...upload, password: e.target.value })
                      }
                    />
                    <MDBBtn
                      className="w-100 mb-4"
                      size="md"
                      onClick={handleSignIn}
                    >
                      sign in
                    </MDBBtn>
                    <p style={{ margin: "20px" }}>
                      Don't have an account!{" "}
                      <span
                        style={{
                          color: "blue",
                          cursor: "pointer",
                          textDecoration: "underline",
                          transition: "background-color 0.5s ease",
                          ":hover": { backgroundColor: "white" },
                        }}
                        onClick={() => setUser(true)}
                      >
                        Sign Up
                      </span>
                    </p>
                  </>
                )}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://img.freepik.com/free-vector/eco-activists-sorting-garbage-waste-segregation-disposable-system-ecological-responsibility-trash-containers-rubbish-cans-recycling-idea_335657-3418.jpg?t=st=1723317797~exp=1723321397~hmac=fc937b2ac185156621c2786ef3f262088c57e1dee256bfefaa46580e516d00cb&w=740"
              class="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;

{
  /* <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div> */
}
