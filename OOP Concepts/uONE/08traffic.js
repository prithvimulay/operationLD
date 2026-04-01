/*
Exercise 1: Traffic Light
Design Traffic Light Class
easy
Problem: Create a TrafficLight enum where each light has a color (RED, YELLOW, GREEN), a duration in seconds, and a next() method that returns the next light in the cycle (RED -> GREEN -> YELLOW -> RED).

Requirements:

1. Each light has a duration property: RED = 30s, YELLOW = 5s, GREEN = 25s
2. next() method returns the next TrafficLight in the cycle
3. display() method prints the color and duration
*/

class TrafficLight {
    static RED = new TrafficLight("RED", 30);
    static YELLOW = new TrafficLight("YELLOW", 5);
    static GREEN = new TrafficLight("GREEN", 25);

    constructor(color, duration) {
        this.color = color;
        this.duration = duration;
    }

    next() {
        if (this === TrafficLight.RED) return TrafficLight.GREEN;
        if (this === TrafficLight.GREEN) return TrafficLight.YELLOW;
        return TrafficLight.RED;
    }

    display() {
        console.log(`${this.color} (${this.duration}s)`);
    }
}

let light = TrafficLight.RED;
for (let i = 0; i < 6; i++) {
    light.display();
    light = light.next();
}