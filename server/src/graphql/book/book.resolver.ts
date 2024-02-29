import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
  Subscription,
} from '@nestjs/graphql';
import { Book } from '../../@generated/book/book.model';
import { BookService } from './book.service';
import { FindManyBookArgs } from '../../@generated/book/find-many-book.args';
import { FindUniqueBookArgs } from '../../@generated/book/find-unique-book.args';
import { CreateOneBookArgs } from '../../@generated/book/create-one-book.args';
import { UpdateOneBookArgs } from '../../@generated/book/update-one-book.args';
import { PubSub } from 'graphql-subscriptions';
import { Media } from '../../@generated/media/media.model';
import { MediaService } from '../media/media.service';

@Resolver((of) => Book)
export class BookResolver {
  constructor(
    private bookService: BookService,
    private mediaService: MediaService,
  ) {}

  #pubSub = new PubSub();

  @Query((returns) => [Book], { name: 'books' })
  async getBooks(@Args({ nullable: true }) args: FindManyBookArgs) {
    return this.bookService.getBooks(args);
  }

  @Query((returns) => Book, { name: 'book' })
  async getBook(@Args({ nullable: true }) args: FindUniqueBookArgs) {
    return this.bookService.getBook(args);
  }

  @ResolveField((returns) => Media, { nullable: true })
  async getMediaByBookId(@Parent() book: Book) {
    return this.mediaService.getMediaByBookId(book.id);
  }

  @Mutation((returns) => Book)
  async createBook(@Args() args: CreateOneBookArgs) {
    return this.bookService.create(args);
  }

  @Mutation((returns) => Book)
  async updateBook(@Args() args: UpdateOneBookArgs) {
    const updated = await this.bookService.update(args);
    await this.#pubSub.publish('updatedBook', { updatedBook: updated });
    return updated;
  }

  @Subscription((returns) => Book, { name: 'updatedBook' })
  async bookSubscription() {
    return this.#pubSub.asyncIterator<Book>('updatedBook');
  }
}
