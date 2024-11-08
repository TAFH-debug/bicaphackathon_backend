import { Injectable } from '@nestjs/common';
import { CreateTestDto } from './dto/create-test.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TestsService {
  constructor(private prisma: PrismaService) {}

  create(createTestDto: CreateTestDto) {
    return this.prisma.test.create({
      data: {
        name: createTestDto.name,
        questions: {
          create: createTestDto.questions,
        },
        difficulty: createTestDto.difficulty,
        category: createTestDto.category,
      },
    });
  }

  findAll() {
    return this.prisma.test.findMany();
  }

  findOne(id: string) {
    return this.prisma.test.findUnique({
      where: {
        id: id,
      },
      include: {
        questions: true,
      },
    });
  }

  kazakh() {
    return this.prisma.test.findMany({
      where: {
        category: 'kazakh',
      },
    });
  }

  history() {
    return this.prisma.test.findMany({
      where: {
        category: 'history',
      },
    });
  }

  math() {
    return this.prisma.test.findMany({
      where: {
        category: 'math',
      },
    });
  }
}
