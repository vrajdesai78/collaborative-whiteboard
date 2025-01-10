import { usePeerIds } from "@huddle01/react";
import Audio from './Audio';

const AudioContainer = () => {
    const { peerIds } = usePeerIds({
        labels: ['audio']
    });

    if( !peerIds.length ) return null;

  return (
    <>
        {peerIds.map((peerId) => {
            return <Audio peerId={peerId} />
        })}
    </>
  )
}

export default AudioContainer