import {ConfigModule, ConfigService} from "@nestjs/config";
import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import { User } from "src/user/entities/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        url: configService.get("DATABASE_URL"),
        entities: [User],
        //WARNING: remove synchronize on prod
        synchronize: true,
      }),
    }),
  ],
})
export class DatabaseModule {}