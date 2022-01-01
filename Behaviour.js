/** Class Behaviour
 */
class Behaviour{

  /** This method determines action that the behaviour will take.
   */
  action(){}

  /** This method determines if the behaviour is cyclic or not. It calls after the method action().
   * @returns {Boolean} if true, the behaviour is executed only once, else the behaviour is cyclic.
   */
  done(){
    return false;
  }

  /** This method calls when the behaviour is finish.
   * @returns {any} the next transition's identifier (only number or string), return "default" by default.
   */
  onEnd(){
    return "default";
  }

  onStart(){}

  block(){}

  restart(){}
}


/** Class OneShotBehaviour inherits Behaviour
 */
class OneShotBehaviour extends Behaviour{

  /** Override
   * @returns {Boolean} return true => the behaviour is executed only once.
   */
  done(){
    return true;
  };
}

/** Class CyclicBehaviour inherits Behaviour
 */
class CyclicBehaviour extends Behaviour{

  /** Override
   * @returns {Boolean} return false => the behaviour is cyclic.
   */
  done(){
    return false;
  };
}

exports.Behaviour = Behaviour;
exports.OneShotBehaviour = OneShotBehaviour;
exports.CyclicBehaviour = CyclicBehaviour;
