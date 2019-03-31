import styles from './styles.module.css'

import React from 'react'

export default function Header() {
  return (
    <div className={styles.Header}>
      <h3>What <b>Data</b> Can We Collect From You?</h3>
      <p>我们每天都在用浏览器访问各种各样的网站，这些网站记录用户的访问数据，用于不同的商业目的</p>
      <p>哪到底一次网站访问能够获取多少用户的数据呢,点击下面的测试按钮看一下吧?</p>
      <button className={styles.StartBtn}><i className="icono-sliders"></i> 开始测试</button>
    </div>
  )
}
