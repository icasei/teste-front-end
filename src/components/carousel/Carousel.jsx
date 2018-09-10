import 'assets/scss/Carousel.scss'
import React, {Component} from 'react'
import CarouselCard from 'components/carousel/CarouselCard'
import anime from 'animejs'


export default class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	componentDidMount() {
		const videos = this.props.data.items.map((item, index) => {
			const data = {
				thumb: item.snippet.thumbnails.medium.url,
				title: item.snippet.title,
				channel: item.snippet.channelTitle,
				description: item.snippet.description,
				link: item.id.videoId
			}
			return <CarouselCard key={index} data={data} xsQuantity={this.props.xsQuantity} smQuantity={this.props.smQuantity} mdQuantity={this.props.mdQuantity} showDetail={this.props.showDetail} />
		})
		
		this.setState({
			items: videos,
			speed: this.props.speed,
			container: document.querySelector('.carousel-container')
		}, () => {
			this.arrangeItems(document.querySelectorAll('.carousel-card'))
		})

		window.addEventListener('resize', () => this.resize())
	}

	arrangeItems(cards) {
		this.setState({
			cards: cards
		}, () => {
			cards.forEach((item, key) => {
				const positionX = ((item.getBoundingClientRect().width + 12) * key)

				item.style.WebkitTransform = `translateX(${positionX}px)`
				item.style.MozTransform = `translateX(${positionX}px)`
				item.style.msTransform = `translateX(${positionX}px)`
				item.style.OTransform = `translateX(${positionX}px)`
				item.style.transform = `translateX(${positionX}px)`
			})

			this.goLeft()
		})
	}

	goLeft() {
		const animation = anime({
			targets: this.state.cards,
			translateX: '-=5',
			duration: (this.state.speed * 10),
			easing: 'linear',
			complete: (anim) => {
				anim.animatables.forEach(item => {
					const itemPos = item.target.getBoundingClientRect()

					if (itemPos.x < -itemPos.width) {
						this.toLastPosition(item.target)
					}
				})

				this.goLeft()
			}
		})

		this.setState({
			animation: animation
		})
	}

	toLastPosition(item) {
		const items = this.state.cards
		let positionX = 0

		items.forEach(prop => {
			const itemPos = prop.getBoundingClientRect().x
			if (positionX < itemPos) {
				positionX = itemPos
			}
		})

		positionX = Math.floor((positionX + item.getBoundingClientRect().width) - 12)
		
		item.style.WebkitTransform = `translateX(${positionX}px)`
		item.style.MozTransform = `translateX(${positionX}px)`
		item.style.msTransform = `translateX(${positionX}px)`
		item.style.OTransform = `translateX(${positionX}px)`
		item.style.transform = `translateX(${positionX}px)`
	}

	resize() {
		this.state.animation.pause()

		this.setState({items: this.state.items}, () => {
			this.arrangeItems(document.querySelectorAll('.carousel-card'))
		})
	}

	onMouseEnter() {
		this.state.animation.pause()
	}

	onMouseLeave() {
		this.state.animation.play()
	}

	render() {
		return (
			<div className="carousel-container">
				<div className="carousel-grid" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
					{this.state.items}
				</div>
			</div>
		)
	}
}