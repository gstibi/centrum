export const getImagesFromFolder = folderContext => {
  const images = [];
  folderContext.keys().forEach(item => images.push(folderContext(item)));
  return images;
};
