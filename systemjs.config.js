(function (global) {
    var basePath = global.basePath || "";

    System.config({
        transpiler: "ts",
        typescriptOptions: {
            tsconfig: true
        },
        meta: {
            "typescript": {
                "exports": "ts"
            }
        },
        paths: {
            //"npm:": "https://unpkg.com/"
            "npm:": basePath + "node_modules/"
        },
        map: {
            app: basePath + "app",
            templates: basePath + "app/templates",
            mock: basePath + "mock",
            // angular bundles
            "@angular/core": "npm:@angular/core/bundles/core.umd.js",
            "@angular/common": "npm:@angular/common/bundles/common.umd.js",
            "@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
            "@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
            "@angular/http": "npm:@angular/http/bundles/http.umd.js",
            "@angular/router": "npm:@angular/router/bundles/router.umd.js",
            "@angular/forms": "npm:@angular/forms/bundles/forms.umd.js",
            "@angular/upgrade": "npm:@angular/upgrade/bundles/upgrade.umd.js",

            // other libraries
            "lodash": "npm:lodash/lodash.js",
            "rxjs": "npm:rxjs",
            "@angular/material": "npm:@angular/material/material.umd.js",
            "angular-in-memory-web-api": "npm:angular-in-memory-web-api",
            "angular-2-local-storage": "npm:angular-2-local-storage/dist",

            //   "ts":                        "npm:plugin-typescript@4.0.10/lib/plugin.js",
            //   "typescript":                "npm:typescript@2.0.2/lib/typescript.js",
            "ts": "npm:plugin-typescript/lib/plugin.js",
            "typescript": "npm:typescript/lib/typescript.js",
            "ng2-completer": basePath + "node_modules/ng2-completer/bundles"
        },
        packages: {
            app: {
                main: "./main.ts",
                defaultExtension: "ts"
            },
            templates: { defaultExtension: "html" },
            mock: { defaultExtension: "ts" },
            rxjs: {
                defaultExtension: "js"
            },
            "angular-in-memory-web-api": {
                main: "./index.js",
                defaultExtension: "js"
            },
            "angular-2-local-storage": {
                main: 'index.js',
                defaultExtension: 'js'
            },
            "ng2-completer": {
                main: "ng2-completer.js",
                format: "cjs"
            }
        }
    });
})(this);