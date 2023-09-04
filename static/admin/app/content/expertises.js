import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { title } from '../fields/title.js'
import { body } from '../fields/body.js'

const services = {
    name: 'expertises',
    label: 'Services',
    label_singular: 'service',
    folder: 'content/expertises',
    create: true,

    editor: { preview: false },

    i18n: true,

    slug: '{{slug}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        featured_image,
        {
            name: 'offer',
            label: 'Offre',
            widget: 'text',
            required: false,
            i18n: true
        },
        body
    ]

}

export default services