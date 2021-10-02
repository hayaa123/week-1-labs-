import React, { Component } from "react";
import HornedBeaast from "./HornedBeaast";
import {Container, Row} from "react-bootstrap"
class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
      
//   }
  render() {
    return (
      <>
      <Container>
        <Row>
          {!this.props.submitted?
          this.props.data.map((item) => {
            return (
              <HornedBeaast
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                updateModal={this.props.updateModal}
              />
            );
          })
        :
        this.props.filteredData.map((item) => {
            return (
              <HornedBeaast
                title={item.title}
                imageUrl={item.image_url}
                description={item.description}
                updateModal={this.props.updateModal}
              />
            );
          })
        }
        </Row>
        </Container>
      </>
    );
  }
}

export default Main;
