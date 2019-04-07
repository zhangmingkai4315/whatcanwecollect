import React from 'react'
import parser from 'ua-parser-js'
import styles from './styles.module.css'

const i18n = function (key) {
    const info = {
        "os": "操作系统",
        "engine": "浏览器引擎",
        "browser": "浏览器版本",
        "device": "设备信息",
        "cpu": "CPU信息",
        "Accept": "MIME类型列表",
        "Accept-Encoding": "编码压缩格式",
        "Accept-Language": "语言版本",
        "Connection": "连接类型",
        "User-Agent": "用户信息",
        "Referer": "Referer地址",
        "Origin": "Origin地址"
    }
    if (typeof info[key] === "string") {
        return info[key]
    }
    return key
}


function HTTPInfo(props) {
    console.log(props)
    const headerKeys = Object.keys(props.data)
    let agentInfo = {}
    if (typeof props.data["User-Agent"] !== 'undefined') {
        agentInfo = parser(props.data["User-Agent"])
    }
    const agentInfoKeys = Object.keys(agentInfo)
    const renderAgentInfo = agentInfoKeys.map((k, i) => {
        if (typeof agentInfo[k] !== 'object') {
            return null;
        }
        let renderSubInfo = ""
        for (let subkey in agentInfo[k]) {
            if (typeof agentInfo[k][subkey] === "undefined") {
                continue
            }
            renderSubInfo += agentInfo[k][subkey] + "\t"
        }
        return <tr key={"agent-" + i}>
            <th>{i18n(k)}</th>
            <th>{renderSubInfo}</th>
        </tr>
    })
    return (
        <div className={styles.httpInfo}>
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">采集对象</th>
                        <th scope="col">分析结果</th>
                    </tr>
                </thead>
                <tbody>
                    {renderAgentInfo}
                    {headerKeys.map((k, i) => {
                        return <tr key={i}>
                            <th>{i18n(k)}</th>
                            <th>{props.data[k][0]}</th>
                        </tr>
                    })}

                </tbody>
            </table>
        </div>
    )
}
export default HTTPInfo