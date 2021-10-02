import React, { Component } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "./data.json";
import { Modal, Button } from "react-bootstrap";
import FormSearch from "./component/FormSearch";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      filteredData: [],
      hornes_data: this.hornesNum(data),
      title: "",
      img: "",
      description: "",
      showModal: false,
      hornSelected: 0,
      submitted: false,
    };
  }
  updateModal = (title, img, description) => {
    this.setState({
      title: title,
      img: img,
      description: description,
      showModal: true,
    });
  };
  handleClose = () => {
    this.setState({
      showModal: false,
    });
  };
  hornesNum = (data) => {
    let hornes = data.map((item) => {
      console.log(item.horns);
      return item.horns;
    });
    return Array.from(new Set(hornes));
  };

  SelectedHorn = (e) => {
    this.setState({
      hornSelected: Number(e.target.value),
    });
  };

  handleSubmitt = (e) => {
    e.preventDefault();
    let filteredData = this.state.data.filter(
      (item) => item.horns === this.state.hornSelected
    );
    this.setState({
      filteredData: filteredData,
      submitted: true,
    });
    // console.log(filteredData)
  };

  render() {
    return (
      <>
        <Header />
        <FormSearch
          hornes_data={this.state.hornes_data}
          SelectedHorn={this.SelectedHorn}
          handleSubmitt={this.handleSubmitt}
        />
        <Main
          data={this.state.data}
          updateModal={this.updateModal}
          filteredData={this.state.filteredData}
          submitted={this.state.submitted}

        />
        <Footer />

        <Modal show={this.state.showModal} onHide={this.handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{this.state.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.img}
              alt={`${this.state.title}`}
              style={{ width: "100%", objectFit: "cover" }}
            />
            <h1>{this.state.description}</h1>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default App;
