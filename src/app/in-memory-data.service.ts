import { InMemoryDbService } from 'angular2-in-memory-web-api';
import { Tweet} from './tweet';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    let friends = [
      "ChuckNorrisApproved", "Chuck-Norris", "chuck", "Phil_NOAVATAR", "Toni_NOAVATAR"
    ];

    let tweets = [

      new Tweet(
        1,
        "Rien ne sert de jouer aux échecs avec Chuck Norris, il ne connait pas l'échec",
        'Chuck-Norris',
        new Date(),
        ['ChuckNorrisApproved'],
        ['John']
      ),
      new Tweet(
        2,
        "Google, c'est le seul endroit où tu peux taper Chuck Norris...",
        'chuck',
        new Date(),
        ['Chuck-Norris'],
        ['Chuck-Norris', 'ChuckNorrisApproved']
      ),
      new Tweet(
        3,
        "Chuck Norris et Superman ont fait un bras de fer, le perdant devait mettre son slip par dessus son pantalon.",
        "ChuckNorrisApproved",
        new Date(),
        ['Jean', 'Claude'],
        []
      )

    ];

  return { 'tweets': tweets, 'friends': friends }

  }

}
