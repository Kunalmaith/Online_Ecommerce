const images = import.meta.glob('../assets/images/*.{png,jpg,jpeg,svg}', {
    eager: true,
    import: 'default',
  });
  
  export default images;