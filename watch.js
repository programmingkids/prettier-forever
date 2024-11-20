var chokidar = require('chokidar');
const { exec } = require('child_process');

// settings
const target_directory_01 = [
  './../nextjs-level1/**/*.tsx',
  './../nextjs-level2/**/*.tsx',
  './../nextjs-level3/**/*.tsx',
  './../nextjs-level4/**/*.tsx',
  './../nextjs-level5/**/*.tsx',
  './../nextjs-level6/**/*.tsx',
  './../nextjs-level7/**/*.tsx',
  './../nextjs-level8/**/*.tsx',
  './../work/tacos/**/*.tsx',
];

const log = console.log.bind(console);

// Initialize
var watcher = chokidar.watch(target_directory_01, {
  ignored: /[\/\\]\.|node_modules/,
  persistent: true,
});

// Monitoring
// onReady
watcher.on('ready', function () {
  log('Initial scan complete. Ready for changes');
  // watched Paths
  var watchedPaths = watcher.getWatched();
  log('watchedPaths :', watchedPaths);

  // Files
  // Detect File added
  watcher.on('add', function (path, stats) {
    //log(`File ${path} has been added`);
    //if (stats) console.log(`File ${path} changed size to ${stats.size}`, stats);

    var watchedPaths = watcher.getWatched();
    //log('watchedPaths :', watchedPaths);
  });

  // Detect File changed
  watcher.on('change', function (path, stats) {
    //log(`File ${path} has been changed`);
    //if (stats) console.log(`File ${path} changed size to ${stats.size}`, stats);

    exec(`prettier -w "${path}"`, (err, stdout, stderr) => {
      if (err) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      //console.log(`stdout: ${stdout}`);
    });
  });

  // Detect File removed
  watcher.on('unlink', function (path) {
    //log(`File ${path} has been removed`);
  });

  // Directories
  // Detect Directory added
  watcher.on('addDir', function (path) {
    //log(`Directory ${path} has been added`);
  });

  // Detect Directory removed
  watcher.on('unlinkDir', function (path) {
    //log(`Directory ${path} has been removed`);
  });

  // Error
  // Detect Watcher Error
  watcher.on('error', function (path) {
    //log(`Watcher error: ${error}`);
  });
});
