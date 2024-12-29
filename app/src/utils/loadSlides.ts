const loadSlides = async (): Promise<Array<{ src: string; alt: string; type: string }>> => {
  // Usando import.meta.glob para carregar imagens e vídeos das pastas desk e mobile
  const deskImages = import.meta.glob('../assets/slide-hero/desk/*.{jpg,jpeg,png,svg}');
  const mobileImages = import.meta.glob('../assets/slide-hero/mobile/*.{jpg,jpeg,png,svg}');
  const deskVideos = import.meta.glob('../assets/slide-hero/desk/*.{mp4,webm}');
  const mobileVideos = import.meta.glob('../assets/slide-hero/mobile/*.{mp4,webm}');

  const loadResourcePromises = [
    ...Object.entries(deskImages).map(async ([path, loader]) => {
      const mod = await loader() as { default: string };
      const src = mod.default;
      const alt = path.split('/').pop()?.replace(/\.\w+$/, '') || 'Slide';
      return { src, alt, type: 'image' }; // Define o tipo como 'image'
    }),
    ...Object.entries(mobileImages).map(async ([path, loader]) => {
      const mod = await loader() as { default: string };
      const src = mod.default;
      const alt = path.split('/').pop()?.replace(/\.\w+$/, '') || 'Slide';
      return { src, alt, type: 'image' }; // Define o tipo como 'image'
    }),
    ...Object.entries(deskVideos).map(async ([path, loader]) => {
      const mod = await loader() as { default: string };
      const src = mod.default;
      const alt = path.split('/').pop()?.replace(/\.\w+$/, '') || 'Slide';
      return { src, alt, type: 'video' }; // Define o tipo como 'video'
    }),
    ...Object.entries(mobileVideos).map(async ([path, loader]) => {
      const mod = await loader() as { default: string };
      const src = mod.default;
      const alt = path.split('/').pop()?.replace(/\.\w+$/, '') || 'Slide';
      return { src, alt, type: 'video' }; // Define o tipo como 'video'
    })
  ];

  // Aguarda todos os recursos serem carregados e retorna diretamente
  return await Promise.all(loadResourcePromises);
};

export default loadSlides;
