import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

export class HornedBeaast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
    };
  }

  manyClickes = () => {
    this.setState({
      clicked: this.state.clicked + 1,
    });
  };


  render() {
    return (
      <>
        <Col>
          <Card style={{ width: "500px", height: "500px" }} onClick={(title,img,description)=>{this.props.updateModal(this.props.title,this.props.imageUrl,this.props.description)}}>
            <Card.Img
              variant="top"
              src={this.props.imageUrl}
              alt=""
              onClick={this.manyClickes}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Text>
                <h1>{this.props.title}</h1>
                <p>{this.props.description}</p>
              </Card.Text>
              <img
                src="https://purepng.com/public/uploads/large/heart-icon-y1k.png"
                alt="heart"
                width="50px"
              />
              <span>{this.state.clicked}</span>
            </Card.Body>
          </Card>
        </Col>
      </>
    );
  }
}

export default HornedBeaast;
