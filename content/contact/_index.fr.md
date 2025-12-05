---
isPage: true
draft: false
title: Contact
image:
  src: https://ucarecdn.com/b7ba30c6-047b-4410-ba86-0d2c060e3e46/
hero:
  cta:
    blank: false
  cta_second:
    blank: false
  align: start
  image:
    darken: true
blocks:
  - type: form
    grid: medium
    background: false
    items:
      - type: text
        label: Nom
        autocomplete: family-name
        required: true
      - type: text
        label: Prénom
        autocomplete: given-name
        required: true
      - type: email
        autocomplete: email
        label: E-mail
        full: true
        required: true
      - type: textarea
        label: Message
        full: true
        required: true
    submit: Envoyer
    name: contact
    offset: center
---
