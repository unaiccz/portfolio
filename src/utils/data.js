import { connectdb } from "./db";
import { Post } from "./models";
import { User } from "./models";


export const getposts = async () => {
    try {
        connectdb();
        const posts = await Post.find();
        return posts;
    } catch (error) {
        throw new Error(error);
    }
}
export const getpost = async (slug) => {
    try {
        connectdb();
        const post = await Post.findOne({slug});
        return post;
    } catch (error) {
        throw new Error(error);
    }
}
export const getuser = async (id) => {
    try {
        connectdb();
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw new Error(error);
    }
}