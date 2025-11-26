/** @type {import('next').NextConfig} */
const nextConfig = {
  // تفعيل الـ Transpilation لمكتبات 3D
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  
  // تجاهل أخطاء الـ ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // إعدادات الصور
  images: {
    domains: [], 
  },
};

export default nextConfig;