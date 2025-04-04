import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { LogsService } from '../../logs/logs.service';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  constructor(private readonly logsService: LogsService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string;
    const method = req.method;
    const url = req.originalUrl || req.url;
    const body = req.body;
  
    this.logsService.createLog({
      method,
      url,
      ip,
      body,
      timestamp: new Date(),
    }).catch(console.error);
  
    next();
  }
}