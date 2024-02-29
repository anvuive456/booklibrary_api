import multer from 'multer';
import { Request } from 'express';
import { firestore, } from 'firebase-admin';

export class FirebaseStorage implements multer.StorageEngine {
  _handleFile(
    req: Request,
    file: Express.Multer.File,
    callback: (error?: any, info?: Partial<Express.Multer.File>) => void,
  ): void {
  }

  _removeFile(
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null) => void,
  ): void {}
}
