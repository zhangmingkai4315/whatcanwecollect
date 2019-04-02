import React from 'react'
import PacmanLoader from 'react-spinners/PacmanLoader'
import styles from './styles.module.css'

function Loading({ loading, size, color }) {
  return (
    <div className={styles.Loading}>
      <PacmanLoader
        sizeUnit={"px"}
        size={size}
        color={color}
        loading={loading} />
    </div>
  )
}

Loading.defaultProps = {
  size: 18,
  color: "#c1c1c1"
}

export default Loading
