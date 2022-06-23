'use strict';
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === 'object' && typeof Reflect.decorate === 'function')
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.AppModule = void 0;
const common_1 = require('@nestjs/common');
const track_module_1 = require('./track/track.module');
const file_module_1 = require('./file/file.module');
const path = require('path');
const serve_static_1 = require('@nestjs/serve-static');
let AppModule = class AppModule {};
AppModule = __decorate(
  [
    (0, common_1.Module)({
      imports: [
        serve_static_1.ServeStaticModule.forRoot({
          rootPath: path.resolve(__dirname, 'static'),
        }),
        track_module_1.TrackModule,
        file_module_1.FileModule,
      ],
    }),
  ],
  AppModule,
);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
