import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import ScreenEgg from '../ScreenEgg'

const BuyMeCoffe = ({
  className,
}) => {
  return (
	<ScreenEgg type='right'>
		<div className={cl(styles.buyCoffee, className)}>
			<a className={styles.buyCoffeeButton} href='#'>
				  By me a coffe...
			</a>
		</div>
	</ScreenEgg>
   
  )
}

export default BuyMeCoffe