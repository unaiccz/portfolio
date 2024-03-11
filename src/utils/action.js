'use server'
import { revalidatePath } from "next/cache";
import { connectdb } from "./db";
import { Post } from "./models";
export const addpost = async (form) => {
    const title = form.get('title');
    const desc = form.get('desc');
    const userid = form.get('userid');
    const slug = form.get('slug');

try {
    connectdb();
    const newpost = await new Post({title, desc, userid, slug});
    await newpost.save();
log('post added');
revalidatePath('/blog');

} catch (error) {

}
}
export const deletepost = async (form) => {
const {id} = Object.fromEntries(form);
    try {
        connectdb();
        await Post.findByIdAndDelete(id);
        log('post deleted');
        revalidatePath('/blog');
    } catch (error) {
        
    }
}