import React, { useState } from 'react'
import { Form, Button, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateDiff from "date-diff";

const Insurancepolicy = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [address, setAddress] = useState({});
    const [zipcode, setzipCode] = useState("");
    const [country, setCountry] = useState("");
    const [sdate, setSdate] = useState("");
    const [edate, setEdate] = useState("");
    const [policy, setPolicy] = useState([]);
    const [isannual, setIsAnnual] = useState(false);

    const [isupdateUser, setIsUpdateUser] = useState(null);

    const [toggleSubmit,setToggleSubmit] = useState(true);

    const [premium, setPremium] = useState('');
    const [totalpremium, setTotalPremium] = useState("");

    const [userlist, setUserlist] = useState([])

    const Submit = () => {
        
        let address = {
            country,
            zipcode,
        }
        setAddress(address)

        const user = {
            Id: new Date().getTime().toString(),
            firstname,
            lastname,
            address,
            sdate,
            edate,
            policy,
            isannual,
            totalpremium,
        }

        userlist.push(user)

        setUserlist([...userlist])

        console.log(userlist)

        setFirstname("");
        setLastname("");
        setSdate("");
        setCountry("");
        setzipCode("");
        setEdate("");
        setPolicy("");
        setTotalPremium('');
    }

    const PremiumCalculation = (e) => {
        debugger;
        
        // setSdate(e.target.value);

        // setEdate(e.target.value)

        let policylist = [...policy];
        const currentIndex = policylist.indexOf(e.target.value);
        if (currentIndex == -1) {
            policylist.push(e.target.value)
        } else {
            policylist.splice(currentIndex, 1)
        }
        setPolicy(policylist);
         console.log(policy)




        // *******************************************Month-Diff**********************************************

        const startDate = new Date(sdate);
        const endDate = new Date(edate);

        var month = Math.max((endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth(), 0)

        console.log(month)


        // ******************************************Check-Premium**********************************************
        
        var premiumprice;
        var car = 0;
        var bike = 0;
        var medical = 0;

        policylist.map(policys => {
            if (policys == "bike") {
                if (month < 1) {
                    premiumprice = 400;
                }
                else if (month >= 1 && month < 6) {
                    premiumprice = 1400;
                }
                else {
                    premiumprice = 1900;
                }
                 bike = premiumprice;
            }
            else{
                ////
            }
            if (policys == "car") {
                if (month < 1) {
                    premiumprice = 600;
                }
                else if (month >= 1 && month < 6) {
                    premiumprice = 1600;
                }
                else {
                    premiumprice = 2100;
                }
                car = premiumprice;
            }
            else{
                ////
            }
            if (policys == "medical") {
                if (month < 1) {
                    premiumprice = 500;
                }
                else if (month >= 1 && month < 6) {
                    premiumprice = 1500;
                }
                else {
                    premiumprice = 2000;
                }
                 medical = premiumprice;
            }
            else{
                ////
            }
        })

         var totPremium = Number(bike) + Number(car) + Number(medical);
         console.log(totPremium);
         setPremium(premiumprice)

         setTotalPremium(totPremium);
    }



    const Update = () => {
        let address = {
            country,
            zipcode,
        }
        setAddress(address)

        setUserlist(
            userlist.map((user)=>{
                if(user.Id === isupdateUser){
                    return {
                        ...user,
                        firstname,
                        lastname,
                        address,
                        sdate,
                        edate,
                        policy,
                        totalpremium,
                    }
                }
                return user;
            })
        )
        setToggleSubmit(true);

        setFirstname("");
        setLastname("");
        setSdate("");
        setCountry("");
        setzipCode("");
        setEdate("");
        setPolicy("");
        setTotalPremium('');

        setIsUpdateUser(null);
    }


    const UpdateUser = (index) => {
        let newupdateuser = userlist.find((user)=>{
            return index === user.Id
        });
        console.log(newupdateuser);

        setToggleSubmit(false);

        setFirstname(newupdateuser.firstname);
        setLastname(newupdateuser.lastname);
        setCountry(newupdateuser.address.country);
        setzipCode(newupdateuser.address.zipcode);
        // setIsAnnual(newupdateuser.isannual);
        setSdate(newupdateuser.sdate);
        setEdate(newupdateuser.edate);
        setPolicy(newupdateuser.policy);
        setTotalPremium(newupdateuser.totalpremium);

        setIsUpdateUser(index);

    }
    const DeleteUser = (index) =>{
        const updateuser = userlist.filter((user)=>{
            return index !== user.Id;
        })
        setUserlist(updateuser);
    }



    return (
        <div>
            <Form.Control type="text" placeholder="First Name" value={firstname} name="firstname" onChange={(e) => setFirstname(e.target.value)} />
            <br />
            <Form.Control type="text" placeholder="Last Name" value={lastname} name="Lasttname" onChange={(e) => { setLastname(e.target.value) }} />
            <br />
            <Form.Select aria-label="Default select example" onChange={(e) => setCountry(e.target.value)}>
                <option>Country</option>
                <option value="india">india</option>
                <option value="us">us</option>
                <option value="uk">uk</option>
            </Form.Select>
            <br />
            <Form.Control type="text" placeholder="Zip Code" value={zipcode} name="zipcode" onChange={(e) => setzipCode(e.target.value)} />
            <br />
            <Form.Check inline
                label="in annual"
                name="annual"
                value={isannual === "true" ? "is annual" : "is annual not"}
                onChange={(e) =>
                    setIsAnnual(e.target.checked)} />
            <br />
            <br />
            <Form.Control type="text" placeholder="Start Date" value={sdate} name="sdate" onChange={(e) => setSdate(e.target.value)} />
            {
                isannual
                    ?
                    <div>
                        <Form.Control type="hidden" placeholder="End Date" value={edate} name="edate" onChange={(e) => setEdate(e.target.value)} />
                    </div>
                    :
                    <div>
                        <Form.Control type="text" placeholder="End Date" value={edate} name="edate" onChange={(e) => setEdate(e.target.value)} />
                    </div>
            }
            <br />
            <br />
            <Form.Check
                inline
                label="bike"
                name="bike"
                value="bike"
                checked={policy.includes("bike")}
                onChange={(e) =>
                    PremiumCalculation(e)} />
            <Form.Check
                inline
                label="car"
                name="car"
                value="car"
                checked={policy.includes("car")}
                onChange={(e) =>
                    PremiumCalculation(e)} />
            <Form.Check inline
                label="medical"
                name="medical"
                value="medical"
                checked={policy.includes("medical")}
                onChange={(e) =>
                    PremiumCalculation(e)} />
            <br />
            <br />
            <br />
            <Form.Control
                style={{ color: "black" }}
                type="text"
                disabled
                readOnly
                placeholder="Total Premium"
                value={totalpremium}
                name="premium"
                onChange={(e) => setTotalPremium(e.target.value)} />
            <br />
            <br />

            {
                toggleSubmit ? <Button onClick={Submit}>Submit</Button> :
                <Button onClick={Update}>Update</Button>
            }
            <h1>Show Users</h1>
            <div>
                <Table >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>country</th>
                            <th>Zip Code</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Policy</th>
                            <th>Total Premium</th>
                            <th>Action</th>
                        </tr>   
                    </thead>
                    <tbody>
                        {
                            userlist.map((user, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <th>{user.firstname}</th>
                                    <th>{user.lastname}</th>
                                    <th>{user.address.country}</th>
                                    <th>{user.address.zipcode}</th>
                                    <th>{user.sdate}</th>
                                    <th>{user.edate}</th>
                                    <th>{user.policy.join(" , ")}</th>
                                    <th>{user.totalpremium}</th>
                                    <th><button onClick={()=> UpdateUser (user.Id)}>Update</button></th>
                                    <th><button onClick={()=> DeleteUser(user.Id)}>Delete</button></th>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table >
            </div>
        </div>
    )
}
export default Insurancepolicy