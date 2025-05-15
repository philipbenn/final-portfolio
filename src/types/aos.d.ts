declare module 'aos' {
    interface AosOptions {
      duration?: number;
      offset?: number;
      disable?: boolean | 'mobile' | 'phone' | 'tablet' | 'desktop' | (() => boolean);
      delay?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      anchorPlacement?: string;
    }
  
    interface Aos {
      init(options?: AosOptions): void;
      refresh(): void;
      refreshHard(): void;
    }
  
    const AOS: Aos;
    export default AOS;
  }