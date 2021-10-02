import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import {Form} from "react-bootstrap"
export class FormSearch extends Component {
  render() {
    return (
      <>
      <Form onSubmit={this.props.handleSubmitt}>
          <Form.Select aria-label="Default select example" onChangeCapture={this.props.SelectedHorn}>
          <option>Open this select menu</option>
         
          {this.props.hornes_data.map(item=>{
              return(
                <option value={item}>{item}</option>
              )
          })}
        </Form.Select>
        <Button type="submit"> Search </Button>
      </Form>
        
      </>
    );
  }
}

export default FormSearch;
