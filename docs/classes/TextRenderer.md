[angry-pixel](../README.md) / [Exports](../modules.md) / TextRenderer

# Class: TextRenderer

The TextRenderer component allows to render text using font families, colors, and other configuration options.

**`Example`**

```js
this.addComponent(TextRenderer, {
  text: "Hello world",
  font: "Impact",
  fontSize: 16,
  width: 320,
  height: 32,
  color: "#FF0000",
});
```

**`Example`**

```js
this.addComponent(TextRenderer, {
  text: "Hello world",
  font: "Impact",
  fontSize: 16,
  width: 320,
  height: 32,
  color: "#FF0000",
  offset: new Vector2(0, 0),
  lineSeparation: 1,
  letterSpacing: 1,
  charRanges: [32, 126, 161, 255],
  smooth: false,
  rotation: new Rotation(0),
  opacity: 1,
  orientation: TextOrientation.RightDown
  bitmapMargin: new Vector2(0, 0),
  bitmapSpacing: new Vector2(0, 0),
});
```

## Hierarchy

- `RenderComponent`

  ↳ **`TextRenderer`**

## Table of contents

### Properties

- [allowMultiple](TextRenderer.md#allowmultiple)
- [assetManager](TextRenderer.md#assetmanager)
- [bitmapMargin](TextRenderer.md#bitmapmargin)
- [bitmapSpacing](TextRenderer.md#bitmapspacing)
- [charRanges](TextRenderer.md#charranges)
- [color](TextRenderer.md#color)
- [domManager](TextRenderer.md#dommanager)
- [font](TextRenderer.md#font)
- [fontSize](TextRenderer.md#fontsize)
- [gameConfig](TextRenderer.md#gameconfig)
- [gameObject](TextRenderer.md#gameobject)
- [gameObjectManager](TextRenderer.md#gameobjectmanager)
- [height](TextRenderer.md#height)
- [inputManager](TextRenderer.md#inputmanager)
- [letterSpacing](TextRenderer.md#letterspacing)
- [lineSeparation](TextRenderer.md#lineseparation)
- [name](TextRenderer.md#name)
- [offset](TextRenderer.md#offset)
- [opacity](TextRenderer.md#opacity)
- [orientation](TextRenderer.md#orientation)
- [physicsManager](TextRenderer.md#physicsmanager)
- [renderManager](TextRenderer.md#rendermanager)
- [rotation](TextRenderer.md#rotation)
- [sceneManager](TextRenderer.md#scenemanager)
- [smooth](TextRenderer.md#smooth)
- [text](TextRenderer.md#text)
- [timeManager](TextRenderer.md#timemanager)
- [updateEvent](TextRenderer.md#updateevent)
- [width](TextRenderer.md#width)

### Accessors

- [active](TextRenderer.md#active)

### Methods

- [addGameObject](TextRenderer.md#addgameobject)
- [destroyGameObject](TextRenderer.md#destroygameobject)
- [findGameObject](TextRenderer.md#findgameobject)
- [findGameObjects](TextRenderer.md#findgameobjects)
- [findGameObjectsByTag](TextRenderer.md#findgameobjectsbytag)
- [getComponent](TextRenderer.md#getcomponent)
- [getComponents](TextRenderer.md#getcomponents)
- [getCurrentScene](TextRenderer.md#getcurrentscene)
- [getGameObject](TextRenderer.md#getgameobject)
- [hasComponent](TextRenderer.md#hascomponent)
- [init](TextRenderer.md#init)
- [onActiveChange](TextRenderer.md#onactivechange)
- [onDestroy](TextRenderer.md#ondestroy)
- [removeComponent](TextRenderer.md#removecomponent)
- [start](TextRenderer.md#start)
- [update](TextRenderer.md#update)

## Properties

### allowMultiple

• `Readonly` **allowMultiple**: `boolean` = `true`

TRUE if several instances of this component are allowed in the same object.

#### Inherited from

RenderComponent.allowMultiple

#### Defined in

[src/core/Component.ts:52](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L52)

___

### assetManager

• `Protected` `Readonly` **assetManager**: [`IAssetManager`](../interfaces/IAssetManager.md)

Used to load and retrieve assets.

#### Inherited from

RenderComponent.assetManager

#### Defined in

[src/core/GameActor.ts:29](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L29)

___

### bitmapMargin

• **bitmapMargin**: [`Vector2`](Vector2.md)

Margin in pixels to correct badly sliced characters.

#### Defined in

[src/component/rendering/TextRenderer.ts:117](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L117)

___

### bitmapSpacing

• **bitmapSpacing**: [`Vector2`](Vector2.md)

Spacing in pixels to correct badly sliced characters.

#### Defined in

[src/component/rendering/TextRenderer.ts:119](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L119)

___

### charRanges

• **charRanges**: `number`[]

Range of characters covered by the component defined in number pairs.
The default value is [32, 126, 161, 255], this means that characters
from 32 to 126 and from 161 to 255 will be valid.

#### Defined in

[src/component/rendering/TextRenderer.ts:107](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L107)

___

### color

• **color**: `string`

The text color

#### Defined in

[src/component/rendering/TextRenderer.ts:99](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L99)

___

### domManager

• `Protected` `Readonly` **domManager**: [`IDomManager`](../interfaces/IDomManager.md)

Used to access the canvas element.

#### Inherited from

RenderComponent.domManager

#### Defined in

[src/core/GameActor.ts:31](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L31)

___

### font

• **font**: `string` \| `FontFace`

The font family to use

#### Defined in

[src/component/rendering/TextRenderer.ts:89](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L89)

___

### fontSize

• **fontSize**: `number`

The size of the font in pixels.

#### Defined in

[src/component/rendering/TextRenderer.ts:91](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L91)

___

### gameConfig

• `Protected` `Readonly` **gameConfig**: [`GameConfig`](../interfaces/GameConfig.md)

Object containing the game configuration.

#### Inherited from

RenderComponent.gameConfig

#### Defined in

[src/core/GameActor.ts:45](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L45)

___

### gameObject

• `Readonly` **gameObject**: [`GameObject`](GameObject.md)

Object to which it belongs.

#### Inherited from

RenderComponent.gameObject

#### Defined in

[src/core/Component.ts:50](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L50)

___

### gameObjectManager

• `Protected` `Readonly` **gameObjectManager**: [`IGameObjectManager`](../interfaces/IGameObjectManager.md)

Used to create, retrieve and destroy GameObject instances.

#### Inherited from

RenderComponent.gameObjectManager

#### Defined in

[src/core/GameActor.ts:35](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L35)

___

### height

• **height**: `number`

The height of the invisible box where the text is rendered

#### Defined in

[src/component/rendering/TextRenderer.ts:95](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L95)

___

### inputManager

• `Protected` `Readonly` **inputManager**: [`IInputManager`](../interfaces/IInputManager.md)

Used to obtain information about the input.

#### Inherited from

RenderComponent.inputManager

#### Defined in

[src/core/GameActor.ts:33](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L33)

___

### letterSpacing

• **letterSpacing**: `number`

The space between chars in pixels

#### Defined in

[src/component/rendering/TextRenderer.ts:103](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L103)

___

### lineSeparation

• **lineSeparation**: `number`

The separation between lines in pixels

#### Defined in

[src/component/rendering/TextRenderer.ts:101](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L101)

___

### name

• `Readonly` **name**: `string`

Name given manually at the time of instantiation.

#### Inherited from

RenderComponent.name

#### Defined in

[src/core/Component.ts:48](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L48)

___

### offset

• **offset**: [`Vector2`](Vector2.md)

X-axis and Y-axis offset

#### Defined in

[src/component/rendering/TextRenderer.ts:97](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L97)

___

### opacity

• **opacity**: `number`

Change the opacity between 1 and 0

#### Defined in

[src/component/rendering/TextRenderer.ts:113](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L113)

___

### orientation

• **orientation**: [`TextOrientation`](../enums/TextOrientation.md)

Direction in which the text will be rendered.

#### Defined in

[src/component/rendering/TextRenderer.ts:115](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L115)

___

### physicsManager

• `Protected` `Readonly` **physicsManager**: [`IPhysicsManager`](../interfaces/IPhysicsManager.md)

Used to manage colliders and rigidBodies.

#### Inherited from

RenderComponent.physicsManager

#### Defined in

[src/core/GameActor.ts:37](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L37)

___

### renderManager

• `Protected` `Readonly` **renderManager**: [`IRenderManager`](../interfaces/IRenderManager.md)

Used to manage the render and camera data.

#### Inherited from

RenderComponent.renderManager

#### Defined in

[src/core/GameActor.ts:39](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L39)

___

### rotation

• **rotation**: [`Rotation`](Rotation.md)

Text rotation (degrees or radians)

#### Defined in

[src/component/rendering/TextRenderer.ts:111](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L111)

___

### sceneManager

• `Protected` `Readonly` **sceneManager**: [`ISceneManager`](../interfaces/ISceneManager.md)

Used to load scenes.

#### Inherited from

RenderComponent.sceneManager

#### Defined in

[src/core/GameActor.ts:41](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L41)

___

### smooth

• **smooth**: `boolean`

Smoothing pixels (not recommended for pixel art)

#### Defined in

[src/component/rendering/TextRenderer.ts:109](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L109)

___

### text

• **text**: `string`

The text to render

#### Defined in

[src/component/rendering/TextRenderer.ts:87](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L87)

___

### timeManager

• `Protected` `Readonly` **timeManager**: [`ITimeManager`](../interfaces/ITimeManager.md)

Used to manage and obtain information about the time in the game.

#### Inherited from

RenderComponent.timeManager

#### Defined in

[src/core/GameActor.ts:43](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/GameActor.ts#L43)

___

### updateEvent

• `Protected` `Readonly` **updateEvent**: `FrameEvent` = `FrameEvent.UpdateRender`

#### Inherited from

RenderComponent.updateEvent

#### Defined in

[src/core/Component.ts:204](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L204)

___

### width

• **width**: `number`

The width of the invisible box where the text is rendered

#### Defined in

[src/component/rendering/TextRenderer.ts:93](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L93)

## Accessors

### active

• `get` **active**(): `boolean`

TRUE for enabled object, FALSE for disabled object.

#### Returns

`boolean`

#### Inherited from

RenderComponent.active

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

RenderComponent.active

#### Defined in

[src/core/Component.ts:71](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L71)

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

RenderComponent.addGameObject

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

RenderComponent.addGameObject

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

RenderComponent.addGameObject

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

RenderComponent.addGameObject

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

RenderComponent.destroyGameObject

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

RenderComponent.findGameObject

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

RenderComponent.findGameObject

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

RenderComponent.findGameObjects

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

RenderComponent.findGameObjects

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

RenderComponent.findGameObjectsByTag

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

RenderComponent.getComponent

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

RenderComponent.getComponent

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

RenderComponent.getComponents

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

RenderComponent.getComponents

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

RenderComponent.getCurrentScene

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

RenderComponent.getGameObject

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

RenderComponent.hasComponent

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

RenderComponent.hasComponent

#### Defined in

[src/core/Component.ts:147](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L147)

___

### init

▸ **init**(`config`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`TextRendererOptions`](../interfaces/TextRendererOptions.md) |

#### Returns

`void`

#### Overrides

RenderComponent.init

#### Defined in

[src/component/rendering/TextRenderer.ts:125](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L125)

___

### onActiveChange

▸ **onActiveChange**(): `void`

This method is called when the active state changes.

#### Returns

`void`

#### Inherited from

RenderComponent.onActiveChange

#### Defined in

[src/core/Component.ts:82](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L82)

___

### onDestroy

▸ **onDestroy**(): `void`

This method is called before destruction.

#### Returns

`void`

#### Inherited from

RenderComponent.onDestroy

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

RenderComponent.removeComponent

#### Defined in

[src/core/Component.ts:158](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/core/Component.ts#L158)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Overrides

RenderComponent.start

#### Defined in

[src/component/rendering/TextRenderer.ts:152](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L152)

___

### update

▸ **update**(): `void`

#### Returns

`void`

#### Overrides

RenderComponent.update

#### Defined in

[src/component/rendering/TextRenderer.ts:170](https://github.com/angry-pixel-studio/angry-pixel-engine/blob/93d7d6a/src/component/rendering/TextRenderer.ts#L170)