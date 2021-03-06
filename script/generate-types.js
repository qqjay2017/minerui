const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = `import { App } from 'vue';
declare class UIComponent {
  static install(vue: App): void;
}\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, exportEmpty } = element;
    if (show || exportEmpty) {
      importStr += `declare class ${name} extends UIComponent {}\n`;
      packages.push(name);
    }
  });
});
let installFunction = `
export interface InstallationOptions {
  locale?: any;
}
declare function install(app: App, options?: InstallationOptions): void;
export { ${packages.join(',')},install,zh,en };
declare const _default: {
  install: typeof install;
  version: string;
};
export default _default;`;
let fileStr = importStr + installFunction;
fs.outputFile(path.resolve(__dirname, '../dist/minerui.d.ts'), fileStr, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});
fs.outputFile(
  path.resolve(__dirname, '../dist/index.d.ts'),
  `import * as MinerUI from './minerui';
export default MinerUI;
export * from './minerui';`,
  'utf8',
  (error) => {
    // logger.success(`${package_config_path} 文件写入成功`);
  }
);
