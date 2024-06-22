import { Injectable, Logger } from '@nestjs/common';
import * as cloudinary from 'cloudinary';

@Injectable()
export class CloudinaryStoredProvider {
  private readonly logger = new Logger(CloudinaryStoredProvider.name);
  constructor() {
    cloudinary.v2.config({
      secure: true,
      cloud_name: 'dytzhwnju',
      api_key: '247128514277897',
      api_secret: 'DDnM_I6LpdBY8PYFkKmuyqqDtMw',
    });
  }

  async upload(image: string) {
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder: 'futbook',
    };

    try {
      const result = await cloudinary.v2.uploader.upload(image, options);
      return result;
    } catch (error) {
      const errorMessage = `Error uploading: ${error.message}`;
      this.logger.error(error);
      throw new Error(errorMessage);
    }
  }
}
