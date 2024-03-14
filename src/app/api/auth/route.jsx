import { connectdb } from "@/utils/db"; // Importa la función para conectar a la base de datos
import { User } from "@/utils/models"; // Importa el modelo de usuario
import { NextResponse } from "next/server";

export async function POST(req, res) { // Define una función POST asíncrona
    const data = await req.json(); // Espera a que los datos de la solicitud se conviertan en JSON
    const { username, email, password } = data; // Extrae el nombre de usuario, el correo electrónico y la contraseña de los datos
    console.log(username, email, password); // Imprime el nombre de usuario, el correo electrónico y la contraseña

    await connectdb(); // Espera a que se conecte a la base de datos

    const user = await User.findOne({ email: email }); // Busca un usuario con el correo electrónico proporcionado
    if (user) { // Si se encuentra un usuario
        return NextResponse.json({ error: 'Error the user exists' }, { status: 500 });
    } else { // Si no se encuentra un usuario
        const newUser = new User({ // Crea un nuevo usuario
            username: username,
            email: email,
            password: password,
        });
        await newUser.save(); // Guarda el nuevo usuario en la base de datos
        return NextResponse.json({ message: 'User created' }); // Devuelve un mensaje de que el usuario se creó
    }
}