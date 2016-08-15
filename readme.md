# reqhere
## Add any path to node's require path

Simple straightforward tool to allow you to require locally

Wherever you want to be a module root:
```
require("@nodeutils/reqhere")();
```
And everything from there down will be included.

Example:
```
project
│   yourApp.js
│
└───myModules
    │   index.js
    │   itemA.js
    │
    ├───directoryA
    │   │   itemA.js
    │   │   itemB.js
    │   │   ...
    │
    └───directoryB
    │   index.js
```

If myModules/index.js is given: `require("@nodeutils/reqhere")();`
Then everything in that directory is added to the path, and the following will work from ANYWHERE in the application:
```
require("itemA"); //myModules/itemA.js
require("directoryA/itemA"); //myModules/directoryA/itemA.js
require("directoryA/itemB"); //myModules/directoryA/itemB.js
require("directoryB"); //myModules/directoryV/index.js
```

### What if I want to add multiple paths?
Not an issue. Add `require("@nodeutils/reqhere")();` as many times as you like, and it will append (both Unix and Windows tested).

### Can I namespace?
You sure can, and it's a good idea too, so you can spot the difference between an installable module and a local one.

1) Make yourself a folder called something like `components`.

2) In there make a file called index.js containing
    ```
    "use strict";
    require("@nodeutils/reqhere")();
    ```
3) Add a folder inside `components` called, for example, `app`.

4) Inside `app` put all your modules and files.

5) Done! From anywhere you can now `require("app/someModuleYouMade");

Need more help, found a bug? [Raise an issue](https://github.com/nodeutils/reqhere/issues)