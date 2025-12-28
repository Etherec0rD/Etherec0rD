// src/content/config.ts
import { defineCollection, z } from 'astro:content';

// 定义博客文章的“骨架”
const blogCollection = defineCollection({
  type: 'content', // 这是一个内容集合（Markdown）
  schema: z.object({
    title: z.string(), // 必须有标题，且是文字
    pubDate: z.date(), // 必须有发布日期
    description: z.string().optional(), // 简介是可选的
    image: z.string().optional(), // 封面图也是可选的
    tags: z.array(z.string()).optional(), // 标签是可选的
  }),
});

// 导出这个集合，名字必须叫 'blog'，对应你文件夹的名字
export const collections = {
  'blog': blogCollection,
};