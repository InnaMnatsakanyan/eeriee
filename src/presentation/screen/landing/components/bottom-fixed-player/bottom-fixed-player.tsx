import './bottom-fixed-player.css'
import sound from  '../../../../../assets/audio/sound.mp3'
// import DoDrawWaves from './wave-surfer/wave-surfer'
import WaveSurfer from 'wavesurfer.js'
import { useEffect } from 'react'

// const audio = sound
export default function DoDrawBottomFixedPlayer(props:any){
   useEffect(()=>{

      const wavesurfer = WaveSurfer.create({
         container: "#waveform",
         waveColor: 'rgb(255, 0, 0)',
         progressColor: 'rgb(153, 0, 0)',
         url: sound,
         height: 70,
         // autoplay:true
      })
      
      wavesurfer.once('interaction', () => {
         wavesurfer.play()
       })
       return () => {
         wavesurfer.destroy();
       };
       
   })
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
        {/* <DoDrawWaves details={audio}/> */}
        <div id='waveform'>
        </div>
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