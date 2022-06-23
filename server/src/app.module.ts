import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModule } from './file/file.module';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    //MongooseModule.forRoot('mongodb+srv://musPlat:musPlat@cluster0.4e4zb.mongodb.net/?retryWrites=true&w=majority'),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://localhost:27017',
      }),
    }),
    TrackModule,
    FileModule,
  ],
})
export class AppModule {}
