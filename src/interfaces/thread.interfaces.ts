import { z } from "zod";
import { 
    threadSchema, 
    threadSchemaResponse, 
    threadSchemaRequest, 
    manyThreadsSchemaResponse, 
    threadSchemaUpdate } from "../schemas/threads.schemas";

    export type TThread = z.infer<typeof threadSchema>;

    export type TThreadRequest = z.infer<typeof threadSchemaRequest>;
    
    export type TThreadsUpdateRequest = Partial<TThreadRequest>;
    
    export type TThreadsRequestUpdate = z.infer<typeof threadSchemaUpdate >

    export type TThreadResponse = z.infer<typeof threadSchemaResponse>;
    
    export type TManyThreadsResponse = z.infer<typeof manyThreadsSchemaResponse>;
    