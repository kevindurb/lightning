import { Resolver, Query } from 'type-graphql';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';

import { CuelistEntity } from '../entities/CuelistEntity';

@Resolver((of) => CuelistEntity)
export class CuelistResolver {
  constructor(
    @InjectRepository(CuelistEntity)
    private readonly cuelistRepository: Repository<CuelistEntity>,
  ) {}

  @Query((returns) => [CuelistEntity])
  cuelists() {
    return this.cuelistRepository.find();
  }
}
