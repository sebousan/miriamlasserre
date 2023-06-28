import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { title } from '../fields/title.js'
import { pdf } from '../fields/pdf.js'
import { body } from '../fields/body.js'

const ebooks = {
    name: 'ebooks',
    label: 'E-books',
    label_singular: 'ebook',
    folder: 'content/ebooks',
    create: true,

    editor: { preview: false },

    i18n: true,

    slug: '{{year}}-{{month}}-{{slug}}',
    path: '{{year}}/{{slug}}',
    summary: '{{title}} — {{year}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        pdf,
        featured_image,
        body
    ]

}

export default ebooks