### Intro
Takes X & Y co-ordinates from a joystick and converts them into Left and Right values for a tank-drive system.

### Usage
```npm install joystick2tank```

```javascript
var j2t = require('joystick2tank');
var values = j2t(-30, 100); // { left: 70, right: 100 }
```

See example.js to see how to handle scaling values from joysticks that don't operate from -100 to 100.

### Options
You can pass in an options object as the 3rd parameter.  Valid values are:
```invertX``` Invert the X axis
```invertY``` Invert the Y axis
```maxX```    The maximum value of X. Defaults to 100
```maxY```    The maximum value of Y. Defaults to 100


### Credits
Based on the excellent [write-up by Mauser](http://home.kendra.com/mauser/Joystick.html).
