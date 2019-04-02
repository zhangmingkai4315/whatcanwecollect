import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles.module.css'
class GeoIP extends React.Component {
    componentDidMount() {
        const { data } = this.props
        if (data.lat && data.lon) {
            console.log(data)
            const mymap = window.L.map("geomap").setView([data.lat, data.lon], 10);
            window.L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiemhhbmdtaW5na2FpMTk4OSIsImEiOiJjanR6dGR4a3QxaW1pM3pwZnhnYTdmZmMwIn0.Nx6a2fNVtwuafEQW0HBWyQ'
            }).addTo(mymap);
            window.L.marker([data.lat, data.lon]).addTo(mymap);
        }
    }
    render() {
        const { data } = this.props
        return (
            <div className="row">
                <div className={styles.title + " col-md-12"}>
                    <div className="col-md-12">
                        访问来源地理位置信息
                    </div>
                </div>
                <hr />
                <div className="col-md-6 col-sm-12">
                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>IP地址</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.query}</div>
                    </div>

                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>移动端用户</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.mobile ? "移动端" : "Web访问"}</div>
                    </div>
                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>是否通过代理</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.proxy ? "代理访问" : "直接访问"}</div>
                    </div>


                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>坐标经度</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.lon}</div>
                    </div>
                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>坐标纬度</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.lat}</div>
                    </div>
                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>国家及地区</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.country}</div>
                    </div>

                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>城市信息</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.regionName} {data.city}</div>
                    </div>

                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>网络运营商</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.isp}</div>
                    </div>
                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>AS号码</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.as}</div>
                    </div>

                    <div className={styles.info + " row"}>
                        <div className={styles.detail + " col-md-6"}>时区信息</div>
                        <div className={styles.detailinfo + " col-md-6"}>{data.timezone}</div>
                    </div>


                </div>
                <div className="col-md-6 col-sm-12">
                    <div id="geomap" style={{ "width": "100%", "height": "400px" }}></div>
                </div>
            </div>
        )
    }
}

GeoIP.propTypes = {
    data: PropTypes.shape({
        lon: PropTypes.number.isRequired,
        lat: PropTypes.number.isRequired,
        query: PropTypes.string.isRequired,
    })
}

export default GeoIP;
