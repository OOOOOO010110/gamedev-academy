# GameDev Academy · 游戏客户端工程师学习平台

> V2.3 · 面向从编程入门到游戏客户端笔试、面试的课程学习与项目实践平台。

## 网站与课程

- 在线网站（启用 GitHub Pages 后）：https://OOOOOO010110.github.io/gamedev-academy/
- 课程规划：10 门核心课 + 1 条面试训练主线，合计 125 课次/训练单元。
- 当前上线教材：C++ 第 1、2 课，其余显示规划中的课程目录。
- 已有功能：课程阅读、交互式即时题、代码编辑与静态检查、开放式问答、错题本、需求变更挑战、面试题库、学习档案、Markdown 学习回执、JSON 备份恢复。

## 学习方式

1. 打开网站，顺序学习 C++ 第 1、2 课。
2. A 类选择/判断题网页直接反馈；B 类编程题在编辑区编写、检查并利用本地编译器/外部平台完成真实验证；C 类开放题完成后统一生成学习报告。
3. 将报告发送给 ChatGPT 批改，得到薄弱点与后续学习建议。
4. 定期导出 JSON 备份错题、代码与进度。

> **注意：**网页里的静态检查不代表 C++ 真实编译通过；未启用可信的隔离运行服务时请自行实际编译。进度保存在当前浏览器本地，跨设备暂不自动同步。公开仓库不应提交个人学习记录、API Key 或私密数据。

## 面向 AI / Codex 的网站更新规范

- 首先阅读 `curriculum/curriculum-plan.md` 和 `docs/ONLINE_WORKFLOW.md`。
- 网站采用原生 HTML/CSS/JS，不需要先整体重构为 React。
- 单节教材在 `src/data/lessons/CPP-01.js`、`CPP-02.js` 等文件中，题目和课次 ID 保持稳定。
- 课程总目录 `src/data/catalog.js`，注册表 `src/data/lessons.js`，面试题库 `src/data/interview-bank.js`。
- 新增课次时新建对应脚本，并按序将脚本标签加入 `index.html`；如需要独立离线版，可重新生成 `offline.html`。
- 保持现有用户答题数据键、导出格式兼容，不得未经迁移就破坏历史记录。
- 从八股资料新增题目时先核查技术准确性、运行时版本差异和是否存在未定义行为。
- 更改后检查 JavaScript 语法、课程加载、题目判分、复习记录、回执导出，测试正常再提交。
- 每次只提交变更文件，不必重新上传整个项目 ZIP。

## 部署

GitHub 仓库 → Settings → Pages → Build and deployment → **Deploy from a branch** → **main** → **/(root)** → Save。

详见 [在线部署和更新指南](docs/ONLINE_WORKFLOW.md)。

## 目录

```text
.
├── index.html
├── src/
│   ├── style.css
│   ├── app.js
│   └── data/
│       ├── catalog.js
│       ├── lessons.js
│       ├── lessons/CPP-01.js
│       ├── lessons/CPP-02.js
│       └── interview-bank.js
├── curriculum/curriculum-plan.md
├── docs/ONLINE_WORKFLOW.md
└── README.md
```
