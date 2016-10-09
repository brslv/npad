import $ from 'jquery';
import { config } from './config';
import EventsEngine from './events/EventsEngine';

export default class NpadEngine {
    constructor(eventsEngine) {
        this.config = config();
        this.eventsEngine = new EventsEngine(this.config);
    }

    setupConfig() {
    }

    run() {
        this.eventsEngine.registerEvents();
    }
};
