import { currentUser } from "@clerk/nextjs/server"
import { db } from "./prisma";

export const checkUser = async ()=>{
    const user = await currentUser();
    if(!user) return null;
    
    try {
        const loggedInUser = await db.user.findUnique({
            where:{clerkUserId: user.id}
        });

        console.log("Existing user in DB:", loggedInUser);

        if(loggedInUser) return loggedInUser;

        const name = `${user.firstName} ${user.lastName}`

        const newUser = await db.user.create({
            data:{
                clerkUserId:user.id,
                name,
                imageUrl:user.imageUrl,
                email:user.emailAddresses[0].emailAddress
            }
        })

        console.log("Created new user:", newUser);
        return newUser;
    } catch (error) {
        console.error("DB error:", error);
    }
}