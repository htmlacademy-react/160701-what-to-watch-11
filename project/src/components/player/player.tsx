import { DetailedHTMLProps, VideoHTMLAttributes } from 'react';

type TPlayer = DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>;

const Player = ({ autoPlay = false, ...props }: TPlayer) => (
  <video autoPlay={autoPlay} {...props} />
);

export default Player;
