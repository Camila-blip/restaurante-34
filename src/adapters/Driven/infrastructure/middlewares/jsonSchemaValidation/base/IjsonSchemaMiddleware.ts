export interface IjsonSchemaMiddleware{
    validateSchema(req: any, res: any, next: any): any;
}