import { PrismaClient } from '@prisma/client';
import { PlayerPosition } from '../src/shared/domain/enum-positions';
import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();

async function createUsers() {
  const positions = Object.values(PlayerPosition);

  const usersData = [];

  for (let i = 0; i < 22; i++) {
    const user = {
      id: uuidv4(),
      name: faker.person.fullName(),
      nickname: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      shirtNumber: faker.number.int({ min: 1, max: 99 }).toString(),
      position: positions[Math.floor(Math.random() * positions.length)],
      cellphone: faker.phone.number('119########'),
    };

    usersData.push(user);
  }

  for (const user of usersData) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('Jogadores criadas com sucesso!');
}

createUsers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

async function createPickupSoccers() {
  const users = await prisma.user.findMany({
    select: { id: true },
  });

  if (users.length === 0) {
    console.log('Não há usuários no banco de dados para criar peladas.');
    return;
  }

  const pickupSoccersData = [];

  for (let i = 0; i < 5; i++) {
    const userIndex = i % users.length;
    const createdBy = users[userIndex].id;

    const pickupSoccer = {
      id: uuidv4(),
      createdBy,
      name: `fut-${i + 1}`,
      time: '10:00',
      local: 'Canabrava',
      status: true,
      field: 'futsal',
    };

    pickupSoccersData.push(pickupSoccer);
  }

  for (const pickupSoccer of pickupSoccersData) {
    await prisma.pickupSoccer.create({
      data: pickupSoccer,
    });
  }

  console.log('Peladas criadas com sucesso!');
}

createPickupSoccers()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
