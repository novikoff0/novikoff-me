import { FC, useEffect, useState } from 'react'
import Arrow from 'shared/assets/images/HelloPage/arrow-button.svg'
import BoltDownLeft from 'shared/assets/images/HelloPage/bolt-down-left.svg'
import BoltDownRight from 'shared/assets/images/HelloPage/bolt-down-right.svg'
import BoltUpLeft from 'shared/assets/images/HelloPage/bolt-up-left.svg'
import BoltUpRight from 'shared/assets/images/HelloPage/bolt-up-right.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import cls from './HelloConsole.module.scss'

interface HelloConsoleProps {
	className?: string
}

export const HelloConsole: FC<HelloConsoleProps> = ({ className }) => {
	const [activeButton, setActiveButton] = useState<number | null>(null)

	const handleClick = (index: number) => {
		setActiveButton(index)

		setTimeout(() => {
			setActiveButton(null)
		}, 200)
	}

	const handleKeyDown = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowUp':
				handleClick(0)
				break
			case 'ArrowDown':
				handleClick(1)
				break
			case 'ArrowLeft':
				handleClick(2)
				break
			case 'ArrowRight':
				handleClick(3)
				break
			default:
				break
		}
	}

	useEffect(() => {
		// Добавление обработчика события нажатия клавиш
		document.addEventListener('keydown', handleKeyDown)
		return () => {
			// Удаление обработчика при размонтировании компонента
			document.removeEventListener('keydown', handleKeyDown)
		}
	}, [])

	return (
		<section className={classNames(cls.helloConsole, {}, [className])}>
			<div className={cls.snakeGame}>
				<div className={cls.snakeContainer}>
					<BoltUpLeft className={cls.bolt} />
					<BoltUpRight className={cls.bolt} />
					<BoltDownLeft className={cls.bolt} />
					<BoltDownRight className={cls.bolt} />
					<div className={cls.snakeWindow}>
						<button className={cls.snakeStart}>start-game</button>
					</div>
					<div>
						<div className={cls.snakeMoveKeysContainer}>
							<p>// use keyboard</p>
							<p>// arrows to play</p>
							<div className={cls.snakeKeys}>
								<button
									className={activeButton === 0 ? cls.active : ''}
									onClick={() => handleClick(0)}
								>
									<Arrow />
								</button>
								<div>
									{[2, 1, 3].map(index => (
										<button
											key={index}
											className={activeButton === index ? cls.active : ''}
											onClick={() => handleClick(index)}
										>
											<Arrow />
										</button>
									))}
								</div>
							</div>
						</div>
						<AppLink to='/about-me' className={cls.snakeSkip}>
							Skip
						</AppLink>
					</div>
				</div>
			</div>
		</section>
	)
}
