import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [PrismaModule, AuthModule, JwtModule.register({}), ContactModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
