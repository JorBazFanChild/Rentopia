import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedMedia, getMessages, getDocs } from '../../actions/tenantDashboardGetters';

class TenantSideBar extends Component {

	componentDidMount() {
		this.props.getMessages()
		this.props.getDocs()
	}

	renderMessages() {
		return this.props.messages.map((mesg, i) => {
			return (
				<tr key={i} onClick={() => this.props.selectedMedia(mesg)}> {mesg} </tr>
			)
		})
	}

	renderDocs() {
		return this.props.docs && this.props.docs.map((doc, i) => {
			return (
				<tr key={i} onClick={() => this.props.selectedMedia(doc)}> {doc} </tr>
			)
		})
	}

	render() {
		return (
			<div style={{width: "20%", height: "400px", border: "1px solid gray", float: "left"}}>
			  <div> <h4>Messages</h4>
	        <div>{this.props.messages && this.renderMessages()}</div>
				</div>
				<div> <h4>Documents</h4>
				  <div>{this.props.docs && this.renderDocs()}</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('map state', state)
	return{
		messages: state.messages,
		docs: state.docs
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectedMedia, getMessages, getDocs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TenantSideBar);