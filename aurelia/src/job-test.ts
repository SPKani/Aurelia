import {
    ValidationControllerFactory,
    ValidationController,
    ValidationRules,
    validateTrigger
} from 'aurelia-validation';
import { inject } from 'aurelia-dependency-injection';

export interface IJob {
    id: number;
    name: string;
}

@inject(ValidationControllerFactory)
export class JobTest {
    public jobTitle = '';
    public jobDescription = '';
    public email = '';
    public address = '';
    public dateOfBirth = '';
    public controller = null;

    jobTypes: IJob[] = [
        { id: 1, name: "Full Time" },
        { id: 2, name: "Contract" },
        { id: 3, name: "Contract-To-Hire" }
    ];
    selectedJobTypeId: number = null;

    jobSkills: string[] = [
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
    selectedStringJobSkills: string[] = [];

    states = [    
        "Alabama",        
        "Alaska",       
        "Arizona",        
        "California",       
        "Colorado"
    ];
    selectedStringState: string = '';


    constructor(public controllerFactory: ValidationControllerFactory) {
        this.controller = controllerFactory.createForCurrentScope();
        //this.controller.validateTrigger = validateTrigger.manual;
    }


    submit() {
        this.controller.validate().then((value) => {
            if (value.valid) {
                alert('Form submitted!');
            } else {
                alert('Form not submitted!');
            }
        });
    }

}

ValidationRules.customRule(
    'date',
    (value, obj) => {
        var d = new Date(value);
        return value === null || value === undefined || value.trim() === ''|| !isNaN(d.getTime())
    },
    `\${$displayName} must be a Date.`   
);

ValidationRules
    .ensure('jobTitle').required()
    .ensure('jobDescription').required()
    .ensure('email').displayName('Email Address').required().withMessage(`\${$displayName} cannot be blank.`).email()
    .ensure('dateOfBirth').required().satisfiesRule('date')
    .ensure('phoneNumber').displayName('Phone Number').required().withMessage(`\${$displayName} cannot be blank.`)        
        .matches(/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/).withMessage(`\${$displayName} is not valid.`)
    .on(JobTest); 