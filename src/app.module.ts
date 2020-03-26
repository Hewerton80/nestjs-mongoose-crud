import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { Connection } from 'typeorm';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TasksModule,
    MongooseModule.forRoot("mongodb+srv://teste:teste@cluster0-hqw9s.mongodb.net/test?retryWrites=true&w=majority",{
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
