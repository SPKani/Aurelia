import { inject } from 'aurelia-framework';
import { ValidationRules, ValidationController } from 'aurelia-validation';
//import { Validator, ValidationRules } from 'aurelia-validation';
import { EventAggregator } from 'aurelia-event-aggregator';
import { WebAPI } from './web-api';
import { ContactUpdated, ContactViewed } from './messages';
import { areEqual } from './utility';


interface Contact {
    firstName: string;
    lastName: string;
    email: string;
}

@inject(WebAPI, EventAggregator, ValidationController)
export class ContactDetail {
    routeConfig;
    contact: Contact;
    originalContact: Contact;
    controller;

    constructor(private api: WebAPI, private ea: EventAggregator, controller) {
        this.controller = controller;

        //// this.validation = ValidationRules
        // ValidationRules
        //     .ensure((j: Contact) => j.firstName)
        //     .required()
        //     .minLength(3)
        //     .maxLength(100)
        //     // .ensure('contact.phoneNumber')
        //     // .required()
        //     .on(this.contact);
    }

    activate(params, routeConfig) {
        this.routeConfig = routeConfig;

        return this.api.getContactDetails(params.id).then(contact => {
            this.contact = <Contact>contact;
            // this.controller.validate();
            this.routeConfig.navModel.setTitle(this.contact.firstName);
            this.originalContact = JSON.parse(JSON.stringify(this.contact));
            this.ea.publish(new ContactViewed(this.contact));
        });
    }

    get canSave() {
        return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
    }

    save() {
        // this.controller.validate().then(() => {
            this.api.saveContact(this.contact).then(contact => {
                this.contact = <Contact>contact;
                this.routeConfig.navModel.setTitle(this.contact.firstName);
                this.originalContact = JSON.parse(JSON.stringify(this.contact));
                this.ea.publish(new ContactUpdated(this.contact));
            });
        // });
    }

    canDeactivate() {
        if (!areEqual(this.originalContact, this.contact)) {
            let result = confirm('You have unsaved changes. Are you sure you wish to leave?');

            if (!result) {
                this.ea.publish(new ContactViewed(this.contact));
            }

            return result;
        }

        return true;
    }
}