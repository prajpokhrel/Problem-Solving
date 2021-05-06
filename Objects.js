/*
* Define an object containing information about yourself.
* The object needs to include 'name', 'address', 'emails',
* 'interests' and 'education'. The 'education' key needs to be an
* array of objects containing keys 'name' and 'enrolledDate'.
* */
var myInformation = {
    name: "Prajwal Pokhrel",
    address: "Kalanki - 14, Kathmandu",
    emails: "prajwal.pokhrel18@gmail.com",
    interests: "Competitive Programming",
    education: [
        {collegeName: "Uniglobe College", enrolledDate: "2014"},
        {collegeName: "University of Wolverhampton, UK", enrolledDate: "2016"}
    ]
}

myInformation.education.forEach(function(value) {
    console.log("Name:", value.collegeName + ", Date:", value.enrolledDate);
});
