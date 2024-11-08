import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TestsService } from './tests.service';
import { CreateTestDto } from './dto/create-test.dto';

@Controller('tests')
export class TestsController {
  constructor(private readonly testsService: TestsService) {}

  @Post()
  create(@Body() createTestDto: CreateTestDto) {
    return this.testsService.create(createTestDto);
  }

  @Get()
  findAll() {
    return this.testsService.findAll();
  }

  @Get('kazakh')
  kazakh() {
    return this.testsService.kazakh();
  }

  @Get('history')
  history() {
    return this.testsService.history();
  }

  @Get('math')
  math() {
    return this.testsService.math();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testsService.findOne(id);
  }
}
