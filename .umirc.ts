import { defineConfig } from 'umi';

export default defineConfig({
  title: '最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。',
  favicon: 'https://ga.idxiu.cn/storage/favicon.png?1676017985',
  metas: [
    {
      name: 'keywords',
      content: '水印生成工具, lowcode, 低代码',
    },
    {
      name: 'description',
      content:
        '💦 最安全，最快速的纯前端图片加水印，拒绝上传保证个人信息安全。',
    },
  ],
  hash: true,
  base: '/watermark/', // 设置路由前缀，通常用于部署到非根目录
  analytics: {
    // baidu: 'd4071b11b31dd14a32c788c74c1d5b6b',
  },
  runtimePublicPath: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  theme: {
    'primary-color': '#6366F1',
    'border-radius-base': '4px',
  },
  antd: {
    dark: false, // 开启暗色主题
    compact: true, // 开启紧凑主题
  },
  mfsu: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  headScripts: [],
});
