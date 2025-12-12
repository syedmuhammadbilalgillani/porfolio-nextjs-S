declare module 'react-water-wave' {
  import { ReactNode } from 'react';

  interface WaterWaveProps {
    id?: string;
    className?: string;
    imageUrl: string;
    children?: (() => ReactNode) | ReactNode;
    [key: string]: any;
  }

  const WaterWave: React.FC<WaterWaveProps>;
  export default WaterWave;
}
