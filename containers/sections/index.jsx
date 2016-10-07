import Logo from '../images/logo.svg'
import Clock from '../images/clock.svg'
import TwitterLogo from '../images/twitter.svg'
import Locationpin from '../images/location-pin.svg'

class Section extends React.Component {
  render() {
    return (

			<div id = "index-section" >

				<div id = "index-top" className="flex flex-center">

					<img id = "index-logo"  src={Logo} />

				</div>


				<div className ="footer">


  				<div className="info-container">
					<div className="box">
					</div>
      			<div className="box">
    					<img className="img-icon" src={Clock} alt="place-icon" />
  					</div>
  					<div className="box">
    					<p>13 November 2016</p>
    					<p>9:00 AM - 5:00 PM</p>
  					</div>

  					<div className="box">
    					<img className="img-icon" src={Locationpin} alt="place-icon" />
  					</div>
  					<div className="box">
    					<p>IUP Building (17)</p>
    					<p>Kasetsart University</p>
  					</div>

  					<div className="box">
    					<img className="img-icon" src={TwitterLogo} alt="place-icon" />
  					</div>
  					<div className="box">
    					<p>#bcbk</p>
  					</div>
  				</div>
				</div>
			</div>
		);
  }
}

export default Section;
