import { useRemoteAudio } from '@huddle01/react/hooks';
import React, { useEffect, useRef } from 'react';

interface Props {
  peerId: string;
}

const PeerAudioElem: React.FC<Props> = ({ peerId }) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const { stream, state } = useRemoteAudio({
    peerId,

  });

  useEffect(() => {
    console.warn('stream', { state, stream, c: audioRef.current });
    if (stream && audioRef.current && state === 'playable') {
      audioRef.current.srcObject = stream;

      audioRef.current.onloadedmetadata = async () => {
        try {
          console.log('here ');
          audioRef.current?.play();
        } catch (error) {
          console.error(error);
        }
      };

      audioRef.current.onerror = () => {
        console.error('videoCard() | Error is hapenning...');
      };
    }
  }, [stream, state]);

  return <audio ref={audioRef} autoPlay />;
};

export default PeerAudioElem;
