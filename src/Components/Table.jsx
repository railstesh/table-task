import React from 'react'
import { data } from './helper'

const Table = () => {
  return (
    <>
      <h1>Table</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">d</th>
            <th scope="col">d</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table