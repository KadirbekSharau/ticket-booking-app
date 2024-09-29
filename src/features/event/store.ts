import { createStore, createEvent, createEffect } from 'effector';
import axios from '../../utils/axios';
import { Event } from './models';

// Effect to fetch events
export const fetchEventsFx = createEffect(async () => {
  const response = await axios.get<Event[]>('/events');
  return response.data;
});

// Event store
export const $events = createStore<Event[]>([])
  .on(fetchEventsFx.doneData, (_, events) => events);

export const fetchEvents = createEvent();

