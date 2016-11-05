### Intro
Takes X & Y co-ordinates from a joystick and converts them into left and right values for a tank-drive system.

### Usage
```npm install joystick2tank```

```javascript
var Joystick2Tank = require('joystick2tank');
var j2t = Joystick2Tank({ invertY: true });
var values = j2t.convert(-30, 100); // Returns { left: 70, right: 100 }
```

See example.js to see how to handle scaling values from joysticks that don't operate from -100 to 100.

### Options
You can pass in an options to alter the conversion process.  Valid values are:
* ```invertX``` Invert the X axis
* ```invertY``` Invert the Y axis
* ```maxX```    The maximum value of X. Defaults to 100
* ```maxY```    The maximum value of Y. Defaults to 100


### Credits
Based on the excellent [write-up by Mauser](http://home.kendra.com/mauser/Joystick.html).
