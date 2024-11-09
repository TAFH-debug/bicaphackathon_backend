import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ExercisesService {
  constructor(private prismaService: PrismaService) {}

  create(createExerciseDto: CreateExerciseDto) {
    return this.prismaService.exercise.create({
      data: {
        name: createExerciseDto.name,
        subject: createExerciseDto.subject,
        math: {
          create: {
            question: createExerciseDto.math?.question,
            answer: createExerciseDto.math?.answer,
          },
        },
        kazakh: {
          create: {
            text: createExerciseDto.kazakh?.text,
            answer: createExerciseDto.kazakh?.answer,
          },
        },
        history: {
          create: {
            data: createExerciseDto.history?.data,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.exercise.findMany();
  }

  findOne(id: string) {
    return this.prismaService.exercise.findUnique({
      where: {
        id: id,
      },
    });
  }
}
