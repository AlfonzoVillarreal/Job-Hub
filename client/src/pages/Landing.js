
import main from '../assets/images/main-lauch.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                    I'm baby four dollar toast tote bag master cleanse hammock. Tousled salvia plaid, tofu lumbersexual activated charcoal slow-carb dreamcatcher vape YOLO lyft heirloom man bun banh mi. Crucifix cornhole aesthetic 90's.
                    </p>
                    <Link to="/register" className="btn btn-hero">
                        Login/Register
                    </Link>
                </div>
                <img src={main} alt="job hunt" className="img main-img"></img>
            </div>
        </Wrapper>
    )
}



export default Landing
