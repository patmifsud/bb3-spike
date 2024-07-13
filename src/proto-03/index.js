import '../utils/reset.css';
import { createMachine } from 'xstate';

// State machine
const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCWAdgIYDGyeAbmAMQAqA8gOKMAyAogNoAMAuoqAAdUsPOVQF+IAB6IAbACYc8gCwB2ZVwCsq2aoAcXZXr0AaEAE9EARis4uqgMyrVATnl6XqzW72qAvn5maBjYOKTkVHRMrJy8kkIiYhJI0nKKKupaOvqGxmaWCAC0Dno4jr7y8rKGKpqaegGBIASoEHCSwVhg8cKieOKSMkVWXFxlVg6aDgol7g5WphaIhRMOOMryC3oTeip6DsoBQehd+MRklN0pCX0DKUOFmoqqE1Mzu-sL+csOii4umlkQN+hlUm38TU6oXClx6iX6yVAQwWyhwLisQJ0GlUXFkvm+RWUsjsLg8sieHncOk0jT8QA */
  id: 'toggle',

  initial: 'inactive',

  context: {
    count: 0,
  },

  states: {
    inactive: {
      on: {
        TOGGLE: { target: 'active' },
      },
    },
    active: {
      entry: assign({ count: ({ context }) => context.count + 1 }),
      on: {
        TOGGLE: { target: 'inactive' },
      },
    },
  },
});

// Actor (instance of the machine logic, like a store)
const toggleActor = createActor(toggleMachine);
toggleActor.subscribe((state) => console.log(state.value, state.context));
toggleActor.start();
// => logs 'inactive', { count: 0 }

toggleActor.send({ type: 'TOGGLE' });
// => logs 'active', { count: 1 }

toggleActor.send({ type: 'TOGGLE' });
// => logs 'inactive', { count: 1 }

import { inspect } from '@xstate/inspect';
import { Machine, interpret } from 'xstate';

if (process.env.NODE_ENV === 'development') {
  inspect({
    iframe: false, // Open in new window
  });
}

const toggleService = interpret(toggleMachine).onTransition((state) =>
  console.log(state.value)
);

toggleService.start();
