---
title: 'Two Forms of pre-rendering'
date: '2024-06-22'
---

Next.js has two form of pre-rendering **Static Generation** and **Server-side Rendering**. The differente is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering mehos that generates the HTML at **build time**. The pre-rendering HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js lets you **chose** wich pre-rendering form to use for each page. You can create a "hybrid" Next.js app using Static Generation for most pages and using Server-side Rendering for others.
