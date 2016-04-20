import { Services } from '/lib/collections';
import { Meteor } from 'meteor/meteor';

const ServiceData = [
    {
        name: 'Web Developer'
    },
    {
        name: 'Web Designer'
    },
    {
        name: 'Graphic Designer'
    },
    {
        name: 'Painter'
    },
    {
        name: 'Voice Actor'
    },
    {
        name: 'Actor'
    },
    {
        name: 'Videographer'
    },
    {
        name: 'Photographer'
    },
    {
        name: 'Hypeman'
    },
    {
        name: 'Musician'
    },
    {
        name: 'Music Producer'
    },
    {
        name: 'Songwriter'
    },
    {
        name: 'Marketer'
    },
    {
        name: 'Business Consultant'
    },
    {
        name: 'Video Editor'
    },
    {
        name: 'Special Effects Editor'
    },
    {
        name: 'Carpenter'
    },
    {
        name: 'Plumber'
    },
    {
        name: 'Electrician'
    },
    {
        name: 'Computer Technician'
    },
    {
        name: 'IT'
    },
    {
        name: 'Architect'
    },
    {
        name: 'Interior Designer'
    },
    {
        name: 'Video Game Designer'
    },
    {
        name: 'Public Relations'
    },
    {
        name: 'Accountant'
    },
    {
        name: 'SEO Specialist'
    },
    {
        name: 'Quality Assurance'
    },
    {
        name: 'Movers'
    },
    {
        name: 'Baker'
    },
    {
        name: 'Chef'
    },
    {
        name: 'Comedian'
    },
    {
        name: 'Copywriter'
    },
    {
        name: 'Personal Trainer'
    },
    {
        name: 'Animal Walker'
    },
    {
        name: 'Dance Instructor'
    },
    {
        name: 'Mechanic'
    },
    {
        name: 'Gardener'
    }
];

export default function () {

    function seed () {

        const count = Services.find({}).count();

        if(count === 0) {
            ServiceData.forEach(function(item) {
                Services.insert({ name: item.name });
            })
        }
    }

    Meteor.startup(function () {
        seed();
    });

}
