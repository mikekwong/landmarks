const { db } = require('./server/db')
const { green, red } = require('chalk')
const City = require('./server/db/city')
const Landmark = require('./server/db/landmark')

const seed = async () => {
  await db.sync({ force: true })

  await City.bulkCreate([
    {
      location: 'New York, NY'
    },
    {
      location: 'Seattle, WA'
    },
    {
      location: 'San Francisco, CA'
    },
    {
      location: 'Boston, MA'
    },
    {
      location: 'Philadelphia, PA'
    }
  ])

  await Landmark.bulkCreate([
    {
      name: 'Statue of Liberty',
      neighborhood: 'Lower Manhattan',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Freedom Tower',
      neighborhood: 'Lower Manhattan',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Brooklyn Bridge',
      neighborhood: 'Lower Manhattan',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Brooklyn Bridge Park',
      neighborhood: 'Dumbo',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Central Park',
      neighborhood: 'Midtown',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Seaport',
      neighborhood: 'Lower Manhattan',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Space Needle',
      neighborhood: 'Downtown',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Coit Tower',
      neighborhood: 'Downtown',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Coit Tower',
      neighborhood: 'Downtown',
      favorite: false,
      imageURL: ''
    },
    {
      name: 'Golden Gate Bridge',
      neighborhood: 'Downtown',
      favorite: false,
      imageURL: ''
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
