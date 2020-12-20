import React, { Component } from 'react'
import Tfilter from "./Tfilter"

export default class MyComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      minfamilj: ["Jens", "Tora", "Sofie", "Noel", "Albin", "Sofia", "Monica", "Elias", "Mats", "Maria", "Kjell", "Maryam", "Marie", "Knut", "Elvis", "Emma", "Magnus"]
    }

    this.state.minfamilj.sort();
  }

  render() {
    //let listFamilj = this.state.minfamilj.map((familjemedlem) => <li key={familjemedlem}>{familjemedlem}</li>);

    return (
      <div>
      <h3>Min klass</h3>
      <Tfilter familjelista={this.state.minfamilj} />
      <ul>
        {/*listFamilj*/}
      </ul>

      </div>
    )
  }
}
