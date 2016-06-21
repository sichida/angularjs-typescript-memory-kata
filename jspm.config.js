SystemJS.config({
  defaultExtension: false,
  transpiler: "plugin-typescript",
  packages: {
    "app": {
      "main": "app.ts",
      "meta": {
        "*.ts": {
          "loader": "plugin-typescript"
        },
        "*.html": {
          "loader": "text"
        },
        "*.css": {
          "loader": "css"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "github:*/*.json",
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "angular": "github:angular/bower-angular@1.5.7",
    "angular-mocks": "github:angular/bower-angular-mocks@1.5.7",
    "angular-resource": "github:angular/bower-angular-resource@1.5.6",
    "angular-ui-router": "github:angular-ui/angular-ui-router-bower@0.3.0",
    "css": "github:systemjs/plugin-css@0.1.23",
    "os": "github:jspm/nodelibs-os@0.2.0-alpha",
    "plugin-typescript": "github:frankwallis/plugin-typescript@4.0.16",
    "text": "github:systemjs/plugin-text@0.0.8"
  },
  packages: {
    "github:angular/bower-angular-mocks@1.5.7": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "github:angular/bower-angular-resource@1.5.6": {
      "map": {
        "angular": "github:angular/bower-angular@1.5.7"
      }
    },
    "github:frankwallis/plugin-typescript@4.0.16": {
      "map": {
        "typescript": "npm:typescript@1.8.10"
      }
    },
    "github:jspm/nodelibs-os@0.2.0-alpha": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    }
  }
});
