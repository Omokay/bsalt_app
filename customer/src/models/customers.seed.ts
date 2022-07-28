import {Customer} from "./customer.schema";

const seedCustomer =  [{
        "firstname": "Omoke",
        "lastname": "Chuku",
        "email": "chuku.omoke@gmail.com",
        "phone": "08105470291",
        "walletId": "omoke470291",
        "balance": 850000
    }]

async function seedDatabase(){
   try {
       await Customer.deleteMany({});
       await Customer.insertMany(seedCustomer);
   }catch(err) {
       console.log(err);
       throw new Error('Error occurred while trying to seed data to customers collection');
   }
}

export {
    seedDatabase,
}
