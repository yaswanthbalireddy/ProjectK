import React from "react";
import { Component } from "react";
import {Row, Button} from 'antd';
import { RiArrowDropDownLine } from "react-icons/ri";
import "./Project.css";

class Header extends Component {
  state = {};

  render() {
    return (
      <div className="main-con">
        <div className="con">
          <div className="header-con">
            <h1 className="heading">Portfolio</h1>
            <span style={{ fontSize: "40px", marginTop: "12px" }}>
              <RiArrowDropDownLine />
            </span>
          </div>
          <Row><Button>
            </Button></Row>
        </div>
      </div>
    );
  }
}

export default Header;
