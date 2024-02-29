// import { Category, Prisma, PrismaClient, User } from '@prisma/client';
// import { createSlug } from '../src/common/create-slug';
// import { faker } from '@faker-js/faker';
// import { CreateCategoryDto } from '../src/module/category/category.dto';
// import { of } from 'rxjs';
//
// const prisma = new PrismaClient();
//
// const fakeCategory = (): CreateCategoryDto => {
//   return {
//     name: faker.string.sample(10),
//   };
// };
//
// async function main() {
//   if ((await prisma.category.count()) == 0)
//     for await (const index of Array(10).keys()) {
//       const cate = fakeCategory();
//       const data = await prisma.category.create({
//         data: {
//           name: cate.name,
//           slug: createSlug(cate.name),
//         },
//       });
//       console.log(data);
//     }
//
//   if((await ))
// }
//
// main()
//   .catch((e) => console.error(e))
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
