export type Handler<T = unknown> = (event: T) => void;
export interface EventBus<T extends Record<string, unknown>> {
  on<Key extends keyof T>(type: Key, handler: Handler<T[Key]>): () => void;
  dispatch<Key extends keyof T>(type: Key, event: T[Key]): void;
  dispatch<Key extends keyof T>(type: undefined extends T[Key] ? Key : never): void;
}

type UserData = {
  name: string;
  email: string;
};

type EventBusMap = {
  signInSuccess: UserData;
  signOutSuccess: void;
  signInLoading: boolean;
};

type EventBusName = keyof EventBusMap;

declare global {
  interface Window {
    addEventListener<K extends EventBusName>(
      type: K,
      listener: (this: Window, ev: CustomEvent<EventBusMap[K]>) => void,
    ): void;
    removeEventListener<K extends EventBusName>(
      type: K,
      listener: (this: Window, ev: CustomEvent<EventBusMap[K]>) => void,
    ): void;
  }
}

export type PGEventBusType = EventBus<EventBusMap>;

const eventBus: PGEventBusType = {
  on<K extends EventBusName>(event: K, callback: Handler<EventBusMap[K]>) {
    const listener = (e: CustomEvent) => callback(e.detail);
    window.addEventListener(event, listener);
    return () => {
      window.removeEventListener(event, listener);
    };
  },
  dispatch<K extends EventBusName>(type: K, data?: EventBusMap[K]) {
    console.log('eventBus dispatch', type, data);
    window.dispatchEvent(new CustomEvent(type, { detail: data }));
  },
};

export default eventBus;
