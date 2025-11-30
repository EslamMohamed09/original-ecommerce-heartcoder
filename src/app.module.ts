import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import config from 'config';
import { ProductSchema } from './product.schema';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(config.get<string>('mongodbUrl'), {
      connectionFactory: (connection) => {
        console.log('📌 MongoDB Connected Successfully:', connection.name);
        return connection;
      },
    }),
    MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
