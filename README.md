# Behaviour-js

Behaviour-js is a module to create and manipulate behaviours. Behaviour is the parent class that contains several methods. The children's classes like OneShotBehaviour, CyclicBehaviour and others in the future, inherits from parent class. Many methods are used only as part of an agent or [FSM](https://www.npmjs.com/package/fsm-js). The documentation is located in the folder behaviour-js_doc. In the future, I hope to use this module for implement a plateform for system multi-agent.

## Installation

### Package

Via npm:

```bash
$ npm install behaviour-js
```

## Getting started

```js
// Add module for OneShotBehaviour
const OneShotBehaviour = require('behaviour-js').OneShotBehaviour;

// To create class "DesiredBehaviour" inherits from OneShotBehaviour
class DesiredBehaviour extends OneShotBehaviour{
    // Override action() method
    action(){
        console.log("Hello world");
    }
}

// To create a new DesiredBehaviour
let behaviour = new DesiredBehaviour();

// Call the method action
behaviour.action();

// Call the parent method onEnd and display return
console.log(behaviour.onEnd());
```

## Author

If you have any questions or suggestions, please don't hesitate to contact me : <belaich.david@outlook.fr> .
