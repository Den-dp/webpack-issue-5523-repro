# webpack-issue-5523-repro

```
npm install
npm start
mv ./src/app.module.js ./src/app.module.ts
```

```
i ｢wdm｣: Compiling...
× ｢wdm｣: Hash: 7bb437d236eea4af1478
Version: webpack 4.32.2
Time: 20ms
Built at: 05/24/2019 6:35:10 PM
  Asset     Size  Chunks             Chunk Names
main.js  350 KiB    main  [emitted]  main
Entrypoint main = main.js
[./src/app.module.js] 143 bytes {main} [built] [failed] [1 error]
    + 26 hidden modules

ERROR in ./src/app.module.js
Module build failed: Error: ENOENT: no such file or directory, open 'D:\dev\webpack-issue-5523-repro\src\app.module.js'
 @ ./src/index.js 1:0-40 3:29-37
i ｢wdm｣: Failed to compile.
```