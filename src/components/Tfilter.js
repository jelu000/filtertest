import React, { Component } from 'react'

export default class Tfilter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      state_filterfamilj: this.props.familjelista

    }
    this.handleChange = this.handleChange.bind(this);
  }

  checkMember(t_member, text_input){
    console.log(t_member + " och " + text_input);
      //t_member.includes();
  }

  handleChange(event){
    //console.log("event: " + event.target.value);

    let text_input = event.target.value;
    let familjelista_array = this.props.familjelista;

    //familjelista_array.filter(this.checkMember, text_input);
    let t_familj = familjelista_array.filter(member => {
        return member.toLowerCase().includes(text_input.toLowerCase())
        //console.log(member + " + " + text_input)
        //if (member.toLowerCase().includes(text_input.toLowerCase())){
          //console.log(member);
        //}

    });
    console.log(t_familj)

    this.setState({
      state_filterfamilj: t_familj
    });
  }

  render() {
    let listaFamiljen = this.state.state_filterfamilj.map((familjemedlem) => <li key={familjemedlem}>{familjemedlem}</li>);

    return (
      <div>
        <input onChange={this.handleChange} type="text" />
        <ul>
            {listaFamiljen}
        </ul>
      </div>
    )
  }
}
