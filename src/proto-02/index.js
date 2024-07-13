import '../utils/reset.css';
import { createMachine, createActor, assign } from 'xstate';

// to do list -
// get a start button into the dom in a way that makes sense

// State machine
const toggleMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcD2UoBswDoCqsYATgARgB2yxsJAluQA4CuyAxACoDyA4twDIBRANoAGALqJQDVLFrJaqcpJAAPRADYATDk0AWAOy6RAVn3r9ADhG6LFgDQgAnogCMLnCP0BmffoCcmhZ++sYBFvoAvhEOaBjYOACGAMbyAG5gHDz8wuLK0rLyispqCMbGOF4ifn4mZpbWtg7OCAC0uuo6XuGamurWemUWUTHoWBkC6ZQkLqISSCD5cgpK8yXhOKYWLl6axha6XgFmTa6a7qY+-oHBoZqR0SCxY-iEpBRURDT0zGwA0kS0WCzPIyJZFVaITQiHB+PZeLpmFz6FzqLb6E6tFx3HAuPw2CzGTzWfRne4jOK4AjEMiUah0RgsVj-QFCFxzKSgworUAlKEwuEI9RIlFojEtLo4dR42yE-TE0lRB7kVAQODKJ7YEEFZbFRAtM7Q4y6FFCzRdQJeFz2Jx6wL6DaeLqy+WaYaPUbxKlvWmfek-LVg7mqPUo7RGk1Y80WS3W5otLEWHC6ZMyokGBUPDW4ZJpMABrm6hBW3Qwk1mIxy1Hom2tdoePxBdTGa52pturM4chgADuJFgyASVGm+Z1EIQZsTplDIhEbmRqM0Yqh0Jn3gJaZJSMVESAA */
  id: 'toggle',

  initial: 'User enters input',

  context: {
    count: 0,
  },

  states: {
    'User enters input': {
      on: {
        TOGGLE: { target: 'active' },
        Kris: [
          {
            target: 'new state 1',
            guard: 'layout',
          },
          'new state 1',
        ],
      },
    },

    active: {
      entry: assign({ count: ({ context }) => context.count + 1 }),
      on: {
        TOGGLE: { target: 'User enters input' },
      },
    },

    'new state 1': {},
  },

  on: {
    'Event 1': '#toggle',
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
