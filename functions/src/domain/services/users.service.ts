import {UserDto} from "../dtos/user.dto";
import {db} from "../../config/firebase";
import {CustomError} from "../helpers/errors/custom-error";

export class UsersService {
    public async getByEmail(email: string) {
        const querySnapshot = await db.collection("users").where("email", "==", email).get();


        const dbUser = querySnapshot.docs[0]?.id;

        if (!dbUser) throw CustomError.unauthorized("User not found");

        const existingUser: UserDto = {
            id: querySnapshot.docs[0].id,
            email: querySnapshot.docs[0].data().email,
        };

        return existingUser;
    }

    public async createUser(userDto: UserDto) {

        const querySnapshot = await db.collection("users").where("email", "==", userDto.email).get();


        const dbUser = querySnapshot.docs[0]?.id;
        if (dbUser) throw CustomError.badRequest("This email is already in use");

        const docRef = db.collection("users").doc();
        await docRef.set(userDto);

        const newUserCreated: UserDto = {
            id: docRef.id,
            email: userDto.email,
        };
        return newUserCreated;
    }
}