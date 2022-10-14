import React from 'react'
import cl from 'classnames'
import styles from './index.module.scss'
import { AiFillGithub, AiFillFacebook } from 'react-icons/ai'
import { SiTelegram } from 'react-icons/si'

import ScreenEgg from '../ScreenEgg'


const socialNetworks = [
	{
		id: 1,
		href: 'https://github.com/Dmitry919',
		icon: AiFillGithub,
	},
	{
		id: 2,
		href: 'https://t.me/Dmitriy9199',
		icon: SiTelegram,
	},
	{
		id: 3,
		href: 'https://github.com/Dmitry919',
		icon: AiFillFacebook,
	}
]

const SocialNetworks = ({
	className,
}) => {
	return (
		<ScreenEgg type='left'>
			 <ul className={cl(className, styles.list)}>
					{socialNetworks.map((obj) => (
						<li key={obj.id} className={styles.listItem}>
							<a className={styles.listLink} target='_blank' href={obj.href} rel='noreferrer'>
									{React.createElement(obj.icon, {color: 'black', size: 50})}
							</a>
						</li>
					))}
			</ul>
		</ScreenEgg>
	 
	)
}

export default SocialNetworks