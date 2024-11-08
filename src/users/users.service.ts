import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  doneExercise(userId: string, exerciseId: string) {
    return this.prismaService.user.update({
      where: { id: userId },
      data: {
        score: {
          increment: 30,
        },
        tests: {
          connect: { id: exerciseId },
        },
      },
    });
  }

  doneTest(userId: string, testId: string) {
    return this.prismaService.user.update({
      where: { id: userId },
      data: {
        score: {
          increment: 20,
        },
        tests: {
          connect: { id: testId },
        },
      },
    });
  }

  create(data: CreateUserDto) {
    return this.prismaService.user.create({
      data,
    });
  }

  findAll() {
    return this.prismaService.user.findMany();
  }

  findOneByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }

  findOne(id: string) {
    return this.prismaService.user.findUnique({
      where: { id },
      include: {
        completedExercises: true,
        tests: true,
      },
    });
  }

  remove(id: string) {
    return this.prismaService.user.delete({
      where: { id },
    });
  }
}
