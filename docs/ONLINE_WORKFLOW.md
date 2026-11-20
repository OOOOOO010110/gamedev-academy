# GameDev Academy · 在线网站与持续更新使用指南（V2.3）

## 一句话方案

**课程内容放GitHub仓库 → GitHub Pages自动部署 → 用户用固定网址学习 → 学习数据留浏览器/定期导出 → 老师按回执指导 → 修改课程文件再次提交Git。**

## 一、首次发布（只做一次）

1. 从 ChatGPT 下载 `GameDev_Academy_V2.3_可部署源码.zip`，解压成 `gamedev-academy` 文件夹。
2. 登录 GitHub，创建一个仓库（示例：`gamedev-academy`）。GitHub Free 的 GitHub Pages 通常使用公开仓库；**不要把私人八股文档、个人作答或任何API密钥放进仓库**。
3. 可用 GitHub Desktop 通过“Add an Existing Repository”把文件夹加入仓库、提交并发布；或者终端运行：

```powershell
cd 你的目录\gamedev-academy
git init
git add .
git commit -m "GameDev Academy v0.2 baseline"
git branch -M main
git remote add origin https://github.com/你的用户名/gamedev-academy.git
git push -u origin main
```

4. 仓库 → `Settings` → `Pages` → `Build and deployment` → `Source: Deploy from a branch` → `Branch: main` / `/(root)` → `Save`。
5. 等GitHub显示实际发布网址后再访问。常见的项目网址格式为 `https://用户名.github.io/gamedev-academy/`，此处只是示例，不是已经部署好的地址。

## 二、后续学习

- 打开发布后的固定网址，进入当前课次，完成A即时题、B编程、C深度分析。答题数据通常保存在浏览器的localStorage。
- 错题复习和需求变更题会自动记录。完成后导出课程Markdown学习回执，发给ChatGPT集中评估。
- 定期在网站“设置与备份”导出完整JSON备份。私密学习记录**不要提交到GitHub公开仓库**。
- 切换域名、浏览器或电脑，原本地记录不会自动同步；先备份再导入。以后可以接入私有云数据库，但需要授权与安全配置。

## 三、以后请ChatGPT / Codex更新课程

把**仓库URL**告诉导师，确保有对应仓库的可读权限（若需直接提交，还需可写权限）。之后只需描述“更新CPP-03”，不必反复上传整个网站。

建议提示词：

> 我的课程网站仓库是【仓库地址】，请先读取 `curriculum/curriculum-plan.md`、`README.md`、`src/data/lessons/`、`src/data/interview-bank.js`，根据我的上一课学习回执更新【CPP-03】。按编程入门教学标准编写一整课的讲解与A/B/C练习，加入原理、用途、选型、边界、性能、扩展、验证、需求变化；保持所有旧lesson_id/question_id、学习存储格式和复习记录兼容。新增教材写到 `src/data/lessons/CPP-03.js`，执行 `python scripts/build_offline.py`、语法检查与冒烟测试，提交Git并列出差异。来源八股题干必须审校，不把错误参考答案直接入库。

已存在的课程仅修改对应 `src/data/lessons/<ID>.js`；修订题库则更新 `src/data/interview-bank.js`。`python scripts/build_offline.py` 会自动挂接全部课件并生成可离线使用的 `offline.html`。

- **直接在ChatGPT修改GitHub：** 需要该会话具备对目标仓库的授权访问，且对应GitHub工具允许读取或提交；不要假设随便提供一个URL就有私有仓库权限。
- **使用Codex本地工程修改：** Codex读取本地仓库、编辑文件并由用户提交/推送；网站随后自动发布。
- 若暂时不连接仓库：仍可上传网站源码ZIP，但不是长期推荐流程。

## 四、目前功能范围与限制

- V2.3仍只有C++第1、2课的完整教材；其余123课只是规划目录；有8个面试场景题条目，6个需对应先修课上线后才能答。
- 浏览器A题即时判定；B题的文本结构检查**不等于C++编译**，真实运行仍需可信的外部编译器或可选本地Docker沙箱。
- GitHub Pages是静态托管，不能运行C++/Docker服务器，也不会自动把个人答案交给ChatGPT。
- 暂时无需Supabase。若以后想跨设备同步学习记录，再设计用户身份、数据库权限、备份及导出。
- 课程内容是个人学习材料，公开仓库会被他人看到。若需要隐藏源内容，可用授权的私有仓库 + Cloudflare Pages，但发布网页本身仍然是公开可访问，需另外设计登录与访问控制。