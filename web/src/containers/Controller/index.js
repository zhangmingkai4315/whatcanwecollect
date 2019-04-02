import React, { Component } from 'react'
import { connect } from 'react-redux';
import Loading from '../../components/Loading'

class Controller extends Component {
    render() {
        console.log(this.props.controller)
        return (
            <div>
                <Loading loading={this.props.controller.requesting} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    controller: state.controller,
})

export default connect(mapStateToProps)(Controller);