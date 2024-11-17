import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  private readonly songs: string[] = [];

  create(song) {
    //save the song in the db
    this.songs.push(song);
    return this.songs;
  }

  findAll(): string[] {
    //fetch the songs from the db
    throw new Error('Error in DB while fetching');
    return this.songs;
  }
}
