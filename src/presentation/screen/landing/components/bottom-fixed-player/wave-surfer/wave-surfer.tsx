import WaveSurfer from 'wavesurfer.js'
import audio from './sound.mp3'

const wavesurfer = WaveSurfer.create({
  container: document.body,
  waveColor: "rgb(128, 0, 0)",
  progressColor: 'rgb(255, 0, 0)',
  url: audio,
})

wavesurfer.on('click', () => {
  wavesurfer.play()
})
