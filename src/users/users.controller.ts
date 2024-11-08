import {
  Controller,
  Get,
  Param,
  Delete,
  UseGuards,
  Req,
  Post,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtGuard } from 'src/auth/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(JwtGuard)
  @Post()
  doneTest(@Req() req, @Body() body) {
    return this.usersService.doneTest(req.user.id, body.testID);
  }

  @UseGuards(JwtGuard)
  @Post()
  doneExercise(@Req() req, @Body() body) {
    return this.usersService.doneTest(req.user.id, body.exerciseID);
  }

  @UseGuards(JwtGuard)
  @Get('/me')
  findMe(@Req() req) {
    return req.user;
  }

  @UseGuards(JwtGuard)
  @Get('/me-full')
  findMeFull(@Req() req) {
    return this.usersService.findOne(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
