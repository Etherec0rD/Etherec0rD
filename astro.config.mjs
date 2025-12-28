// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // 1. 你的 GitHub 用户名主页地址
    site: 'https://etherec0rd.github.io',
  
    // 2. 关键！因为你没改仓库名，必须加上这个“尾巴”
    // 必须和你的仓库名完全一致，开头加斜杠
    base: '/Etherec0rD',
});
