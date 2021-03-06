﻿(function (global) {
    System.config({
        paths: {
            // псевдоним для пути к модулям
            'npm:': 'node_modules/'
        },
        // указываем загрузчику System, где искать модули
        map: {
            // наше приложение будет находиться в папке app
            app: 'app',
            // пакеты angular
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            // остальные пакеты
            'rxjs': 'npm:rxjs',
            'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
            'ng2-bs3-modal': 'npm:/ng2-bs3-modal',
            'ng2-slim-loading-bar': 'node_modules/ng2-slim-loading-bar/bundles/index.umd.js',

            'dragula': 'node_modules/dragula/dist/dragula.js',
            'angular2-autosize': 'npm:angular2-autosize',
            'ng2-dragula': 'node_modules/ng2-dragula',
            
            //'ng2-image-gallery': 'node_modules/ng2-image-gallery/dist/ng2-image-gallery.js',
            'angular2-markdown': 'npm:angular2-markdown/bundles/angular2-markdown.umd.min.js'
        },
        // пакеты, которые указывают загрузчику System, как загружать файлы без имени и расширения
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },

            'dragula': { defaultExtension: 'js' },
            'ng2-dragula': { defaultExtension: 'js' },
            'angular2-autosize': { defaultExtension: 'js' },
            
            //'ng2-image-gallery': { defaultExtension: 'js' },

            'ng2-bs3-modal':
          { main: '/bundles/ng2-bs3-modal.js', defaultExtension: 'js' }
        }
    });
})(this);