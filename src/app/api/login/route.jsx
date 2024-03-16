import { connectdb } from "@/utils/db";
import { User } from "@/utils/models";
import { NextResponse } from "next/server";
export async function POST(req, res) {
  const data = await req.json(); // obtengo el body de la petición
  const { username, email, password } = data; // desestructuro el body en las variables que necesito
    console.log( email, password);
     connectdb();
try {
    const user = await User.findOne({ email: email });
    if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 500 });
    }
console.log(user.password);
    if (user.password === password) { // comparo la contraseña
        return NextResponse.json({ message: 'User logged' });// nextresponse es una forma de responder a la petición creada por next
    } else {
        return NextResponse.json({ message: 'Bad password or email' }, { status: 500 });
    }
}
catch (error) {
    console.log(error);
}
}