import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto.js';
import { UpdateNoteDto } from './dto/update-note.dto.js';
import { db } from '../prisma/db.js';

@Injectable()
export class NotesService {
  async create(createNoteDto: CreateNoteDto) {
    return db.orm.public.Note.create(createNoteDto);
  }

  async findAll() {
    return db.orm.public.Note.all();
  }

  async findOne(id: number) {
    return db.orm.public.Note.where({id}).first();
  }

  async update(id: number, updateNoteDto: UpdateNoteDto) {
    return db.orm.public.Note.where({id}).update(updateNoteDto);
  }

  async remove(id: number) {
    return db.orm.public.Note.where({id}).delete();
  }
}
