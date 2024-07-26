import './bottom-fixed-player.css'
// import DoDrawWaveSurfer from './wave-surfer/wave-surfer'

export default function DoDrawBottomFixedPlayer(props:any){


    return (
        <div className="bottom-fixed-player-cont">
           <div className='artist-info-cont'>
           <img src={props.details.cover} alt="" />
           <p>{props.details.name}
            <span>{props.details.artist}</span>
           </p>
           </div>
       
           <div className='player-controls'>
            <i className='icon-media-skip-backward-svgrepo-com'></i>
            <i className={true ? 'icon-media-playback-start-svgrepo-com' : 'icon-media-playback-stop-svgrepo-com' }></i>
            <i className='icon-media-skip-forward-svgrepo-com'></i>
            <i className='icon-hearth-svgrepo-com'></i>

           <div className='sound-wave-cont'>
        {/* <input type="range"  /> */}
        <div id='waveform'></div>
        <div className='duration-cont'>
          <p>0:00 / <span>{props.details.trackDuration}</span></p>
        </div>
           </div>
           </div>

           <div className='volume-cont'>
          <i className='icon-sound-plus-svgrepo-com'></i>
          <input type="range" />
           </div>

           <div className='shuffle-queue-cont'>
        <i className='icon-shuffle-svgrepo-com-1'></i>
        <i className='icon-queue-thin-svgrepo-com'></i>
           </div>

        </div>
    )
}