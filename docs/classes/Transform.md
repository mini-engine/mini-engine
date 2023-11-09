[angry-pixel](../README.md) / [Exports](../modules.md) / Transform

# Class: Transform

All GameObject have a Transform natively, so it cannot be added manually.
It is used to handle the position, rotation and scale of the object. If the object has a parent,
it can be scaled, rotated and translated hierarchically.

**`Example`**

```js
this.transform.position = new Vector2(0, 0);
this.transform.position.set(0, 0);

this.transform.scale = new Vector2(0, 0);
this.transform.scale.set(0, 0);

this.transform.rotation.radians = 0;
this.transform.rotation.degrees = 0;

// used to set position relative to the parent
this.transform.innerPosition = new Vector2(0, 0);
this.transform.innerPosition.set(0, 0);
```

## Hierarchy

- `TransformComponent`

  ↳ **`Transform`**

## Table of contents

### Properties

- [assetManager](Transform.md#assetmanager)
- [domManager](Transform.md#dommanager)
- [gameConfig](Transform.md#gameconfig)
- [gameObject](Transform.md#gameobject)
- [gameObjectManager](Transform.md#gameobjectmanager)
- [inputManager](Transform.md#inputmanager)
- [name](Transform.md#name)
- [parentRotation](Transform.md#parentrotation)
- [parentScale](Transform.md#parentscale)
- [physicsManager](Transform.md#physicsmanager)
- [renderManager](Transform.md#rendermanager)
- [sceneManager](Transform.md#scenemanager)
- [timeManager](Transform.md#timemanager)
- [updateEvent](Transform.md#updateevent)

### Accessors

- [active](Transform.md#active)
- [direction](Transform.md#direction)
- [innerPosition](Transform.md#innerposition)
- [parent](Transform.md#parent)
- [position](Transform.md#position)
- [rotation](Transform.md#rotation)
- [scale](Transform.md#scale)

### Methods

- [addGameObject](Transform.md#addgameobject)
- [destroyGameObject](Transform.md#destroygameobject)
- [findGameObject](Transform.md#findgameobject)
- [findGameObjects](Transform.md#findgameobjects)
- [findGameObjectsByTag](Transform.md#findgameobjectsbytag)
- [getComponent](Transform.md#getcomponent)
- [getComponents](Transform.md#getcomponents)
- [getCurrentScene](Transform.md#getcurrentscene)
- [getGameObject](Transform.md#getgameobject)
- [hasComponent](Transform.md#hascomponent)
- [init](Transform.md#init)
- [onActiveChange](Transform.md#onactivechange)
- [onDestroy](Transform.md#ondestroy)
- [removeComponent](Transform.md#removecomponent)
- [start](Transform.md#start)
- [update](Transform.md#update)

## Properties

### assetManager

• `Protected` `Readonly` **assetManager**: [`IAssetManager`](../interfaces/IAssetManager.md)

Used to load and retrieve assets.

#### Inherited from

TransformComponent.assetManager

#### Defined in

[src/core/GameActor.ts:29](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L29)

___

### domManager

• `Protected` `Readonly` **domManager**: [`IDomManager`](../interfaces/IDomManager.md)

Used to access the canvas element.

#### Inherited from

TransformComponent.domManager

#### Defined in

[src/core/GameActor.ts:31](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L31)

___

### gameConfig

• `Protected` `Readonly` **gameConfig**: [`GameConfig`](../interfaces/GameConfig.md)

Object containing the game configuration.

#### Inherited from

TransformComponent.gameConfig

#### Defined in

[src/core/GameActor.ts:45](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L45)

___

### gameObject

• `Readonly` **gameObject**: [`GameObject`](GameObject.md)

Object to which it belongs.

#### Inherited from

TransformComponent.gameObject

#### Defined in

[src/core/Component.ts:50](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L50)

___

### gameObjectManager

• `Protected` `Readonly` **gameObjectManager**: [`IGameObjectManager`](../interfaces/IGameObjectManager.md)

Used to create, retrieve and destroy GameObject instances.

#### Inherited from

TransformComponent.gameObjectManager

#### Defined in

[src/core/GameActor.ts:35](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L35)

___

### inputManager

• `Protected` `Readonly` **inputManager**: [`IInputManager`](../interfaces/IInputManager.md)

Used to obtain information about the input.

#### Inherited from

TransformComponent.inputManager

#### Defined in

[src/core/GameActor.ts:33](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L33)

___

### name

• `Readonly` **name**: `string`

Name given manually at the time of instantiation.

#### Inherited from

TransformComponent.name

#### Defined in

[src/core/Component.ts:48](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L48)

___

### parentRotation

• **parentRotation**: `boolean` = `true`

Apply rotation relative to the parent. Default value is TRUE

#### Defined in

[src/component/Transform.ts:32](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L32)

___

### parentScale

• **parentScale**: `boolean` = `true`

Apply scale relative to the parent. Default value is TRUE

#### Defined in

[src/component/Transform.ts:30](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L30)

___

### physicsManager

• `Protected` `Readonly` **physicsManager**: [`IPhysicsManager`](../interfaces/IPhysicsManager.md)

Used to manage colliders and rigidBodies.

#### Inherited from

TransformComponent.physicsManager

#### Defined in

[src/core/GameActor.ts:37](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L37)

___

### renderManager

• `Protected` `Readonly` **renderManager**: [`IRenderManager`](../interfaces/IRenderManager.md)

Used to manage the render and camera data.

#### Inherited from

TransformComponent.renderManager

#### Defined in

[src/core/GameActor.ts:39](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L39)

___

### sceneManager

• `Protected` `Readonly` **sceneManager**: [`ISceneManager`](../interfaces/ISceneManager.md)

Used to load scenes.

#### Inherited from

TransformComponent.sceneManager

#### Defined in

[src/core/GameActor.ts:41](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L41)

___

### timeManager

• `Protected` `Readonly` **timeManager**: [`ITimeManager`](../interfaces/ITimeManager.md)

Used to manage and obtain information about the time in the game.

#### Inherited from

TransformComponent.timeManager

#### Defined in

[src/core/GameActor.ts:43](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L43)

___

### updateEvent

• `Protected` `Readonly` **updateEvent**: `FrameEvent` = `FrameEvent.UpdateTransform`

#### Inherited from

TransformComponent.updateEvent

#### Defined in

[src/core/Component.ts:190](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L190)

## Accessors

### active

• `get` **active**(): `boolean`

TRUE for enabled object, FALSE for disabled object.

#### Returns

`boolean`

#### Inherited from

TransformComponent.active

#### Defined in

[src/core/Component.ts:66](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L66)

• `set` **active**(`active`): `void`

TRUE for enabled object, FALSE for disabled object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `active` | `boolean` |

#### Returns

`void`

#### Inherited from

TransformComponent.active

#### Defined in

[src/core/Component.ts:71](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L71)

___

### direction

• `get` **direction**(): [`Vector2`](Vector2.md)

Direction vector based on the Rotation

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/component/Transform.ts:71](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L71)

___

### innerPosition

• `get` **innerPosition**(): [`Vector2`](Vector2.md)

Position vector relative to the parent

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/component/Transform.ts:76](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L76)

• `set` **innerPosition**(`innerPosition`): `void`

Position vector relative to the parent

#### Parameters

| Name | Type |
| :------ | :------ |
| `innerPosition` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/component/Transform.ts:81](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L81)

___

### parent

• `get` **parent**(): [`Transform`](Transform.md)

Parent transform

#### Returns

[`Transform`](Transform.md)

#### Defined in

[src/component/Transform.ts:86](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L86)

• `set` **parent**(`parent`): `void`

Parent transform

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`Transform`](Transform.md) |

#### Returns

`void`

#### Defined in

[src/component/Transform.ts:91](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L91)

___

### position

• `get` **position**(): [`Vector2`](Vector2.md)

Position on x-axis and y-axis in pixels

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/component/Transform.ts:46](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L46)

• `set` **position**(`position`): `void`

Position on x-axis and y-axis in pixels

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/component/Transform.ts:51](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L51)

___

### rotation

• `get` **rotation**(): [`Rotation`](Rotation.md)

Rotation expressed in radians or degrees

#### Returns

[`Rotation`](Rotation.md)

#### Defined in

[src/component/Transform.ts:66](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L66)

___

### scale

• `get` **scale**(): [`Vector2`](Vector2.md)

Scale on x-axis and y-axis in pixels

#### Returns

[`Vector2`](Vector2.md)

#### Defined in

[src/component/Transform.ts:56](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L56)

• `set` **scale**(`scale`): `void`

Scale on x-axis and y-axis in pixels

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | [`Vector2`](Vector2.md) |

#### Returns

`void`

#### Defined in

[src/component/Transform.ts:61](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L61)

## Methods

### addGameObject

▸ **addGameObject**<`T`\>(`gameObjectClass`): `T`

Adds a new game object to the scene.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectClass` | `GameObjectClass`<`T`\> | The game object class |

#### Returns

`T`

The added game object

#### Inherited from

TransformComponent.addGameObject

#### Defined in

[src/core/GameActor.ts:111](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L111)

▸ **addGameObject**<`T`\>(`gameObjectClass`, `name`): `T`

Adds a new game object to the scene.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectClass` | `GameObjectClass`<`T`\> | The game object class |
| `name` | `string` | The name of the game object |

#### Returns

`T`

The added game object

#### Inherited from

TransformComponent.addGameObject

#### Defined in

[src/core/GameActor.ts:118](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L118)

▸ **addGameObject**<`T`\>(`gameObjectClass`, `options`): `T`

Adds a new game object to the scene.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectClass` | `GameObjectClass`<`T`\> | The game object class |
| `options` | [`InitOptions`](../interfaces/InitOptions.md) | This options will be passed to the init method |

#### Returns

`T`

The added game object

#### Inherited from

TransformComponent.addGameObject

#### Defined in

[src/core/GameActor.ts:125](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L125)

▸ **addGameObject**<`T`\>(`gameObjectClass`, `options?`, `name?`): `T`

Adds a new game object to the scene.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectClass` | `GameObjectClass`<`T`\> | The game object class |
| `options?` | `string` \| [`InitOptions`](../interfaces/InitOptions.md) | [optional] This options will be passed to the init method |
| `name?` | `string` | [optional] The name of the game object |

#### Returns

`T`

The added game object

#### Inherited from

TransformComponent.addGameObject

#### Defined in

[src/core/GameActor.ts:133](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L133)

___

### destroyGameObject

▸ **destroyGameObject**(`gameObject`): `void`

Destroy the given game object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObject` | [`GameObject`](GameObject.md) | The game object to destory |

#### Returns

`void`

#### Inherited from

TransformComponent.destroyGameObject

#### Defined in

[src/core/GameActor.ts:201](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L201)

___

### findGameObject

▸ **findGameObject**<`T`\>(`gameObjectClass`): `T`

Returns the first game object found for the given class, or undefined otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectClass` | `GameObjectClass`<`T`\> | The game object class to find |

#### Returns

`T`

The found game object

#### Inherited from

TransformComponent.findGameObject

#### Defined in

[src/core/GameActor.ts:175](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L175)

▸ **findGameObject**<`T`\>(`name`): `T`

Returns the first game object found for the given name, or undefined otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the game object to find |

#### Returns

`T`

The found game object

#### Inherited from

TransformComponent.findGameObject

#### Defined in

[src/core/GameActor.ts:181](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L181)

___

### findGameObjects

▸ **findGameObjects**(): [`GameObject`](GameObject.md)[]

Returns all the game objects in the scene.

#### Returns

[`GameObject`](GameObject.md)[]

The found game objects

#### Inherited from

TransformComponent.findGameObjects

#### Defined in

[src/core/GameActor.ts:155](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L155)

▸ **findGameObjects**<`T`\>(`gameObjectClass`): `T`[]

Returns a collection of found game objects for the given class

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `gameObjectClass` | `GameObjectClass`<`T`\> | The game object class to find |

#### Returns

`T`[]

The found game objects

#### Inherited from

TransformComponent.findGameObjects

#### Defined in

[src/core/GameActor.ts:161](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L161)

___

### findGameObjectsByTag

▸ **findGameObjectsByTag**<`T`\>(`tag`): `T`[]

Returns a collection of game objects found for the given tag

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | The tag of the game objects to find |

#### Returns

`T`[]

The found game objects

#### Inherited from

TransformComponent.findGameObjectsByTag

#### Defined in

[src/core/GameActor.ts:193](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L193)

___

### getComponent

▸ **getComponent**<`T`\>(`componentClass`): `T`

Returns the first component found for the given class, or undefined otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentClass` | `ComponentClass`<`T`\> | The class of the component |

#### Returns

`T`

The found component

#### Inherited from

TransformComponent.getComponent

#### Defined in

[src/core/Component.ts:122](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L122)

▸ **getComponent**<`T`\>(`name`): `T`

Returns the first component found for the given name, or undefined otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the component |

#### Returns

`T`

The found component

#### Inherited from

TransformComponent.getComponent

#### Defined in

[src/core/Component.ts:128](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L128)

___

### getComponents

▸ **getComponents**(): [`Component`](Component.md)[]

Returns all the components in the game object.

#### Returns

[`Component`](Component.md)[]

The found components

#### Inherited from

TransformComponent.getComponents

#### Defined in

[src/core/Component.ts:104](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L104)

▸ **getComponents**<`T`\>(`componentClass`): `T`[]

Returns all the components for the given class in the game object.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentClass` | `ComponentClass`<`T`\> | The class of the components |

#### Returns

`T`[]

The found components

#### Inherited from

TransformComponent.getComponents

#### Defined in

[src/core/Component.ts:110](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L110)

___

### getCurrentScene

▸ **getCurrentScene**<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Scene`](Scene.md) |

#### Returns

`T`

The current loaded scene

#### Inherited from

TransformComponent.getCurrentScene

#### Defined in

[src/core/Component.ts:89](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L89)

___

### getGameObject

▸ **getGameObject**<`T`\>(): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`GameObject`](GameObject.md) |

#### Returns

`T`

The GameObject to which this component is attached

#### Inherited from

TransformComponent.getGameObject

#### Defined in

[src/core/Component.ts:96](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L96)

___

### hasComponent

▸ **hasComponent**<`T`\>(`componentClass`): `boolean`

Returns TRUE if the game object has a component for the given class, or FALSE otherwise

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Component`](Component.md) |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `componentClass` | `ComponentClass`<`T`\> | The class of the component to find |

#### Returns

`boolean`

boolean

#### Inherited from

TransformComponent.hasComponent

#### Defined in

[src/core/Component.ts:142](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L142)

▸ **hasComponent**(`name`): `boolean`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | The name of the component to find |

#### Returns

`boolean`

boolean

#### Inherited from

TransformComponent.hasComponent

#### Defined in

[src/core/Component.ts:147](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L147)

___

### init

▸ **init**(`options?`): `void`

This method is called after instantiation (recommended for the creation of game objects).

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`InitOptions`](../interfaces/InitOptions.md) |

#### Returns

`void`

#### Inherited from

TransformComponent.init

#### Defined in

[src/core/GameActor.ts:89](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L89)

___

### onActiveChange

▸ **onActiveChange**(): `void`

This method is called when the active state changes.

#### Returns

`void`

#### Inherited from

TransformComponent.onActiveChange

#### Defined in

[src/core/Component.ts:82](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L82)

___

### onDestroy

▸ **onDestroy**(): `void`

This method is called before destruction.

#### Returns

`void`

#### Inherited from

TransformComponent.onDestroy

#### Defined in

[src/core/GameActor.ts:104](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L104)

___

### removeComponent

▸ **removeComponent**(`component`): `void`

Removes the given component in the GameObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `component` | [`Component`](Component.md) | The class of the component to remnove |

#### Returns

`void`

#### Inherited from

TransformComponent.removeComponent

#### Defined in

[src/core/Component.ts:158](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L158)

___

### start

▸ **start**(): `void`

This method is called only once on the first available frame.

#### Returns

`void`

#### Inherited from

TransformComponent.start

#### Defined in

[src/core/GameActor.ts:94](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L94)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

TransformComponent.update

#### Defined in

[src/component/Transform.ts:99](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/Transform.ts#L99)