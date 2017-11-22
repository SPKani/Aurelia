var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('app',["require", "exports", "aurelia-framework", "./web-api"], function (require, exports, aurelia_framework_1, web_api_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App(api) {
            this.api = api;
        }
        App.prototype.configureRouter = function (config, router) {
            config.title = 'Contacts';
            config.map([
                { route: '', moduleId: 'no-selection', title: 'Select' },
                { route: 'contacts/:id', moduleId: 'contact-detail', name: 'contacts' },
                { route: 'details', moduleId: 'job-detail', name: 'details' },
                { route: 'jobtest', moduleId: 'job-test', name: 'jobtest' }
            ]);
            this.router = router;
        };
        App = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI),
            __metadata("design:paramtypes", [web_api_1.WebAPI])
        ], App);
        return App;
    }());
    exports.App = App;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-detail',["require", "exports", "aurelia-framework", "aurelia-validation", "aurelia-event-aggregator", "./web-api", "./messages", "./utility"], function (require, exports, aurelia_framework_1, aurelia_validation_1, aurelia_event_aggregator_1, web_api_1, messages_1, utility_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactDetail = (function () {
        function ContactDetail(api, ea, controller) {
            this.api = api;
            this.ea = ea;
            this.controller = controller;
        }
        ContactDetail.prototype.activate = function (params, routeConfig) {
            var _this = this;
            this.routeConfig = routeConfig;
            return this.api.getContactDetails(params.id).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new messages_1.ContactViewed(_this.contact));
            });
        };
        Object.defineProperty(ContactDetail.prototype, "canSave", {
            get: function () {
                return this.contact.firstName && this.contact.lastName && !this.api.isRequesting;
            },
            enumerable: true,
            configurable: true
        });
        ContactDetail.prototype.save = function () {
            var _this = this;
            this.api.saveContact(this.contact).then(function (contact) {
                _this.contact = contact;
                _this.routeConfig.navModel.setTitle(_this.contact.firstName);
                _this.originalContact = JSON.parse(JSON.stringify(_this.contact));
                _this.ea.publish(new messages_1.ContactUpdated(_this.contact));
            });
        };
        ContactDetail.prototype.canDeactivate = function () {
            if (!utility_1.areEqual(this.originalContact, this.contact)) {
                var result = confirm('You have unsaved changes. Are you sure you wish to leave?');
                if (!result) {
                    this.ea.publish(new messages_1.ContactViewed(this.contact));
                }
                return result;
            }
            return true;
        };
        ContactDetail = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, aurelia_validation_1.ValidationController),
            __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator, Object])
        ], ContactDetail);
        return ContactDetail;
    }());
    exports.ContactDetail = ContactDetail;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('contact-list',["require", "exports", "aurelia-event-aggregator", "./web-api", "aurelia-framework", "./messages"], function (require, exports, aurelia_event_aggregator_1, web_api_1, aurelia_framework_1, messages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactList = (function () {
        function ContactList(api, ea) {
            var _this = this;
            this.api = api;
            this.selectedId = 0;
            ea.subscribe(messages_1.ContactViewed, function (msg) { return _this.select(msg.contact); });
            ea.subscribe(messages_1.ContactUpdated, function (msg) {
                var id = msg.contact.id;
                var found = _this.contacts.find(function (x) { return x.id == id; });
                Object.assign(found, msg.contact);
            });
        }
        ContactList.prototype.created = function () {
            var _this = this;
            this.api.getContactList().then(function (contacts) { return _this.contacts = contacts; });
        };
        ContactList.prototype.select = function (contact) {
            this.selectedId = contact.id;
            return true;
        };
        ContactList = __decorate([
            aurelia_framework_1.inject(web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator),
            __metadata("design:paramtypes", [web_api_1.WebAPI, aurelia_event_aggregator_1.EventAggregator])
        ], ContactList);
        return ContactList;
    }());
    exports.ContactList = ContactList;
});



define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});



define('job-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 100;
    var id = 0;
    var jobs = [
        {
            id: getId(),
            jobTitle: 'Consultant',
            jobDescription: 'Sharepoint development works...',
            jobSkills: [".NET", "C#"],
            jobType: 'Full Time',
            fullName: 'Ruwan Kumara',
            address: '',
            dateOfBirth: '',
            email: 'ruwan@inklings.com',
            state: "",
            city: "Alexandria",
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            jobTitle: 'Consultant',
            jobDescription: 'Client side development works...',
            jobSkills: [".NET", "Javascript", "Java"],
            jobType: 'Full Time',
            fullName: 'Sananka de Silva',
            address: '',
            dateOfBirth: '',
            email: 'sananka@inklings.com',
            city: "Alexandria",
            state: "",
            phoneNumber: '867-5310'
        },
        {
            id: getId(),
            jobTitle: 'Senior Consultant',
            jobDescription: 'Tead lead works...',
            jobSkills: [".NET", "Sharepoint"],
            jobType: 'Full Time',
            fullName: 'Kanishka Jayawardena',
            address: '',
            dateOfBirth: '',
            email: 'kanishka@inklings.com',
            city: "Alexandria",
            state: "",
            phoneNumber: '867-5311'
        }
    ];
    var jobTypes = [
        "Full Time",
        "Contract",
        "Contract-To-Hire"
    ];
    var jobSkills = [
        ".NET",
        "C#",
        "Sharepoint",
        "JavaScript",
        "HTML",
        "SQL Server",
        "Microsoft Azure",
        "XAML",
        "Java",
        "NodeJS"
    ];
    var states = [
        {
            "name": "Alabama",
        },
        {
            "name": "Alaska",
        },
        {
            "name": "Arizona",
        },
        {
            "name": "California",
        },
        {
            "name": "Colorado",
        }
    ];
    function getId() {
        return ++id;
    }
    var JobAPI = (function () {
        function JobAPI() {
            this.isRequesting = false;
        }
        JobAPI.prototype.getJobList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = jobs.map(function (x) {
                        return {
                            id: x.id,
                            jobTitle: x.jobTitle,
                            jobDescription: x.jobDescription,
                            jobSkills: x.jobSkills,
                            jobType: x.jobType,
                            fullName: x.fullName,
                            address: x.address,
                            dateOfBirth: x.dateOfBirth,
                            email: x.email,
                            city: x.city,
                            state: x.state,
                            phoneNumber: x.phoneNumber
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        JobAPI.prototype.getJobDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = jobs.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        JobAPI.prototype.saveJob = function (job) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(job));
                    var found = jobs.filter(function (x) { return x.id == job.id; })[0];
                    if (found) {
                        var index = jobs.indexOf(found);
                        job[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        job.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        JobAPI.prototype.getJobTypes = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = jobTypes.map(function (x) {
                        return x;
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        JobAPI.prototype.getJobSkills = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = jobSkills.map(function (x) {
                        return x;
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        JobAPI.prototype.getStates = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = states.map(function (x) {
                        return {
                            id: x.name
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        return JobAPI;
    }());
    exports.JobAPI = JobAPI;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('job-detail',["require", "exports", "aurelia-validation", "aurelia-dependency-injection"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobDetail = (function () {
        function JobDetail(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.firstName = '';
            this.email = '';
            this.controller = null;
            this.controller = controllerFactory.createForCurrentScope();
        }
        JobDetail.prototype.submit = function () {
            this.controller.validate();
        };
        JobDetail = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
        ], JobDetail);
        return JobDetail;
    }());
    exports.JobDetail = JobDetail;
    aurelia_validation_1.ValidationRules
        .ensure('firstName').required()
        .ensure('email').required().email()
        .on(JobDetail);
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('job-test',["require", "exports", "aurelia-validation", "aurelia-dependency-injection"], function (require, exports, aurelia_validation_1, aurelia_dependency_injection_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var JobTest = (function () {
        function JobTest(controllerFactory) {
            this.controllerFactory = controllerFactory;
            this.jobTitle = '';
            this.jobDescription = '';
            this.email = '';
            this.address = '';
            this.dateOfBirth = '';
            this.controller = null;
            this.jobTypes = [
                { id: 1, name: "Full Time" },
                { id: 2, name: "Contract" },
                { id: 3, name: "Contract-To-Hire" }
            ];
            this.selectedJobTypeId = null;
            this.jobSkills = [
                ".NET",
                "C#",
                "Sharepoint",
                "JavaScript",
                "HTML",
                "SQL Server",
                "Microsoft Azure",
                "XAML",
                "Java",
                "NodeJS"
            ];
            this.selectedStringJobSkills = [];
            this.states = [
                "Alabama",
                "Alaska",
                "Arizona",
                "California",
                "Colorado"
            ];
            this.selectedStringState = '';
            this.controller = controllerFactory.createForCurrentScope();
        }
        JobTest.prototype.submit = function () {
            this.controller.validate().then(function (value) {
                if (value.valid) {
                    alert('Form submitted!');
                }
                else {
                    alert('Form not submitted!');
                }
            });
        };
        JobTest = __decorate([
            aurelia_dependency_injection_1.inject(aurelia_validation_1.ValidationControllerFactory),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory])
        ], JobTest);
        return JobTest;
    }());
    exports.JobTest = JobTest;
    aurelia_validation_1.ValidationRules.customRule('date', function (value, obj) {
        var d = new Date(value);
        return value === null || value === undefined || value.trim() === '' || !isNaN(d.getTime());
    }, "${$displayName} must be a Date.");
    aurelia_validation_1.ValidationRules
        .ensure('jobTitle').required()
        .ensure('jobDescription').required()
        .ensure('email').displayName('Email Address').required().withMessage("${$displayName} cannot be blank.").email()
        .ensure('dateOfBirth').required().satisfiesRule('date')
        .ensure('phoneNumber').displayName('Phone Number').required().withMessage("${$displayName} cannot be blank.")
        .matches(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/).withMessage("${$displayName} is not valid.")
        .on(JobTest);
});



define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging()
                .plugin('aurelia-validation')
                .plugin('aurelia-ux');
            ;
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});



define('messages',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContactUpdated = (function () {
        function ContactUpdated(contact) {
            this.contact = contact;
        }
        return ContactUpdated;
    }());
    exports.ContactUpdated = ContactUpdated;
    var ContactViewed = (function () {
        function ContactViewed(contact) {
            this.contact = contact;
        }
        return ContactViewed;
    }());
    exports.ContactViewed = ContactViewed;
});



define('no-selection',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NoSelection = (function () {
        function NoSelection() {
            this.message = "Please Select a Contact.";
        }
        return NoSelection;
    }());
    exports.NoSelection = NoSelection;
});



define('utility',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function areEqual(obj1, obj2) {
        return Object.keys(obj1).every(function (key) { return obj2.hasOwnProperty(key) && (obj1[key] === obj2[key]); });
    }
    exports.areEqual = areEqual;
    ;
});



define('web-api',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var latency = 100;
    var id = 0;
    function getId() {
        return ++id;
    }
    var contacts = [
        {
            id: getId(),
            firstName: 'John',
            lastName: 'Tolkien',
            email: 'tolkien@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Clive',
            lastName: 'Lewis',
            email: 'lewis@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Owen',
            lastName: 'Barfield',
            email: 'barfield@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Charles',
            lastName: 'Williams',
            email: 'williams@inklings.com',
            phoneNumber: '867-5309'
        },
        {
            id: getId(),
            firstName: 'Roger',
            lastName: 'Green',
            email: 'green@inklings.com',
            phoneNumber: '867-5309'
        }
    ];
    var WebAPI = (function () {
        function WebAPI() {
            this.isRequesting = false;
        }
        WebAPI.prototype.getContactList = function () {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var results = contacts.map(function (x) {
                        return {
                            id: x.id,
                            firstName: x.firstName,
                            lastName: x.lastName,
                            email: x.email
                        };
                    });
                    resolve(results);
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.getContactDetails = function (id) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var found = contacts.filter(function (x) { return x.id == id; })[0];
                    resolve(JSON.parse(JSON.stringify(found)));
                    _this.isRequesting = false;
                }, latency);
            });
        };
        WebAPI.prototype.saveContact = function (contact) {
            var _this = this;
            this.isRequesting = true;
            return new Promise(function (resolve) {
                setTimeout(function () {
                    var instance = JSON.parse(JSON.stringify(contact));
                    var found = contacts.filter(function (x) { return x.id == contact.id; })[0];
                    if (found) {
                        var index = contacts.indexOf(found);
                        contacts[index] = instance;
                    }
                    else {
                        instance.id = getId();
                        contacts.push(instance);
                    }
                    _this.isRequesting = false;
                    resolve(instance);
                }, latency);
            });
        };
        return WebAPI;
    }());
    exports.WebAPI = WebAPI;
});



define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources(['./elements/loading-indicator']);
    }
    exports.configure = configure;
});



var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('resources/elements/loading-indicator',["require", "exports", "nprogress", "aurelia-framework"], function (require, exports, nprogress, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoadingIndicator = (function () {
        function LoadingIndicator() {
            this.loading = false;
        }
        LoadingIndicator.prototype.loadingChanged = function (newValue) {
            if (newValue) {
                nprogress.start();
            }
            else {
                nprogress.done();
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], LoadingIndicator.prototype, "loading", void 0);
        LoadingIndicator = __decorate([
            aurelia_framework_1.noView(['nprogress/nprogress.css'])
        ], LoadingIndicator);
        return LoadingIndicator;
    }());
    exports.LoadingIndicator = LoadingIndicator;
});



define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./styles.css\"></require><require from=\"./contact-list\"></require><nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\"><div class=\"navbar-header\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fa fa-user\"></i> <span>Contacts</span></a></div></nav><loading-indicator loading.bind=\"router.isNavigating || api.isRequesting\"></loading-indicator><div class=\"container\"><div class=\"row\"><contact-list class=\"col-md-4\"></contact-list><router-view class=\"col-md-8\"></router-view></div></div></template>"; });
define('text!inputs.css', ['module'], function(module) { module.exports = "styles.feature {\n  margin: 40px 0 20px;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n}\n\nstyles.figure {\n  background: ${$swatches.grey.p300};\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 320px;\n  height: 320px;\n  position: relative;\n  margin-bottom: 20px;\n}\n\nstyles.figure > div.add-padding {\n  padding: 8px;\n}\n\nstyles.figure > ux-button {\n  margin: auto;\n}\n\nstyles.figure > code {\n  padding:16px;\n  background: ${$swatches.grey.p200};\n}\n"; });
define('text!contact-detail.html', ['module'], function(module) { module.exports = "<template><div class=\"panel panel-primary\"><div class=\"panel-heading\"><h3 class=\"panel-title\">Profile</h3></div><div class=\"panel-body\"><form role=\"form\" class=\"form-horizontal\"><div class=\"form-group\"><label class=\"col-sm-2 control-label\">First Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"first name\" class=\"form-control\" value.bind=\"contact.firstName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Last Name</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"last name\" class=\"form-control\" value.bind=\"contact.lastName\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Email</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"email\" class=\"form-control\" value.bind=\"contact.email\"></div></div><div class=\"form-group\"><label class=\"col-sm-2 control-label\">Phone Number</label><div class=\"col-sm-10\"><input type=\"text\" placeholder=\"phone number\" class=\"form-control\" value.bind=\"contact.phoneNumber\"></div></div></form></div></div><div class=\"button-bar\"><input type=\"submit\" class=\"btn btn-primary\" value=\"Save\" click.delegate=\"save()\"></div></template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "body { padding-top: 70px; }\n\nsection {\n  margin: 0 20px;\n}\n\na:focus {\n  outline: none;\n}\n\n.navbar-nav li.loader {\n    margin: 12px 24px 0 6px;\n}\n\n.no-selection {\n  margin: 20px;\n}\n\n.contact-list {\n  overflow-y: auto;\n  border: 1px solid #ddd;\n  padding: 10px;\n}\n\n.panel {\n  margin: 20px;\n}\n\n.button-bar {\n  right: 0;\n  left: 0;\n  bottom: 0;\n  border-top: 1px solid #ddd;\n  background: white;\n}\n\n.button-bar > button {\n  float: right;\n  margin: 20px;\n}\n\nli.list-group-item {\n  list-style: none;\n}\n\nli.list-group-item > a {\n  text-decoration: none;\n}\n\nli.list-group-item.active > a {\n  color: white;\n}\n"; });
define('text!contact-list.html', ['module'], function(module) { module.exports = "<template><div class=\"contact-list\"><ul class=\"list-group\"><li repeat.for=\"contact of contacts\" class=\"list-group-item ${contact.id === $parent.selectedId ? 'active' : ''}\"><a route-href=\"route: details;\" click.delegate=\"$parent.select(contact)\"><h4 class=\"list-group-item-heading\">${contact.firstName} ${contact.lastName}</h4><p class=\"list-group-item-text\">${contact.email}</p></a></li></ul></div></template>"; });
define('text!job-detail.html', ['module'], function(module) { module.exports = "<template><require from=\"./inputs.css#ux\"></require><main styles.main><h1 styles.header>&lt;ux-input&gt;&lt;/ux-input&gt;</h1><p styles.description>The <code>ux-input</code> element allows users to input data.</p><section styles.feature><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input value.bind=\"uxInputSingleLine\"></ux-input></div><div class=\"add-padding\">value: ${uxInputSingleLine} </div><code>default</code></figure></section><p styles.description>The <code>ux-input</code> extends many native functions of the standard input control.</p><section styles.feature><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input disabled=\"disabled\" value=\"Disabled Input\"></ux-input></div><ux-input class=\"full-width\" disabled=\"disabled\" value=\"Disabled Input\"></ux-input><code>disabled</code></figure><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input readonly=\"readonly\" value=\"Read Only Input\"></ux-input></div><ux-input class=\"full-width\" readonly=\"readonly\" value=\"Read Only Input\"></ux-input><code>readonly</code></figure><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input placeholder=\"Text goes in this field\"></ux-input></div><code>placeholder=\"Value Here\"</code></figure><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input value=\"Password\" type=\"password\"></ux-input></div><ux-input class=\"full-width\" value=\"Password\" type=\"password\"></ux-input><code>type=\"password\"</code></figure><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input type=\"number\" step=\"5\"></ux-input></div><code>type=\"number\" step=\"5\"</code></figure><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input type=\"date\" min=\"5\"></ux-input></div><code>type=\"number\" min=\"5\"</code></figure><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input type=\"number\" max=\"10\"></ux-input></div><code>type=\"number\" max=\"10\"</code></figure></section><p styles.description>The <code>ux-input</code> has a few classes to help with styling.</p><section styles.feature><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input class=\"has-error\" value=\"Error!\"></ux-input></div><ux-input class=\"full-width has-error\" value=\"Error!\"></ux-input><code>class=\"has-error\"</code></figure><figure styles.figure><ux-input class=\"full-width\" value.bind=\"uxInputFullWidth\"></ux-input><div class=\"add-padding\">value: ${uxInputFullWidth} </div><code>class=\"full-width\"</code></figure></section><h2 styles.header>Aurelia Validation</h2><p styles.description>The <code>ux-input</code> has native support for the Aurelia Validation plugin.</p><section styles.feature><figure styles.figure><div class=\"add-padding\"><form submit.delegate=\"submit()\"><ux-input class=\"form-control\" validation-errors.bind=\"firstNameErrors\" class.bind=\"firstNameErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo1\" placeholder=\"First Name\" value.bind=\"firstName & validate\"></ux-input><ux-input-info target.bind=\"errorDemo1\"><span if.bind=\"firstNameErrors.length\">${firstNameErrors[0].error.message}</span></ux-input-info><ux-input type=\"email\" validation-errors.bind=\"emailErrors\" class.bind=\"emailErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo2\" class=\"form-control\" placeholder=\"Email\" value.bind=\"email & validate\"></ux-input><ux-input-info target.bind=\"errorDemo2\"><span if.bind=\"emailErrors.length\">${emailErrors[0].error.message}</span><span if.bind=\"!emailErrors.length\">john@example.com</span></ux-input-info><ux-button type=\"raised\" click.delegate=\"submit()\" size=\"small\" class=\"btn btn-primary\">Submit</ux-button></form></div><code></code></figure></section><h2 styles.header>Input Info Box & Input Counter</h2><p styles.description>The <code>ux-input</code> has a sibling element that will display the current character count or current characters remaining. If a max attribute is present on the <code>ux-input</code> element then the counter will display the total characters remaining, otherwise it will default to displaying the total characters. This element can also display hint text or error text as well.</p><section styles.feature><figure styles.figure class=\"add-padding\"><div class=\"add-padding\"><ux-input view-model.ref=\"ibicDemo1\"></ux-input><ux-input-info ux-input-counter target.bind=\"ibicDemo1\"></ux-input-info></div><code>&lt;ux-input-info input-counter /&gt;</code></figure><figure styles.figure><div class=\"add-padding\"><ux-input view-model.ref=\"ibicDemo2\" maxlength=\"10\"></ux-input><ux-input-info ux-input-counter target.bind=\"ibicDemo2\"></ux-input-info></div><code>&lt;ux-input-info input-counter maxlength=\"10\" /&gt;</code></figure><figure styles.figure><div class=\"add-padding\"><ux-input view-model.ref=\"ibicDemo3\"></ux-input><ux-input-info target.bind=\"ibicDemo3\">I am a message</ux-input-info></div><code>&lt;ux-input-info&gt;message&lt;/ux-input-info&gt;</code></figure><figure styles.figure><div class=\"add-padding\"><ux-input view-model.ref=\"ibicDemo3\" maxlength=\"10\"></ux-input><ux-input-info ux-input-counter target.bind=\"ibicDemo3\">I am a message</ux-input-info></div><code>Combined</code></figure></section><div><ux-input type=\"email\" value.bind=\"email & validate\"></ux-input></div></main></template>"; });
define('text!job-test.html', ['module'], function(module) { module.exports = "<template><ux-form><ux-field label=\"Job Title\"><ux-input maxlength=\"20\" validation-errors.bind=\"jobTitleErrors\" class.bind=\"jobTitleErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo1\" value.bind=\"jobTitle & validate\"></ux-input><ux-input-info ux-input-counter target.bind=\"errorDemo1\"><span if.bind=\"jobTitleErrors.length\">${jobTitleErrors[0].error.message}</span><span if.bind=\"!jobTitleErrors.length\">eg:- Associate Consultant</span></ux-input-info></ux-field><ux-field label=\"Job Description\"><ux-textarea auto-resize maxlength=\"500\" validation-errors.bind=\"jobDescriptionErrors\" class.bind=\"jobDescriptionErrors.length ? 'has-error' : ''\" view-model.ref=\"errorDemo2\" value.bind=\"jobDescription & validate\"></ux-textarea><ux-input-info ux-input-counter target.bind=\"errorDemo2\"><span if.bind=\"jobDescriptionErrors.length\">${jobDescriptionErrors[0].error.message}</span></ux-input-info></ux-field><ux-field label=\"Job Skills\"></ux-field><label repeat.for=\"jobSkill of jobSkills\"><ux-checkbox value.bind=\"jobSkill\" checked.bind=\"selectedStringJobSkills\">${jobSkill}</ux-checkbox></label><au-field><label>Job Type</label></au-field><label repeat.for=\"jobType of jobTypes\"><input type=\"radio\" name=\"group1\" model.bind=\"jobType.id\" checked.bind=\"selectedJobTypeId\"> ${jobType.id} - ${jobType.name} </label><ux-field label=\"Address\"><ux-textarea auto-resize value.bind=\"address\"></ux-textarea></ux-field><ux-field label=\"Date of Birth\"><ux-input validation-errors.bind=\"dateErrors\" view-model.ref=\"errorDateRef\" class.bind=\"dateErrors.length ? 'has-error' : ''\" value.bind=\"dateOfBirth & validate\"></ux-input><ux-input-info target.bind=\"errorDateRef\"><span if.bind=\"dateErrors.length\">${dateErrors[0].error.message}</span></ux-input-info></ux-field><ux-field label=\"Email Address\"><ux-input type=\"email\" validation-errors.bind=\"emailErrors\" class.bind=\"emailErrors.length ? 'has-error' : ''\" value.bind=\"email & validate\" view-model.ref=\"errorEmailRef\"></ux-input><ux-input-info target.bind=\"errorEmailRef\"><span if.bind=\"emailErrors.length\">${emailErrors[0].error.message}</span><span if.bind=\"!emailErrors.length\">eg:- email@example.com</span></ux-input-info></ux-field><ux-field label=\"State\"></ux-field><select value.bind=\"selectedStringState\"><option value=\"\">Choose...</option><option repeat.for=\"state of states\" value.bind=\"state\">${state} </option></select><ux-field label=\"Phone Number\"><ux-input value.bind=\"phoneNumber  & validate\" validation-errors.bind=\"phoneErrors\" class.bind=\"phoneErrors.length ? 'has-error' : ''\" view-model.ref=\"errorPhoneRef\"></ux-input><ux-input-info maxlength=\"10\" target.bind=\"errorPhoneRef\"><span if.bind=\"phoneErrors.length\"><span repeat.for=\"phoneError of phoneErrors\"> ${phoneError.error.message} </span></span><span if.bind=\"!phoneErrors.length\">eg: 123-456-7890</span></ux-input-info></ux-field><ux-button click.delegate=\"submit()\">Submit</ux-button></ux-form></template>"; });
define('text!no-selection.html', ['module'], function(module) { module.exports = "<template><div class=\"no-selection text-center\"><h2>${message}</h2></div></template>"; });
//# sourceMappingURL=app-bundle.js.map