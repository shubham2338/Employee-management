const employees = require("../models/empSchema");


exports.emppost = async(req,resp)=>{
    const {name,email,department, date_of_joining, status} = req.body;
    if(!name || !email || !department || !date_of_joining || !status){
        resp.status(400).json({error: "Missing field"});
    }

    try{
        const preuser = await employees.findOne({email: email});
        if (preuser){
            resp.status(400).json({error:"Employee already exist"});
        }
        else{
            const empData = new employees({name, email, department, date_of_joining, status});
            await empData.save();
            resp.status(200).json(empData);
        }
    }
    catch(error){
        resp.status(400).json(error);
    }
}

//all emp
exports.allempget = async(req,resp)=>{
    try {
        const empData= await employees.find();
        resp.status(200).json(empData);
        
    }
    catch(error){
        resp.status(400).json(error);
    }   
}

//active emp

exports.activeget = async(req,resp)=>{
    try{
        const activeEmpData = await employees.find({"status": "active"});
        resp.status(200).json(activeEmpData);
    }
    catch(error){
        resp.status(400).json(error);
    }   
    
}

// delete emp

exports.deleteEmp = async(req,resp)=>{
    const {id} = req.params;
    try{
        const deletedEmp = await employees.findByIdAndDelete({_id:id});
        resp.status(200).json(deletedEmp);
    }
    catch(error){
        resp.status(400).json(error);
    }   
    
}

// edit emp

exports.editEmp = async(req,resp)=>{
    const {id} = req.params;
    const filter = {_id: id };
    const update = {
    $set: {
        name: req.body.name,
        email: req.body.name,
        department: req.body.department,
        date_of_joining: req.body.date_of_joining,
        status: req.body.status
        },
    };

  try {
    const result = await employees.updateOne(filter, update);
    resp.status(200).json(result)
    }
    catch(error)
    {
        resp.status(400).json(error);
    }   
}