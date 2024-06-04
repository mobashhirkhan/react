const Hero = () => {

    return(
    <main className="hero container">
        <div className="hero-content">
            <h1>BEST TEAM IN ALL OF THE LAND</h1>
            <p>Manchester City Football CLub won the Champions League, Premier League and the FA Cup to complete the 
                legendary treble. In addition, the club also went on to win the UEFA Super Cup and the FIFA Club World Cup, and 
                hence completing the quintuple. 
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Learn More</button>
            </div>
            <div className="sponsor">
                <p>Proud Sponsors</p>
                <div className="sponsor-icons">
                    <img src="/images/etihad_logo.png" alt="etihad" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero_image.png" alt="kevin" />
        </div>
    </main>    
    );

};

export default Hero;