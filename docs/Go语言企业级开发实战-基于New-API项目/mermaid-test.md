# Mermaid 测试页面

## 流程图测试

```mermaid
flowchart TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
```

## 序列图测试

```mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
```

## 类图测试

```mermaid
classDiagram
    class Animal {
        +String name
        +int age
        +speak()
    }
    
    class Dog {
        +String breed
        +bark()
    }
    
    class Cat {
        +boolean indoor
        +meow()
    }
    
    Animal <|-- Dog
    Animal <|-- Cat
```

## Git 图测试

```mermaid
gitgraph
    commit
    commit
    branch develop
    commit
    commit
    commit
    checkout main
    commit
    commit
    merge develop
    commit
    commit
```

## 思维导图测试

```mermaid
mindmap
  root((Go语言企业级开发))
    基础篇
      环境搭建
      语法基础
      高级特性
    Web开发篇
      Gin框架
      RESTful API
      中间件
    数据库篇
      数据库设计
      GORM实战
      用户认证
    企业级特性篇
      配置管理
      日志监控
      缓存优化
      负载均衡
    运维篇
      部署实践
      测试保证
    进阶篇
      微服务
      性能优化
      安全实践
```