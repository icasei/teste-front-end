import 'assets/scss/Carousel.scss'
import React, {Component} from 'react'
import CarouselCard from 'components/carousel/CarouselCard'
import anime from 'animejs'

import {connect} from 'react-redux'


@connect((store) => {
	return {
		videos: store.youtube.videos
	}
})


export default class Carousel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			speed: this.props.speed,
			items: null,
			cards: null,
			animation: null
		}
	}

	componentDidMount() {
		const {videos} = this.props

		const videosCards = videos.items.map((item, index) => {
			const data = {
				thumb: item.snippet.thumbnails.medium.url,
				title: item.snippet.title,
				channel: item.snippet.channelTitle,
				description: item.snippet.description,
				link: item.id.videoId
			}

			return <CarouselCard key={index} data={data} xsQuantity={this.props.xsQuantity} smQuantity={this.props.smQuantity} mdQuantity={this.props.mdQuantity} />
		})


		this.setState({
			items: videosCards
		}, () => {
			this.arrangeItems()
		})


		window.addEventListener('resize', () => this.resize())
	}

	arrangeItems() {
		const cards = document.querySelectorAll(".carousel-card")

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
		this.arrangeItems()
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