export function initLazyVideo() {
  const video = document.getElementById('hero-bg-video') as HTMLVideoElement | null;
  if (!video) return;

  const source = video.querySelector<HTMLSourceElement>('source');
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
  const isSlowConnection = connection && (connection.saveData || ['slow-2g', '2g', '3g'].includes(connection.effectiveType));

  const loadVideo = () => {
    if (source && source.dataset.src) {
      source.src = source.dataset.src;
      video.load();
    }
  };

  if (isSlowConnection) {
    video.style.display = 'none';
  } else {
    requestAnimationFrame(() => {
      setTimeout(loadVideo, 100);
    });
  }

  video.addEventListener('playing', () => {
    video.classList.remove('opacity-0');
    video.classList.add('opacity-100');
  });

  video.addEventListener('loadeddata', () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth / 4;
      canvas.height = video.videoHeight / 4;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
      video.style.backgroundImage = `url(${dataUrl})`;
      video.style.backgroundSize = 'cover';
      video.style.backgroundPosition = 'center';
    } catch (e) {
      // ignore canvas errors
    }
  });

  video.addEventListener('canplay', () => {
    setTimeout(() => {
      if (video.paused && !isMobile) {
        video.play().catch(() => { });
      }
      video.classList.remove('opacity-0');
      video.classList.add('opacity-100');
    }, 300);
  });
}
