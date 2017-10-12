# README

This plugin skeleton was created thanks to the answers related in [this forum topic](https://groups.google.com/d/msg/kylo-community/wWifXEw-J5o/tlRD6bF-AgAJ).

To add typescript and angular2 integration you would need to edit the `ui-app` (kylo-ui-app) core folder, plugins are not yet supported for it.

This folder needs to be located into the path `ui/ui-app/src/main/resources/static/js/kylo-sample-module` and you need to update the routes located into `ui/ui-app/src/main/resources/static/js/routes.js` with the code below:

```javascript
//File: ui/ui-app/src/main/resources/static/js/routes.js

$stateProvider.state( {
	name: 'sample.**',
	url: '/sample',
	loadChildren: 'kylo-sample-module/sample.module#SampleModule'
});
```