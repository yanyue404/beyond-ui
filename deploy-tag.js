const { exec, echo } = require('shelljs');
const process = require('process');
/* 
 自动发布 tag 
*/

// 支持传参，不用再修改此文件：npm run deploy:tag [newTag]
const [, , newTag] = process.argv;

const publishTag = newTag || 'last';

exec('git pull');

echo(`# 删除本地 ${publishTag}`);
exec(`git tag -d ${publishTag}`);

echo('# 删除远程 tag');
exec(`git push origin :refs/tags/${publishTag}`);

echo(`# 新建 tag ${publishTag} 并提交到远端:`);
exec(`git tag ${publishTag}`);
exec(`git push origin ${publishTag}`);
