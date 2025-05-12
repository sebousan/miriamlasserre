---
isPage: true
draft: false
title: Contact
image:
  src: /images/uploads/online.jpg
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
        label: Lastname
        name: Lastname
        autocomplete: family-name
        required: true
      - type: text
        label: Firstname
        name: Firstname
        autocomplete: given-name
        required: true
      - type: email
        autocomplete: email
        label: E-mail
        name: e-mail
        full: true
        required: true
      - type: textarea
        label: Message
        name: message
        full: true
        required: true
    submit: Send
    name: contact
    offset: center
---
