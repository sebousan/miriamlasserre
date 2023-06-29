import { heading } from '../fields/heading.js'
import { surtitle } from '../fields/surtitle.js'
import { text } from '../fields/text.js'
import { url } from '../fields/url.js'

export const block_cta =  {
    name: 'cta',
    label: 'Appel à l’action (Boutton)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{cta.text}}',
    fields: [
        heading,
        {
            name: 'cta',
            label: 'Bouton',
            widget: 'object',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{text}}',
            fields: [
                surtitle,
                text,
                url
            ]
        }
    ]
}