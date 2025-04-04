import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContatoModule } from './contato/contato.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LogMiddleware } from './common/middleware/log.middleware';
import { LogsModule } from './logs/logs.module'; // ✅ Adicionado

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'zapi_teste',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ContatoModule,
    MongooseModule.forRoot('mongodb://localhost:27017/logs-formcontato'),
    LogsModule, 
  ],
  providers: [LogMiddleware], 
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .forRoutes('*');
  }
}