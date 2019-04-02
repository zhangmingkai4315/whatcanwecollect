import React, { Component } from 'react';
import { connect } from 'react-redux';

import { beginDataCollection } from './actions';
import styles from './styles.module.css';
import GeoIP from '../../components/GeoIP';

class Home extends Component {
    renderGeoIPInfo = () => {
        if (this.props.home.geoip) {
            return <GeoIP data={this.props.home.geoip} />
        }
        return null
    }
    render() {
        return (
            <div>
                <div className={styles.BtnBox}>
                    <button onClick={this.props.beginDataCollection} className={styles.StartBtn}>
                        <i className="icono-sliders"></i>
                        开始测试
                    </button>

                </div>
                {this.renderGeoIPInfo()}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    home: state.home,
})

export default connect(mapStateToProps, {
    beginDataCollection
})(Home);