import Link from "next/link";
const Landing = () => {
    return(
        <section className="landing-page">
            <div className="container-fluid">
                <div className="landing-page__container">
                    <div className="landing-page__logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="468" height="974" viewBox="0 0 468 974">
                        <text id="EMIN" transform="translate(87 2) rotate(90)" fill="none" stroke="#979797" strokeWidth="2" fontSize="350" fontFamily="LEMONMILK-Bold, LEMON MILK" fontWeight="700"><tspan x="0" y="0">EMIN</tspan></text>
                        </svg>
                    </div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                            <div className="container-info">
                                <h1 className="display-4">Get Insider Stories You Want To Know</h1>
                                <p className="lead">Emmanuel Insider tells the global tech, finance, markets, media, 
                                    healthcare, and strategy stories you want to know.
                                </p>
                                <Link href="/login">
                                    <a className="container-info__link">Sign Up</a>
                                </Link>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Landing;