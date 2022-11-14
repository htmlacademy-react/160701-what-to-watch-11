import { DetailedHTMLProps, useEffect, useRef } from 'react';

type TPlayer = DetailedHTMLProps<React.VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement> & {
  playing?: boolean;
};

const Player = ({ playing = false, ...props }: TPlayer) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    video?.[playing ? 'play' : 'load']();
  }, [playing]);

  return <video {...props} ref={videoRef} />;
};

export default Player;
