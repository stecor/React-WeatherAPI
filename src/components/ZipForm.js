import React, { Component } from 'react';
import '../style.css';

class ZipForm extends Component {
  render() {
    return(
    <div className="zip-form">
      <form>
        <label htmlFor="zipcode">Zip Code</label>
        <input className="form-control" type="input" name="zipcode"/>
        <button type="submit" className="btn btn-sucess">Get the forecast!!</button>
      </form>
    </div>
  );
  }
}
export default ZipForm;
