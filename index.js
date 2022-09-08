const db = require('./models')

const CRUD = async () => {
    try {
        // CREATE
        // make new dino
        // await db.dino.create({
        //     name: 'Barney',
        //     type: 'Purple dino that loves you'
        // })
        // await db.creature.create({
        //     img_url: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.Pp0KRWxXQ8yT5N5jF3Jx3gHaJK%26pid%3DApi&f=1',
        //     type: 'Heckin Chonker'
        // })
        // READ
        // const dino = await db.dino.findOne({
        //     where: {
        //         name: 'Barney'
        //     }
        // })
        // console.log('Barney:', dino)
        // const creature = await db.creature.findByPk(1)
        // console.log('creature:', creature)

        // UPDATE
        // await db.dino.update({ name: 'Barney Boiiii' }, {
        //     where: {
        //         id: 1
        //     }
        // })
        // // find barney and check the update
        // const barney = await db.dino.findByPk(1)
        // console.log('updated barney:', barney)
        // await db.creature.update({ type: 'Super Heckin Chonker' }, {
        //     where: {
        //         type: 'Heckin Chonker'
        //     }
        // })
        // DESTROY
        await db.creature.destroy({
            where: {
                id: 2
            }
        })
        const chonkers = await db.creature.findAll()
        console.log('chonkers:', chonkers)

    } catch (err) {
        console.log(err)
    }
}

CRUD()