import React from 'react'
import { connect } from 'react-redux'
//import {addModel} from '../action/addModel'
import ModelDetails from './ModelDetails'


const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}

class HomeComputerModel extends React.Component {

  state = {
    value: ''
  }

  updateSelection = (event) => {

    this.setState({ value: event.target.value })
    console.log(event.target.value)

  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log('Submitting form...' + data[this.state.value])

    this.props.selectModel(this.state.value,data[this.state.value])
  }


  render() {
    return (
      <div>
        {/* <h2>{this.state.value}</h2> */}
        
        {this.props.result.map(data =>
              <ModelDetails data={data}/>
            )}
        
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.updateSelection}>
            <option value="">-- pick a model --</option>
            {Object.keys(data).map(key =>
              <option value={key}>{key + ' (' + data[key].year + ')'}</option>
            )}
          </select>
          <button>ADD</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps')
  return {
    result: state.result
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log('mapStateToProps')
  return {
    selectModel: (name, data) => {
      dispatch({ type: 'ADD_MODEL', payload: { name: name, data: data } })

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComputerModel)
