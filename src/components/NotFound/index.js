// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <Header />
    <div className="content-container">
      <div className="responsive-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
          alt="not found"
          className="image"
        />
        <h1 className="heading">Lost Your Way?</h1>
        <p className="description">
          Sorry, we cannot find that page. You will find lot to explore on the
          home page.
        </p>
      </div>
    </div>
  </div>
)

export default NotFound
