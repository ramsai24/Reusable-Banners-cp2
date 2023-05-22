// Write your code here.
import './index.css'

const Banner = props => {
  const {bannerCardsListItem} = props
  //
  const {headerText, description, className} = bannerCardsListItem

  return (
    <div>
      <li className={className}>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button" className="btn">
          Show More
        </button>
      </li>
    </div>
  )
}

export default Banner
