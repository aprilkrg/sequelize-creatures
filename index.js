const db = require("./models")

// const testFunc = async() => {
//     console.log("good morning developers", db)
// }
// testFunc()

const create = async() => {
    const createdDino = await db.dino.create({
        name: "littlefoot",
        type: "apatosaurus"
    })
    console.log(createdDino)
    const createdCreature = await db.creature.create({
        img_url: "https://www.placekitten.com",
        type: "mammoth"
    })
    console.log(createdCreature)
}
// create()

const read = async () => {
    const foundDino = await db.dino.findOne({
        where: {
            name: "littlefoot"
        }
    })
    console.log(foundDino)
    const foundCreature = await db.creature.findOne({
        where: {
            type: "mammoth"
        }
    })
    console.log(foundCreature)
}
// read()

const update = async() => {
    const updatedDino = await db.dino.update({name: "Barney", type: "purple friend shaped"  }, {
        where: {
            name: "littlefoot"
        }
    })
    console.log(updatedDino)
    const updatedCreature = await db.creature.update({type: "sloth"}, {
        where: {
            type: "mammoth"
        }
    })
    console.log(updatedCreature)
}
// update()

const destroy = async() => {
    try {
        await db.dino.destroy({
            where: {
                id: 1
            }
        })
        await db.creature.destroy({
            where: {
                id: 1
            }
        })
    } catch(err) {
        console.warn(err)
    }
}
destroy()