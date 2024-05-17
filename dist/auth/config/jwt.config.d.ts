import { ConfigService } from "@nestjs/config";
import { JwtModuleOptions } from "@nestjs/jwt";
export declare const getJwtConfig: (ConfigService: ConfigService) => Promise<JwtModuleOptions>;
