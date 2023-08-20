import React from "react";
import TopNav from "./topnav/TopNav";
import LeftNav from "./leftnav/LeftNav";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Incident from "./incident/Incident";
import Admin from "./admin/Admin";

export default function Main(props) {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <div
        className="d-flex flex-column"
        style={{
          height: "100%",
        }}
      >
        <TopNav />
        <div className='d-flex flex-row' style={{height: '100%'}}>
          <LeftNav />
          <div style={{ flexGrow: 1 }}>
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/incident' element={<Incident />} />
                  <Route path='/admin' element={<Admin />} />
              </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
