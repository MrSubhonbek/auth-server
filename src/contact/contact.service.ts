import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ContactDto } from './dto/contact.dto';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.ContactsUncheckedCreateInput) {
    return this.prisma.contacts.create({ data });
  }

  findAll() {
    return this.prisma.contacts.findMany();
  }

  findOne(id: Prisma.ContactsWhereUniqueInput) {
    return this.prisma.contacts.findUnique({
      where: id,
    });
  }

  update(
    where: Prisma.ContactsWhereUniqueInput,
    data: Prisma.ContactsUpdateInput,
  ) {
    return this.prisma.contacts.update({
      where,
      data,
    });
  }

  remove(where: Prisma.ContactsWhereUniqueInput) {
    return this.prisma.contacts.delete({ where });
  }
}
