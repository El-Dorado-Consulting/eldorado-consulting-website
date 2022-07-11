import { Client} from "@notionhq/client"

const NOTION_SECRET = process.env.NOTION_SECRET
const DATABASE_ID = process.env.NOTION_DATABASE_ID

console.log('id', DATABASE_ID)
console.log('secret', NOTION_SECRET)


// Initializing a client
const notion = new Client({
    auth: NOTION_SECRET,
})

async function addImages (posts: any) {
    const getImage = posts.map(async post => {
        const response:any = await notion.pages.retrieve({page_id:post.id})
        post.img = response?.cover?.external?.url  ?? ''
        return post 
    });
    let response = await Promise.all(getImage)
    return response
}

function parsePosts (data: any) {
    let list = data.results
    let posts = list.map(post => {
        return {
            id:post.id,
            name:post.properties.Name.title[0]?.text?.content,
            date: post.properties.Date.date.start,
            description: post.properties.Description.rich_text[0]?.text?.content,
            draft: post.properties.Draft.checkbox,
            img: ''
        }
    })
    return posts
}

export async function get() {
    try {

        const result = await notion.databases.query({database_id:DATABASE_ID,})
        const parsedPosts = parsePosts(result)
        const posts = await addImages(parsedPosts)
        console.log(posts)
        return {
            body: {
                posts
            }
        }
    } catch (error) {
        console.log(error)
    }

}
