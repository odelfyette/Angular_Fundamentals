import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: 
    `<div>
        <h1>Upcoming Angular Events</h1>
        <event-thumbnail [event]="event"></event-thumbnail>
        <hr/>
    </div>`
})
export class EventsListComponent{
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    }
}