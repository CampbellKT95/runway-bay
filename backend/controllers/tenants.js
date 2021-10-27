import Tenant from "../models/tenants.js";

export const getTenants = async (req, res) => {
    try {
        const tenants = await Tenant.find();

        console.log(tenants);

        res.status(200).json(tenants);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
};

export const createTenant = async (req, res) => {
    //with posts request, you have access to req.body
    const newTenantData = req.body;

    const newTenant = new Tenant(newTenantData);

    try {
        await newTenant.save();

        //201 = successful creation
        res.status(201).json(newTenant);

    } catch (error) {

        res.status(409).json({message: error.message});

    }
}

// to find a particular document **
// Tenant.findOne({name: "Dave Pearce"})
//     .then((result) => {
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err)
//     });