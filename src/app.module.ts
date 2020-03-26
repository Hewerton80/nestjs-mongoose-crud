import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TasksModule,
    MongooseModule.forRoot(process.env.MONGO_URL,{
      useNewUrlParser:true,
      useUnifiedTopology:true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// TypeOrmModule.forRoot({
//   type: 'mysql',
//   host: 'remotemysql.com',
//   port: 3306,
//   username: 'ClumIFlJab',
//   password: 'lPMdmDYzhS',
//   database: 'ClumIFlJab',
//   //entities: [User],
//   synchronize: true,
//   autoLoadEntities: true,
// }),
