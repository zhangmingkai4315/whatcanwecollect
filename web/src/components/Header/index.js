import styles from './styles.module.css'

import React from 'react'

export default function Header() {
  return (
    <div className={styles.Header}>
      <h3>What <b>Data</b> Can We Collect From You?</h3>
      <p>我们每天都在用浏览器访问各式各样的网站，这些网站记录用户的访问数据，用于实现不同的商业目的</p>
      <p>当我们打开浏览器的时候，其实我们就已经在不断的传递数据到分布在全球的服务器上,点击下面的测试按钮看一下到底可以获取多少你的信息吧?</p>

    </div>
  )
}
