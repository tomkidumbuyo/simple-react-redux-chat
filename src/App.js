import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
  MDBScrollspy,
} from "mdb-react-ui-kit";
import { useState } from "react"

import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';
import { addMessage } from "./redux/slice/messageSlice";



const userId = uuidv4();

export default function App() {
  

  const messages = useSelector((state) => state.messages)

  const [message, setMessage] = useState("")

  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
    dispatch(addMessage({
      userId: userId,
      message: message
    }))
  }

  const inputChangeHandler = (setFunction, event) => {
    setFunction(event.target.value)
  }

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#eee" }}>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol md="10" lg="8" xl="6">
          <MDBCard id="chat2" style={{ borderRadius: "15px" }}>
            <MDBCardHeader className="d-flex justify-content-between align-items-center p-3">
              <h5 className="mb-0">Chat</h5>
              <MDBBtn color="primary" size="sm" rippleColor="dark">
                Let's Chat App
              </MDBBtn>
            </MDBCardHeader>
            <MDBScrollspy
              style={{ position: "relative", height: "400px", overflow: "auto" }}>
              <MDBCardBody>
              { messages.map((msg, index) => {
                
               if( msg.userId !== userId ) {
                return (<div key="{index}" className="d-flex flex-row justify-content-start">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      {msg.message}
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      23:58
                    </p>
                  </div>
                </div>)
              } else {
                return (<div key="{index}" className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                    {msg.message}
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:06
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>)
                
              }
              })
              }
              </MDBCardBody>
            </MDBScrollspy>
            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
            <form onSubmit={onFormSubmit} className="text-muted d-flex justify-content-start align-items-center p-3" style={{'display': 'block', width: '100%'}}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                alt="avatar 3"
                style={{ width: "45px", height: "100%" }}
              />
              <input
                type="text"
                className="form-control form-control-lg"
                id="exampleFormControlInput1"
                placeholder="Type message"
                onChange={(e)=>inputChangeHandler(setMessage, e)}
              ></input>
              <button type="submit" className="ms-3 btn btn-primary" href="#!">
                Send
              </button>
              </form>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}