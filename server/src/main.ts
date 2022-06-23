import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

const start = async () => {
  try {
    const PORT = process.env.PORT || 5000;
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    mongoose
      .connect('mongodb://localhost:27017')
      .then(
        await app.listen(PORT, () =>
          console.log(`server started on PORT ${PORT}`),
        ),
      );
  } catch (e) {
    console.log(e);
  }
};

start();
