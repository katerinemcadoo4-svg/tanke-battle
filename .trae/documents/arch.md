
## 1. Architecture Design
纯前端单页应用，无需后端服务

```mermaid
graph TD
  A[用户浏览器] --&gt; B[React 应用]
  B --&gt; C[梅花易数算法]
  B --&gt; D[UI 组件]
```

## 2. Technology Description
- 前端：React@18 + TypeScript + Tailwind CSS + Vite
- 初始化工具：vite-init
- 后端：无
- 数据库：无

## 3. Route Definitions
| Route | Purpose |
|-------|---------|
| / | 首页 - 起卦和解读页面 |
| /bagua | 八卦百科页面 |

## 4. API Definitions (if backend exists)
不适用

## 5. Server Architecture Diagram (if backend exists)
不适用

## 6. Data Model (if applicable)
### 6.1 Data Model Definition
不适用

### 6.2 Data Definition Language
不适用
