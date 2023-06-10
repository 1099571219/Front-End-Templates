# templates 动态添加模板
## 模板在分支中查看
## 模板创建使用说明

请在新分支中创建模板，之后需要在 main 分支下 templates.json 文件中新增一个对象，key value 都为分支名，cli 会根据 templates 文件内容进行模板选择、拉取

## vue-ts-vite 模板
自动引入常用 api , 可在 vite.config.ts 中自行扩展
模块化路由 vue-router
prettier 格式化配置，新项目需要先统一格式化配置，可在 prettierrc.cjs 中自行扩展（需要 vscode 安装 prettier 插件配合使用,详细操作查看对应分支）
commit 提交版本名称检查 (feat、style、build ...) 


## 安装脚手架
### 全局安装
$ npm install -g vue-ziy-cli $
<br />
$ yarn global add vue-ziy-cli $
<br />
$ pnpm add -g vue-ziy-cli
$
<br />

### 使用
创建模版<br />
$vue-ziy-cli create$
<br />
or <br />
$vue-ziy-cli create <name> [-t|--template] 
$
<br />
示例 <br />
$ vue-ziy-cli create hello-cli -t dumi2-demo
