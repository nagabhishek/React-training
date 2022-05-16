import React, { Component, useContext } from 'react';

let CounterContext = React.createContext({ count: 0 });

export default class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 100 };
  }
  render() {
    return (
      <CounterContext.Provider
        value={{
          counterState: this.state,
          incrementCount: () => this.setState({ count: this.state.count + 1 }),
        }}
      >
        {this.props.children}
      </CounterContext.Provider>
    );
  }
}

export class GrandParent extends Component {
  render() {
    return (
      <CounterProvider>
        <Parent />
      </CounterProvider>
    );
  }
}

// export class Parent extends Component {
//   render() {
//     return <Child />;
//   }
// }

// Paraent as consumer
// export function Parent() {
//   const counterCtx = useContext(CounterContext);
//   return (
//     <div>
//       <h3>Parent : {counterCtx.counterState.count} </h3>
//       <Child />
//     </div>
//   );
// }

export class Parent extends Component {
  state = { count: 1000 };
  render() {
    return (
      <CounterContext.Provider
        value={{
          counterState: this.state,
          incrementCount: () => this.setState({ count: this.state.count + 5 }),
        }}
      >
        <Child />
      </CounterContext.Provider>
    );
  }
}

// 1st way - Consumer
// export class Child extends Component {
//   static contextType = CounterContext; // works only with classes..
//   render() {
//     return (
//       <div>
//         <h3>Count : {this.context.counterState.count}</h3>
//       </div>
//     );
//   }
// }

// 2nd Way - Consumer (JSX)
// export class Child extends Component {
//   render() {
//     return (
//       <CounterContext.Consumer>
//         {(value) => (
//           <div>
//             <h3>Count : {value.counterState.count}</h3>
//             <button onClick={() => value.incrementCount()}>++</button>
//           </div>
//         )}
//       </CounterContext.Consumer>
//     );
//   }
// }

export function Child() {
  const counterCtx = useContext(CounterContext); // works only with functional component !

  return (
    <div>
      <h3>Count : {counterCtx.counterState.count}</h3>
      <button onClick={() => counterCtx.incrementCount()}>++</button>
    </div>
  );
}
