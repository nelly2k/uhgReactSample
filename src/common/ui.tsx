import * as React from "react";
import { spring, AnimatedSwitch } from 'react-router-transition';
import { MyLoader } from "../components";

interface IUiSwitchProps {
  isBusy
}

export class UiSwitch extends React.Component<IUiSwitchProps>{
  mapStyles(styles) {
    return {
      opacity: styles.opacity,
      transform: `scale(${styles.scale})`,
    };
  }

  bounce(val) {
    return spring(val, {
      stiffness: 330,
      damping: 22,
    });
  }

  bounceTransition = {

    atEnter: {
      opacity: 0,
      scale: 1.2,
    },

    atLeave: {
      opacity: this.bounce(0),
      scale: this.bounce(0.8),
    },

    atActive: {
      opacity: this.bounce(1),
      scale: this.bounce(1),
    },
  };

  render() {
    return <div>
      <MyLoader isVisible={this.props.isBusy} />
      <AnimatedSwitch
        atEnter={this.bounceTransition.atEnter}
        atLeave={this.bounceTransition.atLeave}
        atActive={this.bounceTransition.atActive}
        mapStyles={this.mapStyles} className="switch-wrapper">
        {this.props.children}
      </AnimatedSwitch></div>
  }
}