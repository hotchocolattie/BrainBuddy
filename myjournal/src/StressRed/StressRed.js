import React from 'react'
import TipLottery from './TipLottery';

const StressRed = () => {
  return (
    <>
      <div>
        <p>Stress Reduction Page</p>
      </div>

      <TipLottery />
      
      <iframe  style={{ borderRadius: '12px' }} 
       src="https://open.spotify.com/embed/playlist/0eU3ubPAnqeSMi9K3YKVpC?utm_source=generator" 
       width="100%" height="352" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style={{ borderRadius: '12px' }}  src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcscxvxm7Pfv?utm_source=generator" width="100%" height="352"  allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcCnTAt8CfNe?utm_source=generator" width="100%" height="352"  allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    </>
  );
}

export default StressRed;
