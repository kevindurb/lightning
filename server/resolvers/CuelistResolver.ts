import { Resolver, Query } from 'type-graphql';
import { datasource } from '../datasource';

import { CuelistEntity } from '../entities/CuelistEntity';

const cuelistRepository = datasource.getRepository(CuelistEntity);

@Resolver((of) => CuelistEntity)
export class CuelistResolver {
  @Query((returns) => [CuelistEntity])
  cuelists() {
    return cuelistRepository.find();
  }
}
