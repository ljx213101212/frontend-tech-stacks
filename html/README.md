## HTML Semantics

It makes HTML self-explained and easy to understand.

- Accessibility
- SEO
- Readability

Semantic Elements:

- **\<header\>**: Represents introductory content, typically containing navigation links or branding.
- **\<nav\>**: Defines a section containing navigation links.
- **\<footer\>**: Represents the footer of a section or page, usually containing author information, links, or disclaimers.

Non-Semantic Elements:

- **\<div\>**: A generic container for flow content, with no inherent meaning.
- **\<span\>**: An inline container for phrasing content, also without semantic meaning.

Example: <b> vs <strong>, <i> vs <em>

<b>, <i> : no semantic meaning, just for styling, plain tone in screen reader(accessibility)
<strong>, <em>: has semantic meaning, reinforce the importance of the content, strong tone in screen reader(accessibility)

## iframe

Scenarios:

- Embedding Third-Party Content

Advantage:

- Content Isolation: Emmbed 3rd Video/Maps, doesn't impact css and js in host page
- Malicious Script Prevention: block the interaction between host page and embbeded page, reduce risk of XSS
- Service Integration: Payment Gateway, Social Media, no need reconstruct the page.

Disadvantage:

- Performance: need independent HTTP Request, increase page load time.
- SEO: content ignored by search engine
- Accessibility: Not friendly to Screen Reader
- Layout Design: fixed side, need extra css effort.
- Compromised CORS risk

## Canvas

Scenario:

- Real time Data Visualization optimization, charts, graphs and dashboards

Advantage:

- Effective rendering

Disavantage:

- limited accessbility
- limited iteractivity from DOM level
- full reliance on JavaScript
