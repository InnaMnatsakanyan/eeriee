import './artistDiscography.css'
import passivePlayerImg from '../../../../../assets/images/PlayerPassive.png'

function DoDrawArtistDiscography(props){
    console.log(props.details.discCov);
    
    return (
        <div className="discography-container">
                    <div className='album-covers-container'>
                        <div className='covers-grid-cont'>
                        {
                            props.details.discCov.map(elm=>{
                                return (
                                    <img src={elm} className='covers-cell' alt=''>  
                                    </img>
                                )
                            })
                        }
                        </div>
                    </div>
                    <div className='info-cont'>
                         <h5>{props.details.name}</h5>
                         <span>{props.details.birthDate}</span>
                         <p>{props.details.about}</p>
                         <i className='icon-arrow-left show-more-artist-info '></i>
                         <img className='passive-player' src={passivePlayerImg} alt="" />
                        </div>
                            <div className='explore-button'>Explore 
                                <i className='icon-arrow-left explore-arrow'></i>
                                </div>
        </div>
    )
}

export default DoDrawArtistDiscography