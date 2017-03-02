---
title: "PluginContext.Indexer"
permalink: /docs/plugin-context-indexer/
---
## Methods

### indexer.set(key, arrayOrFunc)
  - `key` String - Arbitrary Key, you can unregister registered elements with this key
  - `arrayOrFunc` Array&lt;[IndexerElement]({{ site.baseurl }}/docs/indexer-element/)&gt; or Function - IndexerElements
  
  Register IndexerElements with the key

### indexer.unset(key)
  - `key` String - The key used for registering

  Unregister IndexerElements with the registered key

> **Note**  
> Currently, there are so many undocumented things for Indexer  
> Please refer to see [hain-plugin-filesearch](https://github.com/appetizermonster/hain/tree/master/app/main/plugins/hain-plugin-filesearch) source code to how to use it  

## Example

```javascript
'use strict'

module.exports = (pluginContext) => {
  const indexer = pluginContext.indexer;
  
  function startup() { 
    indexer.set('key_for_array', [
      {
        id: 'item_0',
        primaryText: 'Item 0',
        secondaryText: 'A long description for item 0',
        redirect: '/testplugin something'
      },
      {
        id: 'item_1',
        primaryText: 'Item 1',
        secondaryText: 'A long description for item 1'
      }
    ]);

    // You can unregister the indexer elements
    indexer.unset('key_for_array');
  }
  function search(query, res) { ... }
  function execute(id, payload) { ... }
  
  return { startup, search, execute };
};
```
