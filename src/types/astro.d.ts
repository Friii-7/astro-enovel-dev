declare module '*.astro' {
  const Component: any;
  export default Component;
}

// Global Astro object
declare global {
  const Astro: {
    url: {
      pathname: string;
    };
  };
} 