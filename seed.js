const { db } = require('./server/db')
const { green, red } = require('chalk')
const City = require('./server/db/city')
const Landmark = require('./server/db/landmark')

const seed = async () => {
  await db.sync({ force: true })

  await City.bulkCreate([
    {
      location: 'New York, NY',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1024px-Above_Gotham.jpg'
    },
    {
      location: 'Seattle, WA',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/1280px-Seattle_Kerry_Park_Skyline.jpg'
    },
    {
      location: 'San Francisco, CA',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/San_Francisco%2C_California._June_2017_cropped.jpg/1280px-San_Francisco%2C_California._June_2017_cropped.jpg'
    },
    {
      location: 'Philadelphia, PA',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Philadelphia_skyline_from_the_southwest_2015.jpg/1920px-Philadelphia_skyline_from_the_southwest_2015.jpg'
    }
  ])

  await Landmark.bulkCreate([
    {
      name: 'Statue of Liberty',
      neighborhood: 'Lower Manhattan',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Coittower1.jpg'
    },
    {
      name: 'Freedom Tower',
      neighborhood: 'Lower Manhattan',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/One_World_Trade_Center_Fähre.jpg/800px-One_World_Trade_Center_Fähre.jpg'
    },
    {
      name: 'Brooklyn Bridge',
      neighborhood: 'Lower Manhattan / DUMBO',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_Postdlf.jpg/800px-Brooklyn_Bridge_Postdlf.jpg'
    },
    {
      name: 'Brooklyn Bridge Park',
      neighborhood: 'Dumbo Brooklyn',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Main_Street_section_of_Brooklyn_Bridge_Park%2C_July_2017.jpg/1024px-Main_Street_section_of_Brooklyn_Bridge_Park%2C_July_2017.jpg'
    },
    {
      name: 'Space Needle',
      neighborhood: 'Downtown Seattle',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Space_Needle_2011-07-04.jpg/320px-Space_Needle_2011-07-04.jpg'
    },
    {
      name: 'Pike Place Market',
      neighborhood: 'Downtown Seattle',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Pike_Place_Market_Center_Sign.jpg/1024px-Pike_Place_Market_Center_Sign.jpg'
    },
    {
      name: 'Metropolitan Museum of Art',
      neighborhood: 'Upper East Side Manhattan',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/The_MET.jpg/1024px-The_MET.jpg'
    },
    {
      name: 'Golden Gate Bridge',
      neighborhood: 'Downtown SF',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1024px-GoldenGateBridge-001.jpg'
    },
    {
      name: 'Liberty Bell',
      neighborhood: 'Downtown Philly',
      favorite: false,
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Liberty_Bell_2008.jpg/800px-Liberty_Bell_2008.jpg'
    }
  ])

  console.log(green('Seeding success!'))
  db.close()
}

seed().catch(err => {
  console.error(red('Oh noes! Something went wrong!'))
  console.error(err)
  db.close()
})
