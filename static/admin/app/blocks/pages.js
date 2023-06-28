import { heading } from '../fields/heading.js'
import { title } from '../fields/title.js'
import { url } from '../fields/url.js'
import { image } from '../fields/image.js'

export const block_pages = {
    name: 'pages',
    label: 'Blocs pages',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{heading.title}}',
    fields: [
        heading,
        {
            name: 'items',
            label: 'Pages',
            label_singular: 'page',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                title,
                url,
                image
            ]
        }
    ]
}