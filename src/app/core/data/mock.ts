import { Info, LinksGroup } from "src/app/user/models/user.model";

export const info: Info = {
  name: 'Andrew Milner',
  description: '🎸 Rock, Metal And New Age Musician 🎹 Listen Now ⬇️',
  image: 'https://d1fdloi71mui9q.cloudfront.net/viGoNCuJSYmfMZjuDTyv_U2vOylqg8JN89c2n'
}

export const linksGroups: LinksGroup[] = [
  {
    name: 'My Music', links: [
      {
        label: 'Latest Release',
        link: 'https://youtu.be/1cqK9T_zupE'
      },
      {
        label: 'Doom Soundtrack Covers',
        link: 'https://www.youtube.com/playlist?list=PL4Bm0HU3zAV1EOnYyd1JSC9uMug5hgHk4'
      },
      {
        label: 'Website',
        link: 'https://andrewmilnermusic.wordpress.com/'
      }

    ]
  },
  {
    name: 'Support Zone', links: [
      {
        label: 'Buy Me A Coffee',
        link: 'https://www.buymeacoffee.com/AndreiLM'
      },
      {
        label: 'PayPal Support',
        link: 'https://www.paypal.com/ba/home'
      }
    ]
  },
  {
    name: 'Extras and Goodies', links: [
      {
        label: 'Music Ebooks',
        link: 'https://www.buymeacoffee.com/AndreiLM/extras'
      },
    ]
  }
];



