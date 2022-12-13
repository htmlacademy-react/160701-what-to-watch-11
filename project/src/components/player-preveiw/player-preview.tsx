import { useEffect, useRef, VideoHTMLAttributes } from 'react';

type TPlayer = VideoHTMLAttributes<HTMLVideoElement> & {
  playing?: boolean;
};

const PlayerPreview = ({ playing = false, ...props }: TPlayer) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;

    video?.[playing ? 'play' : 'load']();
  }, [playing]);

  return <video {...props} ref={videoRef} />;
};

export default PlayerPreview;
