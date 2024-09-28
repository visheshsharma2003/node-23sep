const Student = require('../models/Student');
async function addStudent(req, res) {
    try {

        let student = new Student(req.body);
        await student.save();
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        })

        

    } catch (err) {
        console.log(err)
    }

}
async function getStudents(req, res) {
    try {
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        })
    } catch (err) {
        console.log(err.message)
    }

}
async function getPageForEditStudent(req, res) {
    try {
        let id = req.params.id;
        let student = await Student.findOne({ _id: id });

        res.render('studentforedit', {
            student: student
        })

    } catch (err) {
        console.log(err)

    }
}
async function editStudent(req, res) {
    try {
        let id = req.params.id;

        let student = await Student.findOne({ _id: id });

        student.rollNo = req.body.rollNo;
        student.firstName = req.body.firstName;
        student.lastName = req.body.lastName;
        student.fatherName = req.body.fatherName;
        student.adharCard = req.body.adharCard;
        student.mobileNo = req.body.mobileNo;
        await student.save();
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        })
    } catch (err) {
        console.log(err.message, 'msg')

    }
}
async function deleteStudent(req, res) {
    try {
        let id = req.params.id;
        console.log(id, 'id')
        await Student.deleteOne({ _id: id });
        let students = await Student.find({});
        res.render('studentlist', {
            students: students
        })

    } catch (err) {

    }

}
module.exports = {
    addStudent,
    getStudents,
    getPageForEditStudent,
    editStudent,
    deleteStudent
}