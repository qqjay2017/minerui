const fs = require('fs');
const path = require('path');
const changelog = fs.readFileSync(path.join(__dirname, '../CHANGELOG.md'), 'utf8');
const typeList = [
  { type: 'fix', icon: 'ð' },
  { type: 'feat', icon: 'â¨' },
  { type: 'chore', icon: 'ð·' },
  { type: 'docs', icon: 'ð ' },
  { type: 'style', icon: 'ð' },
  { type: 'refactor', icon: 'ð¨' },
  { type: 'perf', icon: 'â¡' },
  { type: 'test', icon: 'â ' }
];
const replaceMd = {
  content: '',
  setContent(content) {
    replaceMd.content = content;
    return replaceMd;
  },
  getContent() {
    return replaceMd.content;
  },
  //çæ¬å·æ¹æäºçº§æ é¢
  changeTitle() {
    replaceMd.content = replaceMd.content.replace(/### (?=\[\d\.\d\.\d\])/g, '## ');
    return replaceMd;
  },
  //ä¿®æ¹æ¥æä½ç½®
  changeDate() {
    replaceMd.content = replaceMd.content.replace(
      /(?<=\[\d\.\d\.\d\]\([\s\S]+\)) \((\d\d\d\d\-\d\d\-\d\d)\)(?=\n)/g,
      '\n`$1`'
    );
    return replaceMd;
  },
  //å¢å typeåå®¹
  changeType() {
    function replaceType(type, icon) {
      replaceMd.content = replaceMd.content.replace(
        new RegExp(`(?<=### ${type}\\n\\n)\\* ([\\s\\S]+?)\\n+(?=[###|##])`, 'g'),
        function (match) {
          return match.replace(new RegExp(`\\* ([\\s\\S]+?)(?=\\n)`, 'g'), `* ${icon} ${type}: $1`);
        }
      );
    }
    typeList.forEach((e) => {
      replaceType(e.type, e.icon);
    });
    return replaceMd;
  },
  //å é¤typeæ é¢
  deleteType() {
    typeList.forEach((e) => {
      replaceMd.content = replaceMd.content.replace(new RegExp(`### ${e.type}\\n+`, 'g'), '');
    });
    return replaceMd;
  }
};

const newChangelog = replaceMd.setContent(changelog).changeTitle().changeDate().changeType().deleteType();
fs.writeFileSync(path.join(__dirname, '../CHANGELOG.md'), newChangelog.getContent(), 'utf8');
