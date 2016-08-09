import React, {PropTypes, Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMessage } from '../../redux/modules/message';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(createMessage('hello'));
  }
  
  render() {
    return (
      <h1>HELLO how are you????</h1>
    );
  }
}

function mapStateToProps({message}) {
  return {
    content:  message
  }
}

export default connect(mapStateToProps)(App);

//export default App;