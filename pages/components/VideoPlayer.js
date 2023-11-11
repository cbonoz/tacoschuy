

'use client'

import ReactPlayer from 'react-player'
import { VIDEO_URLS } from '../../utils/constants'
  
export default function VideoPlayer(){ 
  return ( 
    <div> 
      <ReactPlayer url={VIDEO_URLS} width={'100%'} controls={false} muted playing loop/>
    </div> 
  ) 
} 