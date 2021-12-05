import React from 'react'
import styles from '../styles/Home.module.css'
import {AccountTokens} from './components/AccountTokens'

export default function Home() {

  return (
    <div className={styles.container}>
      <AccountTokens />
    </div>
  )
}
