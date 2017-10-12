# README

This plugin skeleton was created thanks to the answers related in [this forum topic](https://groups.google.com/d/msg/kylo-community/wWifXEw-J5o/tlRD6bF-AgAJ).

To write a module in typescript and angular2 you would need to add them into `ui-app` (kylo-ui-app) core projects, plugins are not yet supported for this.

This folder needs to be located into the path `ui/ui-app/src/main/resources/static/js/kylo-sample-module` and you may need to update the routes located into `ui/ui-app/src/main/resources/static/js/routes.js` with the code below:

```javascript
//File: ui/ui-app/src/main/resources/static/js/routes.js

$stateProvider.state( {
	name: 'sample.**',
	url: '/sample',
	loadChildren: 'kylo-sample-module/sample.module#SampleModule'
});
```

Since I am very new into the kylo world, feel free to fork, edit and push any changes that you think that is relevant or I missed.