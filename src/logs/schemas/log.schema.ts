import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema()
export class Log {
  @Prop()
  method: string;

  @Prop()
  url: string;

  @Prop()
  ip: string;

  @Prop()
  timestamp: Date;

  @Prop({ type: Object }) 
  body: Record<string, any>;
}

export const LogSchema = SchemaFactory.createForClass(Log);