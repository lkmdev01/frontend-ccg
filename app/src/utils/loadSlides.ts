// src/utils/loadSlides.ts
const loadSlides = async (): Promise<Array<{ src: string; alt: string }>> => {
  // Usando import.meta.glob para carregar imagens das pastas desk e mobile
  const deskImages = import.meta.glob('../assets/slide-hero/desk/*.{jpg,jpeg,png,svg}');
  const mobileImages = import.meta.glob('../assets/slide-hero/mobile/*.{jpg,jpeg,png,svg}');

  const loadImagePromises = [
    ...Object.entries(deskImages).map(async ([path, loader]) => {
      const mod = await loader() as { default: string }; // Define o tipo esperado de 'mod'
      const src = mod.default; // Obtém o caminho da imagem
      const alt = path.split('/').pop()?.replace(/\.\w+$/, '') || 'Slide'; // Cria o texto alternativo
      return { src, alt };
    }),
    ...Object.entries(mobileImages).map(async ([path, loader]) => {
      const mod = await loader() as { default: string };
      const src = mod.default;
      const alt = path.split('/').pop()?.replace(/\.\w+$/, '') || 'Slide';
      return { src, alt };
    })
  ];

  // Aguarda todas as imagens serem carregadas e retorna diretamente
  return await Promise.all(loadImagePromises);
};

export default loadSlides;
