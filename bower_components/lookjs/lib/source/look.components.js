/****************************************************

- LookJS - 

@module: components
@requires: look.dom, look.operations 
@author: Elena Torro
Description: This modules let you save, merge and 
operate a list of components. Each component is 
snipet of HTML and JS that is going to be reused in 
your project.
****************************************************/

Look.components = {
  list: {},
  add: function (id, component) {
    if (!Look.components.checkId(component)) {
      Look.components.list[id] = component
    }
    return component
  },
  checkId: function (id) {
    return ((id !== '')
    && (id !== null)
    && (Look.components.list.hasOwnProperty(id)))
  },
  get: function (id) {
    return Look.components.list[id]
  },
  extend: function (componentId, newId, newProperties) {
    var oldComponent = Look.components.get(componentId)
    var newComponent = Look.mergeJson(oldComponent, newProperties)
    return Look.components.add(newId, newComponent)
  },
  extendAttribute: function (componentId, newId, newProperties) {
    var oldComponent = Look.components.get(componentId)
    var newComponent = Look.extendKey(oldComponent, newProperties)
    return Look.components.add(newId, newComponent)
  },
  merge: function (component1, component2, newId) {
    return Look.components.add(
      newId,
      Look.extendKey(
        Look.components.get(component1),
        Look.components.get(component2))
    )
  }
}
