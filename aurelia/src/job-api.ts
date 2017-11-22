let latency = 100;
let id = 0;


let jobs = [
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

let jobTypes = [
    "Full Time",
    "Contract",
    "Contract-To-Hire"
];

let jobSkills = [
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

let states = [
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

export class JobAPI {
    isRequesting = false;

    getJobList() {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let results = jobs.map(x => {
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
                    }
                });
                resolve(results);
                this.isRequesting = false;
            }, latency);
        });
    }

    getJobDetails(id) {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let found = jobs.filter(x => x.id == id)[0];
                resolve(JSON.parse(JSON.stringify(found)));
                this.isRequesting = false;
            }, latency);
        });
    }

    saveJob(job) {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let instance = JSON.parse(JSON.stringify(job));
                let found = jobs.filter(x => x.id == job.id)[0];

                if (found) {
                    let index = jobs.indexOf(found);
                    job[index] = instance;
                } else {
                    instance.id = getId();
                    job.push(instance);
                }

                this.isRequesting = false;
                resolve(instance);
            }, latency);
        });
    }

    getJobTypes() {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let results = jobTypes.map(x => {
                    return x;
                });
                resolve(results);
                this.isRequesting = false;
            }, latency);
        });
    }

    getJobSkills() {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let results = jobSkills.map(x => {
                    return x;
                });
                resolve(results);
                this.isRequesting = false;
            }, latency);
        });
    }

    getStates() {
        this.isRequesting = true;
        return new Promise(resolve => {
            setTimeout(() => {
                let results = states.map(x => {
                    return {
                        id: x.name
                    }
                });
                resolve(results);
                this.isRequesting = false;
            }, latency);
        });
    }

}