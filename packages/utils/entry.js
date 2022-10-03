const fs = require("fs");
const path = require("path");

const camelize = (str) => {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ""));
};

function initPackagesEntry() {
  let code = `// 自动生成文件\n
IMPORT
let components = {};
let files = require.context("./", true, /index\\.js$/);

files.keys().forEach((item) => {
  const fileName = item.replace(/(^\\.\\/)|(\\/index\\.js$)/g, "");
  if (fileName !== "index.js" && fileName !== "utils") {
    components[fileName] = files(item).default || files(item);
  }
});

const version = "0.0.1";

const install = function (Vue) {
  if (install.installed) return;
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key]);
  });
};
export {
  install,
  EXPORT
};

export default {
  install,
  version,
};`;

  // 生成 index.js 文件
  // 处理组件库
  let components = fs
    .readdirSync("packages")
    .filter((item) => ["index.js", "utils"].indexOf(item) === -1);
  let importCode = "";
  components = components.map((item) => {
    importCode += `import ${camelize(item)} from './${item}';\n`;
    return camelize(item);
  });

  code = code
    .replace(/IMPORT/g, importCode)
    .replace(/EXPORT/g, `${components.join(", ")}`);
  fs.writeFileSync("packages/index.js", code, "utf8");
}

const join = path.join;

const resolve = (dir) => {
  return path.resolve(__dirname, "../../" + dir);
};

function getEntries(path) {
  let files = fs.readdirSync(resolve(path));
  const entries = files.reduce((ret, item) => {
    const itemPath = join(path, item);
    const isDir = fs.statSync(itemPath).isDirectory();
    if (isDir) {
      ret[item] = resolve(join(itemPath, "index.js"));
    } else {
      const [name] = item.split(".");
      ret[name] = resolve(itemPath);
    }
    return ret;
  }, {});
  return entries;
}

module.exports = {
  camelize,
  initPackagesEntry,
  getEntries,
};
