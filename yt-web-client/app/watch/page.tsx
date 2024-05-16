'use client';
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react';

function Watch(){
    const videoPrefix = 'https://storage.googleapis.com/mhv-yt-processed-videos/';
    const videoSrc = useSearchParams().get('v');
    return (
        <div>
            <h1>Watch Page</h1>
            <video controls src = {videoPrefix + videoSrc} />
        </div>
    )
}
export default function WatchVideo(){
    return (
    <Suspense>
      <Watch />
    </Suspense>
    )   
}