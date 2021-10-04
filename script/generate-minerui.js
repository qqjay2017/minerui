const package = require('../package.json');
const config = require('../src/config.json');
const path = require('path');
const fs = require('fs-extra');
let importStr = `import { App } from 'vue';\n
import { localeProviderMaker, LocaleInjectionKey } from './utils/useLocale';\n
import zh from './utils/useLocale/zh';\n
import en from './utils/useLocale/en';\n`;
let importScssStr = `\n`;
const packages = [];
config.nav.map((item) => {
  item.packages.forEach((element) => {
    let { name, show, type, exportEmpty } = element;
    if (show || exportEmpty) {
      importStr += `import ${name} from './__VUE/${name.toLowerCase()}/index${type === 'methods' ? '' : '.vue'}';\n`;
      importScssStr += `import './__VUE/${name.toLowerCase()}/index.scss';\n`;
      packages.push(name);
    }
  });
});
let installFunction = `function install(app: App, options:any = {}) {
  const packages = [${packages.join(',')}];
  packages.forEach((item:any) => {
    if (item.install) {
      app.use(item);
    } else if (item.name) {
      app.component(item.name, item);
    }
  });
  if (options.locale) {
    const localeProvides = localeProviderMaker(options.locale);
    app.provide(LocaleInjectionKey, localeProvides);
  }



}`;
let fileStrBuild = `${importStr}
${installFunction}
const version = '${package.version}';
export { install, version, zh,en,${packages.join(',')}};
export default { install, version};`;

fs.outputFile(path.resolve(__dirname, '../src/packages/minerui.vue.build.ts'), fileStrBuild, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});

let fileStrDev = `${importStr}
${installFunction}
${importScssStr}
export { install,zh,en, ${packages.join(',')}  };
export default { install, version:'${package.version}'};`;
fs.outputFile(path.resolve(__dirname, '../src/packages/minerui.vue.ts'), fileStrDev, 'utf8', (error) => {
  // logger.success(`${package_config_path} 文件写入成功`);
});
