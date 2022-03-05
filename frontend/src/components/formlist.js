
///////////////////work

// const PremiumCalculation = () => {
    //     debugger;
    //     ///////////////////MONTH-DIFF////////////////////////////

    //     const startDate = new Date(sdate);
    //     const endDate = new Date(edate);

    //     //  setSdate(startDate)
    //     //  setEdate(endDate)
    //     var month = Math.max((endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth(), 0)

    //     console.log(month)

    //     let bpremium = [...bikepremium];
    //     // var bpremium = bikepremium;

    //     setBikePremium(bpremium)

    //     let cpremium = [...carpremium];
    //     //var cpremium = carpremium;

    //     setCarPremium(cpremium)

    //     let mpremium = [...medicalpremium];
    //     //var mpremium = medicalpremium;

    //     setMedicalPremium(mpremium);

    //     userlist.map(u => {
    //         u.policy.map(policys => {
    //             if (policys == "bike") {
    //                 if (month < 1) {
    //                     bpremium = 400;
    //                 }
    //                 else if (month >= 1 && month < 6) {
    //                     bpremium = 1400;
    //                 }
    //                 else {
    //                     bpremium = 1900;
    //                 }
    //             }
    //             if (policys == "car") {
    //                 if (month < 1) {
    //                     cpremium = 600;
    //                 }
    //                 else if (month >= 1 && month < 6) {
    //                     cpremium = 1600;
    //                 }
    //                 else {
    //                     cpremium = 2100;
    //                 }
    //             }
    //             if (policys == "medical") {
    //                 if (month < 1) {
    //                     mpremium = 500;
    //                 }
    //                 else if (month >= 1 && month < 6) {
    //                     mpremium = 1500;
    //                 }
    //                 else {
    //                     mpremium = 2000;
    //                 }
    //             }
    //         })
    //     })
    //     var totPremium = Number(bpremium) + Number(cpremium) + Number(mpremium);
    //     console.log(totPremium);
    //     setTotalPremium(totPremium);
    // }



///////////////////work

// const Insurance = () => {
    //     userlist.map(u => {
    //         u.policy.map(policy => {
    //             if (policy == "bike") {
    //                 if (month < 1) {
    //                     premium = 400;
    //                 }
    //                 else if (month >= 1 && month < 6) {
    //                     premium = 1400;
    //                 }
    //                 else {
    //                     premium = 1900;
    //                 }
    //             }
    //             if (policy == "car") {
    //                 if (month < 1) {
    //                     premium = 600;
    //                 }
    //                 else if (month >= 1 && month < 6) {
    //                     premium = 1600;
    //                 }
    //                 else {
    //                     premium = 2100;
    //                 }
    //             }
    //             if (policy == "medical") {
    //                 if (month < 1) {
    //                     premium = 500;
    //                 }
    //                 else if (month >= 1 && month < 6) {
    //                     premium = 1500;
    //                 }
    //                 else {
    //                     premium = 2000;
    //                 }
    //             }
    //         })
    //     })
    // }






// for (int i=0;i<insurance.Policies.Length;i++)
//             {
//                 insurance.Policy = insurance.Policy + " "+insurance.Policies[i];
//                 if(insurance.Policies[i]=="Car")
//                 {
//                     if(month<1)
//                     {
//                         insurance.CarAmount = 600;
//                     }
//                     else if(month>=1 && month<6)
//                     {
//                         insurance.CarAmount = 1600;
//                     }
//                     else
//                     {
//                         insurance.CarAmount = 2100;
//                     }
//                 }
//                 if (insurance.Policies[i] == "Bike")
//                 {
//                     if (month < 1)
//                     {
//                         insurance.BikeAmount = 400;
//                     }
//                     else if (month >= 1 && month < 6)
//                     {
//                         insurance.BikeAmount = 1400;
//                     }
//                     else
//                     {
//                         insurance.BikeAmount = 1900;
//                     }
//                 }
//                 if (insurance.Policies[i] == "Mediclaim")
//                 {
//                     if (month < 1)
//                     {
//                         insurance.MediclaimAmount = 500;
//                     }
//                     else if (month >= 1 && month < 6)
//                     {
//                         insurance.MediclaimAmount = 1500;
//                     }
//                     else
//                     {
//                         insurance.MediclaimAmount = 2000;
//                     }
//                 }
//             }