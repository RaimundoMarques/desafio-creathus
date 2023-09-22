import { v4 as uuidv4 } from 'uuid'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Filme from 'App/Models/Filme'
import Application from '@ioc:Adonis/Core/Application'

export default class FilmesController {

    // método READ
    public async index() {

        const filme = await Filme.all()
        return {
            data: filme,
        }
    }

    private validationOptions = {
        types: ['imagem'],
        size: '2mb',
    }

    // método CREATE
    public async store({ request, response }: HttpContextContract) {

        const body = request.body()
        const image = request.file('imagem', this.validationOptions)

        if (image) {

            const imageName = `${uuidv4()}.${image.extname}`
            await image.move(Application.tmpPath('uploads'), {
                name: imageName
            })
            body.image = imageName
        }

        const filme = await Filme.create(body)
        response.status(201)

        return {
            msg: "Filme adicionado com sucesso!",
            data: filme,
        }
    }

    //busca por id
    public async show({ params }: HttpContextContract) {

        const filme = await Filme.findOrFail(params.id)
        return {
            data: filme,
        }
    }


    // método DELETE
    public async destroy({ params }: HttpContextContract) {

        const filme = await Filme.findOrFail(params.id)
        await filme.delete()

        return {
            message: "Filme deletado com sucesso!",
            data: filme,
        }
    }


    // método UPDATE
    public async update({ params, request }: HttpContextContract) {

        const body = request.body()
        const filme = await Filme.findOrFail(params.id)

        filme.title = body.title
        filme.author = body.author
        filme.description = body.description

        // update image
        if (filme.image != body.image || !filme.image) {
            const image = request.file('image', this.validationOptions)

            if (image) {

                const imageName = `${uuidv4()}.${image.extname}`

                await image.move(Application.tmpPath('uploads'), {
                    name: imageName
                })
                filme.image = imageName
            }
        }

        await filme.save()

        return {
            message: "Filme editado com sucesso!",
            data: filme,
        }
    }
}
