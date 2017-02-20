---
title: "IndexerElement"
permalink: /docs/indexer-element/
---
IndexerElement is a plain object which has a following properties:

* `id` String - An identifier (should be unique), used as argument of `execute` function (optional, default is `undefined`)
* `payload` Any - Extra payload, used as a argument of `execute` function (optional, default is `undefined`)
* `primaryText` String - Primary text (**required**)
* `secondaryText` String - Secondary text (optional)
* `icon` String - Icon URL, See [Icon URL Format]({{ site.baseurl }}/docs/icon-url-format/) (optional, default is `icon` of package.json)
* `redirect` String - Redirection query (optional, default is `undefined`)
* `group` String - Result group name (optional, default is `undefined`)

## Example

```javascript
...
const indexer = pluginContext.indexer;

function startup() {
  const indexerElement = {
    id: 'unique_value',
    primaryText: 'Hello, World',
    secondaryText: 'This is hello world description'
  };
  indexer.set('any-key', [indexerElement]);
}

...
```
