'use client'

import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';

const HLSPlayer = ({ src }) => {
    const videoRef = useRef();

    useEffect(() => {
        const video = videoRef.current;

        if (Hls.isSupported()) {
            const hls = new Hls();
            hls.loadSource(src);
            hls.attachMedia(video);

            hls.on(Hls.Events.ERROR, function (event, data) {
                console.error('HLS error:', data);
            });

            return () => {
                hls.destroy();
            };
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src;
        }
    }, [src]);

    return (
        <video
            ref={videoRef}
            controls
            autoPlay
            style={{ width: '100%', maxWidth: '720px' }}
        />
    );
};

export default HLSPlayer;