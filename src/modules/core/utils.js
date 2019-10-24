export const getAssetPrefix = path => {
  if (process.env.NODE_ENV === 'production') {
    return `/doraemon-story-of-seasons-guide${path}`;
  }

  return path;
};
