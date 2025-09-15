import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
  title: 'Go语言企业级开发实战',
  description: '基于New-API项目的Go语言企业级开发实战教程',
  
  // 中文站点配置
  lang: 'zh-CN',
  
  // 主题配置
  themeConfig: {
    // 网站标题
    siteTitle: 'Go语言企业级开发实战',
    
    // 导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: 'GitHub', link: 'https://github.com/ljquan/new-api-book/tree/books/docs/Go%E8%AF%AD%E8%A8%80%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BC%80%E5%8F%91%E5%AE%9E%E6%88%98-%E5%9F%BA%E4%BA%8ENew-API%E9%A1%B9%E7%9B%AE' }
    ],
    
    // 侧边栏
    sidebar: [
      {
        text: '简介',
        link: '/README'
      },
      {
        text: '基础篇',
        collapsed: false,
        items: [
          { text: '第1章：Go语言环境搭建与项目初始化', link: '/第1章-Go语言环境搭建与项目初始化' },
          { text: '第2章：Go语言基础语法与类型系统', link: '/第2章-Go语言基础语法与类型系统' },
          { text: '第3章：Go语言高级特性', link: '/第3章-Go语言高级特性' }
        ]
      },
      {
        text: 'Web开发篇',
        collapsed: false,
        items: [
          { text: '第4章：Gin框架入门与实战', link: '/第4章-Gin框架入门与实战' },
          { text: '第5章：RESTful API设计与实现', link: '/第5章-RESTful-API设计与实现' },
          { text: '第6章：中间件开发与应用', link: '/第6章-中间件开发与应用' }
        ]
      },
      {
        text: '数据库篇',
        collapsed: false,
        items: [
          { text: '第7章：数据库设计与GORM实战', link: '/第7章-数据库设计与GORM实战' },
          { text: '第8章：用户认证与授权系统', link: '/第8章-用户认证与授权系统' }
        ]
      },
      {
        text: '企业级特性篇',
        collapsed: false,
        items: [
          { text: '第9章：配置管理与环境变量', link: '/第9章-配置管理与环境变量' },
          { text: '第10章：渠道管理与负载均衡', link: '/第10章-渠道管理与负载均衡' },
          { text: '第11章：日志系统与监控告警', link: '/第11章-日志系统与监控告警' },
          { text: '第12章：缓存系统与性能优化', link: '/第12章-缓存系统与性能优化' }
        ]
      },
      {
        text: '运维篇',
        collapsed: false,
        items: [
          { text: '第13章：部署与运维实践', link: '/第13章-部署与运维实践' },
          { text: '第14章：测试与质量保证', link: '/第14章-测试与质量保证' }
        ]
      },
      {
        text: '进阶篇',
        collapsed: false,
        items: [
          { text: '第15章：项目总结与展望', link: '/第15章-项目总结与展望' },
          { text: '第16章：微服务架构设计', link: '/第16章-微服务架构设计' },
          { text: '第17章：性能优化与调优', link: '/第17章-性能优化与调优' },
          { text: '第18章：安全最佳实践', link: '/第18章-安全最佳实践' }
        ]
      },
      {
        text: '项目实战篇',
        collapsed: false,
        items: [
          { text: '第19章：New-API项目深度解析', link: '/第19章-New-API项目深度解析' },
          { text: '第20章：项目扩展与定制', link: '/第20章-项目扩展与定制' }
        ]
      },
      {
        text: '附录',
        collapsed: true,
        items: [
          { text: '附录A：Go语言常用库推荐', link: '/附录A-Go语言常用库推荐' },
          { text: '附录B：开发工具与环境配置', link: '/附录B-开发工具与环境配置' },
          { text: '附录C：常见问题与解决方案', link: '/附录C-常见问题与解决方案' }
        ]
      },
      {
        text: '贡献指南',
        link: '/CONTRIBUTING'
      }
    ],
    
    // 社交链接
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ljquan/new-api-book/tree/books/docs/Go%E8%AF%AD%E8%A8%80%E4%BC%81%E4%B8%9A%E7%BA%A7%E5%BC%80%E5%8F%91%E5%AE%9E%E6%88%98-%E5%9F%BA%E4%BA%8ENew-API%E9%A1%B9%E7%9B%AE' }
    ],
    
    // 页脚
    footer: {
      message: '基于New-API项目的Go语言企业级开发实战教程',
      copyright: 'Copyright © 2025'
    },
    
    // 搜索
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    
    // 文档页脚
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    // 大纲标题
    outlineTitle: '页面导航',
    
    // 返回顶部
    returnToTopLabel: '回到顶部'
  },
  
  // Markdown 配置
  markdown: {
    config: (md) => {
      // 自定义 markdown 配置
    }
  },
  
  // 构建配置
  base: '/',
  outDir: './dist',
  
  // 头部配置
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ],
  
  // 忽略死链检查（对于开发中的链接）
  ignoreDeadLinks: true,
  
  // Mermaid 配置
  mermaid: {
    // 关于 mermaid 配置，参考 https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults
    theme: 'default',
    themeVariables: {
      // 基础颜色
      primaryColor: '#f9f9f9',
      primaryTextColor: '#333',
      primaryBorderColor: '#666',
      lineColor: '#666',
      
      // mindmap 专用颜色配置
      cScale0: '#ff7f7f',  // 根节点 - 红色
      cScale1: '#ffa500',  // 一级节点 - 橙色  
      cScale2: '#ffff00',  // 二级节点 - 黄色
      cScale3: '#90ee90',  // 三级节点 - 浅绿色
      cScale4: '#87ceeb',  // 四级节点 - 天蓝色
      cScale5: '#dda0dd',  // 五级节点 - 紫色
      cScale6: '#ffb6c1',  // 六级节点 - 浅粉色
      cScale7: '#20b2aa',  // 七级节点 - 浅蓝绿色
      
      // 文字和边框
      labelTextColor: '#333',
      nodeTextColor: '#333',
      
      // 背景
      background: 'transparent',
      mainBkg: '#ffffff',
      secondBkg: '#f8f9fa',
      tertiaryColor: '#f1f3f4'
    },
    // mindmap 特定配置
    mindmap: {
      useMaxWidth: true,
      padding: 10,
      maxNodeSizeX: 200,
      maxNodeSizeY: 100
    }
  },
  
  // 可选地，你可以传递 MermaidConfig
  mermaidPlugin: {
    class: 'mermaid my-class', // 设置额外的CSS类
  },
})
)