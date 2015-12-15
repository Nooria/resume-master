var bio = {
    'name': 'Noor Aljibouri',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '009665326748',
        'email': 'nooria@gmail.com',
        'github': 'nooria',
        'twitter': 'nooria',
        'location': 'Saudi Arabia- Riyadh'
    },
    'wellcomeMessage': 'Love yourself as it is, do not let people talk bother you.',
    'skills': ["Awesomness", "Fun", "Team working", "Programming lover", "Good cooker"],
    'biopic': 'images/fry.jpg',
};



var work = {
    'jobs': [{
        'employer': 'Ministry of planning',
        'title': 'data entery',
        'date': '2006-2008',
        'description': 'worked IT departement in the database section as data entery and as secretary to the manager',
        'location': 'Iraq-Baghdad'
    },
     {
        'employer': 'Marcom Marketting company',
        'title': 'Tele marketting',
        'date': '2013-2014',
        'description': 'worked in marketting company as a Tele marketting for every thing specially programs and software',
        'location': 'Saudi Arabia-Riyadh'
    }]
};

var education = {
    'schools': [{
        'name': 'Baghdad University',
        'location': 'Iraq-Baghdad',
        'degree': 'BA',
        'majors': ["CS"],
        'dates': '2000-2004',
        'url': 'http://www.uobaghdad.edu.iq/'

    }],
    'onlineCourses': [{
        'title': 'Intro to web programming nanogegree',
        'school': 'Udacity',
        'dates': '2015',
        'url': 'http://www.udacity.com'
    }, 
    {
        'title': 'Front-End Web Developer',
        'school': 'Udacity',
        'dates': '2015',
        'url': 'http://www.udacity.com'
    }]
};
var projects = {
    'projects': [{
        'title': 'Intro to programming nanodegree',
        'date': '2015',
        'description': 'my first web page with nanodegree programe, explained every thing in this course as brife notes.',
        'images': ["images/project.jpg", "images/myproject.jpg"]
    }
  ]
};


bio.display = function() {

    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMsg = HTMLWelcomeMsg.replace("%data%", bio.wellcomeMessage);
    var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").prepend(formattedName, formattedRole);
    $("#header").append(formattedImage, formattedMsg);
    $("#topContacts, #footerContacts").append(formattedmobile, formattedemail, formattedgithub, formattedtwitter, formattedlocation);


   if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
      $("#skills").append(formattedSkill);
      formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
      $("#skills").append(formattedSkill);
    }
}
bio.display();

work.display = function(){
    for (var job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].date);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}
work.display();

projects.display = function() {
 for (var project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedprotitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry").append(formattedprotitle);
    var formattedprodate = HTMLprojectDates.replace("%data%", projects.projects[project].date);
    $(".project-entry:last").append(formattedprodate);
    var formattedprodesc = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedprodesc);

    if (projects.projects[project].images.length > 0) {
        for (var image in projects.projects[project].images) {
          var formattedimages = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
          $(".project-entry:last").append(formattedimages); 
      }
    }
  }
}
projects.display();

education.display = function(){
    for (var school in education.schools) {
        $("#education").append(HTMLschoolStart);
        var formattedschoolname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formatteddegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattededucation = formattedschoolname + formatteddegree;
        $(".education-entry:last").append(formattededucation);
        var formattedschooldate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedschooldate);
        var formattedmajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedmajor);

        $(".education-entry:last").append(HTMLonlineClasses);
    for (var course in education.onlineCourses) {
        var formattedcourse = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var formattedschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var formattedonline = formattedcourse + formattedschool;
        $(".education-entry:last").append(formattedonline);
        var formatteddate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        $(".education-entry:last").append(formatteddate);
        var formattedurl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
        $(".education-entry:last").append(formattedurl);
    }
  }
}
education.display();
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    return name[0] + " " + name[1];
}
inName(bio.name);

$("#mapDiv").append(googleMap);