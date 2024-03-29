import { Controller, Get, Post } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/app")
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  post(): string {
    return "aaa";
  }
}
