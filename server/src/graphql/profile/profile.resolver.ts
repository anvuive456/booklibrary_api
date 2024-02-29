import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Profile } from '../../@generated/profile/profile.model';
import { ProfileService } from '../../module/profile/profile.service';
import { Query } from '@nestjs/graphql';
import { FindManyProfileArgs } from '../../@generated/profile/find-many-profile.args';
import { CreateOneProfileArgs } from '../../@generated/profile/create-one-profile.args';
import { FindUniqueProfileArgs } from '../../@generated/profile/find-unique-profile.args';
import { AddressService } from '../../module/address/address.service';
import { MediaService } from '../../module/media/media.service';
import { UserService } from '../../module/user/user.service';
import { Address } from '../../@generated/address/address.model';
import { User } from '../../@generated/user/user.model';

@Resolver((of) => Profile)
export class ProfileResolver {
  constructor(
    private profileService: ProfileService,
    private addressService: AddressService,
    private mediaService: MediaService,
    private userService: UserService,
  ) {}

  @Query((returns) => [Profile], {
    defaultValue: [],
    nullable: true,
    name: 'profiles',
  })
  async getProfiles(@Args() args: FindManyProfileArgs): Promise<Profile[]> {
    const profiles = await this.profileService.getAll(args);
    console.log(profiles);
    return profiles;
  }

  @Query((returns) => Profile,{nullable:true})
  async getMyProfile() {
    // return this.profileService.getMyProfile(user.id);
  }

  @ResolveField('address', (_) => [Address], { nullable: true })
  async getAddressByProfileId(@Parent() profile: Profile) {
    return this.addressService.getAddressByProfileId(profile.id);
  }

  @ResolveField('user', (_) => User, { nullable: true })
  async getUserByProfileId(@Parent() profile: Profile) {
    return this.userService.getUserByProfileId(profile.id);
  }

  @Query((returns) => Profile, { nullable: true })
  async getProfile(
    @Args() args: FindUniqueProfileArgs,
  ): Promise<Profile | null> {
    const profiles = await this.profileService.getById(args);
    console.log(profiles);
    return profiles;
  }

  @Mutation((returns) => Profile)
  async createProfile(@Args() args: CreateOneProfileArgs) {
    return this.profileService.createProfile(args);
  }
}
