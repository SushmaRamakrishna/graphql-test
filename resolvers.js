import { Friends } from "./dbConnectors";


//resolver map
//const root = { hello: () => "hi! i am sushma"};
export const resolvers = { 
    Query:{
        getFriend: ({ id}) => {
            return new Friend(id, friendDatabase)
         },
    },      
    mutation:{
        createFriend: (root,{ input }) => { 
            const newFriend = new Friends({        
                firstName = input.firstName,
                lastName = input.lastName,
                email = input.email,
                gender = input.gender          
            });
            newFriend.id = newFriend._id;

            return new Promise((resolve, object) => {
                newFriend.save((err) => {
                   if(error) reject(err) 
                   else resolve(newFriend)
                })
            })
        },
    }
};

