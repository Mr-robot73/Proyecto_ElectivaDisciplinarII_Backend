import { Controller, Get, Query } from '@nestjs/common';

@Controller('query-params')
export class QueryParamsController {
  @Get('xyz')
  getpath() {
    return '<center> <h1>hola mundo ❤️❤️</h1> </center>';
  }
  @Get()
  getQuery(@Query('pqr') pqr: string) {
    return `<center> <h1>${pqr} ❤️❤️</h1> </center>`;
  }
}
