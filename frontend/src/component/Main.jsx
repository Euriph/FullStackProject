import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Main extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="display-3 d-flex justify-content-center ">Ana Sayfa</h1>
         <Link className="btn btn-primary mt-5 mb-5 d-flex justify-content-center " to="category/list">To Do List</Link>
      </React.Fragment>
    )
  }
}
