import { yarg } from './config/plugins/yargs.adapter';
import { ServerApp } from './presentation/server-app';

const main = async () => {
  // const { b, l: limit, s } = yarg;
  // saveResultIntoFile(multiplicationPrint(b, limit), s);
  const { b: base, l: limit, s: show, n: fileName, p: filePath } = yarg;
  ServerApp.start({ base, limit, show, fileName, filePath });
};

(async () => {
  await main();
})();
