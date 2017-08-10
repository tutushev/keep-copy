import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import App from '../components/App/App';
import * as pageActions from '../mainAppActions.jsx';





class MainContainer extends Component {
	render() {
		return (
			<App data={this.props.data} allActions={this.props.pageActions}/>
		)
	}
}

export default connect(
	(function (state) {
		return {
			data: state.data
		};
	}),
	(function (dispatch) {
		return {
			pageActions: bindActionCreators(pageActions, dispatch)
		};
	})
)(MainContainer);


