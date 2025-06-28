import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp']
  },
  compiler: {
    styledComponents: true
  }
}

export default nextConfig
